Package.describe({summary: "CoffeeScript with better steamline asynchronous control flow (http://maxtaco.github.io/coffee-script/)"});

Npm.depends({
  'iced-coffee-script': '1.6.2d'
});

var iced_coffeescript_handler = function (bundle, source_path, serve_path, where) {
  var fs = Npm.require('fs'),
      path = Npm.require('path'),
      iced = Npm.require('iced-coffee-script'),
      serve_path = serve_path + '.js',
      contents = fs.readFileSync(source_path);
  options = {
    bare: true, 
    filename: source_path, 
    literate: path.extname(source_path) === '.litcoffee'
  };
  try {
    contents = iced.compile(contents.toString('utf8'), options);
  } catch (e) {
    return bundle.error(
      source_path + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }
  contents = new Buffer(contents);
  bundle.add_resource({
    type: 'js',
    path: serve_path,
    data: contents,
    where: where
  });
};

Package.register_extension('coffee', iced_coffeescript_handler);
Package.register_extension('litcoffee', iced_coffeescript_handler);

