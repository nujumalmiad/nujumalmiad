const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const cookieParser  = require("cookie-parser")
const expressLayouts = require("express-ejs-layouts");
dotenv.config();

app.use(cors());
app.use(cookieParser())
app.use(expressLayouts);
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

const visitCounter = (req, res, next) => {
  let visitCount = parseInt(req.cookies.visitCount) || 0;
  visitCount += 1;
  res.cookie('visitCount', visitCount, { maxAge: 3600000 });
  req.visitCount = visitCount;
  next();
};

app.use(visitCounter);

app.get("/", async (req, res) => {
  res.render("index", { visit: req.visitCount });
});
app.get("/about", async (req, res) => {
  res.render("about");
});
app.get("/contact", async (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
