"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetIdInput_1 = require("./GetIdInput");
var GetIdOutput_1 = require("./GetIdOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var LimitExceededException_1 = require("./LimitExceededException");
var ExternalServiceException_1 = require("./ExternalServiceException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.GetId = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'GetId',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetIdInput_1.GetIdInput,
    },
    output: {
        shape: GetIdOutput_1.GetIdOutput,
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
            shape: LimitExceededException_1.LimitExceededException,
        },
        {
            shape: ExternalServiceException_1.ExternalServiceException,
        },
    ],
};
//# sourceMappingURL=GetId.js.map