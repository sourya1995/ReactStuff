import { Fragment } from "react";

function MeetupDetails() {
    return (
        <div>
            <MeetupDetail />
            <Fragment>
                <img src="" alt="" />
                <h1>A First Meetup</h1>
                <p>The meetup description</p>
            </Fragment>
        </div>
    )
}

export async function getStaticPaths() {
    //DB connection
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    const selectedMeetup = meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetails;