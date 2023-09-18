import express from "express";
const router = express.Router();

router.use("/books", (req, res) => {
  res.send("Hello from Books");
});

export default router;
