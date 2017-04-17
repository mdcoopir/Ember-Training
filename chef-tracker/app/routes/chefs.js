import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      chefs: this.store.findAll('chef'),
      greeting: this.store.findAll('greeting')
    });
  }
});
