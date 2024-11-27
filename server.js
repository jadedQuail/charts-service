const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 38710;

app.use(cors());

const chartData = JSON.parse(fs.readFileSync("charts.json", "utf-8"));

app.get("/get-chart-rankings", (req, res) => {
    const songTitle = req.query.title;

    if (!songTitle || !chartData[songTitle]) {
        return res.status(404).json({ error: "Song not found" });
    }

    const { billboard, aria, occ } = chartData[songTitle];

    res.json({
        title: songTitle,
        billboard,
        aria,
        occ,
    });
});

app.get("/get-country-rankings", (req, res) => {
    const songTitle = req.query.title;

    if (!songTitle || !chartData[songTitle]) {
        return res.status(404).json({ error: "Song not found" });
    }

    const { countries } = chartData[songTitle];

    res.json({
        title: songTitle,
        countries,
    });
});

app.listen(PORT, () => {
    console.log(`Song Recommendation Service is running on http://localhost:${PORT}`);
});