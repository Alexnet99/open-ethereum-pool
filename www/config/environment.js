/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-ethereum-pool',
    environment: environment,
    baseURL: '/',
    rootURL: '/',

    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {

      COIN: 'etz',
      CoinName: 'ETZ',
      PPLNS: '3000',
      blocksMature: '60',

      // API host and port
      ApiUrl: '//etz.automo.io/',

      // HTTP mining endpoint
      HttpHost: 'http://etz.automo.io',
      HttpPort: 8002,

      // Stratum mining endpoint
      StratumHost: 'etz.automo.io',
      StratumPort: 8002,

      // Stratum Nicehash mining endpoint
      StratumHostNH: 'etz.automo.io',
      StratumPortNH: 8088,

      StratumWallet: "0x1d9a77f83497d6a944872128a8f8ea967966af17",


      // Fee and payout details
      PoolFee: '0.0%',
      PayoutThreshold: '0.5',

      // For network hashrate (change for your favourite fork)
      BlockTime: 13
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://etz.automo.io/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
