<?php
/*
Plugin Name: Hackathon Sanne en Hans-Christiaan
Plugin URI: https://yoast.com/
Description: Awesome plugin!!!1!
Version: 0.1.0
Author: Sanne en Hans-Christiaan
Author URI: https://yoast.com
License: MIT
Text Domain: hackathon-sanne-hans-christiaan
*/

function show_admin_page() {
	wp_enqueue_script(
		'hackathon',
		plugins_url() . '/hackathon/assets/build/js/hackathon.js',
		[ 'lodash', 'wp-data', 'wp-i18n', 'yoast-seo-components', 'yoast-seo-jed' ]
	);
	echo '<h1>Hello world!</h1>';
}

function register_admin_page() {
	add_menu_page(
		'Admin',
		'admin',
		'read',
		'admin',
		'show_admin_page'
	);
}

add_action( 'admin_menu', 'register_admin_page' );
