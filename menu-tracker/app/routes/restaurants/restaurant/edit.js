import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      restaurant:  this.store.findRecord('restaurant', params.restaurant_id,  { reload: true }),
      foods: this.store.findAll('food',  {restaurant: this.get('restaurant')}, { reload: true })
    });
  }
});
