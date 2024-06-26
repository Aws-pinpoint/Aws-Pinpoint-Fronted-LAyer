import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { DeleteIdentityPoolInput } from '../types/DeleteIdentityPoolInput';
import { DeleteIdentityPoolOutput } from '../types/DeleteIdentityPoolOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class DeleteIdentityPoolCommand implements __aws_sdk_types.Command<InputTypesUnion, DeleteIdentityPoolInput, OutputTypesUnion, DeleteIdentityPoolOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: DeleteIdentityPoolInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<DeleteIdentityPoolInput, DeleteIdentityPoolOutput, Blob>;
    constructor(input: DeleteIdentityPoolInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<DeleteIdentityPoolInput, DeleteIdentityPoolOutput>;
}
