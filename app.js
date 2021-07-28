const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.get("", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  app.use(express.static(path.join(__dirname, "public")));
});

app.listen(PORT, () => {
  console.log(`Current Mobile Offerwall Running on Port ${PORT}`);
});
