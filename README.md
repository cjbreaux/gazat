# Gazat


#### Names of Author
Chris Breaux

#### Date of Completion

4.5.2019

### Description

This project is a site clone of [ZAGAT](https://www.zagat.com/) using the Angular framework. The site will use dynamic routing to display city specific information to the user. Additionally, this information will be gathered from a remote database.

### Plan For Component Tree
<pre>
--app-root
  --top-nav
  --city-splash
  --blog-panel
    -blog-tile
  --contact
  --about
  --cities
  --footer
</pre>

This represents the initial component layout for the landing page.

## Fonts

CalibreWeb
DomaineTest


### Current Features
* Custom logo and favicon
* Dynamically list available cities
* Display current city name in navbar depending on selected city

### Planned Features
* Dynamic routing between city pages
* Populate blog-tiles with city specific data
* Remote hosting of city data on Firebase
* Deployment to Firebase

### Technologies and Resources

* Angular
* Angular CLI
* HTML  
* SCSS
* TypeScript



### Responsiveness

Currently, the site is only minimally styled. UI/UX with responsive elements are planned.

### Setup Instructions
* Clone file from https://github.com/cjbreaux/gazat.git
* Navigate to the cloned folder in the terminal.
* While in the project folder, run the following in the terminal:
 ```html
$ npm i
```
* After the files have downloaded, run the following:
```html
$ ng serve --open
```



### Stretch Goals

* Functional drop-down menus
* More closely emulate the original site's look


### License

MIT License

Copyright (c) 2019 **Chris Breaux**
