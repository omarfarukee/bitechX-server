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
        { username: "Marzia", password: "marzia123" },
        { username: "linkonvai", password: "linkon123" },
      ];

try {

    app.get("/users", (req, res) => {
        res.json(users);
      });
      app.get("/users/:username", (req, res) => {
        const username = req.params.username;
        const foundUser = users.find((user) => user.username === username);
        if (foundUser) {
          res.json(foundUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
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