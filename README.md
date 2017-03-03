# Javascript TDD
> A simple setup to get you going with TDD in JS.

Tests help us insure that as we develop we aren't introducing regressions into our codebase and that our code behaves as intended. It's a difficult but worthwhile pursuit. Play around with this repo and get comfortable with testing Javascript code.

## Concepts
#### TDD
Test Driven Development is accomplished in JS by using __Test Runners__ and  __Assertion Libraries__.
In this app we are using [Mocha](https://mochajs.org/) as out Test Runner and [Chai](http://chaijs.com/) as our Assertion library.


#### [Webpack](https://webpack.js.org/) - Code Bundling

When you have loads of files that compose your application it's preferred to keep them modular. [__Webpack__](https://webpack.js.org/) helps us by gathering all of our modules(js files) and bundling them into a concise script.

> There's a lot more to Webpack but for the sake of this exercise just know it's gathering our code and creating the __main.js__ file we reference in our HTML document.

### Setup Project
- `$> npm install`

### Build Code
- `$> npm run build`

### Build Code Continuously
- `$> npm run watch:build`

### Run The Test
- `$> npm run test`

### Run The Tests Continuously
- `$> npm run watch:test`
