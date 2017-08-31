import Ember from 'ember';

export default Ember.Controller.extend({
  mySession: Ember.inject.service('mySession')
});
