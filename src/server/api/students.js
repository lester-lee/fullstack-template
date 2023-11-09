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

// Updates student and sends it
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, gpa, imageUrl } = req.body;
    const student = await prisma.students.create({
      data: {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa,
      },
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});
