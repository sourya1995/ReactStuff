import { useRouteLoaderData, useParams } from 'react-router-dom';
import EventsList from '../components/EventsList';
function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');
    return (
        <div>
            <EventItem event={data.event}/>
            <EventsList />
        </div>
    );
}

export default EventDetailPage;
export async function loader({request, params}){
    const id  = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok){
        throw json({message: 'Could not fetch details for selected event'}, {
            status: 500
        })
    } else {
        return response;
    }
}

export async function action({params, request}){
    const eventId = params.eventId;
    fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    });

    if(!response.ok){
        throw json({message: 'Could not delete event'}, {
            status: 500
        })
    } else {
        return response;
    }

    return redirect('/events');
}