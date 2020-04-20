# :jack_o_lantern: :eyeglasses: Identity Generator based on Harry Potter movies :movie_camera: :mortar_board:
Simple Node.js project build as exercise for Web Developer Bootcamp in Kodilla (Module 20.2).

## Features
Script generates array with 20 random identities. Each identity consists of:

* age (from 18 to 78)
* first name (both female and male, inspired by Harry Potter characters)
* last name (inspired by Harry Potter characters)
* gender (M/F)

Identities are generated into file `people.json`.

Example of identity: 
```
{ 
  "gender": "F",
  "firstName": "Ginny",
  "lastName": "Weasley",
  "age": 50
},
```

## Setup
Download project and run `node app.js` in your console.

## TODO's

- [ ] add generating random phone 
- [ ] add generating random email using pattern (e.g. ronald.potter@gmail.com for randomly generated Ronald Potter)
