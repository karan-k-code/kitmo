const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";  // Replace with your MongoDB connection string

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Specify the database and collection you want to work with
        const database = client.db('karan');  // Replace with your database name
        const collection = database.collection('user');  // Replace with your collection name

        // Example: Insert a document into the collection
        const result = await collection.insertOne({ name: "John Doe", age: 30 });
        console.log(`New document inserted with _id: ${result.insertedId}`);

        // Example: Find a document in the collection
        const document = await collection.findOne({ name: "John Doe" });
        console.log("Found document:", document);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);