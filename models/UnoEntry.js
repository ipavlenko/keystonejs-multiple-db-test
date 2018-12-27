const keystone = require('keystone');

const Types = keystone.Field.Types;

const UnoEntry = new keystone.List('UnoEntry');

UnoEntry.add({
	name: { type: String, required: true, index: true, initial: true },
  title: { type: String, required: true, index: true, initial: true }
});

/**
 * Registration
 */
UnoEntry.defaultColumns = 'name, title';
UnoEntry.register();
