import Ember from 'ember';

export default Ember.Controller.extend({
  mySession: Ember.inject.service(),
  actions: {
    login(user){
      this.set('mySession.currentUser', user);
    }
  }
});
