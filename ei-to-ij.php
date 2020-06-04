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

wp_enqueue_script( 'ei-to-ij', plugin_dir_url( 'hackathons/ei-to-ij.php' ) . 'ei-to-ij.js' );
