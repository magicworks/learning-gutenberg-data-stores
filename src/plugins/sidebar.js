import { registerPlugin } from '@wordpress/plugins';
import {
	PluginSidebar,
	PluginDocumentSettingPanel,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin('learning-gutenberg-plugin', {
	render: () => {
		return (
			<>
				<PluginDocumentSettingPanel
					title="My Panel"
					icon="admin-settings"
				>
					<p>Document Settings Panel</p>
				</PluginDocumentSettingPanel>
				<PluginSidebar
					name="meta-fields-sidebar"
					icon="admin-settings"
					title={__('Post Options', 'learning-gutenberg-data-stores')}
				>
					Custom Sidebar
				</PluginSidebar>
			</>
		);
	},
});
