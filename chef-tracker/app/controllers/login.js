import Ember from 'ember';

export default Ember.Controller.extend({
  mySession: Ember.inject.service('mySession'),
  flashMessages: Ember.inject.service(),
  email: "",
  password: "",
  disableLoginButton: Ember.computed('email', 'password', function() {
    let email = this.get('email'), pw = this.get('password')
    if(email && email.length>0 && pw && pw.length>0) {
      return false;
    } else {
      return true;
    }
  }),
  actions: {
    login(email, password){
      this.get('mySession').login(email, password).then(() => {
        let message = 'You are logged in as: '+this.get('mySession.currentUser.displayName');
        this.get('flashMessages').success(message);
        this.transitionToRoute('restaurants');
      }).catch(() => {
        this.get('flashMessages').danger('Email and password are not valid.');
      });
    }
  }
});
