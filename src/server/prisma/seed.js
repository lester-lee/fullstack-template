const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.store.upsert({
    where: {
      username: "Store1",
    },
    update: {},
    create: {
      username: "Store1",
      password: "StorePassword1",
      products: {
        create: [
          { name: 'coffee',
            price: 5.25,
            imgUrl: 'https://t4.ftcdn.net/jpg/00/43/99/81/360_F_43998133_4Pf0crjj0nPE7i7E1xC2ztzAU71aHsYB.jpg',
            category: 'drinks' },
          { name: 'latte',
            price: 6.50,
            imgUrl: 'https://thumbs.dreamstime.com/b/coffee-latte-art-cup-hand-drawn-vector-illustration-isolated-white-background-178040825.jpg',
            category: 'drinks' },
          { name: 'tea',
            price: 3.10,
            imgUrl: 'https://i.pinimg.com/474x/fe/5b/84/fe5b845043f27a567b68def86976be2d.jpg',
            category: 'drinks' },
          { name: 'bagel',
            price: 3.72,
            imgUrl: 'https://png.pngtree.com/png-clipart/20210311/original/pngtree-two-delicious-bagel-bread-bagels-clipart-png-image_6047167.png',
            category: 'food' },
          { name: 'doughnut',
            price: 2.18,
            imgUrl: 'https://i0.wp.com/pearlyarts.com/wp-content/uploads/2021/11/Chocolate-Frosted-Donut-Clipart-WM.png',
            category: 'food' },
          { name: 'muffin',
            price: 3.05,
            imgUrl: 'https://thumbs.dreamstime.com/b/isolated-blueberry-muffin-white-background-drawing-illustration-133615606.jpg',
            category: 'food' },
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
