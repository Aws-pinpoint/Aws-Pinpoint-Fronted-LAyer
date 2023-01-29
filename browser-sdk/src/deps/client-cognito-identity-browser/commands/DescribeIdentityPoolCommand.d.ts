import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { DescribeIdentityPoolInput } from '../types/DescribeIdentityPoolInput';
import { DescribeIdentityPoolOutput } from '../types/DescribeIdentityPoolOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class DescribeIdentityPoolCommand implements __aws_sdk_types.Command<InputTypesUnion, DescribeIdentityPoolInput, OutputTypesUnion, DescribeIdentityPoolOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: DescribeIdentityPoolInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<DescribeIdentityPoolInput, DescribeIdentityPoolOutput, Blob>;
    constructor(input: DescribeIdentityPoolInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<DescribeIdentityPoolInput, DescribeIdentityPoolOutput>;
}
