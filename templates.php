<?php 

function learning_gutenberg_plugin_register_template() {
    $post_type_object = get_post_type_object('post');
    // $post_type_object->template_lock = 'all';
    $post_type_object->template = array (
        array('core/paragraph', array('content' => 'Some text')),
        array('learning-gutenberg/data-stores'),
        array(
            'learning-gutenberg/team-members', 
            array('columns' => 3),
            array(
                array(
                    'learning-gutenberg/team-member',
                    array(
                        'name' => 'John Doe',
                        'bio' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                        'url' => 'https://picsum.photos/200/300'
                    )
                ),
                array('learning-gutenberg/team-member'),
                array('learning-gutenberg/team-member')
            )
            )
    );
}

add_action('init', 'learning_gutenberg_plugin_register_template');

