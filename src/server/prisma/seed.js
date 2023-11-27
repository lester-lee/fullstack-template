const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
