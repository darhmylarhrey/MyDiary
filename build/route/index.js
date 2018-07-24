'use strict';

var cov_292wemep1a = function () {
    var path = 'C:\\Users\\tunde\\Desktop\\MyDiary\\server\\route\\index.js',
        hash = 'fa097b47e0676d39167d43c8cca79f5bf2b97530',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Users\\tunde\\Desktop\\MyDiary\\server\\route\\index.js',
        statementMap: {
            '0': {
                start: {
                    line: 4,
                    column: 15
                },
                end: {
                    line: 4,
                    column: 31
                }
            },
            '1': {
                start: {
                    line: 6,
                    column: 0
                },
                end: {
                    line: 8,
                    column: 7
                }
            },
            '2': {
                start: {
                    line: 7,
                    column: 4
                },
                end: {
                    line: 7,
                    column: 60
                }
            },
            '3': {
                start: {
                    line: 9,
                    column: 0
                },
                end: {
                    line: 9,
                    column: 54
                }
            },
            '4': {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 10,
                    column: 58
                }
            },
            '5': {
                start: {
                    line: 11,
                    column: 0
                },
                end: {
                    line: 11,
                    column: 48
                }
            },
            '6': {
                start: {
                    line: 12,
                    column: 0
                },
                end: {
                    line: 12,
                    column: 56
                }
            },
            '7': {
                start: {
                    line: 13,
                    column: 0
                },
                end: {
                    line: 13,
                    column: 64
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 6,
                        column: 16
                    },
                    end: {
                        line: 6,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 28
                    },
                    end: {
                        line: 8,
                        column: 5
                    }
                },
                line: 6
            }
        },
        branchMap: {},
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

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _entries = require('../controller/entries');

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (cov_292wemep1a.s[0]++, _express2.default.Router());

cov_292wemep1a.s[1]++;
router.get('/', (req, res) => {
    cov_292wemep1a.f[0]++;
    cov_292wemep1a.s[2]++;

    return res.status(200).json('welcome to my MyDiary app');
});
cov_292wemep1a.s[3]++;
router.get('/entries', _entries2.default.getAllEntries);
cov_292wemep1a.s[4]++;
router.get('/entries/:entryId', _entries2.default.getEntry);
cov_292wemep1a.s[5]++;
router.post('/entries', _entries2.default.create);
cov_292wemep1a.s[6]++;
router.put('/entries/:entryId', _entries2.default.update);
cov_292wemep1a.s[7]++;
router.delete('/entries/:entryId', _entries2.default.deleteEntry);

exports.default = router;
//# sourceMappingURL=index.js.map