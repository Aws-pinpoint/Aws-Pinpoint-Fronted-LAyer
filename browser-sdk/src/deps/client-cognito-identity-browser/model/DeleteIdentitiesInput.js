"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _IdentityIdList_1 = require("./_IdentityIdList");
exports.DeleteIdentitiesInput = {
    type: 'structure',
    required: [
        'IdentityIdsToDelete',
    ],
    members: {
        IdentityIdsToDelete: {
            shape: _IdentityIdList_1._IdentityIdList,
        },
    },
};
//# sourceMappingURL=DeleteIdentitiesInput.js.map