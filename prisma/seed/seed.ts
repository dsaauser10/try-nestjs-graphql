import { GenderEnum, Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function Seeder() {
  const records: number = 1000;

  // Seed Users
  const userCreateManyInput: Prisma.UserCreateManyInput[] = Array.from({
    length: records / 20,
  }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    // createdAt: faker.date.past(),
    // updatedAt: faker.date.recent(),
    // gender: faker.helpers.objectValue(GenderEnum),
  }));

  // Seed Products
  const productCreateManyInput: Prisma.ProductCreateManyInput[] = Array.from({
    length: records / 10,
  }).map((_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price({ min: 1000, max: 2000000 })),
    imageName: faker.string.uuid() + '.png',
    imageURL: faker.image.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    userId: faker.helpers.arrayElement(userCreateManyInput).id,
  }));

  console.log('Seeding sedang berjalan...');
  // Seed to database
  try {
    console.log('Seeding...');
    await prisma.user.createMany({
      data: userCreateManyInput,
    });

    console.log('Seeding...');
    await prisma.product.createMany({
      data: productCreateManyInput,
    });
  } catch (error) {
    console.error('Seeding error', error);
  } finally {
    console.log('Seeding selesai...');
    await prisma.$disconnect();
  }
}

// Uncomment the following line if you want to execute the seeder immediately
Seeder();
