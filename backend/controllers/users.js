
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const { request, response } = require('express')

const Blog = require('../models/blog')


usersRouter.get('/api/users', async (request, response) => {

    // find users blogs somehow
    //
    try {
      const users = await User.find({});
      if (users.length === 0) {
        // If no users found, return empty array with 200 status code
        response.status(200).json([]);
      } else {
        response.json(users);
      }
    } catch (error) {
      // Handle the error
      response.status(500).json({ error: 'Server error' });
    }
  });
  
  

  usersRouter.post('/api/users', async (request, response) => {
    const { username, name, password } = request.body
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
  
    const user = new User({
      username,
      name,
      passwordHash,
    })
  
    const savedUser = await user.save()
  
    response.status(201).json(savedUser)
  })
  
  module.exports = usersRouter










