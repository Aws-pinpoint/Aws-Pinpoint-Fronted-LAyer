import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { ListIdentitiesInput } from '../types/ListIdentitiesInput';
import { ListIdentitiesOutput } from '../types/ListIdentitiesOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class ListIdentitiesCommand implements __aws_sdk_types.Command<InputTypesUnion, ListIdentitiesInput, OutputTypesUnion, ListIdentitiesOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: ListIdentitiesInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<ListIdentitiesInput, ListIdentitiesOutput, Blob>;
    constructor(input: ListIdentitiesInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<ListIdentitiesInput, ListIdentitiesOutput>;
}
