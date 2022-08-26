import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";

const app = new cdk.App();

const stack = new cdk.Stack(app, "rust-lambda-cdk");

new lambda.Function(stack, "LambdaFunction", {
  functionName: `${stack.stackName}-main`,
  description: "Rust + Lambda + CDK",
  runtime: lambda.Runtime.PROVIDED_AL2,
  handler: `__placeholder`,
  code: lambda.Code.fromAsset(`${__dirname}/../target/cdk/release`),
  environment: {
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
  },
});
