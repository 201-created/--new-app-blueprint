/*jshint node:true*/
var Funnel     = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees')
var log = require('broccoli-stew').log;

module.exports = {
  name: 'unified-resolver',

  isDevelopingAddon: function() {
    return true;
  },

  treeForApp() {
    var srcTree = new Funnel('src', {
      destDir: 'app/src'
    });

    var appTree = new Funnel('app')

    return new MergeTrees([log(appTree), log(srcTree)]);
  }
};
