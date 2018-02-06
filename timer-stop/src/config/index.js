const environment =  process.env.NODE_ENV;

let configSettings = null;
let commonSettings = require('./common');

console.log("Environment is: %s", environment);

const settings = {
  ...commonSettings,
  ...configSettings,
};

export default settings;
