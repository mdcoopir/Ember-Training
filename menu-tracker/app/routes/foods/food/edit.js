import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      food: this.store.findRecord('food', params.food_id),
      restaurants: this.store.findAll('restaurant')
    });
  }
});
