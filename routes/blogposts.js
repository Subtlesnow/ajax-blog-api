const express = require('express');
const router = express.Router();
const blogpostController = require('../controllers/blogposts');

router.get('/blogposts', blogpostController.index);
router.get('/blogposts/:blogposts_id', blogpostController.show);
router.post('/blogposts/', blogpostController.create);
router.put('/blogposts/:blogposts_id', blogpostController.update);
router.delete('/blogposts/:blogposts_id', blogpostController.destroy);

module.exports = router;
