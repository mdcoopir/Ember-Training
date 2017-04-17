import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyItem(food) {
      food.destroyRecord();
      this.transitionToRoute('foods');
    },
    saveFood() {
      this.get('model').save();
      this.transitionToRoute('foods.food', this.get('model.id'));
    },
    selectCourse(value) {
      this.get('model').set('course', value);
    }
  }
});
