"use strict";
exports.__esModule = true;
exports.hello = exports.doSomeStuff = void 0;
console.log('Try npm run lint/fix!');
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = 'am I tabbed?';
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    return;
}
exports.doSomeStuff = doSomeStuff;
// TODO: more examples
var world = 'world';
function hello(world) {
    return "Hello ".concat(world, "! ");
}
exports.hello = hello;
