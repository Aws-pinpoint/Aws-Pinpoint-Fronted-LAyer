"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnlinkIdentityInput_1 = require("./UnlinkIdentityInput");
var UnlinkIdentityOutput_1 = require("./UnlinkIdentityOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ExternalServiceException_1 = require("./ExternalServiceException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.UnlinkIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'UnlinkIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UnlinkIdentityInput_1.UnlinkIdentityInput,
    },
    output: {
        shape: UnlinkIdentityOutput_1.UnlinkIdentityOutput,
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
//# sourceMappingURL=UnlinkIdentity.js.map