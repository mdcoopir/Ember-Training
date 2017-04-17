import Ember from 'ember';

export default Ember.Controller.extend({
  newItem: '',
  menuLength: Ember.computed.alias('model.foods.length'),
  availableItems: Ember.computed.filterBy('model.foods', 'isAvailable', true),
  disableNewFoodButton: Ember.computed('newItem', function(){
    return (this.get('newItem')==='');
  }),
  actions: {
    saveNewItem() {
      this.store.createRecord('food', {
        isAvaailable: false,
        name: this.get("newItem")
      }).save();
      Ember.set(this, 'newItem', '');
    }
  }

});
