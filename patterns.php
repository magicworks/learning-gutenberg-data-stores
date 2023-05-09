<?php 

function learning_gutenberg_plugin_register_patterns_cat() {
    register_block_pattern_category('learning-gutenberg', array(
        'label' => __('Learning Gutenberg', 'learning-gutenberg-data-stores')
    ));
}

add_action('init', 'learning_gutenberg_plugin_register_patterns_cat');

function learning_gutenberg_plugin_register_pattern() {
    register_block_pattern('learning-gutenberg/demo-pattern', array (
        'title' => __('Demo pattern', 'learning-gutenberg-data-stores'),
        'description' => __('Pattern description', 'learning-gutenberg-data-stores'),
        'categories' => array('learning-gutenberg'),
        'keywords' => array ('Demo pattern'),
        'content' => '<!-- wp:columns --><div class="wp-block-columns"><!-- wp:column {"width":"33.33%"} --><div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:paragraph --><p>Some text</p><!-- /wp:paragraph --></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:paragraph -->
<p>Some more text</p><!-- /wp:paragraph --></div><!-- /wp:column --></div><!-- /wp:columns -->'
    ));
}

add_action('init', 'learning_gutenberg_plugin_register_pattern');