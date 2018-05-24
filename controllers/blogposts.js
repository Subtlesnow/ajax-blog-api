const blogpostModel = require('../models/blogposts');

const index = (request, response) => {
  const blogposts = blogpostModel.index();
  response.send(blogposts);
};

const show = (request, response) => {
  const blogposts = blogpostModel.show(request.params.blogposts_id);
  response.send(blogposts)
};

const create = (request, response) => {
  console.log(request.body)
  const blogposts = blogpostModel.create(request.body);
  response.send(blogposts)
};

const update = (request, response) => {
  const blogposts = blogpostModel.update(request.params.blogposts_id, request.body);
  response.send(blogposts)
};

const destroy = (request, response) => {
  const blogposts = blogpostModel.destroy(request.params.blogposts_id);
  response.send(blogposts)
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
