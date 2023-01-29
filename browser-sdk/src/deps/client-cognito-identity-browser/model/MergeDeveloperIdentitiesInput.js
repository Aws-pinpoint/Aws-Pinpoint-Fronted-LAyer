"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeDeveloperIdentitiesInput = {
    type: 'structure',
    required: [
        'SourceUserIdentifier',
        'DestinationUserIdentifier',
        'DeveloperProviderName',
        'IdentityPoolId',
    ],
    members: {
        SourceUserIdentifier: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DestinationUserIdentifier: {
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
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};
//# sourceMappingURL=MergeDeveloperIdentitiesInput.js.map