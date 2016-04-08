'use strict';
var arr = ['ax', 'bcc', 'c'];
var l = arr.map(function(s) {
    return s.length;
});
var k = arr.map(s => s.length);
console.log(l, k, 'modify content*****,modify2');
let s = `the content is template :${k}`;

function* test() {
    yield 1;
}
module.exports = count = k;