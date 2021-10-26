"use strict";

module.exports = (config) => ({
  /*
    CI/CD Setup
  */
  appFrontendBuildRole: {
    Type: "AWS::IAM::Role",
    Properties: {
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: {
          Effect: "Allow",
          Principal: {
            Service: "codebuild.amazonaws.com",
          },
          Action: "sts:AssumeRole",
        },
      },
      ManagedPolicyArns: [
        "arn:aws:iam::aws:policy/AmazonS3FullAccess",
        "arn:aws:iam::aws:policy/CloudWatchLogsFullAccess",
        "arn:aws:iam::aws:policy/CloudFrontFullAccess",
      ],
    },
  },

  appFrontendCodeBuild: {
    Type: "AWS::CodeBuild::Project",
    Properties: {
      Name: `${config.env}-${config.appName}-frontend`,
      Description: `Builds and deploys ${config.appName}-frontend project`,
      ServiceRole: { "Fn::GetAtt": ["appFrontendBuildRole", "Arn"] },
      Artifacts: {
        Type: "no_artifacts",
      },
      Environment: {
        Type: "LINUX_CONTAINER",
        ComputeType: "BUILD_GENERAL1_SMALL",
        Image: "aws/codebuild/standard:4.0",
        EnvironmentVariables: [
          {
            Name: "CLOUDFRONT_DIST_ID",
            Type: "PLAINTEXT",
            Value: { Ref: "appFrontendDistribution" },
          },
          {
            Name: "S3_BUCKET_NAME",
            Type: "PLAINTEXT",
            Value: `${config.env}-${config.appName}-frontend-bucket`,
          },
        ],
      },
      Source: {
        Type: { Ref: "GitSource" },
        Location: { Ref: "GitLocation" },
      },
      SourceVersion: config.frontendBranch,
      Triggers: {
        Webhook: true,
        FilterGroups: [
          [
            { Type: "EVENT", Pattern: "PUSH, PULL_REQUEST_MERGED" },
            { Type: "HEAD_REF", Pattern: config.frontendBranch },
          ],
        ],
      },
      TimeoutInMinutes: 30,
      LogsConfig: {
        CloudWatchLogs: {
          Status: "ENABLED",
        },
      },
      Tags: [
        { Key: "Name", Value: `${config.env}-appFrontendCodeBuild` },
        { Key: "Project", Value: config.appName },
        { Key: "Env", Value: config.env },
      ],
    },
  },
});
