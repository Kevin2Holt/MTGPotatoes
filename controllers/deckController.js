const jf = require("jsonfile");
module.exports.get_deckList = (req,res) => {
	res.locals.deckList = jf.readFileSync("./public/database/deckList.json");
	res.locals.title = "MTGP | Starter Decks";
	res.render("deckList");
}
module.exports.get_deck = (req,res) => {
	// console.log("/decks/ get_deck()");
	// console.dir(jf.readFileSync("./public/database/deckList.json"));
	res.locals.deckData = jf.readFileSync("./public/database/deckList.json")[parseInt(req.params.deckID)];
	res.locals.title = "MTGP | " + res.locals.deckData.title;

	res.render("deck");
	// res.render("404", err = {"code": "decknotfound", "data": req.params.deckID})
}