# SPARoutingShowcase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.
The entire app has been built using Angular's standalone component features.

This application presents an array of component showcases separated in an Angular
SPA using Angular's native routing.

# Notes

This particular app is using the recently introduced standalone component system.
Along with that come some changes to the established interactions of routes in
the root app module.

Another change you can notice is the occasional use of the inject method from
the core Angular toolkit to inject classes and services instead of using the
constructor to inject and instanciate. This removes the need to add any
dependencies as arguments when instanciating a class.

Many of the custom presentational form input components use the [ControlValueAccessor]
(https://angular.io/api/forms/ControlValueAccessor) API to pass values to and from
the form they are bound to.

## Running the app

npm run start
