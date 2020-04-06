const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(router);

//PORT LISTED
const PORT = 1212;
app.listen(process.env.PORT || PORT, () => {
  console.log("APP LISTEN PORT: " + PORT);
});
