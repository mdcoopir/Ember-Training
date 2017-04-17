import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    fireChef(chef) {
      chef.destroyRecord();
      this.transitionToRoute('chefs');
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
