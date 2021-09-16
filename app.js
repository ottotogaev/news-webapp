require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const moment = require("moment");
app.locals.moment = moment;

app.use(bodyParser());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
// Connect Mongo
//const articles = require("./routes/article.routes");

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const con = mongoose.connection;

/** Routes */
app.use("/", routes);

app.use((req, res, next) => {
  if (req.url !== "/") {
    return res.redirect("/");
  }
  next();
});

/** Error Handling */
app.use((req, res, next) => {
  const error = new Error("Not found");
  return res.status(404).json({
    message: error.message,
    error: "Url not found, Please try again",
  });
});

var port = process.env.PORT || "4000";

app.set("port", port);
// app.portNumber = port;

// check connecting
try {
  con.on("open", () => {
    console.log("Connected to Database");
  });
} catch (e) {
  console.log("Error: ", error);
}

app.listen(port, function () {
  console.log(`App listening on port`, port);
});

// app.get("/getport", async (req, res) => {

//   let ip = await fetch("https://api.ipify.org?format=json")
//     .then((results) => results.json())
//     .then((data) => data.ip);

//   let data = {
//     ipAddRemote: ip,
//     port: port,
//   };

//   let remoteAdd =
//     req.headers["x-forwarded-for"] ||
//     req.connection.remoteAddress ||
//     req.socket.remoteAddress ||
//     req.connection.socket.remoteAddress;
//   return res.status(200).send(remoteAdd);
// });

// // Error handling
// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });
