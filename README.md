# Hangman (frontend)


----

**What is this?** 

This is my Hangman app. Request by Mavrck.<br>
-Thanks for the chance Brian.<br>

Check out the Back end code at https://github.com/willshepp28/hangman_backend

---

## Services

* [Heroku][]: Hosting


## Software

* [Node.js][]: server-side javascript
* [npm][]: Package management for Node.js packages
* [PostgreSQL][]: a object-relational database management system 
* [Express][]: web application framework
* [Knex][]: SQL query builder
* [Angular 6][]: client-side framework


## Node Packages (Frontend)

* [jquery][]: javascript library.
* [bootstrap][]:css framework
* [font-awesome][]: icon library
* [jwt-decode][]: helps decoding JWTs.
* [popper.js][]: used to position poppers in web applications.
* [rxjs][]: makes it easier to compose asynchronous or callback-based code.
* [typescript][]: provides optional static typing, classes and interfaces. 


[Heroku]: http://heroku.com/

[jquery]: https://jquery.com/
[bootstrap]: https://getbootstrap.com/
[font-awesome]: https://fontawesome.com/
[jwt-decode]: https://github.com/auth0/jwt-decode#readme
[popper.js]: https://popper.js.org/index.html
[rxjs]: https://rxjs-dev.firebaseapp.com/
[typescript]: https://www.typescriptlang.org/

[Node.js]: http://nodejs.org/
[npm]: https://npmjs.org/
[PostgreSQL]: http://www.postgresql.org/
[Express]: http://expressjs.com/
[Knex]: https://knexjs.org/
[Angular 6]: https://angular.io/






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