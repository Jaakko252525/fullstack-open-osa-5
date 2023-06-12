

const dummy = (array) => {
    return 1
  }
  

// function that returns sum of blog likes
const totalLikes = (array) => {
    return array.reduce((sum, blog) => {
      return sum + blog.likes;
    }, 0);
  };



module.exports = {
    dummy,
    totalLikes
  }







