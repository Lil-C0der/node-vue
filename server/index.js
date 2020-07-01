const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(require("cors")());
app.use(express.json());

require("./plugin/mongoose")(app);
require("./routes/admin")(app);

app.listen(3000, () => {
  console.log("server is running at port 3000...");
});
