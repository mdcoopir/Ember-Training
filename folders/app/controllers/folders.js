import Ember from 'ember';

export default Ember.Controller.extend({
  rootFolders: Ember.computed.filterBy('model.folders', 'parent.content', null)
});
