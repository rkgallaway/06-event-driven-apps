![CF](http://i.imgur.com/7v5ASc8.png) LAB-06
=================================================

## Lab-06 Event Driven Apps

### Author: Ryan Gallaway

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/06-event-driven-apps.svg?branch=master)](https://www.travis-ci.com/rkgallaway/06-event-driven-apps)

* [repo](https://github.com/rkgallaway/06-event-driven-apps)
* [travis](https://www.travis-ci.com/rkgallaway/06-event-driven-apps)
* [server](https://lab-06-event-driven-apps.herokuapp.com/)

### Modules
#### `app.js`
##### Exported Values and Methods
### Collaborated with:
* Heather Cherewaty

### Assignment
Refactor the provided application using best practices for modularization, asynchronous file access, and test-ability.


### Requirements 
* The application must accept a filename as a command line parameter
  * Read the file from the file system
  * Convert it's contents to upper case
  * Write it back to the file system
* Following the write operation, report back to the user (console.log) the status
* Any and all errors must be handled properly

### Implementation Details
* Refactor the use of callbacks for fs operations into promises
* Rather than throwing errors and console.log() inline, fire events 
* Implement a separate event listener to "hear" and "deal" with those events
* Modularize the system
  * Create an event queue module
  * File Reading/Writing should happen in one module
  * Subscribers to file status events should be in a separate module

### Setup
#### `.env` requirements
* `PORT` - port defined in ENV

#### Running the app
* `npm i` to install dependencies
* `npm start`
* `run lint test`

#### Tests
* npm start
* node test
#### Assertions were made:
* can upper case a buffer
* raises an error if a file is invalid
* can save a file
* files module

