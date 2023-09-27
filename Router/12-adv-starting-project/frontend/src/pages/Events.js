import { Suspense, useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import { Await, json, useLoaderData } from 'react-router-dom';

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {
        //     isError: true, message: 'Could not fetch events'
        // }
        return json({ message: 'Could not fetch events' },
            {
                status: 500,
            });
    } else {
        const resData = await response.json();
        const res = new Response('any data', { status: 201 });
        return res;
    }
}

function EventsPage() {
    const data = useLoaderData();
    // if(data.isError){
    //     return <p>{data.message}</p>
    // }
    const { events } = data.events;

    return (
        <>
            <Suspense fallback={<p style={{textAlign: center}}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

export default EventsPage;
export function loader() {
    defer({
        events: loadEvents(),
    })
}