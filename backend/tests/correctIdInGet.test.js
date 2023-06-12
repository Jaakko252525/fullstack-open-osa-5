


const mongoose = require('mongoose')
const supertest = require('supertest')
const { appForTesting } = require('../app');

const api = supertest(appForTesting)


test('blogs have an identifying field named id', async () => {
    const response = await api.get('/api/blogs');
    const blogs = response.body;
  
    blogs.forEach((blog) => {
      expect(blog.id).toBeDefined();
    });
  });





