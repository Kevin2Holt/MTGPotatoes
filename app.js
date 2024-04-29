const express = require("express");
const jf = require("jsonfile");

// Routers
const starterGuideRouter = 	require("./routers/starterGuideRouter");
const deckRouter =			require("./routers/deckRouter");
// const quizRouter =			require("./routers/quizRouter");

// Setup
const app = express();

app.listen(3000);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


// Get Requests
app.get("/", (req,res) => {
	res.render("index");
});

app.use("/getting-started", starterGuideRouter);
app.use("/decks", deckRouter);
// app.use("/quizes", quizRouter);

app.get("/dictionary", (req,res) => {
	var dictJSON = jf.readFileSync("./public/database/dictionary.json");
	res.render("dictionary", dict = dictJSON);
});


// 404 Page
app.use((req,res) => {
	res.status(404).render("404", {
		title:"404"
	});
});