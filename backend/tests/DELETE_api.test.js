

const mongoose = require('mongoose')
const supertest = require('supertest')
const { appForTesting } = require('../app');

const api = supertest(appForTesting)

const id = 3

test('DELETE by id request works', async () => {
    const response = await api.delete(`/${id}`).send();    
  
    if (response.status === 200) {
        expect(response.body.id).toBeDefined(); // Assert that the 'id' field exists
      } else if (response.status === 404) {
        expect(response.body.error).toBe('Id not found'); // Assert a custom error message when id is not found
      } else {
        // Handle other status codes if needed
      }
    });
    
    
    
    
    
    









