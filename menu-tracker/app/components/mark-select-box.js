import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectItem(value) {
      this.sendAction('action', value.srcElement.selectedOptions[0].value);
    }
  }
});
