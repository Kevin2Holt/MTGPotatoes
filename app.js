const express = require("express");
const fs = require("fs");

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
	res.render("index");
});

app.use("/getting-started", starterGuideRouter);
app.use("/decks", deckRouter);
app.use("/quizes", quizRouter);

app.get("/dictionary", (req,res) => {
	res.render("dictionary");
});


// 404 Page
app.use((req,res) => {
	res.status(404).render("404", {
		title:"404"
	});
});
// Decks
// Getting Started
// 		board zones
// 		card overview
// 		turn overview
// 		card types
// quizes
// dictionary