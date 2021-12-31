"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = exports.doSomeStuff = void 0;
console.log('Try npm run lint/fix!');
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = 'am I tabbed?';
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
const world = 'world';
function hello(world) {
    return `Hello ${world}! `;
}
exports.hello = hello;
//# sourceMappingURL=index.js.map