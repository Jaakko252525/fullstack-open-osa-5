import axios from 'axios'
const baseUrl = '/api/blogs'
const POSTURL = 'http://localhost:3003/'
const PUTURL = '/:id'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('in axios POST req')

  const response = await axios.post(POSTURL, newObject, config)
  return response.data
}


const put = async newObject => {
  const config = {
    headers: {Authorization: token}
  }
  console.log('in axios PUT request')
  console.log('this is newObject in PUT:', newObject)

  const response = await axios.put(PUTURL, newObject, config)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken, create, put }