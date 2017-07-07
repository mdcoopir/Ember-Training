import Ember from 'ember';

export default Ember.Controller.extend({
  newTitle: null,
  newBody: null,
  isExpanded: '+',
  actions: {
    toggleExpand(){
      var newExpand = (this.get('isExpanded') === '-') ? '+': '-';
      this.set('isExpanded', newExpand);
    },
    addPost(postEntry) {
      this.store.createRecord('post', {
        title: postEntry._changes.title,
        body: postEntry._changes.body
      }).save();
    },
    addComment(comment, post) {
      if(post.title ){
        this.store.createRecord('comment', {
          message: comment._changes.message,
          post: post
        }).save().then(()=>{
          post.save();
        });
      } else {
        this.store.createRecord('comment', {
          message: comment._changes.message,
          parent: post
        }).save().then(()=>{
          post.save();
        });
      }
    }
  }
});
