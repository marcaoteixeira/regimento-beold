const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class UsoPalavra{  
    async findAll(){
        try{
            var result = await knex.select("*").table("tab_usopalavra");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(id){
        try{           
            var result  = await knex.where({id: id}).table("tab_usopalavra")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async PalavraSave(evento, destinatario, tempo, fundamento){
        try{                       
            await knex.insert({evento, destinatario, tempo, fundamento}).table("tab_usopalavra");
            console.log("Evento Cadastrado com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async PalavraUpdate(id, evento, destinatario, tempo, fundamento){
        try{ 
            
            await knex.where({id: id}).update({evento, destinatario, tempo, fundamento}).table("tab_usopalavra")
            console.log("Evento alterado com sucesso com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    } 
    async PalavraDelete(id){
        try{                       
            await knex.where({id: id}).delete().table("tab_usopalavra")
            console.log("Evento excluido com sucesso!!!")            

        }catch(error){
            console.log(error);            

        }
    } 

}

module.exports = new UsoPalavra();