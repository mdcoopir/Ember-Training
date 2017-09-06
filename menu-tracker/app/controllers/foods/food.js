import Ember from 'ember';

export default Ember.Controller.extend({
  mySession: Ember.inject.service(),
  actions: {
    destroyItem(food) {
      food.destroyRecord();
      this.transitionToRoute('foods');
    }
  }
});
