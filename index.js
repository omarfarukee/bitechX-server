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
        res.status(200).json({ message: "All users get successfully", users: users });
      });
      

      app.get("/users/:username", (req, res) => {
        const username = req.params.username;
        const foundUser = users.find((user) => user.username === username);
        if (foundUser) {
          res.status(200).json({ message: "sigle user get successfully", user: foundUser });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      });
      

      app.post('/users', (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
          return res.status(400).json({ message: 'Username and password are required' });
        }
        const newUser = { username, password };
        // users.push(newUser);
        res.status(201).json({ message: 'User created successfully', user: newUser });
      });    
      
      app.put("/users/:username", (req, res) => {
        const { username, password } = req.body;
        const updatedUser = { username, password };
        res.json({ message: "User updated successfully", user: updatedUser });
      });

      app.delete("/users/:username", (req, res) => {
        const { username, password } = req.body;
        const userInfo = { username, password };
        res.json({ message: "User deleted successfully", deletedUser: userInfo });
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