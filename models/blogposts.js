// models/blogposts

const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');
const blogpostsPath = path.join(__dirname, '..', 'data', 'blogposts.json');

const index = () => {
  const blogpostJSON = fs.readFileSync(blogpostsPath, 'utf-8');
  const blogposts = JSON.parse(blogpostJSON);
  return blogposts;
};

const show = blogposts_id => {
  const blogpostJSON = fs.readFileSync(blogpostsPath, 'utf-8');
  const blogposts = JSON.parse(blogpostJSON);
  const blogpost = blogposts.find( blogpost => blogpost.id === blogposts_id);
  return blogpost;
};

const create = ({title, content}) => {
  const blogpostJSON = fs.readFileSync(blogpostsPath, 'utf-8');
  const blogposts = JSON.parse(blogpostJSON);
  const newBlogPost = {
    id: uuid(),
    title,
    content
  };
  blogposts.push( newBlogPost );
  const allBlogPostJSON = JSON.stringify(blogposts);
  fs.writeFileSync(blogpostsPath, allBlogPostJSON);
  return newBlogPost;
};

const update = (blogposts_id, data ) => {
  const blogpostJSON = fs.readFileSync(blogpostsPath, 'utf-8');
  const blogposts = JSON.parse(blogpostJSON);
  const updatedBlogPosts = blogposts.map( blogpost => {
    if (blogpost.id === blogposts_id) {
      const updatedBlogPost = { ...blogpost, ...data }
      return updatedBlogPost;
    } else {
      return blogpost;
    }
  })
  const updatedBlogPostsJSON = JSON.stringify(updatedBlogPosts);
  fs.writeFileSync(blogpostsPath, updatedBlogPostsJSON);
  return updatedBlogPost;
};

const destroy = blogposts_id => {
  const blogpostJSON = fs.readFileSync(blogpostsPath, 'utf-8');
  const blogposts = JSON.parse(blogpostJSON);
  const remainingBlogPosts = blogposts.filter( blogpost => {
    if (blogpost.id === blogposts_id) {
      const deletedBlogPost = blogpost;
      return false;
    } else {
      return true;
    }
  })
  const remainingBlogPostsJSON = JSON.stringify(remainingBlogPosts);
  fs.writeFileSync(blogpostsPath, remainingBlogPostsJSON);
  return deletedBlogPost;
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
