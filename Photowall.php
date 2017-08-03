<?php
/*
Plugin Name: hashtag-photowall 
Description: Please visit http://hk.allua.co/wordpress_photowall/
Version:     1
Author:      AlluaTech
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

*/

add_action('init', 'photowall_shortcodes');
//load external files
	add_action('wp', 'photowall_init');

function photowall_shortcodes(){
	add_shortcode('wall','photowall');
}

function photowall($key, $style){


	return  '<div class="hashphototwall_cont" id="'. $key["key"] .'" style="position:relative"><div id="hashphototwall_title"><span class="hashphototwall_titletext"></span><div class="hashphototwall_title_tag"> </div></div>
	<div id="hashphototwall_loading"></div><div id="hashphototwall_overlay"><div id="hashphototwall_bigphoto"></div></div><div id="hashphototwall_gallery"></div></div>';

}

function photowall_init(){
	wp_register_style ('style-css',plugins_url('style.css', __FILE__));
	wp_enqueue_style('style-css');
	wp_register_script('photowall-js',plugins_url('photowall.js', __FILE__), array('jquery'));
	wp_register_script('script-js',plugins_url('script.js', __FILE__), array('jquery'));
	wp_register_script('jquery.loadImage-js',plugins_url('jquery.loadImage.js', __FILE__), array('jquery'));
//	wp_deregister_script( 'jquery' ); // deregisters the default WordPress jQuery  
 //  	wp_register_script('jquery', plugins_url("jquery.min.js", __FILE__), false);
	wp_enqueue_script('jquery.loadImage-js');
	wp_enqueue_script('script-js');
	wp_enqueue_script('photowall-js');
}

?>