# Bulent's Notes

Change the default region to us-east-1 (where all the models are available). Make the change in ~/.aws/config

```
aws sso login
aws configure get region
npm install -g aws-cdk
npm -g install typescript

aws sts get-caller-identity  #get the account number

cd source/infrastructure # cdk.json is here
cdk bootstrap 
 ```

Update the **cdk-asset-bucket** property in source/infrastructure/cdk.json. The value of this property should be the **bucket name** that cdk bootstrap process created.
```
  npm install
  npm run build
  cdk synth
  cdk deploy <DeploymentPlatformStack> --parameters AdminUserEmail=<replace with admin user's email>
```

Stage synthesized CDK assets (such as lambdas, synthesized CloudFormation templates, etc.) to S3:
```
cdk synth
cd <project-directory>/source
./stage-assets.sh
```
**Assets must be staged every time there is a change in the codebase.**

**Remove the WAF Web ACL** to avoid the cost.
Disassociate the API Gateway from Web ACL.
Delete the Web ACL.

