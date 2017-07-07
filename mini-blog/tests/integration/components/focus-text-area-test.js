import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('focus-text-area', 'Integration | Component | focus text area', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{focus-text-area}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#focus-text-area}}
      template block text
    {{/focus-text-area}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
