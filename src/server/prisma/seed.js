const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.students.create({
    data: {
      students: {
        create: [
          { firstName: "fName" },
          { lastName: "lName" },
          { email: "email@email.com" },
          { imageUrl: "test.com" },
          { gpa: 3.7 },
        ],
      },
    },
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
