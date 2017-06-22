import Ember from 'ember';

export default Ember.Controller.extend({
  isEeditting: false,
  actions: {
    editPost() {
      this.toggleProperty('editting');
    },
    savePost(post) {
      post.save();
      this.toggleProperty('editting');
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionToRoute('posts');
    }
  }
});
