"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetCredentialsForIdentityInput_1 = require("./GetCredentialsForIdentityInput");
var GetCredentialsForIdentityOutput_1 = require("./GetCredentialsForIdentityOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InvalidIdentityPoolConfigurationException_1 = require("./InvalidIdentityPoolConfigurationException");
var InternalErrorException_1 = require("./InternalErrorException");
var ExternalServiceException_1 = require("./ExternalServiceException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.GetCredentialsForIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'GetCredentialsForIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCredentialsForIdentityInput_1.GetCredentialsForIdentityInput,
    },
    output: {
        shape: GetCredentialsForIdentityOutput_1.GetCredentialsForIdentityOutput,
    },
    errors: [
        {
            shape: InvalidParameterException_1.InvalidParameterException,
        },
        {
            shape: ResourceNotFoundException_1.ResourceNotFoundException,
        },
        {
            shape: NotAuthorizedException_1.NotAuthorizedException,
        },
        {
            shape: ResourceConflictException_1.ResourceConflictException,
        },
        {
            shape: TooManyRequestsException_1.TooManyRequestsException,
        },
        {
            shape: InvalidIdentityPoolConfigurationException_1.InvalidIdentityPoolConfigurationException,
        },
        {
            shape: InternalErrorException_1.InternalErrorException,
        },
        {
            shape: ExternalServiceException_1.ExternalServiceException,
        },
    ],
};
//# sourceMappingURL=GetCredentialsForIdentity.js.map