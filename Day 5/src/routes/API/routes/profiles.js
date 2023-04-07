const {express} = require("../../../../index");
const profilesAPIRouter = express.Router();
const { query_runner, query_error } = require("../../../helpers/mysql_helpers");

profilesAPIRouter.get("/", (req, res) => {
        query_runner("SELECT * FROM author_profile")
                .then(([rows]) => res.json(rows))
                .catch((err) => res.json(query_error(err.message)));
});

profilesAPIRouter.post("/", (req, res) => {
        const data = [
            req.body.author_id,
            req.body.website,
            req.body.facebook,
            req.body.twitter
        ];
        query_runner("INSERT INTO author_profile \
        (author_id, website, facebook, twitter) \
        VALUES (?, ?, ?, ?)", data)
                .then((rows) => res.status(200).json(rows))
                .catch((err) => res.json(query_error(err.message)));
});

profilesAPIRouter.delete("/:id", (req, res) => {
        query_runner("DELETE FROM author_profile WHERE id = ?", [req.params.id])
                .then(( [ { affectedRows } ] ) => {
                        return ((affectedRows > 0)
                        ? res.json({error: 0, status: 200, msg: "profile deleted successfully"})
                        : res.json({error: 0, status: 404, msg: "can't find profile with id: " + req.params.id}))
                })
                .catch((err) => res.json(query_error(err.message)));
});

module.exports = profilesAPIRouter;
