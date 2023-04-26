const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class Artigo{
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_artigo");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(dispositivo){
        try{           
            var result  = await knex.where({id: artigo}).table("tab_artigo")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async ArtigoSave(id_capitulo, artigo){
        try{                       
            await knex.insert({id_capitulo, artigo}).table("tab_artigo");
            console.log("Cadastro com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async ArtigoUpdate(id, id_capitulo, artigo){
        try{                       
            await knex.where({id: id}).update({id_capitulo, artigo}).table("tab_artigo")
            console.log("Alterado com sucesso com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    } 
    async ArtigoDelete(id){
        try{                       
            await knex.where({id: id}).delete().table("tab_artigo")
            console.log("Artigo excluido com sucesso!!!")            

        }catch(error){
            console.log(error);            

        }
    } 

}

module.exports = new Artigo();
