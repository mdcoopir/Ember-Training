import Ember from 'ember';

export default Ember.Component.extend({
  isEditting: false,
  showComments: false,
  actions: {
    toggleEdit() {
      this.toggleProperty('isEditting');
    },
    toggleShowComments() {
      this.toggleProperty('showComments');
    },
    savePost(post) {
      this.send('toggleEdit');
      this.sendAction('savePost', post);
    },
    deletePost(post) {
      post.destroyRecord();
    },
    saveComment(comment) {
      this.sendAction('saveComment', comment);
    }
  }
});
