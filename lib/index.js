"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distance = distance;

var util = _interopRequireWildcard(require("./util"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function distance(a16, b16) {
  if (a16.length !== 40 || b16.length !== 40) {
    throw new Error("error bit length");
  }

  var a = util.convertBase(a16, 16, 2).toString().split("");
  var b = util.convertBase(b16, 16, 2).toString().split("");
  var xor;
  if (a.length > b.length) xor = new Array(a.length);else xor = new Array(b.length);

  for (var _i = 0; _i < xor.length; _i++) {
    xor[_i] = parseInt(a[_i], 10) ^ parseInt(b[_i], 10);
  }

  var xored = xor.toString().replace(/,/g, "");
  var n10 = parseInt(util.convertBase(xored, 2, 10).toString(), 10);
  var n, i;

  for (i = 0;; i++) {
    n = Math.pow(2, i);
    if (n > n10) break;
  }

  return i;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkaXN0YW5jZSIsImExNiIsImIxNiIsImxlbmd0aCIsIkVycm9yIiwiYSIsInV0aWwiLCJjb252ZXJ0QmFzZSIsInRvU3RyaW5nIiwic3BsaXQiLCJiIiwieG9yIiwiQXJyYXkiLCJpIiwicGFyc2VJbnQiLCJ4b3JlZCIsInJlcGxhY2UiLCJuMTAiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFTyxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUErQkMsR0FBL0IsRUFBNEM7QUFDakQsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsRUFBZixJQUFxQkQsR0FBRyxDQUFDQyxNQUFKLEtBQWUsRUFBeEMsRUFBNEM7QUFDMUMsVUFBTSxJQUFJQyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUNEOztBQUNELE1BQUlDLENBQUMsR0FBR0MsSUFBSSxDQUNUQyxXQURLLENBQ09OLEdBRFAsRUFDWSxFQURaLEVBQ2dCLENBRGhCLEVBRUxPLFFBRkssR0FHTEMsS0FISyxDQUdDLEVBSEQsQ0FBUjtBQUlBLE1BQUlDLENBQUMsR0FBR0osSUFBSSxDQUNUQyxXQURLLENBQ09MLEdBRFAsRUFDWSxFQURaLEVBQ2dCLENBRGhCLEVBRUxNLFFBRkssR0FHTEMsS0FISyxDQUdDLEVBSEQsQ0FBUjtBQUtBLE1BQUlFLEdBQUo7QUFDQSxNQUFJTixDQUFDLENBQUNGLE1BQUYsR0FBV08sQ0FBQyxDQUFDUCxNQUFqQixFQUF5QlEsR0FBRyxHQUFHLElBQUlDLEtBQUosQ0FBVVAsQ0FBQyxDQUFDRixNQUFaLENBQU4sQ0FBekIsS0FDS1EsR0FBRyxHQUFHLElBQUlDLEtBQUosQ0FBVUYsQ0FBQyxDQUFDUCxNQUFaLENBQU47O0FBRUwsT0FBSyxJQUFJVSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHRixHQUFHLENBQUNSLE1BQXhCLEVBQWdDVSxFQUFDLEVBQWpDLEVBQXFDO0FBQ25DRixJQUFBQSxHQUFHLENBQUNFLEVBQUQsQ0FBSCxHQUFTQyxRQUFRLENBQUNULENBQUMsQ0FBQ1EsRUFBRCxDQUFGLEVBQU8sRUFBUCxDQUFSLEdBQXFCQyxRQUFRLENBQUNKLENBQUMsQ0FBQ0csRUFBRCxDQUFGLEVBQU8sRUFBUCxDQUF0QztBQUNEOztBQUNELE1BQUlFLEtBQUssR0FBR0osR0FBRyxDQUFDSCxRQUFKLEdBQWVRLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNkIsRUFBN0IsQ0FBWjtBQUNBLE1BQUlDLEdBQUcsR0FBR0gsUUFBUSxDQUFDUixJQUFJLENBQUNDLFdBQUwsQ0FBaUJRLEtBQWpCLEVBQXdCLENBQXhCLEVBQTJCLEVBQTNCLEVBQStCUCxRQUEvQixFQUFELEVBQTRDLEVBQTVDLENBQWxCO0FBRUEsTUFBSVUsQ0FBSixFQUFPTCxDQUFQOztBQUNBLE9BQUtBLENBQUMsR0FBRyxDQUFULEdBQWNBLENBQUMsRUFBZixFQUFtQjtBQUNqQkssSUFBQUEsQ0FBQyxZQUFHLENBQUgsRUFBUUwsQ0FBUixDQUFEO0FBQ0EsUUFBSUssQ0FBQyxHQUFHRCxHQUFSLEVBQWE7QUFDZDs7QUFDRCxTQUFPSixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlsIGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGExNjogc3RyaW5nLCBiMTY6IHN0cmluZykge1xuICBpZiAoYTE2Lmxlbmd0aCAhPT0gNDAgfHwgYjE2Lmxlbmd0aCAhPT0gNDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJlcnJvciBiaXQgbGVuZ3RoXCIpO1xuICB9XG4gIGxldCBhID0gdXRpbFxuICAgIC5jb252ZXJ0QmFzZShhMTYsIDE2LCAyKVxuICAgIC50b1N0cmluZygpXG4gICAgLnNwbGl0KFwiXCIpO1xuICBsZXQgYiA9IHV0aWxcbiAgICAuY29udmVydEJhc2UoYjE2LCAxNiwgMilcbiAgICAudG9TdHJpbmcoKVxuICAgIC5zcGxpdChcIlwiKTtcblxuICBsZXQgeG9yO1xuICBpZiAoYS5sZW5ndGggPiBiLmxlbmd0aCkgeG9yID0gbmV3IEFycmF5KGEubGVuZ3RoKTtcbiAgZWxzZSB4b3IgPSBuZXcgQXJyYXkoYi5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgeG9yW2ldID0gcGFyc2VJbnQoYVtpXSwgMTApIF4gcGFyc2VJbnQoYltpXSwgMTApO1xuICB9XG4gIGxldCB4b3JlZCA9IHhvci50b1N0cmluZygpLnJlcGxhY2UoLywvZywgXCJcIik7XG4gIGxldCBuMTAgPSBwYXJzZUludCh1dGlsLmNvbnZlcnRCYXNlKHhvcmVkLCAyLCAxMCkudG9TdHJpbmcoKSwgMTApO1xuXG4gIGxldCBuLCBpO1xuICBmb3IgKGkgPSAwOyA7IGkrKykge1xuICAgIG4gPSAyICoqIGk7XG4gICAgaWYgKG4gPiBuMTApIGJyZWFrO1xuICB9XG4gIHJldHVybiBpO1xufVxuIl19