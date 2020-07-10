# Iniciandoangular9cod3r

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Angular Material

For view side was installed [Angular Material](https://material.angular.io/). It was used also [schematics](https://material.angular.io/guide/schematics) to generate tables `ng generate @angular/material:table...`. Schematics generate a structure a little bit more complex than the traditional way, like datasource.ts file that is used by this table to feed the table and needs to be adjusted for the project reality. The html file of this table allow us to change some attributes like page size (number of lines to show) and items per page (pageSizeOptions).

Defining the currency locale is needed to import `LOCALE_ID` together `NGModule` and add provide line in Providers, as well the currency locale where defined with pipe currency. Also, it is necessary to import localept and registerLocaleData, and after define the registerLocaleData with the localept. All this to show currency formated to show tens and thousands. An example of this was used inside [product-read.component.html](src/app/components/product/product-read/product-read.component.html) and it is load within product-crud that is called by the route products.

## Loading Product in [update](src/app/components/product-update/product-update.component.ts) fields

To take product id and then select the product clicked by the uses, it is needed to use ActivatedRoute and its method snapshot: `this.route.snapshot.paramMap.get('id')` and then use it as parameter for readById method from [productService](src/app/components/product/product.service.ts), that is possible because within [product-read](src/app/components/product/product-read/product-read.component.html) the pencil icon is using routerlink to set the row id (`routerLink="/products/update/{{ row.id }}"`) and also the route defined in the [app-routing](src/app/app-routing.module.ts) that is `products/update/:id`, but it could has more paramenters more than :id, what would demand to another paramMap.get, [i.e.](https://stackoverflow.com/questions/44311321/extract-more-than-one-parameter-from-url-with-angular) [..](https://stackoverflow.com/questions/58077240/how-to-get-multiple-ids-from-route-param-in-angular-6), for country: paramMap.get('country'). 

After taking the id, it is used as argument of readById, in which a subscribe is made to allow the product local variable receives the correspondent value, becoming available to be used in the ts class, in this specific case by the editProduct.

## Deleting a product

As it was done for updating product, deleting is done by finding the product using the readById from [product service](src/app/components/product/product.service.ts) and then passing its id, that is also retrieved by snapshot: `this.route.snapshot.paramMap.get('id')`, observing that all operation happens within the [html file](src/app/components/product/product-read/product-read.component.html) and the routerLink points to read in the url: `routerLink="/products/read/{{ row.id }}"`

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
