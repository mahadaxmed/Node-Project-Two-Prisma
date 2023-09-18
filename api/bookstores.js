import express from "express";
const router = express.Router();

router.use("/bookstore", (req, res) => {
  res.send("Hello from BookStore");
});
export default router;
