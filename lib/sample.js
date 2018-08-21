"use strict";

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var _sha = require("sha1");

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _sha2.default)(Math.random().toString()).toString();
var b = (0, _sha2.default)(Math.random().toString()).toString();

console.log((0, _index2.default)(a, b));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYW1wbGUuanMiXSwibmFtZXMiOlsiYSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsImIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLElBQUksbUJBQUtDLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxFQUFMLEVBQStCQSxRQUEvQixFQUFWO0FBQ0EsSUFBTUMsSUFBSSxtQkFBS0gsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLEVBQUwsRUFBK0JBLFFBQS9CLEVBQVY7O0FBRUFFLFFBQVFDLEdBQVIsQ0FBWSxxQkFBU04sQ0FBVCxFQUFZSSxDQUFaLENBQVoiLCJmaWxlIjoic2FtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3RhbmNlIGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2hhMSBmcm9tIFwic2hhMVwiO1xuXG5jb25zdCBhID0gc2hhMShNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkpLnRvU3RyaW5nKCk7XG5jb25zdCBiID0gc2hhMShNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkpLnRvU3RyaW5nKCk7XG5cbmNvbnNvbGUubG9nKGRpc3RhbmNlKGEsIGIpKTtcbiJdfQ==