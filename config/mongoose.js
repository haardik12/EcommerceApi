// IMPORTING PACKAGE
const mongoose = require('mongoose')

// connect to the database
mongoose.connect(
  'mongodb+srv://Haardik:u4gaiebRSqapHVsT@cluster0.mqmuiy0.mongodb.net/'
)

// setting it to db
const db = mongoose.connection

//CONNECTION CHECK

// if error occurs
db.on('error', console.error.bind(console, 'Error connecting to DB'))
// when db connects successfully
db.once('open', function () {
  console.log('Successfully connected to DB')
})

/** --------- EXPORTING DB --------- **/
module.exports = db
