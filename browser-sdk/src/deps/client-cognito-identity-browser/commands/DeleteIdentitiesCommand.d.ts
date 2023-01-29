import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { DeleteIdentitiesInput } from '../types/DeleteIdentitiesInput';
import { DeleteIdentitiesOutput } from '../types/DeleteIdentitiesOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class DeleteIdentitiesCommand implements __aws_sdk_types.Command<InputTypesUnion, DeleteIdentitiesInput, OutputTypesUnion, DeleteIdentitiesOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: DeleteIdentitiesInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<DeleteIdentitiesInput, DeleteIdentitiesOutput, Blob>;
    constructor(input: DeleteIdentitiesInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<DeleteIdentitiesInput, DeleteIdentitiesOutput>;
}
