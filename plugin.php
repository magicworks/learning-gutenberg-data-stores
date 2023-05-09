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

include_once('metadata.php');
include_once('templates.php');

function learning_gutenberg_data_stores_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'learning_gutenberg_data_stores_block_init' );

