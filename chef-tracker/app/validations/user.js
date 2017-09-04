import {validatePresence, validateLength, validateFormat } from 'ember-changeset-validations/validators';

export default {
  displayName: [
    validatePresence(true),
    validateLength({'min': 4})
  ],
  email: [
    validatePresence(true),
    validateFormat({'type': 'email'})
  ],
  password: [
    validatePresence(true),
    validateLength({'min': 8}),
    validateFormat({'regex': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/})
  ]
};
