"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeDeveloperIdentitiesInput_1 = require("./MergeDeveloperIdentitiesInput");
var MergeDeveloperIdentitiesOutput_1 = require("./MergeDeveloperIdentitiesOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.MergeDeveloperIdentities = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'MergeDeveloperIdentities',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: MergeDeveloperIdentitiesInput_1.MergeDeveloperIdentitiesInput,
    },
    output: {
        shape: MergeDeveloperIdentitiesOutput_1.MergeDeveloperIdentitiesOutput,
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
//# sourceMappingURL=MergeDeveloperIdentities.js.map