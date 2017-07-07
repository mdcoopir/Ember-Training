import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: '-',
  isEditting: false,
  actions: {
    toggleExpand(){
      var newExpanded = (this.get('isExpanded') === '-') ? '+': '-';
      this.set('isExpanded', newExpanded);
    },
    addComment(comment, parent) {
      this.sendAction('addComment', comment, parent);
    },
    toggleIsEditting(){
        this.toggleProperty('isEditting');
    },
  }
});
