import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { GetIdentityPoolRolesInput } from '../types/GetIdentityPoolRolesInput';
import { GetIdentityPoolRolesOutput } from '../types/GetIdentityPoolRolesOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class GetIdentityPoolRolesCommand implements __aws_sdk_types.Command<InputTypesUnion, GetIdentityPoolRolesInput, OutputTypesUnion, GetIdentityPoolRolesOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: GetIdentityPoolRolesInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<GetIdentityPoolRolesInput, GetIdentityPoolRolesOutput, Blob>;
    constructor(input: GetIdentityPoolRolesInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<GetIdentityPoolRolesInput, GetIdentityPoolRolesOutput>;
}
