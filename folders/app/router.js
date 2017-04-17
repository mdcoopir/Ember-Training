import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('folders', function() {
    this.route('folder', {path: ":folder_id"}, function() {
      this.route('files', function () {
        this.route('file', {path: ":file_id"});
      });
    });
  });
});

export default Router;
