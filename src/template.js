"use strict";
const parameters = require("./components/parameters");
const frontend = require("./components/frontend");
const cicd = require("./components/cicd");

/*
  Base CloudFormation template (JSON format)
    We are defining it in JS for flexibility
*/

module.exports = async (config) => ({
  AWSTemplateFormatVersion: "2010-09-09",
  Description: `Base Environment Configuration for ${config.appName}`,
  Parameters: await parameters(config),
  Resources: {
    ...frontend(config),
    ...cicd(config),
  },
  Outputs: {
    WebsiteURL: {
      Value: { "Fn::GetAtt": ["appFrontendBucket", "WebsiteURL"] },
      Description: "URL for website hosted on S3",
    },
    S3BucketSecureURL: {
      Value: {
        "Fn::Join": ["", ["https://", { "Fn::GetAtt": ["appFrontendBucket", "DomainName"] }]],
      },
      Description: "Name of S3 bucket to hold website content",
    },
  },
});
