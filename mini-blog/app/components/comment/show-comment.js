import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  isAdding: false,
  actions: {
    toggleIsEditting(){
      this.sendAction('toggleIsEditting');
    },
    deleteComment(comment) {
      comment.destroyRecord();
    },
    toggleAdding() {
      this.toggleProperty('isAdding');
    },
    addComment(comment, parent) {
      this.sendAction('addComment', comment, parent);
    }
  }
});
