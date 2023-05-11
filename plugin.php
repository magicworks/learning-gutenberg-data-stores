<?php
/**
 * Plugin Name:       Learning Gutenberg Data Stores
 * Description:       Learning Gutenberg Data Stores.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Laura Lieknina
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       learning-gutenberg-data-stores
 *
 */

include_once('php/metadata.php');
include_once('php/templates.php');
include_once('php/patterns.php');
include_once('php/filters.php');

function learning_gutenberg_data_stores_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'learning_gutenberg_data_stores_block_init' );

//Third parameter needed for creating custom language files
function learning_gutenberg_data_stores_set_translations() {
	wp_set_script_translations(
		'learning-gutenberg-data-stores-editor-script',
		'learning-gutenberg-data-stores',
		plugin_dir_path( __FILE__ ) . 'languages'
	);
}

add_action('init', 'learning_gutenberg_data_stores_set_translations');

function learning_gutenberg_load_translations( $mofile, $domain ) {
    if ( 'learning-gutenberg-data-stores' === $domain && false !== strpos( $mofile, WP_LANG_DIR . '/plugins/' ) ) {
        $locale = apply_filters( 'plugin_locale', determine_locale(), $domain );
        $mofile = WP_PLUGIN_DIR . '/' . dirname( plugin_basename( __FILE__ ) ) . '/languages/' . $domain . '-' . $locale . '.mo';
    }
    return $mofile;
}
add_filter( 'load_textdomain_mofile', 'learning_gutenberg_load_translations', 10, 2 );