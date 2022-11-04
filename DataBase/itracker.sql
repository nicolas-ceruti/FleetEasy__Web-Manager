
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `itracker` DEFAULT CHARACTER SET utf8 ;
USE `itracker` ;


-- -----------------------------------------------------
-- Table `mydb`.`Motoristas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itracker`.`Motoristas` (
  `idMotorista` INT NOT NULL AUTO_INCREMENT,
  `nomeCompleto` VARCHAR(60) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `senha` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `email` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `cpf` VARCHAR(11) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `rg` VARCHAR(7) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `telefone` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `latitude` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `longitude` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `cnh` VARCHAR(11) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  PRIMARY KEY (`idMotorista`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Veiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itracker`.`Veiculo` (
  `idVeiculo` INT NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(7) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `cor` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `ano` VARCHAR(4) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `modelo` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `chassi` VARCHAR(17) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `capacidadePeso` VARCHAR(20) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  `capacidadeVolumetria` VARCHAR(20) CHARACTER SET 'utf8' COLLATE 'utf8_general_ci' NOT NULL,
  PRIMARY KEY (`idVeiculo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tipoOcorrencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itracker`.`tipoOcorrencia` (
  `idtipoOcorrencia` INT NOT NULL,
  `tipoOcorrencia` VARCHAR(45) NULL,
  PRIMARY KEY (`idtipoOcorrencia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ocorrencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itracker`.`Ocorrencia` (
  `id` INT NOT NULL,
  `hora` DATETIME NOT NULL,
  `tipoOcorrencia_idtipoOcorrencia` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Ocorrencia_tipoOcorrencia1_idx` (`tipoOcorrencia_idtipoOcorrencia` ASC),
  CONSTRAINT `fk_Ocorrencia_tipoOcorrencia1`
    FOREIGN KEY (`tipoOcorrencia_idtipoOcorrencia`)
    REFERENCES `itracker`.`tipoOcorrencia` (`idtipoOcorrencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`RegistroColeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itracker`.`RegistroColeta` (
  `idRegistroColeta` INT NOT NULL,
  `dataColeta` VARCHAR(45) NOT NULL,
  `horaColeta` VARCHAR(45) NOT NULL,
  `estadoColeta` VARCHAR(45) NOT NULL,
  `cidadeColeta` VARCHAR(45) NOT NULL,
  `bairroColeta` VARCHAR(45) NOT NULL,
  `ruaColeta` VARCHAR(45) NOT NULL,
  `numeroColeta` VARCHAR(45) NOT NULL,
  `dataEntrega` VARCHAR(45) NOT NULL,
  `horaEntrega` VARCHAR(45) NOT NULL,
  `estadoEntrega` VARCHAR(45) NOT NULL,
  `cidadeEntrega` VARCHAR(45) NOT NULL,
  `bairroEntrega` VARCHAR(45) NOT NULL,
  `ruaEntrega` VARCHAR(45) NOT NULL,
  `numeroEntrega` VARCHAR(45) NOT NULL,
  `nomeCliente` VARCHAR(45) NOT NULL,
  `cnpjCliente` VARCHAR(45) NOT NULL,
  `emailCliente` VARCHAR(45) NULL,
  `telefoneCliente` VARCHAR(45) NULL, 
  `pesoCarga` VARCHAR(45) NOT NULL,
  `volumeCarga` VARCHAR(45) NOT NULL,
   `valorCarga` VARCHAR(45) NOT NULL,
  `Ocorrencia_idOcorrencia` INT NOT NULL,
  `Motoristas_idMotorista` INT NOT NULL,
  PRIMARY KEY (`idRegistroColeta`),
  INDEX `fk_RegistroColeta_Ocorrencia1_idx` (`Ocorrencia_idOcorrencia` ASC) ,
  INDEX `fk_RegistroColeta_Motoristas1_idx` (`Motoristas_idMotorista` ASC) ,
  CONSTRAINT `fk_RegistroColeta_Ocorrencia1`
    FOREIGN KEY (`Ocorrencia_idOcorrencia`)
    REFERENCES `itracker`.`Ocorrencia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RegistroColeta_Motoristas1`
    FOREIGN KEY (`Motoristas_idMotorista`)
    REFERENCES `itracker`.`Motoristas` (`idMotorista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Motoristas_Veiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itracker`.`Motoristas_Veiculo` (
  `Motoristas_idMotorista` INT NOT NULL,
  `Veiculo_idveiculo` INT NOT NULL,
  PRIMARY KEY (`Motoristas_idMotorista`, `Veiculo_idveiculo`),
  INDEX `fk_Motoristas_has_Veiculo_Veiculo1_idx` (`Veiculo_idveiculo` ASC),
  INDEX `fk_Motoristas_has_Veiculo_Motoristas_idx` (`Motoristas_idMotorista` ASC),
  CONSTRAINT `fk_Motoristas_has_Veiculo_Motoristas`
    FOREIGN KEY (`Motoristas_idMotorista`)
    REFERENCES `itracker`.`Motoristas` (`idMotorista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Motoristas_has_Veiculo_Veiculo1`
    FOREIGN KEY (`Veiculo_idveiculo`)
    REFERENCES `itracker`.`Veiculo` (`idVeiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itracker`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO tipoocorrencia values (0, "Coleta Criada");
INSERT INTO tipoocorrencia values (1, "Coleta Iniciada");
INSERT INTO tipoocorrencia values (2, "Almoço");
INSERT INTO tipoocorrencia values (3, "Janta");
INSERT INTO tipoocorrencia values (4, "Pneu Furou");
INSERT INTO tipoocorrencia values (5, "Engarrafamento");
INSERT INTO tipoocorrencia values (100, "Coleta Finalizada");

INSERT INTO usuario (email, senha, nome) VALUES ("paulo@gmail.com", "12345", "paulo");
INSERT INTO usuario (email, senha, nome) VALUES ("pedro@gmail.com", "12345", "pedro");
INSERT INTO usuario (email, senha, nome) VALUES ("jose@gmail.com", "12345", "jose");
INSERT INTO usuario (email, senha, nome) VALUES ("nicolas@gmail.com", "12345", "nicolas");

SELECT * FROM user WHERE email="nicolas@gmail.com" AND senha="12345";

INSERT INTO motoristas (nomeCompleto, senha, email, cpf, rg, telefone, latitude, longitude, cnh)
	VALUES ("Nicolas Ceruti", "12345", "nicolas@gmail", "10610610656", "6506506", "47991915757", "", "", "12121213131");
INSERT INTO motoristas (nomeCompleto, senha, email, cpf, rg, telefone, latitude, longitude, cnh)
	VALUES ("Jose", "12345", "jose@gmail", "10650610656", "6606506", "47991925757", "", "", "12189213131");
INSERT INTO motoristas (nomeCompleto, senha, email, cpf, rg, telefone, latitude, longitude, cnh)
	VALUES ("Eric Hoepers", "12345", "eric@gmail", "10610610655", "6506206", "47991915707", "", "", "12451213131");
INSERT INTO motoristas (nomeCompleto, senha, email, cpf, rg, telefone, latitude, longitude, cnh)
	VALUES ("Picolé", "12345", "picole@gmail", "10690610656", "9506506", "47991015757", "", "", "02121213131");
INSERT INTO motoristas (nomeCompleto, senha, email, cpf, rg, telefone, latitude, longitude, cnh)
	VALUES ("Thiago", "1345", "thiago@gmail", "10610645656", "6506506", "47991965757", "", "", "12121213131");
    
INSERT INTO veiculo (placa, cor, ano, marca, tipo, modelo, chassi, capacidadePeso, capacidadeVolumetria)
	VALUES ("1234567", "vermelho", "2004", "SCANIA", "cavalo Trucado", "AES69", "12345678912345678", "106", "34"); 
INSERT INTO veiculo (placa, cor, ano, marca, tipo, modelo, chassi, capacidadePeso, capacidadeVolumetria)
	VALUES ("1634567", "preto", "2005", "SCANIA", "Trucado", "A9S69", "12345678952345678", "166", "39"); 
INSERT INTO veiculo (placa, cor, ano, marca, tipo, modelo, chassi, capacidadePeso, capacidadeVolumetria)
	VALUES ("1230567", "roxo", "2009", "VOLKSWAGEN", "Semi Trucado", "ERT45", "72345678912345678", "103", "37"); 
INSERT INTO veiculo (placa, cor, ano, marca, tipo, modelo, chassi, capacidadePeso, capacidadeVolumetria)
	VALUES ("1534567", "azul", "2045", "JJ", "Bi Trucado", "123", "02345678912345678", "202", "693"); 
INSERT INTO veiculo (placa, cor, ano, marca, tipo, modelo, chassi, capacidadePeso, capacidadeVolumetria)
	VALUES ("1034567", "amarelo", "2054", "PALIO", "cavalo", "FGH56", "12345670912345678", "303", "94"); 
    
INSERT INTO motoristas_veiculo VALUES (1, 5);
