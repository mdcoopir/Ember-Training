import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  itemType: '',
  actionType: '',
  isDeletingFolder: false,
  isAddingItem: Ember.computed('itemType', function() {
    return  (`${this.get("itemType")}`.length>0);
  }),
  actions: {
    toggleExpansion() {
      this.toggleProperty('isExpanded');
    },
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
    deleteFolderOn() {
      this.set("isDeletingFolder", true);
    },
    deleteFolderOff() {
      this.set("isDeletingFolder", false);
    },
    addFileOn() {
      this.set("itemName", "");
      this.set("itemType", "file");
    },
    resetItemType() {
      this.set("itemName", "");
      this.set("itemType", "");

    }
  }
});
