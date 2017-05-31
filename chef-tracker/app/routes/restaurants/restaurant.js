import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      restaurant:  this.store.findRecord('restaurant', params.restaurant_id,  { reload: true }),
      chefs: this.store.findAll('chef',  {restaurant: this.get('restaurant')}, { reload: true })
    });
  }
});
