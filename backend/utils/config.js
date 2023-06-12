

require('dotenv').config()

let PORT = process.env.PORT


// mongoDB uri
let MONGODB_URI = process.env.NODE_ENV === 'production'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}




























