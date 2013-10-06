var fs = Npm.require('fs');
var path = Npm.require('path');
var iced = Npm.require('iced-coffee-script');

var handler = function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";

  options = {
    bare: true,
    runtime: 'none',
    filename: compileStep.inputPath,
    literate: path.extname(compileStep.inputPath) === '.litcoffee'
  };

  try {
    var output = iced.compile(source, options);
  } catch (e) {
    throw new Error(
      compileStep.inputPath + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: output
  });
};

Plugin.registerSourceHandler('coffee', handler);
Plugin.registerSourceHandler('litcoffee', handler);
Plugin.registerSourceHandler('iced', handler);
