
//importing url and port
const config = require('dotenv').config()


// importing mongoose
const mongoose = require('mongoose')


mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI


// connecting to mongodb database
console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })



// making schema
const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })


// converting to json
blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

// exporting model
module.exports = mongoose.model('Blog', blogSchema);


