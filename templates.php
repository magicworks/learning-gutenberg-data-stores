<?php 

function learning_gutenberg_plugin_register_template() {
    $post_type_object = get_post_type_object('post');
    $post_type_object->template = array (
        array('learning-gutenberg/data-stores')
    );
}

add_action('init', 'learning_gutenberg_plugin_register_template');

