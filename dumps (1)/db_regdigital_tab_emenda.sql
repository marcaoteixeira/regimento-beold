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
-- Table structure for table `tab_emenda`
--

DROP TABLE IF EXISTS `tab_emenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tab_emenda` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_tipo` int unsigned DEFAULT '0',
  `emenda` varchar(200) DEFAULT '',
  `descricao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`),
  KEY `FK_tab_emendas_tab_tipoemendas` (`id_tipo`),
  CONSTRAINT `FK_tab_emendas_tab_tipoemendas` FOREIGN KEY (`id_tipo`) REFERENCES `tab_tipoemenda` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela de apresentação de emendas';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tab_emenda`
--

LOCK TABLES `tab_emenda` WRITE;
/*!40000 ALTER TABLE `tab_emenda` DISABLE KEYS */;
INSERT INTO `tab_emenda` VALUES (1,1,'Emendas ao Projeto','Apresentadas em cada Comissão, por qualquer Deputado, no prazo de 5 sessões a contar da publicação na Ordem do Dia das comissões (art. 119, I, e § 1°)'),(2,1,'Emendas ao Substitutivo','Apresentada somente por membro em cada Comissão, no prazo de 5 sessões a contar da publicação na Ordem do Dia das Comissões (art. 199, II, e § 1º)'),(3,2,'Emendas a proposições ordinárias','Em 1º turno ou turno único: apresentadas em Plenário, por qulquer Deputado ou Comissão, durante a discussão (art. 120, I e II), em 2º turno: somente por Comissão, se aprovada pela maioria absoluta de seus membros, ou por 1/10 dos membros da Casa ou por Líder com igual representatividade, durante a discussão (art. 120, I e II)'),(5,2,'Emendas a projetos do Executivo com urgência constitucional','Apresentadas em Plenário, somente por Comissão ou por 1/5 dos membros da Casa ou Líder com igual representatividade, no prazo de 5 sessões a contar da publicação na Ordem do Dia do Plenário (Ato da Mesa nº 177 de 1989). Durante a discussão até o início da votação (art. 120, § 4º)'),(6,2,'Emendas a proposições urgentes','Apresentadas em Plenário, somente por Comissão ou 1/5 dos membros da Casa ou Líder com igual representatividade, até o início da votação (art. 120, § 4º)'),(7,3,'Proposta de emenda à constituição','Apresentadas somente na Comissão Especial, por 1/3 da Casa (171 Deputados), nas 10 primeiras sessões a contar da instalação da Comissão - QO 5.518/1995 (art. 202, § 3º). O prazo pode ser acompanhado na página da proposição e na ordem do dia. '),(8,3,'Projeto de código','Somente na Comissão Especial, por qualquer Deputado, no prazo de 20 sessões a contar da instalação da Comissão (art. 205, § 4º).'),(9,3,'Projetos de fixação da remuneração (membros do Congresso, Presidente e Vice-Presidente da República e Ministros de Estado)','Na Comissão de Finanças e Tributação, por qualquer Deputado, no prazo de 5 sessões a contar da publicação na Ordem do Dia da Comissão (art. 214, § 2º). O prazo pode ser acompanhado na página da proposição e na Ordem do Dia.'),(10,3,'Projeto de resolução para alteração do Regimento Interno','No Plenário, por qualquer Deputado, no prazo de 5 sessões a contar da publicação na Ordem do Dia do Plenário (art. 216, § 1º). O prazo pode ser acompanhado na página da proposição e na Ordem do Dia.'),(11,3,'Medida provisória','Somente na Comissão Mista, por qualquer Deputado, nos 6 dias corridos a contar da publicação da MPV no Diário Oficial da União (art. 4º da Resolução do Congresso Nacional nº 1/2002). ');
/*!40000 ALTER TABLE `tab_emenda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02  8:19:28
