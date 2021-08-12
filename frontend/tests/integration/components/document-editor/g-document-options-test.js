import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('document-editor/g-document-options', 'Integration | Component | document editor/g document options', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{document-editor/g-document-options}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#document-editor/g-document-options}}
      template block text
    {{/document-editor/g-document-options}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
