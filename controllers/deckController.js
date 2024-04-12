module.exports.get_deckList = (req,res) => {
	try {
		let deckListJSON = JSON.parse(fs.readFileSync("public/database/deckList.json"));

		res.render("deckList", deckListData = deckListJSON);
	} catch(err) {
		res.render("404", err = {"code": "decklistnotfound", "data": ""})
	}
}
module.exports.get_deck = (req,res) => {
	try {
		let deckListJSON = JSON.parse(fs.readFileSync("public/database/deckList.json"));

		res.render("deck", deckData = deckListJSON[parseInt(req.params.deckID)]);
	} catch(err) {
		res.render("404", err = {"code": "decknotfound", "data": req.params.deckID})
	}
}