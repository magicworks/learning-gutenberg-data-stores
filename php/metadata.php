<?php 

// adding meta data to data stores
function learning_gutenberg_register_metadata() {
    register_meta('post', '_blocks_course_post_subtitle', array(
        'single' => true,
        'type' => 'string',
        'show_in_rest' => true,
        'sanitaze_callback' => 'sanitize_text_field',
        'auth_callback' => function() {
            return current_user_can('edit_posts');
        }
    ));
}

add_action('init', 'learning_gutenberg_register_metadata');