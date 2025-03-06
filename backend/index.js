const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const greetRoute = require("./routes/greet.route");

app.use("/api", greetRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
