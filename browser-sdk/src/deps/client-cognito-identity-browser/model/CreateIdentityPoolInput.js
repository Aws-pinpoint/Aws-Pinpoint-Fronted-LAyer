"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _IdentityProviders_1 = require("./_IdentityProviders");
var _OIDCProviderList_1 = require("./_OIDCProviderList");
var _CognitoIdentityProviderList_1 = require("./_CognitoIdentityProviderList");
var _SAMLProviderList_1 = require("./_SAMLProviderList");
exports.CreateIdentityPoolInput = {
    type: 'structure',
    required: [
        'IdentityPoolName',
        'AllowUnauthenticatedIdentities',
    ],
    members: {
        IdentityPoolName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        AllowUnauthenticatedIdentities: {
            shape: {
                type: 'boolean',
            },
        },
        SupportedLoginProviders: {
            shape: _IdentityProviders_1._IdentityProviders,
        },
        DeveloperProviderName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        OpenIdConnectProviderARNs: {
            shape: _OIDCProviderList_1._OIDCProviderList,
        },
        CognitoIdentityProviders: {
            shape: _CognitoIdentityProviderList_1._CognitoIdentityProviderList,
        },
        SamlProviderARNs: {
            shape: _SAMLProviderList_1._SAMLProviderList,
        },
    },
};
//# sourceMappingURL=CreateIdentityPoolInput.js.map