const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class Requerimento{  
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_requerimento");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(id){
        try{           
            var result  = await knex.where({id: id}).table("tab_requerimento")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async RequerimentoSave(requerimento, fundamento, autor, obs){
        try{                       
            await knex.insert({requerimento, fundamento, autor, obs}).table("tab_requerimento");
            console.log("Requerimento Cadastrado com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async RequerimentoUpdate(id, requerimento, fundamento, autor, obs){
        try{ 
            
            await knex.where({id: id}).update({requerimento, fundamento, autor, obs}).table("tab_requerimento")
            console.log("Requerimento alterado com sucesso com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    } 
    async RequerimentoDelete(id){
        try{                       
            await knex.where({id: id}).delete().table("tab_requerimento")
            console.log("Requerimento excluido com sucesso!!!")            

        }catch(error){
            console.log(error);            

        }
    } 

}

module.exports = new Requerimento();