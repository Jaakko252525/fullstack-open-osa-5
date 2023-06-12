

const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

router.post('/reset', async (request, response) => {
  console.log('in e2eRouter in backend!!!')

  await Blog.deleteMany({})
  await User.deleteMany({})
  
  console.log(' e2eRouter backend works!!!')

  response.status(204).end()
})

module.exports = router












