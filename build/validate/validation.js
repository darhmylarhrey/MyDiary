'use strict';

var cov_21iz8nhhxm = function () {
  var path = 'C:\\Users\\tunde\\Desktop\\Fizzo\\MyDiary\\server\\validate\\validation.js',
      hash = 'de3b2ed31cab5c79ee52ec54d379aed40061254c',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\tunde\\Desktop\\Fizzo\\MyDiary\\server\\validate\\validation.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 31
        },
        end: {
          line: 10,
          column: 39
        }
      },
      '1': {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 16,
          column: 7
        }
      },
      '2': {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 15,
          column: 11
        }
      },
      '3': {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 20
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 9,
            column: 22
          }
        },
        loc: {
          start: {
            line: 9,
            column: 41
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 9
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 16,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 16,
            column: 7
          }
        }, {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 16,
            column: 7
          }
        }],
        line: 12
      },
      '1': {
        loc: {
          start: {
            line: 12,
            column: 10
          },
          end: {
            line: 12,
            column: 152
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 12,
            column: 10
          },
          end: {
            line: 12,
            column: 16
          }
        }, {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 45
          }
        }, {
          start: {
            line: 12,
            column: 49
          },
          end: {
            line: 12,
            column: 79
          }
        }, {
          start: {
            line: 12,
            column: 83
          },
          end: {
            line: 12,
            column: 89
          }
        }, {
          start: {
            line: 12,
            column: 93
          },
          end: {
            line: 12,
            column: 118
          }
        }, {
          start: {
            line: 12,
            column: 122
          },
          end: {
            line: 12,
            column: 152
          }
        }],
        line: 12
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0, 0, 0, 0, 0]
    },
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
exports.default = {
  /**
   * @description validate post ride
   * @param {object} req - The object that return a request
   * @param {object} res - The object that returns a response
   * @param {object} next- The object that tell the next action to run
   * @returns {object}
   */
  entryValidation: (req, res, next) => {
    cov_21iz8nhhxm.f[0]++;

    const { title, entry } = (cov_21iz8nhhxm.s[0]++, req.body);

    cov_21iz8nhhxm.s[1]++;
    if ((cov_21iz8nhhxm.b[1][0]++, !title) || (cov_21iz8nhhxm.b[1][1]++, typeof title !== 'string') || (cov_21iz8nhhxm.b[1][2]++, title.toString().trim() === '') || (cov_21iz8nhhxm.b[1][3]++, !entry) || (cov_21iz8nhhxm.b[1][4]++, typeof entry !== 'string') || (cov_21iz8nhhxm.b[1][5]++, entry.toString().trim() === '')) {
      cov_21iz8nhhxm.b[0][0]++;
      cov_21iz8nhhxm.s[2]++;

      return res.status(400).send({
        message: 'Valid title and entry data is required'
      });
    } else {
      cov_21iz8nhhxm.b[0][1]++;
    }
    cov_21iz8nhhxm.s[3]++;
    return next();
  }

};
//# sourceMappingURL=validation.js.map