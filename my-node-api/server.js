const express = require("express");
const app = express();
app.use(express.json());

let users = [];
let idCounter = 1;

app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    res.status(200).json(user);
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    const index = users.findIndex(u => u.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users.splice(index, 1);
    res.status(200).json({ message: "User deleted successfully" });
});

if (require.main === module) {
    app.listen(3000, () => console.log("Server running on port 3000"));
}

module.exports = app;
