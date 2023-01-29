"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIdentitiesInput = {
    type: 'structure',
    required: [
        'IdentityPoolId',
        'MaxResults',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
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
        HideDisabled: {
            shape: {
                type: 'boolean',
            },
        },
    },
};
//# sourceMappingURL=ListIdentitiesInput.js.map