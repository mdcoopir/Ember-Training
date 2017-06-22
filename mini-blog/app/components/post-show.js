import Ember from 'ember';

export default Ember.Component.extend({
  isEditting: false,
  actions: {
    toggleEdit() {
      this.toggleProperty('isEditting');
    },
    savePost(post) {
      this.send('toggleEdit');
      this.sendAction('savePost', post);
    },
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
