"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetIdentityPoolRolesInput_1 = require("./GetIdentityPoolRolesInput");
var GetIdentityPoolRolesOutput_1 = require("./GetIdentityPoolRolesOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.GetIdentityPoolRoles = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'GetIdentityPoolRoles',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetIdentityPoolRolesInput_1.GetIdentityPoolRolesInput,
    },
    output: {
        shape: GetIdentityPoolRolesOutput_1.GetIdentityPoolRolesOutput,
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
//# sourceMappingURL=GetIdentityPoolRoles.js.map