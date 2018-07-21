'use strict';

var cov_2hvw87okkr = function () {
  var path = 'C:\\Users\\tunde\\Desktop\\Fizzo\\MyDiary\\server\\app.js',
      hash = '466559a7079562cff541a1a4c3c804909eab23d6',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\tunde\\Desktop\\Fizzo\\MyDiary\\server\\app.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 21
        }
      },
      '1': {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 23
        }
      },
      '2': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 27
        }
      },
      '3': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 51
        }
      },
      '4': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 26
        }
      },
      '5': {
        start: {
          line: 18,
          column: 13
        },
        end: {
          line: 18,
          column: 37
        }
      },
      '6': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 22,
          column: 3
        }
      },
      '7': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 20,
            column: 18
          }
        },
        loc: {
          start: {
            line: 20,
            column: 23
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 18,
            column: 37
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 18,
            column: 29
          }
        }, {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 18,
            column: 37
          }
        }],
        line: 18
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}(); // web application framework for nodejs
// basically collects log from the server, such as request logs
// extract the body portion of an incoming request


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./route/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (cov_2hvw87okkr.s[0]++, (0, _express2.default)());

// log requests to the console
cov_2hvw87okkr.s[1]++;
app.use((0, _morgan2.default)('dev'));

// parse incoming requests data
cov_2hvw87okkr.s[2]++;
app.use(_bodyParser2.default.json());
cov_2hvw87okkr.s[3]++;
app.use(_bodyParser2.default.urlencoded({ extended: true }));
cov_2hvw87okkr.s[4]++;
app.use('/api/v1', _index2.default);

// set environment port
const PORT = (cov_2hvw87okkr.s[5]++, (cov_2hvw87okkr.b[0][0]++, process.env.PORT) || (cov_2hvw87okkr.b[0][1]++, 4500));

cov_2hvw87okkr.s[6]++;
app.listen(PORT, () => {
  cov_2hvw87okkr.f[0]++;
  cov_2hvw87okkr.s[7]++;

  console.log(`Your app is listening on ${PORT}!`);
});

exports.default = app;
//# sourceMappingURL=app.js.map