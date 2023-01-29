"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SetIdentityPoolRolesInput_1 = require("./SetIdentityPoolRolesInput");
var SetIdentityPoolRolesOutput_1 = require("./SetIdentityPoolRolesOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ConcurrentModificationException_1 = require("./ConcurrentModificationException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.SetIdentityPoolRoles = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'SetIdentityPoolRoles',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: SetIdentityPoolRolesInput_1.SetIdentityPoolRolesInput,
    },
    output: {
        shape: SetIdentityPoolRolesOutput_1.SetIdentityPoolRolesOutput,
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
            shape: ConcurrentModificationException_1.ConcurrentModificationException,
        },
    ],
};
//# sourceMappingURL=SetIdentityPoolRoles.js.map