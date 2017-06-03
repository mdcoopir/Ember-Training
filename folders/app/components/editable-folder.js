import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  itemType: '',
  actionType: '',
  isDeletingFolder: false,
  isAddingFile: false,
  actions: {
    addFolderOn() {
      this.set("itemName", "");
      this.set("actionType", "Add");
      this.set("itemType", "folder");
    },
    editFolderOn(folderName) {
      this.set("itemName", folderName);
      this.set("actionType", "Edit");
      this.set("itemType", "folder");
    },
    setDeleteFolderFlag(value) {
      this.set("isDeletingFolder", value);
    },
    deleteFolder(item) {
      if(item) {
        let folders=item.get('folders');
        folders.forEach((child)=> {
          this.deleteFolder(child);
        });
        let files=item.get('files');
        files.forEach((child)=> {
          child.destroyRecord();
        });

        item.destroyRecord();
      }
      this.send('setDeleteFolderFlag', false);
    },

    addFileOn() {
      this.set("itemName", "");
      this.set("actionType", "Add");
      this.set("itemType", "file");
      this.set('isAddingFile', true);
    },
    resetItemType() {
      this.set("actionType", "");
      this.set("itemName", "");
      this.set("itemType", "");
      this.set('isAddingFile', false);
    }
  }

});
