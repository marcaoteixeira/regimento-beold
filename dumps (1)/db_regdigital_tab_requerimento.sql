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
-- Table structure for table `tab_requerimento`
--

DROP TABLE IF EXISTS `tab_requerimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tab_requerimento` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `requerimento` varchar(100) NOT NULL DEFAULT ' ',
  `fundamento` varchar(100) NOT NULL DEFAULT ' ',
  `autor` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT ' ',
  `obs` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT ' ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela de requerimentos procedimentais.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tab_requerimento`
--

LOCK TABLES `tab_requerimento` WRITE;
/*!40000 ALTER TABLE `tab_requerimento` DISABLE KEYS */;
INSERT INTO `tab_requerimento` VALUES (1,'Adiamento da discussão','Art. 117, X; Art. 177','Líder/Autor/Relator','Nas proposições de tramitação com prioridade, 3 sessões; nas proposições de tramitação ordinária e nas proposições de emenda à Constituição, 5 sessões.'),(2,'Adiamento da discussão em matéria urgente','Art. 177, X; Art. 177, §1º','1/10 Deputados/Líderes','1/10 dos Deputados ou Líderes que representarem esse número, por 1 sessão.'),(4,'Adiamento da votação','Art. 117, X; Art. 193','Líder/Autor/Relator','Nas proposições e tramitação com prioridade,3 sessões; nas proposições de tramitação ordinária e nas propostas de emenda à Constituição, 5 sessões.'),(5,'Adiamento da Votaçao em matéria urgente','Art. 117, X; Art 193, §3º','1/10 Deputados/Líderes','1/10 dos Deputados ou Líderes que represemtem esse número, por 1 sessão'),(6,'Apensação/Desapensação','Art. 142','Deputado ou Comissão','Qualquer Deputado ou Comissão.'),(7,'Apreciação preliminar em Plenário relativa à PEC','Art. 202, §1º','Autor','Com apoio de Líderes que representem, mínimo, 1/3 dos Deputados.');
/*!40000 ALTER TABLE `tab_requerimento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02  8:19:30
