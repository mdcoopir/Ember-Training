import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    toggleAvailablity(food) {
      food.toggleProperty('isAvailable');
      food.save();
    },
    destroyItem(food) {
      food.destroyRecord();
      this.transitionToRoute('foods');
    }
  }
});
