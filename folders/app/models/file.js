import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
  name: DS.attr('string'),
  folder: DS.belongsTo("folder"),
  fileSize: DS.attr('number'),

  displaySize: Ember.computed('fileSize', function(){
    if(this.get('fileSize')){
      return `${this.get('fileSize')}kb`;
    } else {
      return 'unknow size';
    }
  })
});
