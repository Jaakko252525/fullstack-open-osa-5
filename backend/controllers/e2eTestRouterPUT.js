

const router = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

router.put('/like', async (request, response) => {
  console.log('in e2eRouter in backend PUT req!!!')


  response.status(204).end()
})

module.exports = router





