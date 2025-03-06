const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const greetRoute = require("./routes/greet.route");

app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.use("/api", greetRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
