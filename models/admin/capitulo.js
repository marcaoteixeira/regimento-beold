const express = require("express");
const router = express.Router();
const Titulo = require("../../models/admin/titulo");
var knex = require("../../database/conection");

class Capitulo{
    async findAll(id_titulo){
        try{
            var result = await knex.where({id_titulo: id_titulo}).select("*").table("tab_capitulo");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async tfindAll(){
        try{
            var result = await knex.select("*").table("tab_titulo");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(capitulo){
        try{           
            var result  = await knex.where({id: capitulo}).table("tab_capitulo")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async CapituloSave(id_titulo, capitulo){
        try{                       
            await knex.insert({ id_titulo, capitulo }).table("tab_capitulo");
            console.log("Cadastro com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async CapituloUpdate(id, capitulo){
        try{                       
            await knex.where({id: id}).update({ capitulo }).table("tab_capitulo")
            console.log("Alterado com sucesso com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    } 
    async CapituloDelete(id){
        try{                       
            await knex.where({id: id}).delete().table("tab_capitulo")
            console.log("capitulo excluido com sucesso!!!")            

        }catch(error){
            console.log(error);            

        }
    } 

}

module.exports = new Capitulo();
