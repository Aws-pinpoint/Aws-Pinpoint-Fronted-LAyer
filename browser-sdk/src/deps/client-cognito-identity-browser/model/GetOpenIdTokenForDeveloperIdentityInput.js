"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _LoginsMap_1 = require("./_LoginsMap");
exports.GetOpenIdTokenForDeveloperIdentityInput = {
    type: 'structure',
    required: [
        'IdentityPoolId',
        'Logins',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsMap_1._LoginsMap,
        },
        TokenDuration: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};
//# sourceMappingURL=GetOpenIdTokenForDeveloperIdentityInput.js.map