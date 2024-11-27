const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 38710;

app.use(cors());

const chartData = JSON.parse(fs.readFileSync("charts.json", "utf-8"));

app.listen(PORT, () => {
    console.log(`Song Recommendation Service is running on http://localhost:${PORT}`);
});