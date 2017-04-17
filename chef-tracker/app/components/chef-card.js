import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  toggleAvailablity(chef) {
    chef.toggleProperty('isCooking');
    chef.save();
  },

  destroyItem(chef) {
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
