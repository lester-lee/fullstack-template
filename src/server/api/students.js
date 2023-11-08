const { ServerError } = require("../errors");
const prisma = require("../prisma");
const router = require("express").Router();

module.exports = router;

// Sends all students 
router.get("/", async (req, res, next) => {
  try {
    const students = await prisma.students.findMany();
    res.json(students);
  } catch (err) {
    next(err);
  }
});