const blogpostModel = require('../models/blogposts');

const index = (request, response) => {
  const blogposts = blogpostModel.index();
  return blogposts;
};

const show = (request, response) => {
  const blogposts = blogpostModel.show(request.params.blogposts_id);
  return blogposts;
};

const create = (request, response) => {
  const blogposts = blogpostModel.create(request.body);
  return blogposts;
};

const update = (request, response) => {
  const blogposts = blogpostModel.update(request.params.blogposts_id, request.body);
  return blogposts;
};

const destroy = (request, response) => {
  const blogposts = blogpostModel.destroy(request.params.blogposts_id);
  return blogposts;
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
