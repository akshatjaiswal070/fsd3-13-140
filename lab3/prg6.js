import { getAllProducts } from "./product.js";

const products = getAllProducts();

console.log(products);

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();
    res.setHeader("content-type", "application/json");
    res.end(
      JSON.stringify({
        count: data.length,
        data,
      })
    );
  } else if (req.url === "/" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const product = JSON.parse(body || "{}");
        console.log("received product:", product);
        res.statusCode = 201;
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ msg: "product added", product }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });
  } else if (req.url.startsWith("/products/") && req.method === "PUT") {
    const productID = req.url.split("/").pop();
    console.log("Update Product id:", productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const product = JSON.parse(body || "{}");
        product.id = productID;
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ msg: "product updated", product }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });
  } else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE Request");
  } else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});