const {express} = require("../../../../index");
const usersAPIRouter = express.Router();
const { query_runner, query_error } = require("../../../helpers/mysql_helpers");

usersAPIRouter.get("/", (req, res) => {
        query_runner("SELECT * FROM author")
                .then(([rows]) => res.json(rows))
                .catch((err) => res.json(query_error(err.message)));
});

usersAPIRouter.post("/", (req, res) => {
        const data = [
                req.body.age,
                req.body.email,
                req.body.username,
                req.body.password,
                req.body.role
        ];
        query_runner("INSERT INTO author \
        (age, email, username, password, role) \
        VALUES (?, ?, ?, ?, ?)", data)
                .then((rows) => res.status(200).json(rows))
                .catch((err) => res.json(query_error(err.message)));
});

usersAPIRouter.delete("/:id", (req, res) => {
        query_runner("DELETE FROM author WHERE id = ?", [req.params.id])
                .then(( [ { affectedRows } ] ) => {
                        return ((affectedRows > 0)
                        ? res.json({error: 0, status: 200, msg: "user deleted successfully"})
                        : res.json({error: 0, status: 404, msg: "can't find user with id: " + req.params.id}))
                })
                .catch((err) => res.json(query_error(err.message)));
});

module.exports = usersAPIRouter;
