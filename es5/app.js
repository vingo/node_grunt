'use strict';

var _marked = [test, test2].map(regeneratorRuntime.mark);

var arr = ['ax', 'bcc', 'c'];
var l = arr.map(function (s) {
    return s.length;
});
var k = arr.map(function (s) {
    return s.length;
});
console.log(l, k, 'modify content*****,modify2 clean');
var s = 'the content is template :' + k;

function test() {
    return regeneratorRuntime.wrap(function test$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function test2() {
    return regeneratorRuntime.wrap(function test2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return 2;

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

module.exports = count = k;
