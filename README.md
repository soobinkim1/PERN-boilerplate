# Boilerplate for PERN Stack

Boilerplate for PERN stack web applications.

### App
* __Client__: React.js, React Router, SCSS
* __Server__: Express.js, Postgres, Passport
    * CORS, Passport.js, Passport-Jwt, Bcrypt
* __Testing__: 
    * Jest, React testing library, Puppeteer
    * Supertest

### DevOps

* __.travis.yml__
* Container is where a program is mounted to a kernel, but the program has a separate disk space and place where it can write. Container does not see any process outside the container. 



`docker build .` 
### Developer Features
* __eslint__ (airbnb)
* __Babel__
    * __babel-core__: core babel transpiler
    * __babel-loader__: loads ES2015+ code and transpiles to ES5 using Babel
    * __babel-preset-react__: compiles JSX into ES6 code
    * __babel-preset-env__: compiles ES6 and later versions as needed for each browser
* __webpack__
    * __html-webpack-plugin__: generates an HTML5 file that includes all your webpack bundles in the body using script tags
* __webpack-dev-server__
    * __hot module reloading__
* __nodemon__
