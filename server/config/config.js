const env = process.env.NODE_ENV || 'development';
console.log('env *****', env);

if (env === 'test' || env === 'development') {
    var config = require('./config.json');
    var envConfig = config[env];
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}

var configOut = {
    port: process.env.PORT || 3000
};

module.exports.config = configOut;
