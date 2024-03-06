// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connection=require('./db')
const mongoose = require('mongoose')
const cors=require('cors')
const { userRouter } = require('./Routes/user.route');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors())
app.use('/',userRouter)


app.listen(PORT, async () => {
  try {
      await connection;
      console.log("connected to mongoose");
  } catch (err) {
      console.log(err);
  }
  console.log(`server running to ${PORT}`);
});














































































app.delete('/delete-collection', async (req, res) => {
  try {
    // Wait for the Mongoose connection to be ready
    await waitForMongooseConnection();

    const dbName = 'testing';
    const collectionName = 'users';  // Change this to the actual collection name

    // Check if the collection exists
    const collections = await mongoose.connection.db.listCollections({ name: collectionName }).toArray();

    if (collections.length === 0) {
      return res.status(404).json({ error: 'Collection not found' });
    }

    // Drop the specified collection
    await mongoose.connection.db.collection(collectionName).drop();

    res.status(200).json({ message: `Collection ${collectionName} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Function to wait for Mongoose connection to be ready
async function waitForMongooseConnection() {
  while (mongoose.connection.readyState !== 1) {
    // Sleep for a short duration before checking again
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}


app.get('/', (req, res) => {
  // Check MongoDB connection status
  const connectionStatus = mongoose.connection.readyState;

  // Display connection status
  res.send(`MongoDB Connection Status: ${getConnectionStatusMessage(connectionStatus)}`);
});

// Function to get connection status message
const getConnectionStatusMessage = (status) => {
  switch (status) {
    case 0:
      return 'Disconnected';
    case 1:
      return 'Connected';
    case 2:
      return 'Connecting';
    case 3:
      return 'Disconnecting';
    default:
      return 'Unknown';
  }
};






// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
//   mongoose.connection.on('open', () => {
//     console.log('MongoDB connection success!')
// });
// })
