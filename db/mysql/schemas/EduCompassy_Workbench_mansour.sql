

CREATE SCHEMA IF NOT EXISTS `EduCompassy` DEFAULT CHARACTER SET utf16 COLLATE utf16_bin;

USE EduCompassy;

CREATE TABLE IF NOT EXISTS `EduCompassy`. `timetable` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `room` varchar(10) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `date` DATE NOT NULL,
  `teacher_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `EduCompassy`.`events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `eventID` INT NOT NULL,
  `eventType` varchar(20) NOT NULL,
  `timeStamp` DATE NOT NULL,
  PRIMARY KEY (`id`)
);

    
CREATE TABLE IF NOT EXISTS `EduCompassy`. `reports` (
  `report_id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `report_name` VARCHAR(256) NOT NULL,
  `subject_name` VARCHAR(256) NOT NULL,
  `text_box` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`report_id`)
);

CREATE TABLE IF NOT EXISTS `EduCompassy`. `homework` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `teacher_id` INTEGER NOT NULL,
  `class_id` INTEGER NOT NULL ,
  `subject_name` VARCHAR(256) NOT NULL,
  `text_box` VARCHAR(256) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `EduCompassy`. `marks` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `teacher_id` INTEGER NOT NULL,
  `class_id` INTEGER NOT NULL ,
  `subject_name` VARCHAR(256) not NULL ,
  `marks_value`INTEGER NOT NULL,
  `text_box` VARCHAR(256) not NULL ,

  PRIMARY KEY (`id`)
);

