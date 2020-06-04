<?php
/**
 * Plugin Name: Webpack hackathohn
 * Description: Does a whole load of nothing.
 * Version: 1.0.0
 * Author: Diede Exterkate
 */

add_action( 'admin_enqueue_scripts', 'blabla_enqueue' );
add_action('admin_notices', 'blabla_show_panel');

function blabla_enqueue() {
//	wp_enqueue_script( 'blabla', plugin_dir_url( __FILE__ ) . 'dist/blabla.js', [], '1.0.0', true );
	wp_enqueue_script( 'blabla', 'http://localhost:8080/default-app~.n.bundle.js', [], '1.0.0', true );
	wp_enqueue_script( 'manage', 'http://localhost:8080/manage~.n.bundle.js', [], '1.0.0', true );
}

function blabla_show_panel(){
	echo "<div id='blablaroot'>Geen JS/React support. balen joh</div>";
	echo "<div id='blablamanageroot'>Geen JS/React support. balen joh</div>";
}
