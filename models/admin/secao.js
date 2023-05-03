const express = require("express");
const router = express.Router();
const Titulo = require("../../models/admin/titulo");
var knex = require("../../database/conection");

class Secao{
    async findAll(id_capitulo){
        try{
            var result = await knex.where({id_capitulo: id_capitulo}).select("*").table("tab_secao");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async cfindAll(){
        try{
            var result = await knex.select("*").table("tab_capitulo");            
            return result;
        }catch(error){
            console.log(error);
            return[];
        }
    }
    async findById(secao){
        try{           
            var result  = await knex.where({id: secao}).table("tab_secao")
            return result;

        }catch(error){
            console.log(error);
            return[];

        }
    }
    async SecaoSave(id_titulo, id_capitulo, secao){
        try{                       
            await knex.insert({ id_titulo, id_capitulo, secao }).table("tab_secao");
            console.log("Cadastro com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    }  
    async SecaoUpdate(id, secao){
        try{                       
            await knex.where({id: id}).update({ secao }).table("tab_secao")
            console.log("Alterado com sucesso com sucesso!!!")

        }catch(error){
            console.log(error);
            

        }
    } 
    async SecaoDelete(id){
        try{                       
            await knex.where({id: id}).delete().table("tab_secao")
            console.log("Seção excluida com sucesso!!!")            

        }catch(error){
            console.log(error);            

        }
    } 

}

module.exports = new Secao();
