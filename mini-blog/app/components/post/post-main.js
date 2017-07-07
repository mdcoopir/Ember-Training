import Ember from 'ember';

export default Ember.Component.extend({
  isEditting: false,
  actions: {
    toggleEdit() {
      this.toggleProperty('isEditting');
    },
    addComment(comment, post) {
      this.sendAction('addComment', comment, post);
    }
  }
});
