import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  isCooking: attr('boolean', {defaultValue: false}),
  students: attr('number', {defaultValue: 0}),
  description: attr('string'),
  hasCulinaryDegree: attr('boolean', {defaultValue: false}),
  culinarySchool: attr('string'),
  imageUrl: attr('string'),
  restaurant: belongsTo()
});
