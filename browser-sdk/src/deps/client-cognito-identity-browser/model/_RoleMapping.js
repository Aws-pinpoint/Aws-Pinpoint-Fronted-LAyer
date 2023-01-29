"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _RulesConfigurationType_1 = require("./_RulesConfigurationType");
exports._RoleMapping = {
    type: 'structure',
    required: [
        'Type',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        AmbiguousRoleResolution: {
            shape: {
                type: 'string',
            },
        },
        RulesConfiguration: {
            shape: _RulesConfigurationType_1._RulesConfigurationType,
        },
    },
};
//# sourceMappingURL=_RoleMapping.js.map