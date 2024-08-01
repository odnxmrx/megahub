# Back End - API Service

Welcome to the Back End project for the "MegaHub" project.

The goal for this service is to directly consume the Database.

Implementation:
- Node Js
- Express Js
- Microsoft SQL Server 2022

### Project start:

Install dependencies, on the Terminal:
```
  npm install
```

Server PORT = `3001`

---

## APIs

Using `GET` Method:


```
//GET Users
All Users -> http://localhost:3001/users
Single User by id -> http://localhost:3001/users/id

//GET Movies
All Movies -> http://localhost:3001/movies
Single Movie by id -> http://localhost:3001/movies/id

```

### POST Method

POST - Create new User and/or Movie:
Using `POST` Method
```
//User
Create User -> http://localhost:3001/users

//Movie
Create Movie -> http://localhost:3001/movies

```

`JSON` struture to be sent (by body):

  - For New User

```
{
    "username": "yourusername",
    "email": "youremail@email.com",
    "password": "YourStrongPassword"
}
```

  - For New Movie

```
{
    "title": "Your Movie Title",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis in mi id pellentesque. Nulla facilisis molestie tellus vitae sodales. Maecenas lorem augue, tincidunt sit amet lacinia non, lacinia vel massa.",
    "poster": "https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg",
    "genre":"Drama, Fantasy",
    "year": "2022-02-01",
    "duration": 120
}
```


---


## Database

Implementing `Microsoft SQL Server 2022`.

### E-R Diagram

![alt text](public/image.png)



### Feedback

| ¿Qué salió bien? | ¿Qué puedo hacer diferente? | ¿Qué no salió bien?
| ------ | ----------- | ----------- |
| - Module creation | - API responses | - Deliver on time
| - MS SQL Database Implementation  | - Time management | - Time management
| - Backend connection with DB | - Tables normalization | - Connection with frontend