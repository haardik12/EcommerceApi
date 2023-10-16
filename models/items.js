// IMPORTING PACKAGE
const mongoose = require('mongoose')

// CREATING SCHEMA
const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)

// EXPORTING MODEL
const items = mongoose.model('Items', itemSchema)
module.exports = items;
