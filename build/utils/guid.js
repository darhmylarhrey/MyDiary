"use strict";

var cov_1gstwn78h8 = function () {
  var path = "C:\\Users\\tunde\\Desktop\\MyDiary\\server\\utils\\guid.js",
      hash = "9622ad652fe3be3888dbf3cd4975b4673a7527f5",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\tunde\\Desktop\\MyDiary\\server\\utils\\guid.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 8,
          column: 15
        }
      },
      "1": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 8,
          column: 15
        }
      },
      "2": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 11,
          column: 54
        }
      },
      "3": {
        start: {
          line: 10,
          column: 23
        },
        end: {
          line: 11,
          column: 54
        }
      },
      "4": {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 13,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 6,
            column: 18
          }
        },
        loc: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 8,
            column: 15
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 17
          },
          end: {
            line: 10,
            column: 18
          }
        },
        loc: {
          start: {
            line: 10,
            column: 23
          },
          end: {
            line: 11,
            column: 54
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
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
cov_1gstwn78h8.s[0]++;
/**
 * @exports
 * @Unique ID
 */

const generate = () => {
  cov_1gstwn78h8.f[0]++;
  cov_1gstwn78h8.s[1]++;
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

cov_1gstwn78h8.s[2]++;
const formGuid = () => {
  cov_1gstwn78h8.f[1]++;
  cov_1gstwn78h8.s[3]++;
  return `${generate() + generate()}-${generate()}-${generate()}-${generate()}-${generate()}${generate()}${generate()}`;
};

const guid = (cov_1gstwn78h8.s[4]++, formGuid());

exports.default = guid;
//# sourceMappingURL=guid.js.map