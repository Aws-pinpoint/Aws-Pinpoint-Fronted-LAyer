"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Credentials_1 = require("./_Credentials");
exports.GetCredentialsForIdentityOutput = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Credentials: {
            shape: _Credentials_1._Credentials,
        },
    },
};
//# sourceMappingURL=GetCredentialsForIdentityOutput.js.map