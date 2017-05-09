import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveFood() {
      this.get('model.food').save();
      this.transitionToRoute('foods.food', this.get('model.food.id'));
    },
    selectCourse(value) {
      this.get('model.food').set('course', value);
    },
    selectRestaurant(selection) {
      // let food=this.get('model.food');
      // let restaurant=this.get('model.restaurants');
      // let oldRestaurant = this.get('model.food.restaurant');
      // this.set('model.food.restaurant', selection);
      // this.transitionToRoute('restaurants/restaurant/'+oldRestaurant+'/saveFood/del');
      // this.transitionToRoute('restaurants/restaurant/'+selection+'/saveFood/'+food.id);
      // food.save();
    }
  }
});
