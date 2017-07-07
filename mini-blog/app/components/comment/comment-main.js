import Ember from 'ember';

export default Ember.Component.extend({
  showComments: '+',
  isAdding: false,
  actions: {
    toggleShowComments() {
      var newShowComments = (this.get('showComments') === '-') ? '+': '-';
      this.set('showComments',newShowComments);
    },
    toggleAdding() {
      this.toggleProperty('isAdding');
    },
    addComment(comment, post) {
      this.sendAction('addComment', comment, post);
    }
  }
});
