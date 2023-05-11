import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
//import { unregisterBlockType } from '@wordpress/blocks';
// import { domReady } from '@wordpress/dom-ready';

const changeParagraphIcon = (settings, name) => {
	if (name === 'core/paragraph') {
		return { ...settings, icon: 'twitter' };
	}
	return settings;
};

addFilter(
	'blocks.registerBlockType',
	'learning-gutenberg/change-paragraph-icon',
	changeParagraphIcon
);

const modifyEdit = (BlockEdit) => {
	return (props) => {
		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody>Custom Panel</PanelBody>
				</InspectorControls>
			</>
		);
	};
};

addFilter('editor.BlockEdit', 'learning-gutenberg-edit', modifyEdit);

// dom returning error
// domReady(() => {
// 	unregisterBlockType('core/paragraph');
// });

// this is working
// window.addEventListener('load', function () {
// 	unregisterBlockType('core/paragraph');
// });
