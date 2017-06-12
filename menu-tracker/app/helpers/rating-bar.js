import Ember from 'ember';

export function ratingBar(params/*, hash*/) {
  return Ember.String.htmlSafe(`
    Rating-bar =
    <div class='rating-bar' style='width:200px;'>
      <span class='inner-bar' style='width: 50%;'></span>
    </div>
  `);
}

export default Ember.Helper.helper(ratingBar);
