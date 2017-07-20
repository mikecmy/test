const envConfig = {
    development: {
        biz: require('./biz'),
        env: require('./env.development'),
        entrances: require('./entrance.js'),
    },

    test: {
        biz: require('./biz'),
        env: require('./env.test'),
        entrances: require('./entrance.js'),
    },

    pre: {
        biz: require('./biz'),
        env: require('./env.prerelease'),
        entrances: require('./entrance.js'),
    },

    production: {
        biz: require('./biz'),
        env: require('./env.production'),
        entrances: require('./entrance.js'),
    },
};
module.exports = envConfig[process.env.NODE_ENV];