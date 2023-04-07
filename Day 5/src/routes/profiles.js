const { express } = require("../../index");
const ProfilesRoute = express.Router();
const { query_runner, query_error } = require("../helpers/mysql_helpers");

ProfilesRoute.get("/", (req, res) => {
        query_runner("SELECT * FROM author_profile")
                .then(([rows]) => res.render("profiles", {profiles: rows, page_title: "Profiles"}))
                .catch((err) => res.json(query_error(err.message)));
});

module.exports = ProfilesRoute;
