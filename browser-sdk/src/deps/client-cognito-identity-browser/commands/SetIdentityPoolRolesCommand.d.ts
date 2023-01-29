import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { SetIdentityPoolRolesInput } from '../types/SetIdentityPoolRolesInput';
import { SetIdentityPoolRolesOutput } from '../types/SetIdentityPoolRolesOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class SetIdentityPoolRolesCommand implements __aws_sdk_types.Command<InputTypesUnion, SetIdentityPoolRolesInput, OutputTypesUnion, SetIdentityPoolRolesOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: SetIdentityPoolRolesInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<SetIdentityPoolRolesInput, SetIdentityPoolRolesOutput, Blob>;
    constructor(input: SetIdentityPoolRolesInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<SetIdentityPoolRolesInput, SetIdentityPoolRolesOutput>;
}
