<?php
   /*
   Plugin Name: Webpack all the things
   Plugin URI: http://Webpackallthethings.com
   description: A plugin that Webpacks all the things
   Version: 1.0
   Author: Agnieszka & Dieter   
   Author URI: http://webpacktest.com
   License:   GPL2
   */

   // Add the menu to the admin 
  function add_webpack_menu_to_admin() {
      add_menu_page( "Webpack All the things", "Webpack All the things", 1, "Webpack All the things", "render_webpack_menu" );
   }
   add_action('admin_menu', 'add_webpack_menu_to_admin');

   // Render the Webpack page. 
   function render_webpack_menu() {
      $dir = plugin_dir_url( __FILE__ );
      echo "Hello. We are going to load some Javascript here.";
      echo "<br>";
      echo "We are loading the following JS file: ". $dir . 'dist/main.js';
      echo "<br>";
      echo "Look at the console.log for proof of live :)";
      echo "<br>";
      echo "Look at the Webpack build file loading! :)";
      echo "<br>";
      wp_enqueue_script( 'js-init-file', $dir . 'dist/main.js');

      
   }
?>