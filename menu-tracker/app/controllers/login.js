import Ember from 'ember';
import UserValidations from '../validations/user';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  UserValidations,
  mySession: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  newUser: null,
  newUserChangeset: null,
  disableLoginButton: Ember.computed('email', 'password', function() {
    let changeset = this.get('newUserChangeset');
    if(changeset.get('isInvalid')) {
      return true;
    } else {
      return false;
    }
  }),
  init(){
    this.set('newUser', this.get('store').createRecord('user', {email: "", displayName: "", password: ""}));
    this.set('newUserChangeset', new Changeset(this.get('newUser'), lookupValidator(UserValidations), UserValidations));
  },
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
