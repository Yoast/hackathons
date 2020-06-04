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

?>
