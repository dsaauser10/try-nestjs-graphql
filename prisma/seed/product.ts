// // prisma/seed.js

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//   await prisma.product.createMany({
//     data: [
//       {
//         name: 'Product 1',
//         description: 'Description 1',
//         price: 29.99,
//         imageName: 'image1.jpg',
//         imageURL: 'https://example.com/image1.jpg',
//       },
//       {
//         name: 'Product 2',
//         description: 'Description 2',
//         price: 39.99,
//         imageName: 'image2.jpg',
//         imageURL: 'https://example.com/image2.jpg',
//       },
//       // Add more data as needed
//     ],
//   });
// }

// main()
//   .catch(e => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
