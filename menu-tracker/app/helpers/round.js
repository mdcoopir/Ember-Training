import Ember from 'ember';

export function round([unroundedNumber, roundDecimal = 2]/*, hash*/) {
  let powerOfTen = Math.pow(10, roundDecimal);
  return Math.round(unroundedNumber * powerOfTen)/powerOfTen;
}

export default Ember.Helper.helper(round);
