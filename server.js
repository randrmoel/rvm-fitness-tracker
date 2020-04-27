const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// Express "use" statements to set-up express
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

// Routes
// =============================================================
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  