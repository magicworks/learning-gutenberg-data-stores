<?php 
// Filter to modify block attributes, for example,
// add gradient option to text background,
// change block name
function learning_gutenberg_filter_metadata($metadata) {
    
    if($metadata['name']== 'core/paragraph') {
        // echo '<pre>';
        // var_dump($metadata);
        // echo '</pre>';
        $metadata['title'] = 'Text Block';
        $metadata['supports']['color'] = array(
            'link' => true,
            'gradients' => true
        );
    }
    return $metadata;
}

// add_filter('block_type_metadata', 'learning_gutenberg_filter_metadata');

function learning_gutenberg_filter_allowed_blocks($allowed_block_types){
    if(isset($editor_context)) {
        if(!empty($editor_context->post) && $editor_context->post->post_type == 'post' ) {
            return array('core/paragraph');
        }      
    }  

    return $allowed_block_types;
}

// add_filter('allowed_block_types_all', 'learning_gutenberg_filter_allowed_blocks', 10, 2);