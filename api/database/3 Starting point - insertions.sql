-- Basic insertions to DB
USE Megahubdb

--------- User INSERT -----------
INSERT INTO Users
VALUES ('sudoku2', 'sudoki@otromail.com', 'PasswordPlaceholder')

SELECT * FROM Users


--------- Movies INSERT -----------

INSERT INTO Movies
    (title, [description], poster, genre, [year], duration)
VALUES ('Matrix 2', 'Hitman Steven Matrix is shot, experiences afterlife, gets second chance by helping others. Wakes up, meets guides assigning cases where he aids people using unorthodox methods from past profession.', 'https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg', 'Action, Drama, Fantasy', CURRENT_TIMESTAMP, 90)

INSERT INTO Movies
    (title, [description], poster, genre, [year], duration)
VALUES ('Up', '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.', 'https://m.media-amazon.com/images/M/MV5BYjBkM2RjMzItM2M3Ni00N2NjLWE3NzMtMGY4MzE4MDAzMTRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg', 'Animation, Adventure, Comedy', CURRENT_TIMESTAMP, 96)




SELECT * FROM Movies