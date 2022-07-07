# -- crear db
CREATE DATABASE dbcomputer;

-- usando db
use dbcomputer;

-- creand las tablas
-- UNSIGNED == no tener numero negativos

CREATE TABLE computers (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    image BLOB NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    price INT(6)
);

-- mostrar tablas
SHOW TABLES;

-- descripcion tabla

describe computers;
