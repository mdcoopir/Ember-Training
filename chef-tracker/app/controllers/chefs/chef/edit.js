import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveChef() {
      this.get('model.chef').save();
      this.transitionToRoute('chefs.chef', this.get('model.chef.id'));
    },
    addStudent(chef) {
      chef.incrementProperty('students');
      chef.save();
    },
    removeStudent(chef) {
      if(chef.get('students')>0) {
        chef.decrementProperty('students');
        chef.save();
      }
    },
    selectRestaurant(selection) {
      let chef=this.get('model.chef');
      // let restaurant=this.get('model.restaurants');
      // let oldRestaurant = this.get('model.chef.restaurant');
      chef.get('restaurant').then((restaurant)=> {
        chef.set('restaurant', selection);
        selection.save();
        restaurant.save();
      });
      // chef.set('restaurant', selection);
//      chef.save();
//      this.transitionToRoute('restaurants/restaurant/'+oldRestaurant+'/saveFood/del');
//      this.transitionToRoute('restaurants/restaurant/'+selection+'/saveFood/'+food.id);
    }
  }
});
