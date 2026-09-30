import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Serve static files from public folder
app.use(express.static(path.join(dirname, "public")));

// 404 page
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// Start server
app.listen(3337, () => {
    console.log("prj3 running at http://localhost:3337");
});