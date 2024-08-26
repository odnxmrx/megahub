---------- CREATE ----------

-- Create database called 'Megahubdb'
-- Connected to 'master' db
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = N'Megahubdb'
)
CREATE DATABASE Megahubdb
GO