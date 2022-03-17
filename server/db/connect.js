const mongoose = require("mongoose");

const DB = process.env.DATABASE;
// connect with db
mongoose
  .connect(DB)
  .then(() => {
    console.log(`Connection Successful`);
  })
  .catch((err) => {
    console.log(`NO connection : ${err}`);
  });
