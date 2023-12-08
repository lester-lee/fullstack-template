const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient().$extends({
  query: {
    store: {
      async create({ args, query }) {
        args.data.password = await bcrypt.hash(args.data.password, 5);

        return query(args);
      },
      async upsert({ args, query }) {
        const password = await bcrypt.hash(args.create.password, 10);
        args.create.password = password;
        return query(args);
      },
    },
  },
});
module.exports = prisma;
