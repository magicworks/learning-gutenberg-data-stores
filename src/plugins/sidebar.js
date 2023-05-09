import { registerPlugin } from '@wordpress/plugins';
import {
	PluginSidebar,
	PluginDocumentSettingPanel,
	PluginPostStatusInfo,
	PluginPrePublishPanel,
	PluginPostPublishPanel,
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
				<PluginPostStatusInfo>
					<p>Some Info</p>
				</PluginPostStatusInfo>
				<PluginPrePublishPanel title="PrePublish Title">
					<p>PrePublish Panel Info</p>
				</PluginPrePublishPanel>
				<PluginPostPublishPanel title="PostPublish Title">
					<p>Post Publish Panel Info</p>
				</PluginPostPublishPanel>
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
