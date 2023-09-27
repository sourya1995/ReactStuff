import { useParams } from 'react-router-dom';
function EventDetailPage() {
    return (
        <div>
            <h1>EventDetailPage</h1>;
            <p>Event ID: {params.eventId}</p>
        </div>
    );
}

export default EventDetailPage;