import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  files: DS.hasMany(),
  parent: DS.belongsTo('folder', {inverse: 'folders'}),
  folders: DS.hasMany('folder', {inverse: 'parent'}),
  foldersSizes: Ember.computed('folders.@each.folderSize', function() {
    return this.get('folders').map((folder) => {
      return parseInt(folder.get('folderSize') || 0);
    });
  }),
  foldersSize: Ember.computed.sum('foldersSizes'),
  filesSizes: Ember.computed("files.@each.fileSize", function() {
    return this.get('files').map((file)=>{
      return parseInt(file.get('fileSize')||0);
    });
  }),
  filesSize: Ember.computed.sum('filesSizes'),
  folderSize: Ember.computed('foldersSize', 'filesSize', function(){
    return parseInt(this.get('foldersSize')) + parseInt(this.get('filesSize'));
  }),
  displaySize: Ember.computed('folderSize', function(){
    if(this.get('folderSize')){
      return `${this.get('folderSize')}kb`;
    } else {
      return 'unknow size';
    }
  })
});
