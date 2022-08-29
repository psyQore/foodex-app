import { categories } from "./data/categories";
import { products } from "./data/product";
import { PrismaClient } from "@prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    await prisma.category.createMany({
      data: categories,
    });
    await prisma.product.createMany({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};
main();
