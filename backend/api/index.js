const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/food", (req, res) => res.send("Hello, World!"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
