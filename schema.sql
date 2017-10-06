DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_type VARCHAR(255),
    PRIMARY KEY (ID)
);
INSERT INTO burgers(burger_type)VALUES("spicy black bean");
SELECT * FROM burgers;