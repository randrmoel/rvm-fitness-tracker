const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Which port?
const PORT = process.env.PORT || 3000;

const app = express();

// Express "use" statements to set-up express
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set up databases
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

// Routes for html and api
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app)

//Start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  