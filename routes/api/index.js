const router = require('express').Router();
const friendsRoutes = require('./friendsRoutes');
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/friends', friendsRoutes);
router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;