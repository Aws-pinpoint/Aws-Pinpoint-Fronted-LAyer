"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOpenIdTokenInput_1 = require("./GetOpenIdTokenInput");
var GetOpenIdTokenOutput_1 = require("./GetOpenIdTokenOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ExternalServiceException_1 = require("./ExternalServiceException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.GetOpenIdToken = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'GetOpenIdToken',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetOpenIdTokenInput_1.GetOpenIdTokenInput,
    },
    output: {
        shape: GetOpenIdTokenOutput_1.GetOpenIdTokenOutput,
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
            shape: InternalErrorException_1.InternalErrorException,
        },
        {
            shape: ExternalServiceException_1.ExternalServiceException,
        },
    ],
};
//# sourceMappingURL=GetOpenIdToken.js.map