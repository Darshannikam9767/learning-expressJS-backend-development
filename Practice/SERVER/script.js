const express = require("express");
const cors = require("cors");
const figlet = require("figlet");

const app = express();
const port = 5000;

app.use(cors());

app.use((req, res, next) => {
    console.log("from use function....");
    next();
});

app.get("/", (req, res) => {
    figlet("BASE ROUTE", (err, data) => {
        if (err) {
            return res.status(500).send("Error occurred");
        }
        res.send(`<pre>${data}</pre>`);
    });
});

app.get("/calculate", (req, res) => {
    const { number } = req.query;

    if (number === undefined || isNaN(number)) {
        return res.status(400).json({
            error: "Please provide a valid number."
        });
    }

    const result = Number(number) ** 2;

    res.json({
        result
    });
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});