"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._CognitoIdentityProvider = {
    type: 'structure',
    required: [],
    members: {
        ProviderName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ClientId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ServerSideTokenCheck: {
            shape: {
                type: 'boolean',
            },
        },
    },
};
//# sourceMappingURL=_CognitoIdentityProvider.js.map