const router = require('express').Router();

const {
  addFriend,
  removeFriend,
} = require('../../controllers/friendsController');

// /api/users/:userId/friends/:friendId
router.route('/users/:userId/friends/:friendsId').post(addFriend).delete(removeFriend);


module.exports = router;