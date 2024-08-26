-- Basic insertions to DB
USE Megahubdb

--------- User INSERT -----------
INSERT INTO Users
VALUES ('user1', 'user1@email.com', 'Password1')

INSERT INTO Users
VALUES ('sudoku2', 'sudoki@otromail.com', 'PasswordPlaceholder')

INSERT INTO Users
VALUES ('armandogama', 'armandogama@gmail.com', 'Password1')

SELECT * FROM Users


--------- Genres INSERT -----------

INSERT INTO Genres
VALUES ('Action')

INSERT INTO Genres
VALUES ('Drama')

INSERT INTO Genres
VALUES ('Fantasy')

INSERT INTO Genres
VALUES ('Comedy')

INSERT INTO Genres
VALUES ('Adventure')

INSERT INTO Genres
VALUES ('Other')


SELECT * FROM Genres

--------- Movies INSERT -----------

INSERT INTO Movies
    (title, [description], poster, [year], duration, [genreId])
VALUES ('Matrix 2', 'Hitman Steven Matrix is shot, experiences afterlife, gets second chance by helping others. Wakes up, meets guides assigning cases where he aids people using unorthodox methods from past profession.', 'https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg', CURRENT_TIMESTAMP, 120, 2)

INSERT INTO Movies
    (title, [description], poster, [year], duration, [genreId])
VALUES ('Up', '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.', 'https://m.media-amazon.com/images/M/MV5BYjBkM2RjMzItM2M3Ni00N2NjLWE3NzMtMGY4MzE4MDAzMTRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg', CURRENT_TIMESTAMP, 96, 2)



SELECT * FROM Movies