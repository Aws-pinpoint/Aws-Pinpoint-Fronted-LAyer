"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _IdentityProviders_1 = require("./_IdentityProviders");
var _OIDCProviderList_1 = require("./_OIDCProviderList");
var _CognitoIdentityProviderList_1 = require("./_CognitoIdentityProviderList");
var _SAMLProviderList_1 = require("./_SAMLProviderList");
exports.DescribeIdentityPoolOutput = {
    type: 'structure',
    required: [
        'IdentityPoolId',
        'IdentityPoolName',
        'AllowUnauthenticatedIdentities',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
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
//# sourceMappingURL=DescribeIdentityPoolOutput.js.map