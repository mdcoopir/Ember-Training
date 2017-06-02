import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  fieldPlaceHolder: Ember.computed('itemType', function() {
    return `${this.get("itemType")}`+ " name";
  }),
  fieldLabel: Ember.computed('itemType', function() {
    return this.get('actionType')+" "+ `${this.get("itemType")}`;
  }),
  itemNameLength: Ember.computed('itemName', function() {
    return `${this.get("itemName")}`.length;
  }),
  disableAdd: Ember.computed('itemNameLength', function() {
    return  (`${this.get("itemNameLength")}`<=0);
  }),
  actions: {
    addItem() {
      this.sendAction('resetItemType');
      let parent = this.get('parent');
      let itemType = this.get('itemType');
      let item =this.get('store').createRecord(itemType, {
        name: this.get('itemName')
      });
      if(itemType==='file') {
        item.set('folder', parent);
      } else {
        item.set('parent', parent);
      }
      item.save();
      parent.save();
    },
    resetItemType() {
      this.sendAction('resetItemType');
    }
  }
});
