require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors())
  
app.use(express.json());

const run = async () => {
       const users = [
        { username: "OmarFaruk", password: "omar123" },
        { username: "RakibulHasan", password: "rakib123" },
      ];

try {

    app.get("/users", (req, res) => {
        res.json(users);
      });

}  finally {
}
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("BitechX Runnig successfully");
});

app.listen(port, () => {
    console.log(`bitechX listening on port ${port}`);
});