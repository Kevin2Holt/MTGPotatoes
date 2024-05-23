/* * * * * * * * * * * * * * * * * * * * * * * *
	PLEASE REFERENCE THE "INFO.txt" FILE
	FOR INFORMATION ABOUT THE GENERAL PURPOSE
	OF EACH FILE. THANKS!
* * * * * * * * * * * * * * * * * * * * * * * */

// Import Packages
const express = require("express");
const jf = require("jsonfile");

// Create Router References
const starterGuideRouter = 	require("./routers/starterGuideRouter");
const deckRouter =			require("./routers/deckRouter");
const quizRouter =			require("./routers/quizRouter");

// Setup
const app = express();

app.listen(3000);// Listens on port "3000"

// Sets basic information on how the server should retrieve and process data
app.set("view engine", "ejs");// EJS allows advanced manipulation of HTML making responsive & variable pages possible
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


// Get Requests
app.get("/", (req,res) => {// If there's nothing after the first '.com', then the home page is rendered
	res.locals.title = "MTGP | Home";// 'title' variable used in '/partials/head.ejs' to change the tab name
	res.render("index");
});

// Sends traffic over to the corresponding router depending on the url (".com/<THIS PART>")
app.use("/starter-guide", starterGuideRouter);
app.use("/decks", deckRouter);
app.use("/quiz", quizRouter);

app.get("/dictionary", (req,res) => {
	res.locals.dict = jf.readFileSync("./public/database/dictionary.json");// Reads the database info and sends it to the rendering engine (ejs)
	res.locals.title = "MTGP | Dictionary";
	res.render("dictionary");
});


// 404 Page - If nothing else catches the url and renders a page, then the 404 page is used
app.use((req,res) => {
	res.status(404).render("404", {
		title:"404"
	});
});