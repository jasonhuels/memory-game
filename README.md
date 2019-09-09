# _Tamagotchi_

#### _A tamagotchi application, 9-September-2019_

#### By _**Jason Huels & Devin Cooley**_

## Description

_A virtual pet application that requires food, rest and attention or it will DIE!_

## Specifications

| Behavior | Input | Output|
|---:---|---:---|---:---|
|User creates a virtual pet with an inputted name, pet has values for hunger, sleep, and playtime initialized|"Make pet 'Rover'"|"Rover is born"|
|Every {TIME INTERVAL} the pets values for hunger, sleep, and playtime are decremented by 1|N/A|Sleep--, Hunger--, Playtime--|
|User can feed, play with, or put their pet to bed to increase those values|Feed pet|Food++|
|User must not overfeed, rest or play with their pet or they will die|feed, feed, feed, feed|"You pet is sick stop feeding it."|
|If any of the pet's values drop to 0, the pet will warn the user |N/A|"Feed me, I'm dying!"|
|If any value stays at 0 for {TIME INTERVAL} the pet will die|N/A|"Pet 'Rover' Died R.I.P."|
|User can create a new pet and start again|"Make pet 'Fido'"| "Fido is born"|

## Setup/Installation Requirements_

* _Clone this repository_
* _Run "npm install" command to install necessary packages_
* _Run "npm run start" command to open application in browser_

## Known Bugs

_N/A_

## Support and contact details

_N/A_

## Technologies Used

_HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, npm, webpack, popper.js, eslint, babel, karma, jasmine_

### License

*open source*

Copyright (c) 2019 **_Jason Huels & Devin Cooley_**
