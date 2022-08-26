[Rust をつかって AWS Lambda を実装＆AWS CDK でデプロイする](https://dev.classmethod.jp/articles/rust-lambda-cdk/)をやってみた

### invoke on local stack

```bash
aws --endpoint-url=http://localhost:4566 lambda invoke --function-name rust-lambda-cdk-main --payload $(echo '{"name": "foo"}' | base64) /dev/stdout
```

### invoke on aws

```bash
aws lambda invoke --function-name rust-lambda-cdk-main --payload $(echo '{"name": "bar"}' | base64) /dev/stdout
```
