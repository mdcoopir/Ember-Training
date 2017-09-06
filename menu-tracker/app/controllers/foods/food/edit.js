import Ember from 'ember';

export default Ember.Controller.extend({
  mySession: Ember.inject.service(),
  actions: {
    saveFood() {
      this.get('model.food').save().then(()=> {
        this.transitionToRoute('foods.food', this.get('model.food.id'));
      });
    },
    selectCourse(value) {
      this.get('model.food').set('course', value);
    },
    selectRestaurant(selection) {
      let food=this.get('model.food');
      // let restaurant=this.get('model.restaurants');
      // let oldRestaurant = this.get('model.food.restaurant');
      food.get('restaurant').then((restaurant)=> {
        food.set('restaurant', selection);
        selection.save();
        restaurant.save();
      });
      // food.set('restaurant', selection);
//      food.save();
//      this.transitionToRoute('restaurants/restaurant/'+oldRestaurant+'/saveFood/del');
//      this.transitionToRoute('restaurants/restaurant/'+selection+'/saveFood/'+food.id);
    }
  }
});
