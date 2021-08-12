import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('import-section/r-choose-section', 'Integration | Component | import section/r choose section', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{import-section/r-choose-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#import-section/r-choose-section}}
      template block text
    {{/import-section/r-choose-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
