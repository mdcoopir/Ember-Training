import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      folders: this.store.findAll('folder'),
      rootFolders: Ember.computed.filterBy('folders', 'parent.content', null)
    });
  }
});
