const router = require('express').Router();
const userRoutes = require('./user-routes');
const locationRoutes = require('./locations-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/user', userRoutes);
router.use('/location', locationRoutes);
router.use('comment', commentRoutes);

module.exports = router;
