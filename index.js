
var database = require("./database/database");
var comissoes = [];


database.select("comissao").table("tab_quorum").then(data => {
    comissoes = data;
    console.log(comissoes);

}).catch(err => {
    console.log(err);
});

