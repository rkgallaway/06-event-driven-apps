# Lab - Event Driven Applications

Create an event driven "smart app"

### Before you begin
* You'll need to perform an `npm install` in this folder to have jest installed as a dependency.

## Assignment
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

### Testing
* Write tests around all of your units
* Test event handlers (not events themselves)
* Use spies to assert that you're calling event handlers 

###  Documentation
Complete the README.md file included in the lab folder
