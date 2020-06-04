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
      echo "<div id=js_output>";
      echo "</div>";
      echo "<br>";

      echo '
      <form id="form">
         <label for="word">Word to spell-check:</label><br>
         <input type="text" id="word" name="word" value=""><br>
         <input type="submit" value="Submit">
      </form> ';
 
      wp_enqueue_script( 'js-init-file', $dir . 'dist/main.js');
   }
?>