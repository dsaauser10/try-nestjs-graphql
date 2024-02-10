import {
  AccountCategory,
  Day,
  DeliveryStatusType,
  DiscountType,
  EmployeeAttendanceStatus,
  Gender,
  ItemActivity,
  Language,
  LaundryItemRequestStatus,
  MachineStatus,
  NotificationType,
  OrderStatusEnum,
  OrderType,
  PaymentMethod,
  PaymentStatus,
  Period,
  Prisma,
  PrismaClient,
  Scale,
  StockTransactionType,
  TermOrFaqCategory,
  TermOrFaqType,
  TransactionCategory,
  TransactionStatus,
  UserRole,
  VoucherType,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { join } from 'path';
import * as fs from 'fs/promises';

let prisma = new PrismaClient();

export async function Seeder() {
  const records: number = 1000;

  const userCreateManyInput: Prisma.UserCreateManyInput[] = Array.from({
    length: records / 20,
  }).map((_, index) => ({
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    birthDate: faker.date.birthdate(),
    fullName: faker.name.fullName(),
    gender: faker.helpers.objectValue(Gender),
    password: faker.internet.password(),

    role: faker.helpers.objectValue(UserRole),
    username: faker.internet.userName(),
    whatsapp: faker.phone.number(),
    language: faker.helpers.objectValue(Language),
  }));

  // Seed to database
  try {
    async (tx) => {
      await tx.user
        .createMany({
          data: userCreateManyInput,
        })
        .catch((error) => console.log(error, 'user'));
    };
  } catch (error) {
    console.error('Seeding error', error);
  } finally {
    await prisma.$disconnect();
  }
}
