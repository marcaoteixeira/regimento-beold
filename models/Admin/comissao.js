const express = require("express");
const router = express.Router();
const knex = require("../../database/conection");

class Comissao{
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_quorum");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(comissao){
        try{           
            var result  = await knex.where({id: comissao}).table("tab_quorum")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async ComissNew(comissao,sigla,membros){
        
        try{           
            var result  = await knex.insert({comissao, sigla, membros }).table("tab_quorum")
            return result;
        }catch(error){
            console.log(error);
            return[];

        }
    }     
}

module.exports = new Comissao();