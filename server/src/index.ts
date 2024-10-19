import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();

  res.json(todos);
});

app.listen(3000, () => {
  console.log("server running on localhost:3000");
});
