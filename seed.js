const prisma = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  try {
    // await prisma.author.deleteMany();
    // await prisma.book.deleteMany();
    // await prisma.bookstore.deleteMany();

    await prisma.author.create({
      data: {
        name: "Axmed",
      },
    });

    await prisma.book.create({
      data: {
        title: "Axmed",
        price: "9.8",
        image: "book.png",
      },
    });

    await prisma.bookstore.create({
      data: {
        name: "diini",
        loaction: "bakaaro",
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
