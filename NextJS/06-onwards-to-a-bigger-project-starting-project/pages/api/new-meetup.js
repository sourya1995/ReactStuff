async function handler(req, res) {
   if(req.method === 'POST'){
    const data = req.body;
    const { title, image, address, description } = data; 
   }

  const client = await MongoClient.connect("mongodb://localhost/connection/string/db");
  const db = client.db();
  const meetupsCollection = db.collection('meetups'); 
  await meetupsCollection.insertOne(data);
  client.close();
  res.status(201).json({message: 'Meetup inserted successfully'});
}



