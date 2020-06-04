<?php
/**
 * Plugin Name: Plugin assignment 1
 * Plugin URI: http://www.mywebsite.com/my-first-plugin
 * Description: The very first plugin that I have ever created.
 * Version: 1.0
 * Author: Your Name
 * Author URI: http://www.mywebsite.com
 */
function show_hi() {
	$chosen = wptexturize("hi");
	$lang   = '';
	if ( 'en_' !== substr( get_user_locale(), 0, 3 ) ) {
		$lang = ' lang="en"';
	}

	printf(
		'<p id="test plugin"><span class="screen-reader-text">%s </span><span dir="ltr"%s>%s</span></p>',
		__( 'test:', 'test' ),
		$lang,
		$chosen
	);
}

function test_enqueue_script() {
	wp_enqueue_script( 'app', plugin_dir_url( __FILE__ ) . 'dist/main.js', [ 'lodash' ], null, true );
}
add_action('admin_enqueue_scripts', 'test_enqueue_script');

// Now we set that function up to execute when the admin_notices action is called.
add_action( 'admin_notices', 'show_hi' );

// We need some CSS to position the paragraph.
function hi_css() {
	echo "
	<style type='text/css'>
	#test {
		float: right;
		padding: 5px 10px;
		margin: 0;
		font-size: 12px;
		line-height: 1.6666;
	}
	.rtl #test {
		float: left;
	}
	.block-editor-page #test {
		display: none;
	}
	@media screen and (max-width: 782px) {
		#test,
		.rtl #test {
			float: none;
			padding-left: 0;
			padding-right: 0;
		}
	}
	</style>
	";
}

add_action( 'admin_head', 'hi_css' );
