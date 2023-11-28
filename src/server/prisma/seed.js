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
          { name: 'Coffee',
            price: 5.25,
            imgUrl: 'https://t4.ftcdn.net/jpg/00/43/99/81/360_F_43998133_4Pf0crjj0nPE7i7E1xC2ztzAU71aHsYB.jpg',
            category: 'drinks' },
          { name: 'Latte',
            price: 6.50,
            imgUrl: 'https://thumbs.dreamstime.com/b/coffee-latte-art-cup-hand-drawn-vector-illustration-isolated-white-background-178040825.jpg',
            category: 'drinks', 
            addons: {
              create:{ 
                  name: 'milk substitute',
                  price: .99,
                  imgUrl: 'https://thumbs.dreamstime.com/b/milk-carton-cow-illustration-26659124.jpg',
                  prompt: 'What kind of milk would you like in your latte?'
                },
            }, 
          },
          { name: 'Tea',
            price: 3.10,
            imgUrl: 'https://i.pinimg.com/474x/fe/5b/84/fe5b845043f27a567b68def86976be2d.jpg',
            category: 'drinks' },
          { name: 'Orange Juice',
            price: 1.79,
            imgUrl: 'https://media.istockphoto.com/id/1366694346/vector/orange-fruit-drink-in-glass-orange-smoothie-orange-milk-orange-juice-vector-illustration.jpg?s=612x612&w=0&k=20&c=T_bJnFuXlK72PtjnOZ7gkEikDdMg0ugm3-KMzqkq3HA=',
            category: 'drinks' },
          { name: 'Bagel',
            price: 3.72,
            imgUrl: 'https://png.pngtree.com/png-clipart/20210311/original/pngtree-two-delicious-bagel-bread-bagels-clipart-png-image_6047167.png',
            category: 'food',
            addons: {
              create:{ 
                  name: 'cream cheese',
                  price: .99,
                  imgUrl: 'https://cdn.langeek.co/photo/18195/original/cream-cheese',
                  prompt: 'Would you like cream cheese on your bagel?'
                },
            }, 
          },
          { name: 'Cookie',
            price: 1.64,
            imgUrl: 'https://thumbs.dreamstime.com/b/chocolate-chips-cookie-vector-illustration-sweet-food-baking-icon-52699777.jpg',
            category: 'food' },
          { name: 'Doughnut',
            price: 2.18,
            imgUrl: 'https://i0.wp.com/pearlyarts.com/wp-content/uploads/2021/11/Chocolate-Frosted-Donut-Clipart-WM.png',
            category: 'food' },
          { name: 'Muffin',
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
