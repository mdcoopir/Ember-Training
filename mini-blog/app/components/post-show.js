import Ember from 'ember';

export default Ember.Component.extend({
  editting: false,
  actions: {
    editPost() {
      this.toggleProperty('editting');
    },
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
