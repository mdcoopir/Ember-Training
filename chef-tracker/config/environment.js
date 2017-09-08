/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chef-tracker',
    environment: environment,
    firebase: {
      apiKey: "AIzaSyCRBeuu2gjwiMCMWvdob7F7BLdGzgseBZg",
      authDomain: "chef-tracker-test.firebaseapp.com",
      databaseURL: "https://chef-tracker-test.firebaseio.com",
      projectId: "chef-tracker-test",
      storageBucket: "",
      messagingSenderId: "508959697684"
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
    ENV.firebase = {
      apiKey: "AIzaSyAgT4Wsl73VuT4u6bjcf99S9ZRi4eY3YVg",
      authDomain: "chef-tracker-d9878.firebaseapp.com",
      databaseURL: "https://chef-tracker-d9878.firebaseio.com",
      projectId: "chef-tracker-d9878",
      storageBucket: "chef-tracker-d9878.appspot.com",
      messagingSenderId: "659809175832"
    };
  }

  return ENV;
};
