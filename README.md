# Iniciandoangular9cod3r

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Angular Material

For view side was installed [Angular Material](https://material.angular.io/). It was used also [schematics](https://material.angular.io/guide/schematics) to generate tables `ng generate @angular/material:table...`. Schematics generate a structure a little bit more complex than the traditional way, like datasource.ts file that is used by this table to feed the table and needs to be adjusted for the project reality. The html file of this table allow us to change some attributes like page size (number of lines to show) and items per page (pageSizeOptions).

Defining the currency locale is needed to import `LOCALE_ID` together `NGModule` and add provide line in Providers, as well the currency locale where defined with pipe currency. Also, it is necessary to import localept and registerLocaleData, and after define the registerLocaleData with the localept. All this to show currency formated to show tens and thousands. An example of this was used inside [product-read.component.html](src/app/components/product/product-read/product-read.component.html) and it is load within product-crud that is called by the route products.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
