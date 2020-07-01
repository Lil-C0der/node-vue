module.exports = (app) => {
  const mongoose = require("mongoose");
  mongoose.connect(
    "mongodb://localhost:27017/node-vue",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(`Connection Error ${err}`);
      } else {
        console.log("Connetion success");
      }
    }
  );
};
