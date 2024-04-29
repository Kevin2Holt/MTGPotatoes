module.exports.get_quizList = (req,res) => {
	res.render("quizList");
	try {
		let quizListJSON = JSON.parse(fs.readFileSync("public/database/quizList.json"));

		res.render("quizList", quizListData = quizListJSON);
	} catch(err) {
		res.render("404", err = {"code": "quizlistnotfound", "data": ""})
	}
}