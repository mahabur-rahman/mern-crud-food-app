const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/auth");
const cors = require("cors");

// env
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
require("./db/connect");

// middleware
app.use(cors());
app.use(express.json());
app.use(router);

// 404 ! Not found page
app.get("/*", (req, res) => {
  res.status(404).json({
    message: "404 ! Not Found Page",
  });
});

// listen app

app.listen(PORT, (req, res) => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
