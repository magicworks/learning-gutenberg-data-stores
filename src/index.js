import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

import './todos-store';

registerBlockType('learning-gutenberg/data-stores', {
	edit: Edit,
	save,
});
