const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class Comissao{

    async ComissSave(comissao,sigla,membros){
        try{                       
            await knex.insert({comissao, sigla, membros}).table("tab_comissao");
            console.log("Cadastro com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_comissao");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }

}

module.exports = new Comissao();