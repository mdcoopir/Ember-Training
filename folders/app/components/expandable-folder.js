import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  itemType: '',
  actionType: '',
  isDeletingFolder: false,
  isAddingItem: Ember.computed('itemType', function() {
    return  (`${this.get("itemType")}`.length>0);
  }),
  actions: {
    toggleExpansion() {
      this.toggleProperty('isExpanded');
    }
  }
});
