import express from "express";
import { products } from "./data.js";

const app = express();
app.get("/", (req, res) => {
  res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
        `);
});

app.use((req, res) => {
  res.status(404).send("Route not found!");
});
app.listen(3000, () => {
  console.log("Program 4 server is running right now..");
});