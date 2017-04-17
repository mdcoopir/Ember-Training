import Ember from 'ember';

export default Ember.Controller.extend({
  newTitle: null,
  newBody: null,
  actions: {
    addPost() {
      this.store.createRecord('post', {
        title: this.get("newTitle"),
        body: this.get("newBody")
      }).save();
      Ember.set(this, 'newTitle', '');
      Ember.set(this, 'newBody', '');
    },
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
