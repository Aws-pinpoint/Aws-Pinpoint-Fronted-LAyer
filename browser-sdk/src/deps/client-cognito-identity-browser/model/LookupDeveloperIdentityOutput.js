"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _DeveloperUserIdentifierList_1 = require("./_DeveloperUserIdentifierList");
exports.LookupDeveloperIdentityOutput = {
    type: 'structure',
    required: [],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DeveloperUserIdentifierList: {
            shape: _DeveloperUserIdentifierList_1._DeveloperUserIdentifierList,
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
//# sourceMappingURL=LookupDeveloperIdentityOutput.js.map