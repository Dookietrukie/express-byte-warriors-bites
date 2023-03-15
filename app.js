const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("views", __dirname + "/views"); // Tells Express app where to look for views.
app.set("view engine", "hbs"); // Sets Handlebars as the template engine.

// Make everything inside of public/ available
app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials");

// Route for homepage
app.get("/", (req, res, next) => {
  res.render("home");
});

// Route for contact page
app.get("/contact", (req, res, next) => {
  const data = {
    loadCoolCss: true,
  };

  res.render("contact-page", data);
});

// Route for pizzas

app.get("/pizzas", (req, res, next) => {
  const pizzasArr = [
    {
      title: "Pizza Margarita",
      price: "12.95€",
      imageFile: "pizza-margarita.jpg",
    },
    {
      title: "Veggie Pizza",
      price: "18.95€",
      imageFile: "pizza-veggie.jpg",
    },
    {
      title: "Seafood Pizza",
      imageFile: "pizza-seafood.jpg",
    },
  ];

  const data = {
    pizzas: pizzasArr,
  };

  res.render("menu", data);
});

app.get("/pizzas/margarita", (req, res, next) => {
  const data = {
    title: "Margarita",
    price: "12.95€",
    imageFile: "pizza-margarita.jpg",
    ingredients: ["mozzarella", "tomato sauce", "basilicum"],
  };

  res.render("product", data);
});

app.get("/pizzas/veggie", (req, res, next) => {
  const data = {
    title: "Veggie",
    price: "18.95€",
    imageFile: "pizza-veggie.jpg",
    ingredients: ["cherry tomatoes", "basilicum", "Olives"],
  };

  res.render("product", data);
});

app.get("/pizzas/seafood", (req, res, next) => {
  const data = {
    title: "Seafood",
    imageFile: "pizza-seafood.jpg",
    ingredients: ["tomato sauce", "garlic", "prawn"],
  };

  res.render("product", data);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});
