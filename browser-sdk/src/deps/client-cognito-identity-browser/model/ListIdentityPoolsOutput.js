"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _IdentityPoolsList_1 = require("./_IdentityPoolsList");
exports.ListIdentityPoolsOutput = {
    type: 'structure',
    required: [],
    members: {
        IdentityPools: {
            shape: _IdentityPoolsList_1._IdentityPoolsList,
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
//# sourceMappingURL=ListIdentityPoolsOutput.js.map