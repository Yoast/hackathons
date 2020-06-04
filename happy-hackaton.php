<?php
/**
 * Plugin Name: Happy Hackaton
 * Description: Happy Hackaton
 * Version: 1.0
 * Author: Josee
 **/

add_action('admin_menu', 'create_menu_item');

function create_menu_item() {
	add_menu_page('Happy Hackaton Page', 'Happy Hackaton', 'manage_options',
		'happy-hackaton', 'init');
}

function init(){
	echo "<h1>Hello Yoast</h1>";
}