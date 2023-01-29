"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIdentityPoolsInput = {
    type: 'structure',
    required: [
        'MaxResults',
    ],
    members: {
        MaxResults: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
//# sourceMappingURL=ListIdentityPoolsInput.js.map