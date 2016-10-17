This is an app blueprint that is a proof-of-concept of using a "module unification RFC"-compliant
file setup on disk.

It uses a [fork of the ember-resolver called "dangerously-set-unified-resolver"](https://github.com/201-created/dangerously-set-unified-resolver)
that implements some of the module unification RFC (this fork is a work-in-progress).

For more information, see
 * the [module unification RFC](https://github.com/emberjs/rfcs/pull/143)
 * This [ember-cli epic issue](https://github.com/ember-cli/ember-cli/issues/6332) tracking work

## Installation

The standard ember install/server process should "just work" here, even though files are in "src/":

 * `npm install && bower install`
 * `ember serve`
 
 ## Diff
 
 Here is a [diff that shows the changes made to this branch](https://github.com/rwjblue/--new-app-blueprint/compare/master...201-created:master) relative to a typical app blueprint that doesn't use the forked resolver.
