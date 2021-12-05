const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  // res.json(products);
  res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  //iterare products and return only specified parts of the object
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  // res.json(products);
  res.json(newProducts);
});

//route params
app.get("/api/products/:productID", (req, res) => {
  // console.log(req)
  // console.log(req.params)
  //route params return a string !!!

  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res
      .status(404)
      .send(
        `Product Does Not Exist <br> <a href="/api/products">Go back to products</a>`
      );
  }

  return res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  // console.log(req.params);
  //{ productId: '3', reviewId: '5' }
  res.send("hello");
});

app.get("/api/v1/query", (req, res) => {
  // http://localhost:5000/api/v1/query?search=a&limit=2
  // http://localhost:5000/api/v1/query?search=a
  // console.log(req.query); //{ search: 'a', limit: '2' }

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("No product found based on your search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.listen(5000, () => console.log(`App listening on port 5000!`));
