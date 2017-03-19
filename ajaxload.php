<?php
/**
 * Plugin Name: LoadMore AJAX
 * Description: Load Next Page with AJAX
*/
function alInit(){
    global $wp_query;
    if(!is_singular()) {
        wp_register_style("k_plugin", plugin_dir_url(__FILE__) . '/Assets/Styles/plugin.css');
        wp_enqueue_style("k_plugin");
        wp_register_script("k_logic", plugin_dir_url(__FILE__) . '/Assets/Scripts/logic.js', array(), 1.0, true);
        wp_enqueue_script("jquery");
        wp_enqueue_script("k_logic");
    }
    $max = $wp_query->max_num_pages;
    $paged = (get_query_var('paged')>1)?get_query_var('paged'):1;
    $pgData = array('startPage' => $paged,
                    'maxPage' => $max,
                    'nextLink' => next_posts($max,false)
        );
    wp_localize_script("k_logic","ajaxlp",$pgData);
}
add_action('template_redirect','alInit');
?>