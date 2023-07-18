const router = require('express').Router();

const {
  addFriend,
  removeFriend,
} = require('../../controllers/friendsController');

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/friendId').post(addFriend).delete(removeFriend);

// router.route('/:userId/friends/:friendId').delete(removeFriend);


module.exports = router;