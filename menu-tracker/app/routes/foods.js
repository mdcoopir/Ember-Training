import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      foods: this.store.findAll('food')
    });
  }
});
