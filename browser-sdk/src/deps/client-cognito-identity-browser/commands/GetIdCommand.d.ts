import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { GetIdInput } from '../types/GetIdInput';
import { GetIdOutput } from '../types/GetIdOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class GetIdCommand implements __aws_sdk_types.Command<InputTypesUnion, GetIdInput, OutputTypesUnion, GetIdOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: GetIdInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<GetIdInput, GetIdOutput, Blob>;
    constructor(input: GetIdInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<GetIdInput, GetIdOutput>;
}
