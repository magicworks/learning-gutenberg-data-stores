import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

const MetaFieldsInput = () => {
	const subTitleValue = useSelect((select) => {
		return select('core/editor').getEditedPostAttribute('meta')
			._blocks_course_post_subtitle;
	});
	const { editPost } = useDispatch('core/editor');
	return (
		<PanelBody
			title={__('Subtitle Options', 'learning-guenberg-data-stores')}
		>
			<TextControl
				label={__('Subtitle', 'learning-gutenberg-data-stores')}
				value={subTitleValue}
				onChange={(value) =>
					editPost({
						meta: {
							_blocks_course_post_subtitle: value,
						},
					})
				}
			/>
		</PanelBody>
	);
};

registerPlugin('learning-gutenberg-plugin', {
	render: () => {
		return (
			<>
				<PluginSidebar
					name="meta-fields-sidebar"
					icon="admin-settings"
					title={__('Post Options', 'learning-gutenberg-data-stores')}
				>
					<MetaFieldsInput />
				</PluginSidebar>
			</>
		);
	},
});
