import Ember from 'ember';

export default Ember.Controller.extend({
  mySession: Ember.inject.service(),
  me: Ember.computed.alias('mySession.currentUser'),
  actions: {
    sellRestaurant(restaurant) {
      let user=this.get('mySession.currentUser');
      user.get('restaurants').removeObject(restaurant);
      restaurant.save().then(()=>{
        user.save();
      });
    }
  }
});
