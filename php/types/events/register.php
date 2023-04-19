<?php
/*
 *  Event meta
 */
function event_name_meta($event) {
    wp_nonce_field(basename(__FILE__), 'event_name_meta_box_nonce');

    $id = $event->ID;

    $name = get_post_meta($id, 'event_name');

    ?>
    <div class="inside">
      <label for="event_name">Name</label>
      <input id="event_name_input" name="event_name" type="text" value="<?php echo $name ? (is_array($name) ? $name[0] : $name) : ""; ?>" />
    </div><?php
}

function event_location_meta($event) {
    wp_nonce_field(basename(__FILE__), 'event_location_meta_box_nonce');

    $id = $event->ID;

    $location = get_post_meta($id, 'location');

    ?>
    <div class="inside">
      <label for="event_location">Location</label>
      <input id="event_location_input" name="event_location" type="text" value="<?php echo $location ? (is_array($location) ? $location[0] : $location) : ""; ?>" />
    </div><?php
}

function event_date_meta($event) {
   wp_nonce_field(basename(__FILE__), 'event_date_meta_box_nonce');

    $id = $event->ID;

    $date = get_post_meta($id, 'event_date');

    ?>
    <div class="inside">
      <label for="event_date">Date</label>
      <input id="event_date_input" name="event_date" type="date" value="<?php echo $date && is_array($date) ? $date[0] : $date; ?>" />
    </div><?php
}

function event_time_meta($event) {
   wp_nonce_field(basename(__FILE__), 'event_time_meta_box_nonce');

    $id = $event->ID;

    $time = get_post_meta($id, 'event_time');

    ?>
    <div class="inside">
      <label for="event_time">Time</label>
      <input id="event_time_input" name="event_time" type="time" value="<?php echo $time && is_array($time) ? $time[0] : $time; ?>" />
    </div><?php
}

register_post_type('event',
        array(
            'labels' => array(
                'name' => __('Events'),
                'singular_name' => __('Event')
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
             'register_meta_box_cb' => function($review) {
                add_meta_box('event_name', 'Event Name', 'event_name_meta', 'event', 'side', 'low');
                add_meta_box('location', 'Event Location', 'event_location_meta', 'event', 'side', 'low');
                add_meta_box('event_date', 'Event Date', 'event_date_meta', 'event', 'side', 'low');
                add_meta_box('event_time', 'Event Time', 'event_time_meta', 'event', 'side', 'low');
             }
        )
    );

  register_meta('event', 'event_name', array(
      'show_in_rest' => true
  ));
  register_meta('event', 'location', array(
      'show_in_rest' => true
  ));
  register_meta('event', 'event_date', array(
      'show_in_rest' => true
  ));
  register_meta('event', 'event_time', array(
    'show_in_rest' => true
  ));
