const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

/**
 * Return all Thoughts
 * GET /api/Thoughts
 */
router.get("/", getAllThoughts);

/**
 * Return single Thought from database.
 * GET /api/Thoughts/_id
 */
router.get("/:id", getSingleThought);

/**
 * Create new Thought
 * POST /api/Thoughts
 */
router.post("/", createThought);

/**
 * Update a Thought
 * PUT /api/Thoughts/_id
 */
router.put("/:id", updateThought);

/**
 * Remove a Thought from the database
 * DELETE /api/Thoughts/_id
 */
router.delete("/:id", deleteThought);

module.exports = router;
