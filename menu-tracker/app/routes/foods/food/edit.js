import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      restaurants: this.store.findAll('restaurant'),
      food: this.store.findRecord('food', params.food_id,  { reload: true })
    });
  }
});
