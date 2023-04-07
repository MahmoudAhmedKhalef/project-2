const { express } = require("../../index");
const UsersRoute = express.Router();
const { query_runner, query_error } = require("../helpers/mysql_helpers");

UsersRoute.get("/", (req, res) => {
        query_runner("SELECT * FROM author")
                .then(([rows]) => res.render("users", {users: rows, page_title: "Users"}))
                .catch((err) => res.json(query_error(err.message)));
});

module.exports = UsersRoute;
