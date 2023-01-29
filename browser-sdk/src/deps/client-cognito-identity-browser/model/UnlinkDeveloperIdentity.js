"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnlinkDeveloperIdentityInput_1 = require("./UnlinkDeveloperIdentityInput");
var UnlinkDeveloperIdentityOutput_1 = require("./UnlinkDeveloperIdentityOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.UnlinkDeveloperIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'UnlinkDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UnlinkDeveloperIdentityInput_1.UnlinkDeveloperIdentityInput,
    },
    output: {
        shape: UnlinkDeveloperIdentityOutput_1.UnlinkDeveloperIdentityOutput,
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
//# sourceMappingURL=UnlinkDeveloperIdentity.js.map