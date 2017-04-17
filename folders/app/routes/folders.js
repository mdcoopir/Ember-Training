import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      folders: this.store.findAll('folder'),
    });
  }
});
