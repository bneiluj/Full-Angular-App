# Simple Login Form App
  - Entire architecture for a login app based on angularJS.
  - Nice folders tree
  - Full E2E + Unit tests

## Installation

Install dependencies

	$ npm install

	$ bower install

##Grunt tasks

Run server and init livereload

  $ grunt server

Run full test suite

  $ grunt test

Run end to end tests on protractor - Explorer, Chrome and Firefox

  $ grunt e2e

Run unit tests using Karma

  $ grunt unit

Generate css file from sass

  $ grunt sass

Watch files and perform tasks, currently sass, jslint

  $ grunt watch

##Test the app

  $ grunt server

# To be improved
  - Add remember me
  - Use directive for form verify
  - Add more checks: correct email format, better password security, etc...
  - 100% e2e and unit tests
