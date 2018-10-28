# Hangman (frontend)


----

**What is this?** 

This is my Hangman app. Request by Mavrck.<br>
-Thanks for the chance Brian.<br>

Check out the Back end code at https://github.com/willshepp28/hangman_backend

---


## Technologies Used

```js
 Express
 Angular 6
 Knex/ PostgreSQL
 AWS - for deployment

 
```


## Api Used

```
    random-words - to generate random words

```


## Color Scheme

![Color Scheme](https://s3.amazonaws.com/hangman-app/color+scheme/colorpalette.png)


## WireFrame


#### Signup
![Signup](https://s3.amazonaws.com/hangman-app/wireframe/Signup.png)

#### Login
![Login](https://s3.amazonaws.com/hangman-app/wireframe/Login.png)

#### Home
![Home](https://s3.amazonaws.com/hangman-app/wireframe/Home.png)

#### Game/:id (Beginning of Game)
![Game/:id](https://s3.amazonaws.com/hangman-app/wireframe/Game__id.png)

#### Game/:id (Mid Game)
![Game/:id](https://s3.amazonaws.com/hangman-app/wireframe/Game__id+(+Mid+Game).png)

#### Game/:id (When player wins)
![Game/:id](https://s3.amazonaws.com/hangman-app/wireframe/Game__id+(+Won+).png)

#### Game/:id (When player lost)
![Game/:id](https://s3.amazonaws.com/hangman-app/wireframe/Game__id+(+Lost+)+.png)

#### Account (players account)
![Account](https://s3.amazonaws.com/hangman-app/wireframe/Account__id.png)



  ## Requirements

  - [X] When the game is started, the player is represented with an empty field for each letter in the word.
  - [X] When the player guesses a letter correctly, each field that represents that letter is filled with the letter
  - [] When the player guesses a letter incorrectly, a piece of a gallows with a hanging man is drawn
  - [X] After 10 incorrect guesses, the game is over and the player lost.
  - [] Thus, there should be 10 different states of the gallows to be drawn.
  - [X] If all fields are filled with their letter before 10 incorrect guesses, the player has won the game.


## Lesson Learned

- DEPLOY FROM THE START
- Test every freaking maor feature , route, function, and api call. So much time wasted. TDD is a major key alert.
- Functionality first, design last....
- make sure your exporting you modules with the right spelling " module.exports not module.export"
- clean up your routes by putting queries in a query folder.




## Helpful Resources

- https://www.youtube.com/watch?v=FOdetrZCsmU