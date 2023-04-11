const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class Recurso{  
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_recurso");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(id){
        try{           
            var result  = await knex.where({id: id}).table("tab_recurso")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async RecursoSave(recurso, fundamento, iniciativa, prazo, decisao ){
        try{                       
            await knex.insert({recurso, fundamento, iniciativa, prazo, decisao}).table("tab_recurso");
            console.log("Recurso Cadastrado com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async RecursoUpdate(id, recurso, fundamento, iniciativa, prazo, decisao ){
        try{ 
            
            await knex.where({id: id}).update({recurso, fundamento, iniciativa, prazo, decisao }).table("tab_recurso")
            console.log("Recurso alterado com sucesso com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    } 
    async RecursoDelete(id){
        try{                       
            await knex.where({id: id}).delete().table("tab_recurso")
            console.log("Recurso excluido com sucesso!!!")            

        }catch(error){
            console.log(error);            

        }
    } 

}

module.exports = new Recurso();