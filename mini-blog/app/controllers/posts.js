import Ember from 'ember';

export default Ember.Controller.extend({
  newTitle: null,
  newBody: null,
  isExpanded: false,
  actions: {
    toggleExpand(){
      this.toggleProperty('isExpanded');
    },
    addPost() {
      this.store.createRecord('post', {
        title: this.get("newTitle"),
        body: this.get("newBody")
      }).save();
      Ember.set(this, 'newTitle', '');
      Ember.set(this, 'newBody', '');
    },
    savePost(post) {
      post.save();
    },
    deletePost(post) {
      post.destroyRecord();
    },
    saveComment(comment) {
      comment.save();
    },
  }
});
