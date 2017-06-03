import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isEditing: false,
  isDeleting: false,
  fileName: null, 
  actions: {
    saveItem(itemNum) {
      if(itemNum) {
        this.get('store').findRecord('file', itemNum).then( item => {
          item.set('name', this.get('fileName'));
          item.save();
          this.set('fileName', '');
        }, error => {
          console.log('error reading folder #:'+itemNum +'/n'+error.message);
        });
      }
      this.set('isEditing', false);
    },
    deleteItem(itemNum) {
      if(itemNum) {
        this.get('store').findRecord('file', itemNum).then( item => {
          item.destroy();
        }, error => {
          console.log('error reading folder #:'+itemNum +'/n'+error.message);
        });
      }
      this.set('isDeleting', false);
    },
    editFileOn(name) {
      this.set("isEditing", true);
      this.set('fileName', name);
    },
    setEditFileFlag(value) {
      this.set("isEditing", value);
    },
    setDeleteFileFlag(value) {
      this.set("isDeleting", value);
    },
  }
});
