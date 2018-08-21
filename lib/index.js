"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distance = distance;

var _util = require("./util");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function distance(a16, b16) {
  var a = util.convertBase(a16, 16, 2).toString().split("");
  var b = util.convertBase(b16, 16, 2).toString().split("");

  var xor = void 0;
  if (a.length > b.length) xor = new Array(a.length);else xor = new Array(b.length);

  for (var _i = 0; _i < xor.length; _i++) {
    xor[_i] = parseInt(a[_i], 10) ^ parseInt(b[_i], 10);
  }
  var xored = xor.toString().replace(/,/g, "");
  var n10 = parseInt(util.convertBase(xored, 2, 10).toString(), 10);

  var n = void 0,
      i = void 0;
  for (i = 0;; i++) {
    n = 2 ** i;
    if (n > n10) break;
  }
  return i;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkaXN0YW5jZSIsInV0aWwiLCJhMTYiLCJiMTYiLCJhIiwiY29udmVydEJhc2UiLCJ0b1N0cmluZyIsInNwbGl0IiwiYiIsInhvciIsImxlbmd0aCIsIkFycmF5IiwiaSIsInBhcnNlSW50IiwieG9yZWQiLCJyZXBsYWNlIiwibjEwIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLFEsR0FBQUEsUTs7QUFGaEI7O0lBQVlDLEk7Ozs7QUFFTCxTQUFTRCxRQUFULENBQWtCRSxHQUFsQixFQUF1QkMsR0FBdkIsRUFBNEI7QUFDakMsTUFBSUMsSUFBSUgsS0FDTEksV0FESyxDQUNPSCxHQURQLEVBQ1ksRUFEWixFQUNnQixDQURoQixFQUVMSSxRQUZLLEdBR0xDLEtBSEssQ0FHQyxFQUhELENBQVI7QUFJQSxNQUFJQyxJQUFJUCxLQUNMSSxXQURLLENBQ09GLEdBRFAsRUFDWSxFQURaLEVBQ2dCLENBRGhCLEVBRUxHLFFBRkssR0FHTEMsS0FISyxDQUdDLEVBSEQsQ0FBUjs7QUFLQSxNQUFJRSxZQUFKO0FBQ0EsTUFBSUwsRUFBRU0sTUFBRixHQUFXRixFQUFFRSxNQUFqQixFQUF5QkQsTUFBTSxJQUFJRSxLQUFKLENBQVVQLEVBQUVNLE1BQVosQ0FBTixDQUF6QixLQUNLRCxNQUFNLElBQUlFLEtBQUosQ0FBVUgsRUFBRUUsTUFBWixDQUFOOztBQUVMLE9BQUssSUFBSUUsS0FBSSxDQUFiLEVBQWdCQSxLQUFJSCxJQUFJQyxNQUF4QixFQUFnQ0UsSUFBaEMsRUFBcUM7QUFDbkNILFFBQUlHLEVBQUosSUFBU0MsU0FBU1QsRUFBRVEsRUFBRixDQUFULEVBQWUsRUFBZixJQUFxQkMsU0FBU0wsRUFBRUksRUFBRixDQUFULEVBQWUsRUFBZixDQUE5QjtBQUNEO0FBQ0QsTUFBSUUsUUFBUUwsSUFBSUgsUUFBSixHQUFlUyxPQUFmLENBQXVCLElBQXZCLEVBQTZCLEVBQTdCLENBQVo7QUFDQSxNQUFJQyxNQUFNSCxTQUFTWixLQUFLSSxXQUFMLENBQWlCUyxLQUFqQixFQUF3QixDQUF4QixFQUEyQixFQUEzQixFQUErQlIsUUFBL0IsRUFBVCxFQUFvRCxFQUFwRCxDQUFWOztBQUVBLE1BQUlXLFVBQUo7QUFBQSxNQUFPTCxVQUFQO0FBQ0EsT0FBS0EsSUFBSSxDQUFULEdBQWNBLEdBQWQsRUFBbUI7QUFDakJLLFFBQUksS0FBS0wsQ0FBVDtBQUNBLFFBQUlLLElBQUlELEdBQVIsRUFBYTtBQUNkO0FBQ0QsU0FBT0osQ0FBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhMTYsIGIxNikge1xuICBsZXQgYSA9IHV0aWxcbiAgICAuY29udmVydEJhc2UoYTE2LCAxNiwgMilcbiAgICAudG9TdHJpbmcoKVxuICAgIC5zcGxpdChcIlwiKTtcbiAgbGV0IGIgPSB1dGlsXG4gICAgLmNvbnZlcnRCYXNlKGIxNiwgMTYsIDIpXG4gICAgLnRvU3RyaW5nKClcbiAgICAuc3BsaXQoXCJcIik7XG5cbiAgbGV0IHhvcjtcbiAgaWYgKGEubGVuZ3RoID4gYi5sZW5ndGgpIHhvciA9IG5ldyBBcnJheShhLmxlbmd0aCk7XG4gIGVsc2UgeG9yID0gbmV3IEFycmF5KGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHhvci5sZW5ndGg7IGkrKykge1xuICAgIHhvcltpXSA9IHBhcnNlSW50KGFbaV0sIDEwKSBeIHBhcnNlSW50KGJbaV0sIDEwKTtcbiAgfVxuICBsZXQgeG9yZWQgPSB4b3IudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csIFwiXCIpO1xuICBsZXQgbjEwID0gcGFyc2VJbnQodXRpbC5jb252ZXJ0QmFzZSh4b3JlZCwgMiwgMTApLnRvU3RyaW5nKCksIDEwKTtcblxuICBsZXQgbiwgaTtcbiAgZm9yIChpID0gMDsgOyBpKyspIHtcbiAgICBuID0gMiAqKiBpO1xuICAgIGlmIChuID4gbjEwKSBicmVhaztcbiAgfVxuICByZXR1cm4gaTtcbn1cbiJdfQ==