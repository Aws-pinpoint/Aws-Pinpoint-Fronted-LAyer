"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _LoginsMap_1 = require("./_LoginsMap");
var _LoginsList_1 = require("./_LoginsList");
exports.UnlinkIdentityInput = {
    type: 'structure',
    required: [
        'IdentityId',
        'Logins',
        'LoginsToRemove',
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
        LoginsToRemove: {
            shape: _LoginsList_1._LoginsList,
        },
    },
};
//# sourceMappingURL=UnlinkIdentityInput.js.map