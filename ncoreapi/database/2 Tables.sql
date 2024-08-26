---------- CREATE ----------
USE Megahubdb
--GO

---------- USERS ----------
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


---------- GENRES ----------

-- Create a new table called '[Genres]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Genres]', 'U') IS NOT NULL
DROP TABLE [dbo].[Genres]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Genres]
(
    [genreId] INT NOT NULL IDENTITY(1,1), -- Primary Key column
    [genreName] NVARCHAR(50) NOT NULL UNIQUE,

    CONSTRAINT PK_Genre PRIMARY KEY 
    (
        genreId ASC
    ),
);
GO

---------- MOVIES ----------

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
    --[genre] VARCHAR(50),
    [year] SMALLDATETIME,
    [duration] SMALLINT,
    [genreId] INT,

    --Restriccion de FK 
    CONSTRAINT FK_Genres_Movies FOREIGN KEY (genreId)
        REFERENCES Genres(genreId),

);
GO


---------- SERIES ----------
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
    [genreId] INT,

    --Restriccion de FK
    CONSTRAINT FK_Genres_Series FOREIGN KEY (genreId)
        REFERENCES Genres(genreId),
    
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



---------- FAVORITES ----------

-- Movies Favorites

-- CREATE [UserFavoriteMovies] table in schema [dbo]
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[UserFavoriteMovies]', 'U') IS NOT NULL
DROP TABLE [dbo].[UserFavoriteMovies]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[UserFavoriteMovies]
(
    [userFavoriteMovieId] INT PRIMARY KEY IDENTITY(1,1), --identity (inicia en 1, y aumente de 1en1)
    [userId] INT NOT NULL,
    [movieId] INT NOT NULL,

    --Restriccion de FK
    CONSTRAINT FK_User_UserFavoriteMovies FOREIGN KEY (userId) 
        REFERENCES Users(userId),

    CONSTRAINT FK_Movie_UserFavoriteMovies FOREIGN KEY (movieId)
        REFERENCES Movies(movieId),

);
GO


-- Series Favorites

-- CREATE [UserFavoriteSeries] table in schema [dbo]
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[UserFavoriteSeries]', 'U') IS NOT NULL
DROP TABLE [dbo].[UserFavoriteSeries]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[UserFavoriteSeries]
(
    [userFavoriteSerieId] INT PRIMARY KEY IDENTITY(1,1), --identity (inicia en 1, y aumente de 1en1)
    [userId] INT NOT NULL,
    [serieId] INT NOT NULL,

    --Restriccion de FK
    CONSTRAINT FK_User_UserFavoriteSeries FOREIGN KEY (userId) 
        REFERENCES Users(userId),

    CONSTRAINT FK_Series_UserFavoriteSeries FOREIGN KEY (serieId)
        REFERENCES Series(serieId),

);
GO