import Ember from 'ember';

export default Ember.Controller.extend({
  newChef: null,
  numChefs: Ember.computed.alias('model.chefs.length'),
  availChefs: Ember.computed.filterBy('model.chefs', 'isCooking', true),
  numAvailChefs: Ember.computed.alias('availChefs.length'),
  studentCountArray: Ember.computed.mapBy('model.chefs', 'students'),
  totalStudents: Ember.computed.sum('studentCountArray'),
  actions: {
    exit: function(chef) {
      Ember.set(chef, "isCooking", false);
      chef.save();
    },
    enter: function(chef) {
      Ember.set(chef, "isCooking", true);
      chef.save();
    },
    saveNewItem() {
      this.store.createRecord('chef', {
        name: this.get("newChef")
      }).save();
      Ember.set(this, 'newChef', '');
    }

  }
});
