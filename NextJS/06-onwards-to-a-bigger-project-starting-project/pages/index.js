import { useEffect } from "react";

function HomePage(){
    return (
        <div>
            <Layout><MeetupList meetups={loadedMeetups} /></Layout>
        </div>
    )
}

//we have 2 component render cycles, during the first render cycle, useEffect will be empty

export default HomePage;

//pre-rendering does not wait for second render cycle

export async function getStaticProps(){ 
    //access filesystem  or DB
    //non-client code

    MongoClient.connect(); //DB connection code
    const meetups = await meetupsCollection.find().toArray();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                Image: meetup.image,
                id:  meetup._id.toString(),
            }))
        },
        revalidate: 10
    };
} //executed during pre-rendering

export async function getServerSideProps(context) { //if you need access to request and response
    //use this if data changes every time
    //always, on the server side after deployment
    const req = context.req; //authentication
    const res = context.res;
    return {
        props:{
            meetups: DUMMY_MEETUPS
        },
    };

}