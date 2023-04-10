const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class Emenda{  
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_emenda");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async tEmendafindAll(){
        try{
            var result = await knex.select("*").table("tab_tipoemenda");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(id){
        try{           
            var result  = await knex.where({id: id}).table("tab_emenda")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async EmendaSave(id_tipo, emenda, descricao){
        try{                       
            await knex.insert({id_tipo, emenda, descricao}).table("tab_emenda");
            console.log("Emenda Cadastrada com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async EmendaUpdate(id, id_tipo, emenda, descricao){
        try{ 
            
            await knex.where({id: id}).update({id_tipo, emenda, descricao}).table("tab_emenda")
            console.log("Emenda alterada com sucesso com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    } 
    async EmendaDelete(id){
        try{                       
            await knex.where({id: id}).delete().table("tab_emenda")
            console.log("Emenda excluida com sucesso!!!")            

        }catch(error){
            console.log(error);            

        }
    } 

}

module.exports = new Emenda();