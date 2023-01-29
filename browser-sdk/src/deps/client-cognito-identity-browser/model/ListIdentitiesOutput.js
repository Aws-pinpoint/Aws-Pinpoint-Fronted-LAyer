"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _IdentitiesList_1 = require("./_IdentitiesList");
exports.ListIdentitiesOutput = {
    type: 'structure',
    required: [],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Identities: {
            shape: _IdentitiesList_1._IdentitiesList,
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
//# sourceMappingURL=ListIdentitiesOutput.js.map