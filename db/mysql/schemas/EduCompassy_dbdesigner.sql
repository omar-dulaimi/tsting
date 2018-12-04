CREATE TABLE `teachers` (
	`id` int NOT NULL,
	`first_name` varchar(45),
	`middle_names` varchar(45),
	`last_name` varchar(45) NOT NULL,
	`data_of_birth` varchar(45) NOT NULL,
	`date_of_employment` DATE NOT NULL,
	`phone_number` int NOT NULL,
	`id_number` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `parents` (
	`id` int NOT NULL,
	`first_name` varchar(45),
	`middle_names` varchar(45),
	`last_name` varchar(45) NOT NULL,
	`data_of_birth` varchar(45),
	`phone_number` int NOT NULL,
	`id_number` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `students` (
	`id` int NOT NULL,
	`first_name` varchar(45),
	`middle_names` varchar(45),
	`last_name` varchar(45) NOT NULL,
	`data_of_birth` varchar(45),
	`phone_number` int,
	`id_number` int,
	PRIMARY KEY (`id`)
);

CREATE TABLE `admin` (
	`id` int NOT NULL,
	`first_name` varchar(45),
	`middle_names` varchar(45),
	`last_name` varchar(45) NOT NULL,
	`data_of_birth` varchar(45),
	`date_of_employment` DATE NOT NULL,
	`phone_number` int NOT NULL,
	`id_number` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `classes` (
	`id` int NOT NULL,
	`name` varchar(45),
	`data_of_start` varchar(45),
	`date_of_end` DATE NOT NULL,
	`date_of_OverDate` DATE NOT NULL,
	`teacher_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `subject` (
	`id` int NOT NULL,
	`name` varchar(45),
	`teacher_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `complian` (
	`id` int NOT NULL,
	`data_of_send` varchar(45),
	`data_of_process` varchar(45),
	`parents_id` int NOT NULL,
	`teacher_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `userid` (
	`id` int NOT NULL AUTO_INCREMENT,
	`userid` varchar(45) NOT NULL,
	`email` varchar(45) NOT NULL,
	`password` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

