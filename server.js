const express = require("express");

const app = express();

const server = require("http").Server(app);
app.use(express.static(__dirname+"/public"))
// app.use(express.static(__dirname+"/styles"))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/lobby.html");
});

// app.get("/about", function (req, res) {
//   res.send("<h1>shinji Ikari</h1> <p>EVA 01 Pilot</p> <p>Crybaby 4 lyf.</p>");
// });

// app.get("/EVA", function (req, res) {
//   res.send("Hello i am evangelion!");
// });

app.listen(2000, function () {
  console.log("You have connected to server 2000");
});

