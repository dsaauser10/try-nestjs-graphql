// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john.1doe@example.com',
        password: 'password123',
      },
      {
        name: 'Jane Smith',
        email: 'jane.1smith@example.com',
        password: 'securepass',
      },
      // Tambahkan data pengguna lain sesuai kebutuhan
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
