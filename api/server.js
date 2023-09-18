import express from "express";

const app = express();

import bookRoute from "./books.js";
import authRoute from "./authors.js";
import bookStoreRouter from "./bookstores.js";

app.use("/", authRoute);
app.use("/", bookRoute);
app.use("/", bookStoreRouter);

// app.use(json);

export default app;
