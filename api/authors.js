import express from "express";
import bodyParser from "body-parser";
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

import prisma from "./lib/index.js";

router.get("/authors", async (req, res) => {
  try {
    const owners = await prisma.author.findMany();

    if (owners.length === 0) {
      return res.status(404).json({ error: "no owners found. " });
    }

    res.json(owners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/authors", async (req, res) => {
  try {
    const { name, email } = req.body;
    const author = await prisma.author.create({
      data: {
        name,
      },
    });
    if (!author) {
      return res.status(404).json({ error: "owner not found" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/authors", async (req, res) => {
  try {
    const { name, email } = req.body;
    const { id } = req.params;
    const author = await prisma.author.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
      },
    });
    if (!author) {
      return res.status(404).json({ error: "owner not found" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/authors", async (req, res) => {
  try {
    const { id } = req.params;
    const author = await prisma.author.delete({
      where: {
        id: Number(id),
      },
    });
    if (!author) {
      return res.status(404).json({ error: "owner not found" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
