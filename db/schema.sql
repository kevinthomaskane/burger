CREATE DATABASE burgersDB;
USE burgersDB;

DROP TABLE burgers;
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BIT,
PRIMARY KEY (id)
);



SELECT * FROM burgers