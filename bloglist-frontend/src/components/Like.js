
import blogService from '../services/blogs'

const Like = ({blogProp}) => {
    console.log('in component Like')
    console.log('this is the blog:', blogProp)

    // making blog object
    const blogObject = {
        "title": blogProp.title,
        "author": blogProp.author,
        "url": blogProp.url,
        "likes": blogProp.likes,
        "id": blogProp.id
    }

    console.log('this is blogObject in Like component', blogObject)
    return (
        <div>
            <button onClick={blogService.put(blogObject)}>LikeComponent</button>
        </div>

    )
}


export default Like





