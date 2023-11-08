const prisma = require("../prisma");

const mockData = [
  {
    firstName: "Lewis",
    lastName: "Hamilton",
    email: "Lewis@Merc.com",
    imageUrl: "image.com",
    gpa: 4.0,
  },
];

const seed = async () => {
  for (student of mockData) {
    await prisma.students.create({ data: student });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
