import Ember from 'ember';

export function ratingBar([rating, inputWidth], {color = 'blue'}) {
  let maxWidth = inputWidth ? `${inputWidth}px` : '100%';
  let percentage = rating *10;
  return Ember.String.htmlSafe(`
    Rating-bar =
    <div class='rating-bar' style='width:100%; max-width:${maxWidth};' title='${percentage}%'>
      <span class='inner-bar' style='background-color: ${color}; width: ${percentage}%; '></span>
    </div>
  `);
}

export default Ember.Helper.helper(ratingBar);
