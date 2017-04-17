import DS from 'ember-data';

export default DS.Model.extend({
  fname: DS.attr('string'),
  lname: DS.attr('string'),
  mname: DS.attr('string'),
  status: DS.attr('string')
});
