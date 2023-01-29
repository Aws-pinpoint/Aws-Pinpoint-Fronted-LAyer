"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _MappingRulesList_1 = require("./_MappingRulesList");
exports._RulesConfigurationType = {
    type: 'structure',
    required: [
        'Rules',
    ],
    members: {
        Rules: {
            shape: _MappingRulesList_1._MappingRulesList,
        },
    },
};
//# sourceMappingURL=_RulesConfigurationType.js.map