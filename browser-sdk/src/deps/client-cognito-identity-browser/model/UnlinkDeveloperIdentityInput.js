"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnlinkDeveloperIdentityInput = {
    type: 'structure',
    required: [
        'IdentityId',
        'IdentityPoolId',
        'DeveloperProviderName',
        'DeveloperUserIdentifier',
    ],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DeveloperProviderName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DeveloperUserIdentifier: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
//# sourceMappingURL=UnlinkDeveloperIdentityInput.js.map