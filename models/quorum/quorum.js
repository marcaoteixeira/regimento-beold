const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class Quorum{
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_comissao");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(comissao){
        try{           
            var result  = await knex.where({id: comissao}).table("tab_comissao")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    
}

module.exports = new Quorum();