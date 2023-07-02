<?php
/*
 * Plugin Name: Marketplace
 * Description: This is a plugin, that builds a marketplace for Smart Living Services
 * Version: 1.0.0
 * Author: Julian Soldanski
 */
           
/**
 * Enqueue the React Application and localizes the data from the service Registry
 */
function markteplace_scripts() {
  global $wpdb; 

  // Enqueue the main JavaScript file for your plugin
  wp_enqueue_script( 'marketplace', plugin_dir_url( __FILE__ ) . 'build/main.js', array(), '1.0', true );
  wp_enqueue_style( 'markteplace-css', plugin_dir_url( __FILE__ ) . 'src/assets/css/main.css', array(), '1.0', true );
  wp_enqueue_style('dashicons');

  $url = 'https://service-registry-post-tls.apps.foresight.aareon.com/graph';
  $authorization = 'Basic cmVzdHVzZXJAbG9jYWxob3N0LmRlOjEyMzQ='; 
  getDataFromRegistry($url, $authorization);

}
add_action( 'wp_enqueue_scripts', 'markteplace_scripts' );




/**
 * Display the React Component in a Shortcode
 */
function marketplace_shortcode() {
  return '<div id="marketplace-root" class="app"></div>';
}
add_shortcode( 'marketplace', 'marketplace_shortcode' );


/**
 * Receives Data from the Endpoint and sends it to the React application
 */

function getDataFromRegistry($url, $authorization){

  $plugin_path = plugin_dir_url(__FILE__);

  $headers = array(
    'Content-Type' => 'application/json',
    'Authorization' => $authorization
  );
  $response = wp_remote_get( $url, array( 'headers' => $headers ));  
  if ( !is_wp_error( $response ) ) {

    $body_nodes = json_decode(wp_remote_retrieve_body( $response ))->nodes;
    $filter_services = [];
    foreach($body_nodes as $node){
      if($node->label == "service"){
        array_push($filter_services, $node);
      }
    }
      wp_localize_script(
      'marketplace',
      'marketplace',
      array(
      'plugin_path'=>$plugin_path,
      'entries' => $filter_services
      )
    );
  }

}