import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const HighlightFormatButton = ({ isActive, value, onChange }) => {
	return (
		<RichTextToolbarButton
			icon="edit"
			title={__('Highlight 2', 'learning-gutenberg-data-stores')}
			onClick={() => {
				onChange(
					toggleFormat(value, {
						type: 'learning-gutenberg/highlight2',
						attributes: {
							style: 'background-color: #f0ff00',
						},
					})
				);
			}}
			isActive={isActive}
		/>
	);
};

registerFormatType('learning-gutenberg/highlight2', {
	title: __('Highlight 2', 'learning-gutenberg-data-stores'),
	tagName: 'span',
	className: null,
	edit: HighlightFormatButton,
});
