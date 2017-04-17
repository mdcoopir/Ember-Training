import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleAvailablity(food) {
      food.toggleProperty('isAvailable');
      food.save();
    },
    toggleOpen() {
      this.toggleProperty('isOpen');
    },
    destroyItem(food) {
      food.destroyRecord();
      this.transitionToRoute('foods');
    }
  }
});
