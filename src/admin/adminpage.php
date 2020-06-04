<?php

	/**
	 * Enqueue admin scripts.
	 */
	function admin_scripts1() {
		wp_enqueue_script(
		'wds-wwe-admin1-js',
		plugins_url( '/2020-06-04-rolf/assets/js/frontend.js' ),
		[ 'jquery' ],
		'11272018'
		);
	}
	add_action( 'admin_enqueue_scripts', 'admin_scripts1' );

	echo plugins_url('/2020-06-04-rolf/assets/js/admin.js');

?>
