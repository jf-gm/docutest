"use strict";

module.exports = async (config) => ({
  WebAppUrl: {
    Type: "String",
    Default: config.appUrl,
    Description: "Url for the SPA",
  },
  GitSource: {
    Type: "String",
    Default: config.gitSource,
    AllowedValues: [
      "BITBUCKET",
      "CODECOMMIT",
      "CODEPIPELINE",
      "GITHUB",
      "GITHUB_ENTERPRISE",
      "NO_SOURCE",
      "S3",
    ],
    Description: "Service where your Git repository is hosted",
  },
  GitLocation: {
    Type: "String",
    Default: config.gitLocation,
    Description: "Url for your Git repository",
  },
});
