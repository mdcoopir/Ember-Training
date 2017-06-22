import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),
  post: DS.belongsTo("post"),
  parent: DS.belongsTo('comment', {inverse: 'commnet'}),
  comments: DS.hasMany('commnet', {inverse: 'parent'}),
});
