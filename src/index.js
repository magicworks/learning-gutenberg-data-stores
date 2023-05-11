import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';

import './todos-store';
import './plugins/sidebar';
import './format-types/highlight';
import './filters';

registerBlockType('learning-gutenberg/data-stores', {
	title: __(
		'Learning Gutenberg - Todo List 2',
		'learning-gutenberg-data-stores'
	),
	description: __(
		"Example of retrieving information and dispatching actions to the block editor's data store. 2",
		'learning-gutenberg-data-stores'
	),
	edit: Edit,
	save,
});
