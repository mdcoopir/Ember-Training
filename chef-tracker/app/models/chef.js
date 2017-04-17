import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCooking: DS.attr('boolean', {defaultValue: false}),
  students: DS.attr('number', {defaultValue: 0}),
  description: DS.attr('string'),
  hasCulinaryDegree: DS.attr('boolean', {defaultValue: false}),
  culinarySchool: DS.attr('string'),
  imageUrl: DS.attr('string')
});
