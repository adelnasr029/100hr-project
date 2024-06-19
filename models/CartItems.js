const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const cartSchema = new mongoose.Schema({
    name : {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    userId: {
        type: String,
        required: true
      },
      items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
      //makes add and plus work adn adding items to the cart
}, {
    collection: "cartItems"
})

module.exports = mongoose.model('CartItems', cartSchema)