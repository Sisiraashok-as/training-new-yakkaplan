import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('workflows/assign-user', 'Integration | Component | workflows/assign user', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{workflows/assign-user}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#workflows/assign-user}}
      template block text
    {{/workflows/assign-user}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
