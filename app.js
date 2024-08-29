require('dotenv').config();
const express = require('express')
const path = require('path');
const { MongoClient } = require('mongodb');

const users = require("./shopdata.json");
const app = express()
const port = process.env.PORT;



// app.get('/users', (req, res) => {
//   res.json(users)
//   })
  // Serve static files (CSS, JS, images) from the "public" directory
  app.use(express.static('public'));
  
  // Route to serve HTML file
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });
  app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, './help.html'));
  });
  app.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, './feedback.html'));
  });
  app.get('/buy', (req, res) => {
    res.sendFile(path.join(__dirname, './buy.html'));
  });
  app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, './cart.html'));
  });
  app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, './profile.html'));
  });
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './login_kitmo.html'));
  });
  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, './signup.html'));
  });
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './about.html'));
  });

  // ! mongoDB  
async function main() {
  const uri = "process.env.SERVER";  // Replace with your MongoDB connection string

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Specify the database and collection you want to work with
      const database = client.db('karan');  // Replace with your database name
      const collection = database.collection('user');  // Replace with your collection name

      // Example: Insert a document into the collection
      const result = await collection.insertOne({ name: "rohan", age: 80 });
      console.log(`New document inserted with _id: ${result.insertedId}`);

      // Example: Find a document in the collection
      const document = await collection.findOne({ name: "John Doe" });
      console.log("Found document:", document);
  } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
  }
}

// main().catch(console.error);

// ! listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})