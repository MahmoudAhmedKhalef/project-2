const {express} = require("../../../../index");
const postsAPIRouter = express.Router();
const { query_runner, query_error } = require("../../../helpers/mysql_helpers");

postsAPIRouter.get("/", (req, res) => {
        query_runner("SELECT * FROM posts")
                .then(([rows]) => res.json(rows))
                .catch((err) => res.json(query_error(err.message)));
});

postsAPIRouter.post("/", (req, res) => {
        const data = [
                req.body.title,
                req.body.content,
                req.body.author_id
        ];
        query_runner("INSERT INTO posts \
        (title, content, author_id) \
        VALUES (?, ?, ?)", data)
                .then((rows) => res.status(200).json(rows))
                .catch((err) => res.json(query_error(err.message)));
});

postsAPIRouter.delete("/:id", (req, res) => {
        query_runner("DELETE FROM posts WHERE id = ?", [req.params.id])
                .then(( [ { affectedRows } ] ) => {
                        return ((affectedRows > 0)
                        ? res.json({error: 0, status: 200, msg: "post deleted successfully"})
                        : res.json({error: 0, status: 404, msg: "can't find post with id: " + req.params.id}))
                })
                .catch((err) => res.json(query_error(err.message)));
});

module.exports = postsAPIRouter;
