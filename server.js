const ep = require("express");
const app = ep();
const port = process.env.port || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const routes = require("./routes/frontend-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
