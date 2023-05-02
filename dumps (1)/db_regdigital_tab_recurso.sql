-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: db_regdigital
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tab_recurso`
--

DROP TABLE IF EXISTS `tab_recurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tab_recurso` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `recurso` varchar(150) NOT NULL DEFAULT '',
  `fundamento` varchar(100) NOT NULL DEFAULT '',
  `iniciativa` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `prazo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `decisao` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela de Recursos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tab_recurso`
--

LOCK TABLES `tab_recurso` WRITE;
/*!40000 ALTER TABLE `tab_recurso` DISABLE KEYS */;
INSERT INTO `tab_recurso` VALUES (1,'Apensação/ desapensação de proposição ','Art. 142, I','Qualquer Deputado ou Comissão ','5 sessões da publicação do despacho','Plenário'),(2,'Apreciação conclusiva de Comissão','Art. 58, § 1º, c/c art. 132, § 2º','1/10 dos Deputados (52 Deputados)','5 sessões da publicação na Ordem Dia do Plenário','Plenário'),(3,'Decisão de presidente de Comissão em Reclamação','Art. 96, § 2º','Membro da Comissão','Sem prazo regimental','Presidente da Câmara ou Plenário, ouvida a Presidência da Comissão recorrida no prazo de 3 sessões'),(4,'Decisão do Presidente da CD em Questão de Ordem','Art. 95, § 8º','Qualquer Deputado','Sem prazo  regimental','Plenário, ouvida a CCJC no prazo de 3 sessões'),(5,'Decisão de Presidente de Comissão em Questão de Ordem','Art. 57, XXI, c/c art. 17, III, f','Membro da Comissão','Sem prazo  regimental','Presidente da Câmara, ouvida a Presidência da Comissão recorrida no prazo de 3 sessões'),(6,'Deferimento/ indeferimento retirada de proposição','Art. 104','Autor da proposição','Sem prazo regimental','Plenário'),(7,'Devolução de proposição','Art. 137,  § 2º','Autor da proposição','5 sessões da publicação do despacho','Plenário, ouvida a CCJC no prazo de 5 sessões'),(8,'Devolução de requerimento de CPI','Art. 35, § 2º','Autor do requerimento','5 sessões da publicação na Ordem Dia do Plenário','Plenário, ouvida a CCJC no prazo de 5 sessões'),(9,'Emenda devolvida pelo Presidente da Comissão Mista em MP','Res. 1/2002 – CN art. 4º, § 5º','Autor da emenda com apoiamento de 3 membros da Comissão','24h a contar do despacho do Presidente da Comissão Mista','Colegiado da Comissão'),(10,'Inadmissibilidade de PEC','Art. 202,  § 1º','Autor da PEC com apoiamento de Líderes que representem no mínimo 1/3 dos Deputados (171 Deputados','5 sessões da publicação na Ordem Dia do Plenário','Plenário'),(11,'Indeferimento de denúncia de crime de responsabilidade','Art. 218,  § 3º','Qualquer Deputado','Sem prazo regimental','Plenário'),(12,'Indeferimento de Requerimento de Informação','Art. 115, § único','Autor do requerimento','5 sessões da publicação na Ordem Dia do Plenário','Plenário'),(13,'Redistribuição de proposição','Art. 141','Qualquer Deputado ou Comissão','2 sessões da publicação do despacho','Plenário'),(14,'Declaração de prejudicialidade','Art. 164,  § 2º','Autor da proposição','5 sessões da publicação do despacho ou, imediatamente, se a prejudicialidade, declarada no curso da votação, disser respeito à emenda ou ao dispositivo de matéria em apreciação','Plenário, ouvida a CCJC (sem prazo regimental)'),(15,'Parecer terminativo de Comissão','Art. 132, § 2º, c/c art. 144','1/10 dos Deputados (52 Deputados)','5 sessões da publicação na Ordem Dia ou, imediatamente, após a leitura do parecer, se a matéria for urgente','Plenário. QO 475/2009 – Não é possível recurso para apreciação preliminar contra parecer pela admissibilidade ou adequação financeira.');
/*!40000 ALTER TABLE `tab_recurso` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02  8:19:29
