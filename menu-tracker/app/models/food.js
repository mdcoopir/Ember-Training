import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
import {belongsTo} from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  isAvailable: attr('boolean'),
  description: attr('string'),
  imageUrl: attr('string'),
  course: attr('string'),
  restaurant: belongsTo(),
  healthRating: attr('number'),
  excitedName: Ember.computed('name', 'isAvailable', function() {
    let name = this.get('name') + "!!!!";
    return (this.get('isAvailable')) ? name: name+'  But is not available.';
  })
});
