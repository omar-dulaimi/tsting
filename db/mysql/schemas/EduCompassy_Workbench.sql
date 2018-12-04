

CREATE SCHEMA IF NOT EXISTS `EduCompassy` DEFAULT CHARACTER SET utf16 COLLATE utf16_bin;

USE EduCompassy;

CREATE TABLE IF NOT EXISTS `EduCompassy`.`teachers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `data_of_birth` VARCHAR(45) NOT NULL,
  `date_of_employment` DATE NOT NULL,
  `phone_number` INT NOT NULL,
  `id_number` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `EduCompassy`.`parents` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `data_of_birth` VARCHAR(45) NULL,
  `phone_number` INT NOT NULL,
  `id_number` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `EduCompassy`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `data_of_birth` VARCHAR(45) NULL,
  `phone_number` INT NULL,
  `id_number` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `EduCompassy`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `data_of_birth` VARCHAR(45) NULL,
  `date_of_employment` DATE NOT NULL,
  `phone_number` INT NOT NULL,
  `id_number` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `EduCompassy`.`classes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `data_of_start` VARCHAR(45) NULL,
  `date_of_end` DATE NOT NULL,
  `date_of_OverDate` DATE NOT NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `EduCompassy`.`subject` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `EduCompassy`.`complian` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_of_send` VARCHAR(45) NULL,
  `data_of_process` VARCHAR(45) NULL,
  `parents_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `EduCompassy`.`userid` (
	`id` int NOT NULL AUTO_INCREMENT,
	`userid` varchar(45) NOT NULL,
	`email` varchar(45) NOT NULL,
	`password` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);





