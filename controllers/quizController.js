const jf = require("jsonfile");

module.exports.get_quizBasic = (req,res) => {
	res.locals.quizData = jf.readFileSync("./public/database/quizList.json")[0];
	console.log(res.locals.quizData);
	res.locals.title = res.locals.quizData.title;
	res.render("quiz");
}