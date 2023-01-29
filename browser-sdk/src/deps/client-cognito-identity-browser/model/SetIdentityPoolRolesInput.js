"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _RolesMap_1 = require("./_RolesMap");
var _RoleMappingMap_1 = require("./_RoleMappingMap");
exports.SetIdentityPoolRolesInput = {
    type: 'structure',
    required: [
        'IdentityPoolId',
        'Roles',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Roles: {
            shape: _RolesMap_1._RolesMap,
        },
        RoleMappings: {
            shape: _RoleMappingMap_1._RoleMappingMap,
        },
    },
};
//# sourceMappingURL=SetIdentityPoolRolesInput.js.map