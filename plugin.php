<?php
	/*
	Plugin Name: Rolf Webpack
	Version: 0.1
	Author: Rolf
	*/

/**
 * Enqueue frontend scripts.
 */
function frontend_scripts() {
	wp_enqueue_script(
	'wds-wwe-frontend-js',
	plugins_url( 'assets/js/frontend.js', __FILE__ ),
	[ 'jquery' ],
	'11272018'
	);
}
add_action( 'wp_enqueue_scripts', 'frontend_scripts' );

/**
 * Enqueue admin scripts.
 */
function admin_scripts() {
	wp_enqueue_script(
	'wds-wwe-admin-js',
	plugins_url( 'assets/js/admin.js', __FILE__ ),
	[ 'jquery' ],
	'11272018'
	);
}
add_action( 'admin_enqueue_scripts', 'admin_scripts' );



function add_menu_info(){
	add_menu_page('Info', 'Info', 'manage_options', 'Info', 'entryFun');
}
add_action('admin_menu', 'add_menu_info');

function  entryFun(){
	include(plugin_dir_path( __FILE__ ).'src/admin/adminpage.php');
}

?>
