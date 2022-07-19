const { writeFile } = require('fs');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

const writeFilePromisified = promisify(writeFile);

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
  production: false,
   auth0: {
    domain: '${process.env['AUTH0_DOMAIN']}',
    clientId: '${process.env['AUTH0_CLIENT_ID']}',
    redirectUri: '${process.env['AUTH0_CALLBACK_URL']}',
    audience: '${process.env['AUTH0_AUDIENCE']}',
  },
  api: {
    serverUrl: '${process.env['API_SERVER_URL']}',
  },
};
`;

(async () => {
  try {
    await writeFilePromisified(targetPath, envConfigFile);
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
