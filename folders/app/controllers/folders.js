import Ember from 'ember';

export default Ember.Controller.extend({
  isAddingItem: false,
  actions: {
    resetItemType () {
      this.set('isAddingItem', false);
    },
    addingItem() {
      this.set('isAddingItem', true);      
    }
  }
});
