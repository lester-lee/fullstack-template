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

// Route to get student by ID
router.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(student => student.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
})
