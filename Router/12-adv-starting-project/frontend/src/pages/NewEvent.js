function NewEventPage() {

    function submitHandler(event){
        event.preventDefault();
    }
    return (
        <div>
            <EventForm />
        </div>
    );
}

export default NewEventPage;

export async function action({request, params}){
    const data = request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }
    fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    if(!response.ok){
        throw json({message: 'Could not send event'}, {status: 500});
    }

    return redirect('/events');
}