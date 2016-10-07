/*jshint node:true*/
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees')

var renameMap = {
  'src/main.js': 'app.js',
  'src/resolver.js': 'resolver.js',
  'src/ui/styles/app.css': 'styles/app.css' // Need a glob strategy
};

module.exports = {
  name: 'unified-resolver',

  isDevelopingAddon: function() {
    return true;
  },

  treeForApp() {
    var srcTree = new Funnel('src', {
      destDir: 'src'
    });

    var appTree = new Funnel('app');

    var unifiedTree = new MergeTrees([appTree, srcTree]);

    var withAppCompatibility = new Funnel(unifiedTree, {
      getDestinationPath: function getDestinationPath(relativePath) {
        return renameMap[relativePath] || relativePath;
      }
    });

    return withAppCompatibility;
  }
};
