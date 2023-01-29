"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOpenIdTokenForDeveloperIdentityInput_1 = require("./GetOpenIdTokenForDeveloperIdentityInput");
var GetOpenIdTokenForDeveloperIdentityOutput_1 = require("./GetOpenIdTokenForDeveloperIdentityOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var DeveloperUserAlreadyRegisteredException_1 = require("./DeveloperUserAlreadyRegisteredException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.GetOpenIdTokenForDeveloperIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'GetOpenIdTokenForDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetOpenIdTokenForDeveloperIdentityInput_1.GetOpenIdTokenForDeveloperIdentityInput,
    },
    output: {
        shape: GetOpenIdTokenForDeveloperIdentityOutput_1.GetOpenIdTokenForDeveloperIdentityOutput,
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
            shape: DeveloperUserAlreadyRegisteredException_1.DeveloperUserAlreadyRegisteredException,
        },
    ],
};
//# sourceMappingURL=GetOpenIdTokenForDeveloperIdentity.js.map