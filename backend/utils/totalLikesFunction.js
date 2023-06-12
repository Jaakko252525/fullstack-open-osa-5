const { model } = require("mongoose");



const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => {
      return sum + blog.likes;
    }, 0);
  };

module.exports = {
    totalLikes
}
