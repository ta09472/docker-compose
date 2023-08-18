var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.send(users);
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                name: 'Alice',
                email: 'alice@prisma.ioO',
            },
        });
        console.log(user);
    });
}
main();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
