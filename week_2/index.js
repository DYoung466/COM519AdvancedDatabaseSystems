const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});