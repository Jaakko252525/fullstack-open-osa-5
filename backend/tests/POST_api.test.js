
const mongoose = require('mongoose')
const supertest = require('supertest')
const { appForTesting } = require('../app');

const api = supertest(appForTesting)
// importing blogSchema
const Blog = require('../models/blog')

// hardcoding a blog
const newBlog = new Blog  ({
    title: 'testing-post',
    author: "Jaakko",
    url: "postTesting",
    likes: 5
})

test('POST request works', async () => {
    const response = await api.post('/').send(newBlog);
    expect(response.status).toBe(200); // Assuming you want to assert a successful response status code
  
    expect(response.body.id).toBeDefined(); // Assert that the 'id' field exists

})







