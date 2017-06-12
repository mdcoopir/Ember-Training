import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
  name: attr('string'),
  yearsOpen: attr('number'),
  foods: hasMany(),
  healthRatings: Ember.computed.mapBy("foods", "healthRating"),
  maxHealthRatings:  Ember.computed.max('healthRatings'),
  totalHealth: Ember.computed.sum('healthRatings'),
  avgHealthRatings:  Ember.computed('foods.length', 'totalHealth', function() {
    if(this.get('foods.length') === 0) {
      return 0;
    } else {
      return this.get('totalHealth')/this.get('foods.length');
    }
  })
});
