import Ember from 'ember';

export default Ember.Helper.extend({
  mySession: Ember.inject.service(),
  compute([chefOwnerId]) {
    let user=this.get('mySession.currentUser');
    return user && user.get('id')===chefOwnerId;
  }
});
