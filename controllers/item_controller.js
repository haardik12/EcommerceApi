// IMPORTING PACKAGE/MODEL
const Item = require('../models/items');

// EXPORTING MODULE TO CREATE THE ITEM
module.exports.create = async function(req, res) {
    try {
      // console.log(req.body);
      let item = await Item.create(req.body);

      // sending 201 status for the success of request and creation of item
      return res.status(201).json({
        success: true,
        message: 'Item created successfully',
        data: {
          name: item.name,
          quantity: item.quantity,
        },
      })
    } catch (error) {
        return res.status(500).json({
          message: error.message,
        })
    }
}

// EXPORTING MODULE TO LOAD ALL THE ITEMS
module.exports.getItems = async function(req, res) {
    try {
        let items = await Item.find({});

        // sending 200 status for the success of the request made
        return res.status(200).json({
          success: 'true',
          message: 'List of products',
          data: items,
        })
    } catch (error) {
        return res.status(500).json({
          message: error.message,
        })
    }
}

// EXPORTING MODULE TO UPDATE THE ITEM CONTENT
module.exports.update = async function (req, res) {
  try {
    // console.log(req.params.id)
    // console.log(req.query)
    let item = await Item.findByIdAndUpdate(
      { _id: req.params.id },
      {
        quantity: req.query.quantity,
      },

      // this { new: true } ensures that the item has been updated and is returned
      { new: true }
    )

    // sending 200 status for the success of the request made
    return res.status(200).json({
      status: 'true',
      message: 'Item Updated',
      data: {
        item,
      },
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

// EXPORTING MODULE TO DELETE AN ITEM
module.exports.delete = async function(req, res) {
    try {
      let item = await Item.findByIdAndDelete(req.params.id)

      // sending 200 status for the success of the request made
      return res.status(200).json({
        success: 'true',
        message: 'Product deleted successfully',
      })
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      })  
    }
}