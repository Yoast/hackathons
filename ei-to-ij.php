<?php
/*
Plugin Name: Ei to ij
Plugin URI:  https://github.com/yoast/hackathons
Description: Changes all occurrences of 'ei' to 'ij'
Version:     1.0.0
Author:      Jannes & Irene
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

add_action( 'admin_footer' , 'enqueue_scripts');

function enqueue_scripts () {
	wp_enqueue_script( 'ei-to-ij', plugin_dir_url( 'ei-to-ij/ei-to-ij.php' ) . 'dist/ei-to-ij.min.js', [ 'lodash', 'wp-element', 'yoast-components' ] );
}


add_action( 'admin_menu', 'register_admin_page' );

function register_admin_page() {
	add_menu_page( 'Ei to ij', 'Ei to ij', 'manage_options', 'ei-to-ij-admin.php', 'build_admin_page', 'dashicons-randomize', 20  );
}

function build_admin_page() {
	do_action('wp_enqueue_scripts');
   echo '<div id="portal"></div>';
};


