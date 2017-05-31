import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      restaurants: this.store.findAll('restaurant'),
      chef: this.store.findRecord('chef', params.chef_id,  { reload: true })
    });
  }
});
