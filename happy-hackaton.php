<?php
/**
 * Plugin Name: Happy Hackaton
 * Description: Happy Hackaton
 * Version: 1.0
 * Author: Josee
 **/

add_action('admin_menu', 'create_menu_item');
add_action( 'admin_enqueue_scripts', 'admin_scripts' );

function create_menu_item() {
	add_menu_page('Happy Hackaton Page',
		'Happy Hackaton',
		'manage_options',
		'happy-hackaton',
		'init'
	);
}

function init(){
	echo '<h1>Hello Yoast</h1><p>Please open your console</p>';
}

function admin_scripts() {
	wp_enqueue_script('hackaton-js', plugins_url('dist/index.js', __FILE__) );
}

