const { express } = require("../../index");
const PostsRoute = express.Router();
const { query_runner, query_error } = require("../helpers/mysql_helpers");

PostsRoute.get("/", (req, res) => {
        query_runner("SELECT * FROM posts")
                .then(([rows]) => res.render("posts", {posts: rows, page_title: "Posts"}))
                .catch((err) => res.json(query_error(err.message)));
});

module.exports = PostsRoute;
