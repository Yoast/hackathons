<?php
/**
 * Plugin Name: WordPress Webpack Natalia
 * Description: Simple WordPress plugin that uses webpack.
 * Version:     1.0.0
 * Author:      Natalia
 * Text Domain: wds-wwe
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Enqueue frontend scripts.
 */
function frontend_scripts() {
	wp_enqueue_script(
		'wds-wwe-frontend-js',
		plugins_url( 'assets/js/frontend.js', __FILE__ ),
		[ 'jquery' ],
		'04062020'
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
		'04062020'
	);
}
add_action( 'admin_enqueue_scripts', 'admin_scripts' );