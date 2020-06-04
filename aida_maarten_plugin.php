<?php
/**
* Plugin Name: Aida Maarten Plugin
* Plugin URI: https://yoast.com/
* Description: This is the very first plugin we ever created. Woopwoop!
* Version: 1.0
* Author: Aida and Maarten
* Author URI: http://yoast.com/
**/

add_action( 'the_content', 'my_thank_you_text' );

function my_thank_you_text ( $content ) {
    return $content .= '<p id="aida-maarten">Loading...</p>';
}

add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
add_action( 'admin_enqueue_scripts', 'enqueue_scripts' );

function enqueue_scripts() {
	wp_enqueue_script( "app", "/wp-content/plugins/aida-maarten/dist/bundle.js", [ "lodash", 'wp-i18n', 'yoast-seo-components' ], null, true );
}
