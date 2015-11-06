var glob = require('glob');
var fs = require('fs');
var getPublicMembersOfFile = require('./analyze_public_members');
var findRequiredModules = require('./find_required_modules');


const fileCriteria = (fileName) => {
  const excludedFiles = ['webcomponents.js'];
  if (excludedFiles.indexOf(fileName) > -1) {
  return false;
} else {
  return true;
}
};

const prettyPrint = (data) => {
  console.log(JSON.stringify(data, null, 4));
};

const prettyWriteFile = (fileName, data) => {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 4));
};

// options is optional
glob("**/*.js", function (er, files) {
  const publicMembers = files.filter(fileCriteria).map(getPublicMembersOfFile);
  prettyPrint(publicMembers);
  prettyWriteFile('public_members.json', publicMembers);

  const requiredModules = files.filter(fileCriteria).map(findRequiredModules);
  prettyPrint(requiredModules);
  prettyWriteFile('required_modules.json', requiredModules);


});
