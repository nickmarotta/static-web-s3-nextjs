const aws4 = require('aws4');
const AWS = require('aws-sdk');
const fetch = require('node-fetch');
const URL = require('url');

const getAWSCreds = async () => {
  const { accessKeyId, secretAccessKey, sessionToken } = await new AWS.CredentialProviderChain().resolvePromise();
  return { accessKeyId, secretAccessKey, sessionToken };
};

module.exports.sayHelloToApi = async () => {
  const path = '/path/to/api';
  const host = 'my.domain.name.com';
  const url = new URL.URL(path, `https://${host}/`).toString();

  const credentials = await getAWSCreds();
  const fetchOption = {
    method: 'POST',
    service: 'execute-api',
    region: 'us-east-1',
    headers: {
      'x-api-key': '<TODO: PASS IN API KEY>',
      'content-type': 'application/json; charset=utf-8',
    },
    host,
    path,
    body: JSON.stringify({
      sayHelloTo: 'world2',
    }),
  };
  const signedOptions = await aws4.sign(fetchOption, credentials);
  const response = await fetch(url, signedOptions);

  try {
    console.log(response.status);
    console.log(await response.json());
  } catch (e) {
    console.log(response.message);
  }
};
