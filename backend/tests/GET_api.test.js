




const mongoose = require('mongoose')
const supertest = require('supertest')
const { appForTesting } = require('../app');

const api = supertest(appForTesting)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(async () => {
  await mongoose.connection.close()
})




