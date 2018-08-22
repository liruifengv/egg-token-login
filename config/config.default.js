'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534907491055_6638';

  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: [ 'http://localhost:8080' ],
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};
