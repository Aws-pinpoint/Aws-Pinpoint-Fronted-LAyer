import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { DescribeIdentityInput } from '../types/DescribeIdentityInput';
import { DescribeIdentityOutput } from '../types/DescribeIdentityOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class DescribeIdentityCommand implements __aws_sdk_types.Command<InputTypesUnion, DescribeIdentityInput, OutputTypesUnion, DescribeIdentityOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: DescribeIdentityInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<DescribeIdentityInput, DescribeIdentityOutput, Blob>;
    constructor(input: DescribeIdentityInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<DescribeIdentityInput, DescribeIdentityOutput>;
}
