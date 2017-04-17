import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveChef() {
      this.get('model').save();
      this.transitionToRoute('chefs.chef', this.get('model.id'));
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
    }
  }
});
