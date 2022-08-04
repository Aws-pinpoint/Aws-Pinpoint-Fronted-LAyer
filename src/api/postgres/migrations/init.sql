-- Create our database
CREATE DATABASE automato;

-- Create tables
CREATE TABLE [IF NOT EXISTS] users (
    supertokensId VARCHAR
    aciveAcccount BOOLEAN
);

CREATE TABLE [IF NOT EXISTS] verification_codes (
    code   VARCHAR
    used   BOOLEAN
    userId VARCHAR
);
