
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://khuongtnguyen6868_db_user:SFmMPhdGBZ0tsLaT@csc336-fall2025.qojpof8.mongodb.net/?appName=csc336-fall2025";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


    const db = await client.db("csc336-sample_mflix");
    const commentsCollection = db.collection("comments");
    commentsCollection.insertOne({
        name: "Mike"
    });

    let test = await commentsCollection.findOne({ name: "Mike" });
    console.log({ test });

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
