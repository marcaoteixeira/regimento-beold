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
-- Table structure for table `tab_usopalavra`
--

DROP TABLE IF EXISTS `tab_usopalavra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tab_usopalavra` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `evento` varchar(100) NOT NULL DEFAULT '',
  `destinatario` varchar(100) NOT NULL DEFAULT '',
  `tempo` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `fundamento` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Facilidades uso da palavra';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tab_usopalavra`
--

LOCK TABLES `tab_usopalavra` WRITE;
/*!40000 ALTER TABLE `tab_usopalavra` DISABLE KEYS */;
INSERT INTO `tab_usopalavra` VALUES (1,'Audiência Pública ','Convidado','20 minutos prorrogáveis','art. 256, §2º'),(2,'Audiência Pública ','Deputados inscritos','3 minutos','art. 256, §5º'),(3,'Audiência Pública','Réplica e tréplica','3 minutos','art. 256, §5°'),(4,'Breve Comunicações','Deputados inscritos','5 minutos vedado apartes','art. 81'),(5,'Citação pessoal','Deputado citado','-','art. 74, VII'),(6,'Comissão Geral - debate de matéria relevante','Autor do requerimento','20 MINUTOS CADA UM','ART. 91, §1º'),(7,'Comissão Geral - debate de matéria relevante','Dois convidados indicados antecipadamente por Partido ou Bloco','5 minutos cada um','art. 91, §1º'),(8,'Comissão Geral - debate de matéria relevante','Líderes','5 minutos cada um','art. 91, §1º'),(9,'Comissão Geral - debate de matéria relevante','Deputados inscritos','3 minutos cada um','art. 91, §1º'),(10,'Comissão Geral  - PL iniciativa popular','Primeiro signatário ','20 minutos. art. 252, VII','art. 252, VII; '),(11,'Comissão Geral  - PL iniciativa popular','Deputado indicado pelo respectivo autor','30 minutos','art. 91 §2º'),(12,'Comissão Geral  - comparecimento espontâneo de Ministro','Ministro de Estado','40 minutos prorrogáveis por mais 20','Art. 222 §2º'),(13,'Comissão Geral  - comparecimento espontâneo de Ministro','Deputados - interpelações','3 minutos','art. 222 §2º'),(14,'Comissão Geral  - comparecimento espontâneo de Ministro','Réplica e Tréplica','3 minutos','art. 222, §3º'),(15,'Comissão Geral  - comparecimento de Ministro convocado','Autor do requerimento','10 minutos','art. 221, §2º'),(16,'Comissão Geral  - comparecimento de Ministro convocado','Deputados Inscritos - interpelações','5 minutos','Art. 221, §2º'),(17,'Comissão Geral  - comparecimento de Ministro convocado','Réplica e tréplica','3 minutos','art. 221, §4º'),(18,'Comissão Geral  - comparecimento de Ministro convocado','Líderes ao final','5 minutos','art. 221, §5º'),(21,'Comunicação de Liderança','Líder','3 a 10 minutos por sessão','art. 89,'),(22,'Comunicação de Liderança','Representante – Partido menos de 5 Deputados','5 minutos, 1 vez por semana','art. 9º, § 4º'),(23,'Comunicações  Parlamentares','Deputados indicados pelo Líder','Até 10 minutos','art. 90, § único'),(24,'Comunicação  urgentíssima','Qualquer Deputado, com permissão do orador','-','Art. 169'),(25,'Dar discurso como lido','Autor do discurso','1 minuto, na primeira meia hora da sessão;','Ato da Mesa nº 66/2005, art. 2º'),(26,'Discussão de proposições nas Comissões','Autor, Líder, membro','15 minutos','art. 57, VII'),(27,'Discussão de proposições nas Comissões','Não membro','10 minutos','art. 57, VII'),(28,'Discussão de proposições nas Comissões','Relator após encerrada a discussão (réplica) ','20 minutos','art. 57, IX'),(29,'Discussão de proposições nas Comissões','Matéria urgente: Autor, Líder e Membro','7,5 minutos','art. 157, § 3º, c/c art. 57, VII'),(30,'Discussão de proposições nas Comissões','Matéria urgente: não membro','5 minutos','art. 157, § 3º, c/c art. 57, VII'),(31,'Discussão de proposições no Plenário','Deputados inscritos','5 minutos','art. 174'),(32,'Discussão de proposições no Plenário','Matéria urgente: Autor, Relator e inscritos','2,5 minutos (em geral, arredonda-se para 3 minutos); ','art.157, § 3º, c/c art. 174'),(33,'Discussão de emenda à redação final','Autor, Relator e um Deputado contrário','5 minutos','art. 198, § 3º'),(34,'Encaminhamento de emenda destacada','Autor da emenda, Autor do destaque e Relator','-','Art. 192, § 7º'),(35,'Encaminhamento de requerimentos procedimentais','Signatário (ou um orador favorável) e um orador contrário','5 minutos','art. 192, § 8º'),(36,'Encaminhamento de requerimento de urgência','Autor e um Líder, Relator ou Deputado contrário','5 minutos (improrrogável)','art. 154, § 1º'),(37,'Encaminhamento de votação da matéria','2 Deputados a favor e 2 contra: preferencialmente Autor e Relator','5 minutos','art. 192, § 1º'),(38,'Grande Expediente','Deputados inscritos','25 minutos, incluindo apartes','art. 87, caput e § 1º'),(39,'Homenagens Plenário durante o Grande Expediente','Autor e um Deputado indicado por cada Líder de Partido ou bloco','5 minutos','art. 68, § 2º, II'),(40,'Orientação de bancada','Líder ou Deputado por ele indicado','1 minuto','art. 192, § 2º, art. 10, IV'),(41,'Projeto de código','Oradores inscritos','15 minutos','art. 207, § 1º'),(42,'Projeto de código','Relator-geral e parcial','30 minutos','art. 207, § 1º'),(43,'Projeto de código','Emenda destacada (Comissão Especial)','5 minutos','art. 206, III'),(44,'Questão de ordem','Qualquer Deputado no Plenário ou qualquer membro, na Comissão','3 minutos','art. 95, § 2º'),(45,'Questão de ordem','Para criticar a decisão (na sessão seguinte)','10 minutos','art. 95, § 7º'),(46,'Recurso contra indeferimento de inclusão de informações nos Anais da Câmara','Autor e Líderes','5 minutos','art. 115, § único'),(47,'Sessão secreta','Deputados inscritos','5 minutos','art. 93, § 1º');
/*!40000 ALTER TABLE `tab_usopalavra` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02  8:19:27
