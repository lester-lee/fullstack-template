const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient().$extends({
  query: {
    store: {
      async create({ args, query }) {
        args.data.password = await bcrypt.hash(args.data.password, 5);

        return query(args);
      },
    },
  },
});
module.exports = prisma;
