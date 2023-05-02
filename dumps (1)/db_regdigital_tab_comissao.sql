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
-- Table structure for table `tab_comissao`
--

DROP TABLE IF EXISTS `tab_comissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tab_comissao` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `comissao` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `sigla` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `membros` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela com quorum nas Comissoes Permanentes da Câmara dos Deputados.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tab_comissao`
--

LOCK TABLES `tab_comissao` WRITE;
/*!40000 ALTER TABLE `tab_comissao` DISABLE KEYS */;
INSERT INTO `tab_comissao` VALUES (1,'Comissão de Agricultura, Pecuária, Abastecimento e Desenvolvimento Rural ','CAPADR',52),(2,'Comissão de Tecnologia e Inovação','CCTI',42),(3,'Comissão de Constituição e Justiça e  de Cidadania ','CCJC',66),(4,'Comissão de Cultura','CCULT',20),(5,'Comissão de Defesa do Consumidor','CDC',24),(6,'Comissão de Defesa dos Direitos da Mulher','CMULHER',22),(7,'Comissão de Defesa dos Direitos da Pessoa Idosa','CIDOSO',22),(8,'Comissão de Defesa dos Direitos das Pessoas com Deficiência','CPD',20),(9,'Comissão de Desenvolvimento Econômico','CDE',18),(10,'Comissão de Desenvolvimento Urbano','CDU',18),(11,'Comissão de Direitos Humanos e Minorias  e Igualdade Racial','CDHMIR',18),(12,'Comissão de Educação','CE',42),(13,'Comissão do Esporte','CESPO',21),(14,'Comissão de Finanças e Tributação','CFT',48),(15,'Comissão de Fiscalização Financeira e Controle','CFFC',22),(16,'Comissão de Integração Nacional e Desenvolvimento Regional ','CINDRE',20),(17,'Comissão de Legislação Participativa','CLP',18),(18,'Comissão de Meio Ambiente e Desevolvimento Sustentável','CMADS',18),(19,'Comissão de Minas e Energia','CME',48),(20,'Comissão de Relações Exteriores e de Defesa Nacional','CREDN',38),(21,'Comissão de Segurança Pública e Combate ao Crime Organizado','CSPCCO',38),(22,'Comissão de Previdência, Assistência Social, Infância, Adolescência e Família','CPASF',18),(23,'Comissão de Trabalho','CTRAB',26),(24,'Comissão de Turismo','CTUR',20),(25,'Comissão de Viação e Transportes','CVT',30),(26,'Comissao de Comunicação','CCOM',38),(27,'Comissão de Administração e Serviço Público','CASP',22),(28,'Comissão da Amazônia e dos Povos Originários e Tradicionais','CPOVOS',18),(29,'Comissão de Indústria Comércio e Serviços','CICS',18),(30,'Comissão de Saúde','CSAUDE',52);
/*!40000 ALTER TABLE `tab_comissao` ENABLE KEYS */;
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
