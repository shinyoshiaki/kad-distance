"use strict";

var _index = require("./index");

var _sha = _interopRequireDefault(require("sha1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _sha.default)(Math.random().toString()).toString();
var b = (0, _sha.default)(Math.random().toString()).toString();
console.log(a, b);
console.log((0, _index.distance)(a, b));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYW1wbGUudHMiXSwibmFtZXMiOlsiYSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsImIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBRUEsSUFBTUEsQ0FBQyxHQUFHLGtCQUFLQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxFQUFMLEVBQStCQSxRQUEvQixFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLGtCQUFLSCxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxFQUFMLEVBQStCQSxRQUEvQixFQUFWO0FBRUFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixDQUFaLEVBQWVJLENBQWY7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVNOLENBQVQsRUFBWUksQ0FBWixDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzdGFuY2UgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHNoYTEgZnJvbSBcInNoYTFcIjtcblxuY29uc3QgYSA9IHNoYTEoTWF0aC5yYW5kb20oKS50b1N0cmluZygpKS50b1N0cmluZygpO1xuY29uc3QgYiA9IHNoYTEoTWF0aC5yYW5kb20oKS50b1N0cmluZygpKS50b1N0cmluZygpO1xuXG5jb25zb2xlLmxvZyhhLCBiKTtcblxuY29uc29sZS5sb2coZGlzdGFuY2UoYSwgYikpO1xuIl19