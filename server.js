const express = require("express");
const app = express();

const server = require("http").Server(app);
app.use(express.static(__dirname+"/public"))
// app.use(express.static(__dirname+"/styles"))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/lobby.html");
});

const PORT =process.env.PORT || 2000;

app.listen(PORT, function () {
  console.log("You have connected to server 2000");
});

