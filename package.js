Package.describe({summary: "CoffeeScript with better steamline asynchronous control flow (http://maxtaco.github.io/coffee-script/)"});

var deps = {'iced-coffee-script': '1.6.3-e'};

Package._transitional_registerBuildPlugin({
  name: "iced-coffee-script",
  use: [],
  sources: [
    'plugin/compile-iced.js'
  ],
  npmDependencies: deps
});

Package.on_use(function(api) {
  Npm.depends(deps);
  api.add_files('plugin/runtime.js', 'server');
  api.export([
    'iced',
    //'__iced_k',
    //'__iced_k_noop'
  ], 'server');
});
