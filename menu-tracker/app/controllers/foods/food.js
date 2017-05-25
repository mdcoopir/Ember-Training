import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyItem(food) {
      food.destroyRecord();
      this.transitionToRoute('foods');
    }
  }
});
