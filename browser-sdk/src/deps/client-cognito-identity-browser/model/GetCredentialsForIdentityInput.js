"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _LoginsMap_1 = require("./_LoginsMap");
exports.GetCredentialsForIdentityInput = {
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
        CustomRoleArn: {
            shape: {
                type: 'string',
                min: 20,
            },
        },
    },
};
//# sourceMappingURL=GetCredentialsForIdentityInput.js.map