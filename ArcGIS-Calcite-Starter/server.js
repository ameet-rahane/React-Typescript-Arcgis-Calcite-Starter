const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use('/public',express.static(__dirname +"/public"));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

