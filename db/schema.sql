-- burgers_db
CREATE DATABASE burgers_db;

DROP DATABASE IF EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);