const express = require("express");
const app = express();

app.listen(process.env.PR_PORT, process.env.PR_HOST, () => {
        console.log("Server is up & running")
});

module.exports = {
        app,
        express
};