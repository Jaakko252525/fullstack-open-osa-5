import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Footer from './components/Footer'
import blogService from './services/blogs'
import loginService from './services/login'

import Togglable from './components/Togglable'
import Like from './components/Like'


// BlogForm component

const BlogForm = ({handleSubmit,
  handleTitleChange, 
  handleAuthorChange, 
  handleURLChange, 
  handleIdChange, 
  newTitle, 
  newAuthor,
  newURL, 
  newId, errorMessage}) => {

    console.log('this is id:', newId)
    return (

      <div>
  <form onSubmit={handleSubmit}>
    Title<input
      value={newTitle}
      onChange={handleTitleChange}
    />
    Author<input
      value={newAuthor}
      onChange={handleAuthorChange}
    />
    URL<input
      value={newURL}
      onChange={handleURLChange}
    />
    ID<input
      value={newId}
      onChange={handleIdChange}
    />
    <button type="submit">save</button>
    <Notification message={errorMessage} />
  
  </form>  
      </div>
    )


}




const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [username, setUsername] = useState('') 

  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // title, author, URL state
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor,setNewAuthor] = useState('')
  const [newURL, setNewURL] = useState('')
  const [newId, setNewId] = useState('')

  // BlogForm visible state
  const [blogFormVisible, setBlogFormVisible] = useState(false)


  useEffect(() => {
    blogService
    .getAll()
    .then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }



  const addBlog = (event) => {
    event.preventDefault()
    console.log('in addBlog function!')

    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newURL,
      likes: 0,
      userId: user.id
    }

    blogService
      .create(blogObject)
        .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewBlog('')
      })
    setErrorMessage('Blog added succesfully!☺')
  }


// handlers to set new state
const handleTitleChange = (event) => {
  setNewTitle(event.target.value)

}
const handleAuthorChange = (event) => {
  setNewAuthor(event.target.value)
}

const handleURLChange = (event) => {
  setNewURL(event.target.value)
}

const handleIdChange = (event) => {
  setNewId(event.target.value)
}



const blogsToShow = showAll
? blogs
: blogs.filter(blog => blog.important)

// window.localStorage.clear()
const clearStorage = () => {
  console.log('in here')
  window.localStorage.clear()
  console.log('Local storage cleared succesfully')
}


  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )





  const blogForm = () => {
    const hideWhenVisible = { display: blogFormVisible ? 'none' : '' }
    const showWhenVisible = { display: blogFormVisible ? '' : 'none' }


    return (
      <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setBlogFormVisible(true)}>Add blog</button>
        <button onClick={clearStorage}>Log out</button>
      </div>

      <div style={showWhenVisible}>
        <BlogForm 
          handleSubmit={addBlog}
          handleAuthorChange={handleAuthorChange}
          handleTitleChange={handleTitleChange}
          handleURLChange={handleURLChange}
          handleIdChange={handleIdChange}
          newAuthor={newAuthor}
          newTitle={newTitle}
          newURL={newURL}
          newId={newId}
        />

        <button onClick={() => setBlogFormVisible(false)}>cancel</button>
      </div>

      </div>

    )}





return (
  <div>
    <h1>Blogs app</h1>
    <Notification message={errorMessage} />
    {!user && loginForm()} 
    {user && <div>
      <p>{user.name} logged in</p>
        {blogForm()}
      </div>
    } 

    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll}
      </button>
    </div> 
    <ul>
      <ul>
        {blogsToShow.map(blog =>
          <Togglable buttonLabel="Helu">
            <Blog
              key={blog.title}
              blog={blog}
            />
            <Like blogProp={blog}></Like>
          </Togglable>
        )}

      </ul>
    </ul>
    <Footer />
  </div>
)
}
export default App