DROP DATABASE IF EXISTS dnd_characters_db;
CREATE DATABASE dnd_characters_db;
USE dnd_characters_db;

DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS stats;

CREATE TABLE classes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(30) NOT NULL,
    class_description VARCHAR(1500) NOT NULL
);

CREATE TABLE characters (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    character_name VARCHAR(30) NOT NULL,
    class_id INTEGER,
    CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE SET NULL
);

CREATE TABLE stats (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    stat_name VARCHAR(30) NOT NULL,
    stat_value INTEGER(20) NOT NULL,
    character_id INTEGER,
    CONSTRAINT fk_characters FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE SET NULL
);