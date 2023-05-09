import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin('learning-gutenberg-plugin', {
	render: () => {
		return (
			<PluginSidebar
				name="meta-fields-sidebar"
				icon="admin-settings"
				title={__('Post Options', 'learning-gutenberg-data-stores')}
			>
				Custom Sidebar
			</PluginSidebar>
		);
	},
});
