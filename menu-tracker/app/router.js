import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('foods',  function() {
    this.route('food', {path: ':food_id'}, function() {
      this.route('edit');
    });
    this.route('food.edit', {path: ':food_id/edit'});
  });
  this.route('about');
  this.route('contact');
  this.route('restaurants', function() {
    this.route('restaurant', {path: ':restaurant_id'}, function() {
      this.route('saveFood', {path: ':food_id'});
    });
    this.route('restaurant.edit', {path: ':restaurant_id/edit'});
  });
});

export default Router;
