import { Link, redirect, useNavigate, useNavigation, useParams } from 'react-router-dom'

import Modal from '../UI/Modal.jsx'
import EventForm from './EventForm.jsx'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js'
import LoadingIndicator from '../UI/LoadingIndicator.jsx'
import ErrorBlock from '../UI/ErrorBlock.jsx'

export default function EditEvent () {

  const navigate = useNavigate()
  const params = useParams()
  const submit = useSubmit()
  const { state } = useNavigation()

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000
  })

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async () => {
      const newEvent = data.event;
      await queryClient.cancelQueries({queryKey: ['events', params.id]});
      const previousEvent = queryClient.getQueryData(['events', params.id]);
      queryClient.setQueryData(['events', params.id], newEvent);
      return { previousEvent }
    },

    onError: (error, data, context) => {
      queryClient.setQueryData(['events', params.id], context.previousEvent);
    }, //rollback on error

    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id]); //fetch latest data
    }
  });

  function handleSubmit (formData) {
    submit(formData, {method: 'PUT'});
  }

  function handleClose () {
    navigate('../')
  }

  let content

  

  if (error) {
    content = (
      <div>
        <ErrorBlock
          title='Failed to load event'
          message={error.info?.message || 'Failed to load event'}
        />
        <div className='form-actions'>
          <Link to='../' className='button'>
            Okay
          </Link>
        </div>
      </div>
    )
  }

  if (data) {
    <EventForm inputData={data} onSubmit={handleSubmit}>
      {state === 'submitting' ? <p>Sending data...</p> : }
      <Link to='../' className='button-text'>
        Cancel
      </Link>
      <button type='submit' className='button'>
        Update
      </button>
    </EventForm>
  }

  return <Modal onClose={handleClose}>{content}</Modal>
}

export function loader({params}){
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
   
  });
}

export async function action({request, params}) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(['events']);
  return redirect('../');
}
