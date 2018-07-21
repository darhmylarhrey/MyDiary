'use strict';

var cov_jxdhgub6y = function () {
  var path = 'C:\\Users\\tunde\\Desktop\\Fizzo\\MyDiary\\server\\utils\\moment.js',
      hash = '5a9a6c2c71f97f4b503dcff49c68b93a4abd23fd',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\tunde\\Desktop\\Fizzo\\MyDiary\\server\\utils\\moment.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 40
        }
      },
      '1': {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 4,
          column: 41
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.time = exports.date = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const date = exports.date = (cov_jxdhgub6y.s[0]++, (0, _moment2.default)().format('L'));
const time = exports.time = (cov_jxdhgub6y.s[1]++, (0, _moment2.default)().format('LT'));
//# sourceMappingURL=moment.js.map