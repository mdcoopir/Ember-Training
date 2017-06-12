import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';
import Ember from 'ember';

export default Model.extend({
  name: attr('string'),
  yearsOpen: attr('number'),
  chefs: hasMany(),
  healthRatings: Ember.computed.mapBy("chefs", "health"),
  maxHealthRatings:  Ember.computed.max('healthRatings'),
  totalHealth: Ember.computed.sum('healthRatings'),
  avgHealthRatings:  Ember.computed('chefs.length', 'totalHealth', function() {
    if(this.get('chefs.length') === 0) {
      return 0;
    } else {
      return this.get('totalHealth')/this.get('chefs.length');
    }
  }),
  fameRatings: Ember.computed.mapBy("chefs", "fame"),
  maxFameRatings:  Ember.computed.max('fameRatings'),
  totalFame: Ember.computed.sum('fameRatings'),
  avgFameRatings:  Ember.computed('chefs.length', 'totalFame', function() {
    if(this.get('chefs.length') === 0) {
      return 0;
    } else {
      return this.get('totalFame')/this.get('chefs.length');
    }
  })
});
