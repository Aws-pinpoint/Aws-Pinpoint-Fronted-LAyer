"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._MappingRule = {
    type: 'structure',
    required: [
        'Claim',
        'MatchType',
        'Value',
        'RoleARN',
    ],
    members: {
        Claim: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MatchType: {
            shape: {
                type: 'string',
            },
        },
        Value: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        RoleARN: {
            shape: {
                type: 'string',
                min: 20,
            },
        },
    },
};
//# sourceMappingURL=_MappingRule.js.map