import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { ListIdentityPoolsInput } from '../types/ListIdentityPoolsInput';
import { ListIdentityPoolsOutput } from '../types/ListIdentityPoolsOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class ListIdentityPoolsCommand implements __aws_sdk_types.Command<InputTypesUnion, ListIdentityPoolsInput, OutputTypesUnion, ListIdentityPoolsOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: ListIdentityPoolsInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<ListIdentityPoolsInput, ListIdentityPoolsOutput, Blob>;
    constructor(input: ListIdentityPoolsInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<ListIdentityPoolsInput, ListIdentityPoolsOutput>;
}
