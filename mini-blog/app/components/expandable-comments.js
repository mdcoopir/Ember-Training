import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: true,
  isEditting: false,
  actions: {
    toggleExpand(){
        this.toggleProperty('isExpanded');
    },
    toggleIsEditting(){
        this.toggleProperty('isEditting');
    },
    saveComment(comment) {
      this.send('toggleIsEditting');
      this.sendAction('saveComment', comment);
    },
    deletePost(comment) {
      comment.destroyRecord();
    }
  }
});
