import DS from 'ember-data';

export default DS.Model.extend({
	user_id: DS.attr(),
	image: DS.attr()
});