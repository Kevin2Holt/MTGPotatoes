module.exports.get_gettingStarted = (req,res) => {
	res.locals.title = "MTGP | Getting Started";
	res.render("gettingStarted");
}
module.exports.get_cardOverview = (req,res) => {
	res.locals.title = "MTGP | Card Overview";
	res.render("cardOverview");
}
module.exports.get_cardTypes = (req,res) => {
	res.locals.title = "MTGP | Card Types";
	res.render("cardTypes");
}
module.exports.get_boardZones = (req,res) => {
	res.locals.title = "MTGP | Board Zones"
	res.render("boardZones");
}
module.exports.get_turnOverview = (req,res) => {
	res.locals.title = "MTGP | Turn Overview";
	res.render("turnOverview");
}