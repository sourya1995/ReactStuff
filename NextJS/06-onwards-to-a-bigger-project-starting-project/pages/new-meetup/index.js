function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData){
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        router.push('/');

    }
    return (
        <div>
            return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    )
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupId;
    console.log
    return {
        props: {
            meetupData: {

            }
        }
    }
}

export default NewMeetupPage;

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [{
            params: {meetupId: 'm1', }
        },
        {
            params: {meetupId: 'm2', }
        }
    ],

    }
}