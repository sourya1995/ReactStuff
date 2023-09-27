import { useRouteLoaderData, useParams } from 'react-router-dom';
function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');
    return (
        <div>
            <EventItem event={data.event}/>
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