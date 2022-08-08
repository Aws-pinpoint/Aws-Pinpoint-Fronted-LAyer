-- Create our database
CREATE DATABASE automato;

-- Create tables
CREATE TABLE IF NOT EXISTS users (
    id INT,
    "supertokensId" VARCHAR,
    "activeAccount" BOOLEAN,
    "createdAt" TIMESTAMP WITH TIME ZONE,
    "updatedAt" TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS verification_codes (
    id INT,
    code   VARCHAR,
    used   BOOLEAN,
    "userId" VARCHAR,
    "createdAt" TIMESTAMP WITH TIME ZONE,
    "updatedAt" TIMESTAMP WITH TIME ZONE
);
