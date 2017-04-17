/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mini-blog',
    environment: environment,
    firebase: {
      apiKey: "AIzaSyBezM_ncmrdlX3DdHVJguyLWl6ud09IYKY",
      authDomain: "mini-blog-9919e.firebaseapp.com",
      databaseURL: "https://mini-blog-9919e.firebaseio.com",
      projectId: "mini-blog-9919e",
      storageBucket: "mini-blog-9919e.appspot.com",
      messagingSenderId: "837456227277"
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
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
