class HomeController{

    async index(req, res){
        res.render("../views/index.ejs");
    }

}

module.exports = new HomeController();