const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  makeThought,
  changeThought,
  removeThought,
  makeReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Route root:  /api/thoughts
router.get("/", getAllThoughts);
router.get("/:thoughtId", getSingleThought);
router.post("/", makeThought);
router.put("/:thoughtId", changeThought);
router.delete("/:thoughtId", removeThought);
router.post("/:thoughtId/reactions", makeReaction);
router.delete("/:thoughtId/reactions/:reactionId", removeReaction);

module.exports = router;
