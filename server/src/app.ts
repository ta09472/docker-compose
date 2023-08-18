import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
const app = express();

const port = 3000;

const prisma = new PrismaClient();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.ioO',
    },
  });
  console.log(user);
}

main();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
