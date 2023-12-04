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
            imgUrl: 'https://cdn.pixabay.com/photo/2012/02/23/09/16/coffee-15994_1280.jpg',
            category: 'drinks' },
          { name: 'Latte',
            price: 6.50,
            imgUrl: 'https://cdn.pixabay.com/photo/2015/05/07/13/46/cappuccino-756490_1280.jpg',
            category: 'drinks', 
            addons: {
              create:{ 
                  name: 'milk substitute',
                  price: .99,
                  imgUrl: 'https://cdn.pixabay.com/photo/2017/08/31/12/32/milk-2700595_1280.jpg',
                  prompt: 'What kind of milk would you like in your latte?'
                },
            }, 
          },
          { name: 'Tea',
            price: 3.10,
            imgUrl: 'https://cdn.pixabay.com/photo/2016/10/14/18/21/tee-1740871_1280.jpg',
            category: 'drinks' },
          { name: 'Orange Juice',
            price: 1.79,
            imgUrl: 'https://cdn.pixabay.com/photo/2012/11/28/09/31/orange-juice-67556_1280.jpg',
            category: 'drinks' },
          { name: 'Bagel',
            price: 3.72,
            imgUrl: 'https://cdn.pixabay.com/photo/2017/04/04/17/30/food-2202338_1280.jpg',
            category: 'food',
            addons: {
              create:{ 
                  name: 'cream cheese',
                  price: .99,
                  imgUrl: 'https://cdn.pixabay.com/photo/2014/11/15/17/32/bagel-532437_1280.jpg',
                  prompt: 'Would you like cream cheese on your bagel?'
                },
            }, 
          },
          { name: 'Cookie',
            price: 1.64,
            imgUrl: 'https://cdn.pixabay.com/photo/2016/11/17/22/53/biscuit-1832917_1280.jpg',
            category: 'food' },
          { name: 'Doughnut',
            price: 2.18,
            imgUrl: 'https://cdn.pixabay.com/photo/2019/05/11/17/08/donuts-4196093_1280.jpg',
            category: 'food' },
          { name: 'Muffin',
            price: 3.05,
            imgUrl: 'https://cdn.pixabay.com/photo/2019/08/25/17/56/muffin-4430010_1280.jpg',
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
