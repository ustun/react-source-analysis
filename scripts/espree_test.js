var espree = require("espree");
var fs = require('fs');
var code = fs.readFileSync('./ReactDOM.js');
var ast = espree.parse(code);

var findRequires = function (node) {
    if (node.type === 'VariableDeclaration' && node.declarations[0].init.type === 'CallExpression' && node.declarations[0].init.callee.name === 'require') {
        return true;
    } else {
        return false;
    }
}

var extractData = function (node) {
    return node.declarations[0].id.name;
};

var requiredModules = ast.body.filter(findRequires).map(extractData);
console.log(requiredModules)
console.log(ast)
