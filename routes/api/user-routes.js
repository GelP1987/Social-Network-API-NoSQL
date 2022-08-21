const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

/**
 * Return all users
 * GET /api/users
 */
router.get("/", getAllUsers);

/**
 * Return single user from database.
 * GET /api/users/_id
 */
router.get("/:id", getSingleUser);

/**
 * Create new User
 * POST /api/users
 */
router.post("/", createUser);

/**
 * Update a user
 * PUT /api/users/_id
 */
router.put("/:id", updateUser);

/**
 * Remove a user from the database
 * DELETE /api/users/_id
 */
router.delete("/:id", deleteUser);

module.exports = router;
