Package.describe({summary: "CoffeeScript with better steamline asynchronous control flow (http://maxtaco.github.io/coffee-script/)"});

Package._transitional_registerBuildPlugin({
  name: "iced-coffee-script",
  use: [],
  sources: [
    'plugin/compile-iced.js'
  ],
  npmDependencies: {'iced-coffee-script': '1.6.3-e'}
});


