"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _LoginsMap_1 = require("./_LoginsMap");
exports.GetOpenIdTokenInput = {
    type: 'structure',
    required: [
        'IdentityId',
    ],
    members: {
        IdentityId: {
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
//# sourceMappingURL=GetOpenIdTokenInput.js.map