<?php
/**
 * Hackaton js bundling
 *
 * Hackaton for bundling js files?
 *
 * @package
 * @author Team Yoast
 * @version 1.0
 *
 * @wordpress
 * Plugin Name: hackaton js bundling
 * Version: 1.0
 * Plugin URI:
 * Description: Hackaton for bundling js files?
 * Author: Team Yoast
 * Author URI: https://yoast.com/
 * Text Domain: my-yoast-login
 * Domain Path: /languages/
 * License: GPL v3
 */

class Hackaton_js_bundling {

	/**
	 * Hackaton_js_bundling constructor.
	 */
	public function __construct() {
		add_action( 'admin_bar_menu', array( $this, 'doeIets' ), 1 );
//		wp_enqueue_script( 'Hackaton_js_bundling', plugin_dir_url( __FILE__ ) . '/src/hackaton_js_bundling.js', '', null, true );
		wp_enqueue_script( 'Hackaton_js_bundling', plugin_dir_url( __FILE__ ) . '/dist/main.js', '', null, true );


	}

	public function doeIets() {
		echo "123123123";
	}

}


new Hackaton_js_bundling();
