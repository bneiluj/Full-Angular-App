# Simple Login Form App
  - Entire architecture for a login app based on angularJS.
  - Full E2E + Unit tests
  - Entire code wrote by Julien Bouteloup in less than 5 hours: Tests + JS + UI/UX + CSS

#Task requirements

  - Create an HTML file that has a login form with a username and password. Use semantic, accessible and valid mark-up.
      $ Respected

  - Style the form so that labels are to the left of the fields and inputs are to the right of the fields.
      $ Respected

  - Write script that defines a FormValidator constructor with methods on the prototype to validate and display error messages for invalid username/password. It only has to check whether the fields are blank or not.
      $ Respected. In public/app/components/login/loginCtrl and public/app/components/login/views/login.html

  - Use external scripts and css files.
      $ Implement own css using sass


  - Don't pollute the global object (Only one should be required for the namespace you choose)
      $ Respected. Only one object bind on the DOM.

  - Test drive the code via unit tests (Jasmine or an equivalent). Should work in IE7+ as well as more modern browsers.
      $ Respected. Tested and Works Explorer, Safari, Chrome, Firebox

# To improve
  - Add remember me
  - Use directive for form verify
  - Add more checks: correct email format, better password security, etc...
  - 100% e2e and unit tests
