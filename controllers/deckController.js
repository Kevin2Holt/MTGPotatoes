const jf = require("jsonfile");
module.exports.get_deckList = (req,res) => {
	var deckListJSON = jf.readFileSync("./public/database/deckList.json");
	res.render("deckList", deckList = deckListJSON);
}
module.exports.get_deck = (req,res) => {
	// console.log("/decks/ get_deck()");
	// console.dir(jf.readFileSync("./public/database/deckList.json"));
	var deckListJSON = jf.readFileSync("./public/database/deckList.json");
	// console.log(deckListJSON);

	res.render("deck", deckData = deckListJSON[parseInt(req.params.deckID)]);
	// res.render("404", err = {"code": "decknotfound", "data": req.params.deckID})
}