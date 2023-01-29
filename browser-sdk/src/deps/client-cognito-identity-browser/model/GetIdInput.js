"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _LoginsMap_1 = require("./_LoginsMap");
exports.GetIdInput = {
    type: 'structure',
    required: [
        'IdentityPoolId',
    ],
    members: {
        AccountId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsMap_1._LoginsMap,
        },
    },
};
//# sourceMappingURL=GetIdInput.js.map