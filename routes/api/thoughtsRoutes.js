const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought, 
  addReaction, 
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/thoughts').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions').post(addReaction).delete(removeReaction)


module.exports = router;
