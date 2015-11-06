const getPublicMembersOfModule = (module) => {
  var keys = Object.keys(module);

  return keys.filter(function (key) {
    return /^[a-zA-z]/.test(key);
  });

};

module.exports = (fileName) => {
  var x = require('./' + fileName);
  return {module: fileName.replace('.js', ''),
          members: getPublicMembersOfModule(x)};
};
