const express = require("express");
const jf = require("jsonfile");

// Routers
const starterGuideRouter = 	require("./routers/starterGuideRouter");
const deckRouter =			require("./routers/deckRouter");
const quizRouter =			require("./routers/quizRouter");

// Setup
const app = express();

app.listen(3000);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


// Get Requests
app.get("/", (req,res) => {
	res.locals.title = "MTGP | Home";
	res.render("index");
});

app.use("/getting-started", starterGuideRouter);
app.use("/decks", deckRouter);
app.use("/quiz", quizRouter);

app.get("/dictionary", (req,res) => {
	res.locals.dict = jf.readFileSync("./public/database/dictionary.json");
	res.locals.title = "MTGP | Dictionary";
	res.render("dictionary");
});


// 404 Page
app.use((req,res) => {
	res.status(404).render("404", {
		title:"404"
	});
});