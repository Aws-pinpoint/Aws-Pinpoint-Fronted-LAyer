"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _LoginsList_1 = require("./_LoginsList");
exports._IdentityDescription = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsList_1._LoginsList,
        },
        CreationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        LastModifiedDate: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};
//# sourceMappingURL=_IdentityDescription.js.map