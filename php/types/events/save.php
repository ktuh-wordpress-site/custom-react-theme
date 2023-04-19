<?php
function save_event_metadata($id, $post) {
    if (!empty($_POST['event_name'])) {
       update_post_meta($id, 'event_name', $_POST['event_name']);
    }

    if (!empty($_POST['event_date'])) {
       update_post_meta($id, 'event_date', $_POST['event_date']);
    }

    if (!empty($_POST['event_location'])) {
      update_post_meta($id, 'location', $_POST['event_location']);
    }

    if (!empty($_POST['event_time'])) {
       update_post_meta($id, 'event_time', $_POST['event_time']);
    }
}

add_action('save_post_event', 'save_event_metadata', 10, 2);
