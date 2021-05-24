import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  frameworkVersion: '2',
  functions: {
    lambda: {
      events: [
        {
          http: {
            cors: true,
            method: 'ANY',
            path: '/',
          },
        },
        {
          http: {
            cors: true,
            method: 'ANY',
            path: '{any+}',
          },
        },
      ],
      handler: 'src/lambda.handler',
      name: `CHANGE-FUNCTION-NAME-\${opt:stage}`,
    },
  },
  plugins: ['serverless-plugin-typescript', 'serverless-plugin-optimize', 'serverless-offline'],
  provider: {
    // apiName: `CHANGE-API-NAME-\${opt:stage}`, @TODO
    apiGateway: {
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
    name: 'aws',
    region: 'us-west-2',
    runtime: 'nodejs14.x',
  },
  service: 'CHANGE-SERVICE-NAME',
};

module.exports = serverlessConfiguration;
