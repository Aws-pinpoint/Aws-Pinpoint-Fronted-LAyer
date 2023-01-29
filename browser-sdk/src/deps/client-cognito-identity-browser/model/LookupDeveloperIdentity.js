"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LookupDeveloperIdentityInput_1 = require("./LookupDeveloperIdentityInput");
var LookupDeveloperIdentityOutput_1 = require("./LookupDeveloperIdentityOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.LookupDeveloperIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'LookupDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: LookupDeveloperIdentityInput_1.LookupDeveloperIdentityInput,
    },
    output: {
        shape: LookupDeveloperIdentityOutput_1.LookupDeveloperIdentityOutput,
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
    ],
};
//# sourceMappingURL=LookupDeveloperIdentity.js.map