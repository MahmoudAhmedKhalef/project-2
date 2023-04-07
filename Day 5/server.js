const { app } = require("./index");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const UsersRoute = require("./src/routes/users");
const PostsRoute = require("./src/routes/posts");
const ProfilesRoute = require("./src/routes/profiles");
const APIRouter = require("./src/routes/API/main");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array());
app.use("/users", UsersRoute);
app.use("/posts", PostsRoute);
app.use("/profiles", ProfilesRoute);
app.use("/api", APIRouter);

app.get("/", (req, res) => {
        console.log("ay haga")
        res.render("home");
})

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'));
