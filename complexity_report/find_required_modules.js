var babel = require("babel-core");
var espree = require('espree');
var fs = require('fs');



var findRequiredFilesOrModulesFromTokens = function (type, tokens) {
  var required = [];
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i].value === 'require') {
      if (type === 'file') {
        required.push(tokens[i+2].value);
      } else {
        required.push(tokens[i-2].value);
      }
    }
  }
  return required;

}

// var findRequiredFilesFromTokens = findRequiredFilesOrModulesFromTokens.bind(null, 'file');
var findRequiredModulesFromTokens = findRequiredFilesOrModulesFromTokens.bind(null, 'module');

module.exports = function (filePath) {
  var code = fs.readFileSync(filePath);
  var result = babel.transform(code);
  // var result = espree.parse(code);
  return {module: filePath.replace('.js', ''), modules: findRequiredModulesFromTokens(result.ast.tokens)};
};



  // console.log(findRequiredModules('./React.js'))
