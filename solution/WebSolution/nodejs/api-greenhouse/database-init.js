/*

To set up a MongoDB database for your greenhouse automation system, 
you'll need to create a database schema 
that reflects the various aspects of greenhouse control and monitoring. 
*/


// database-init.js
const mongoose = require('mongoose');
const config = require('./config'); // Make sure to have your MongoDB URI in config.js

// Define the Greenhouse schema
const GreenhouseSchema = new mongoose.Schema({
  temperature: {type: Number,default: 20, },
  humidity: {type: Number,default: 50,},
  lighting: {type: Boolean, default: false,},
  irrigation: {type: Boolean,default: false,},
});

// Create the Greenhouse model
const Greenhouse = mongoose.model('Greenhouse', GreenhouseSchema);

async function initializeDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    // Check if the collection already exists
    const count = await Greenhouse.countDocuments();
    if (count === 0) {
      // Initialize default greenhouse settings
      const greenhouse = new Greenhouse({
        temperature: 20,
        humidity: 50,
        lighting: false,
        irrigation: false,
      });
      await greenhouse.save();
      console.log('Database initialized with default settings');
    } else {
      console.log('Database already initialized');
    }
    
    // Close the connection
    mongoose.connection.close();
  } catch (err) {
    console.error('Error initializing database:', err.message);
  }
}

// Run the initialization script
initializeDatabase();
