---------- CREATE ----------
USE Megahubdb
-- DROP TABLE dbo.UserFavorites
-- DROP TABLE dbo.Users
-- GO

-- CREATE [Users] table in schema [dbo]
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Users]', 'U') IS NOT NULL
DROP TABLE [dbo].[Users]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Users]
(
    [userId] INT NOT NULL IDENTITY(1,1), --identity (inicia en 1, y aumente de 1en1)
    [username] VARCHAR(50) NOT NULL UNIQUE,
    [email] VARCHAR(50) NOT NULL,
    [password] VARCHAR(255) NOT NULL,

    --Constraints
    CONSTRAINT PK_Users PRIMARY KEY 
    (
        userId ASC
    ),
);
GO


-- CREATE [UserFavorites] table in schema [dbo]
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[UserFavorites]', 'U') IS NOT NULL
DROP TABLE [dbo].[UserFavorites]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[UserFavorites]
(
    [userFavoriteId] INT NOT NULL PRIMARY KEY, -- Primary Key column
    [userId] INT NOT NULL,

    --Restriccion de FK
    CONSTRAINT FK_User_UserFavorites FOREIGN KEY (userId) 
        REFERENCES Users(userId)
);
GO


-- CREATE [Movies] table in schema [dbo]
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Movies]', 'U') IS NOT NULL
DROP TABLE [dbo].[Movies]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Movies]
(
    [movieId] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
    [title] NVARCHAR(80) NOT NULL,
    [description] TEXT NOT NULL,
    [poster] VARCHAR(255),
    [genre] VARCHAR(50),
    [year] SMALLDATETIME,
    [duration] SMALLINT,
);
GO


-- CREATE [Series] table in schema [dbo]
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Series]', 'U') IS NOT NULL
DROP TABLE [dbo].[Series]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Series]
(
    [serieId] INT NOT NULL PRIMARY KEY, -- Primary Key column
    [title] NVARCHAR(50) NOT NULL,
    [description] NVARCHAR(50) NOT NULL,
    [poster] VARCHAR(255),
    [genre] VARCHAR(50),
    [year] SMALLDATETIME,
);
GO


-- CREATE [Episodes] table in schema [dbo]
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Episodes]', 'U') IS NOT NULL
DROP TABLE [dbo].[Episodes]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Episodes]
(
    [episodeId] INT PRIMARY KEY IDENTITY(1,1), --identity (inicia en 1, y aumente de 1en1)
    [serieId] INTEGER,
    [title] NVARCHAR(80) NOT NULL,
    [description] TEXT NOT NULL,
    [poster] VARCHAR(255),
    [season] INT,
    [episodeNumber] INT,
    [duration] SMALLINT,
    [releaseDate] SMALLDATETIME
    
    --Restriccion de FK
    CONSTRAINT FK_Episode_Serie FOREIGN KEY (serieId) 
        REFERENCES Series(serieId)

);
GO
