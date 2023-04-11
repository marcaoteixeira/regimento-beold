class HomeController{

    async index(req, res){
        res.render("../views/App.ejs");
    }

}

module.exports = new HomeController();