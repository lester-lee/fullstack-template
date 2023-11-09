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

// Get student by their id
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const student = await prisma.students.findUnique({ where: { id } });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

// Update student by their id
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { firstName, lastName, email, gpa, imageUrl } = req.body;

    const updatedStudent = await prisma.students.update({
      where: { id },
      data: { firstName, lastName, email, gpa, imageUrl },
    });
    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

// Delete a single student by their id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const student = await prisma.students.findUnique({ where: { id } });

    await prisma.students.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
