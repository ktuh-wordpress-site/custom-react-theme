# Adding New Types

## Preface
Creating new types programmatically allows us to reduce dependence on third-party custom type plugins like Magic Fields. While the plugin is easy to use, it has been deprecated at writing of this document.

You will need to follow these steps to add a new type:
1. [Declare the type.](#step-1-declaring-the-type)
2. [Define its attributes.](#step-2-defining-attributes)
3. [Add a save hook specific to the type.](#step-3-adding-save-hooks)
4. [Expose the type to the REST API, and register type-specific routes as needed.](#step-4-expose-to-the-rest-api)
5. [Import the files into `functions.php`.](#step-5-import-files)

## Step 1: Declaring the type
1. Create a folder for your new type.
2. Create a new file called `register.php` with the following contents:
```PHP
<?php
/* NOTE: Strings are placeholders unless otherwise specified. */
register_post_type('newtype',
    array(
        'labels' => array(
            'name' => __('New Type'),
            'singular_name' => __('New Type')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'register_meta_box_cb' => function($review) {
            /* add metadata input box here */
        }
    )
);
```

### Step 2: Defining attributes
1. Within `register.php`, for each attribute to be declared, write the following:
```PHP
/* NOTE: Strings are placeholders unless otherwise specified. */
register_meta('newtype', 'attr', array(
    'show_in_rest' => true
));

function newtype_attr_meta($newtype) {
    wp_nonce_field(basename(__FILE__), 'newtype_attr_meta_box_nonce');

    $id = $newtype->ID;

    $attr = get_post_meta($id, 'attr');

    /* Adjust the <input> tag as needed. */
?>
    <div>
      <label for="attr">Rating</label>
      <input id="attr_input" name="attr" value="<?php echo is_array($attr) ? $attr[0] : $attr; ?>" />
      <br />
    </div>
    <?php
}
```
2. After the comment in the body of the anonymous function which is the value of 'register_meta_box_cb', add the following for each attribute. This will add an input box to your post type associated with your attribute.
```PHP
add_meta_box('attr', 'Attribute', 'newtype_attr_meta', 'review', 'side', 'low');
```

### Step 3: Adding save hooks
Save hooks are useful when you need to massage user input for storage, including metadata attributes as we would have defined in [Step 2](#step-2-defining-attributes).

1. Create a new file called `rest.php` with the following contents:
```PHP
<?php
function save_newtype_metadata($id, $post) {
    /* Implement here */
}

add_action('save_post_newtype', 'save_newtype_metadata', 10, 2);
2. After the comment in the body of the newly declared function, for each attribute declared, write the following:
```PHP
// for primitive type attributes (strings, numbers, datetimes, etc.)
if (!empty($_POST['attr'])) {
    update_post_meta($id, 'attr', $_POST['attr']);
}

// for non-primitive type attributes (arrays, objects, etc.)
if (!empty($_POST['attr'])) {
    $massaged_data = massage_data($_POST['attr']);

    update_post_meta($id, 'attr', $massaged_data);
}
```

### Step 4: Expose to the REST API
1. Create a new file `rest.php` with the following contents:
```PHP
<?php
```
2. For each attribute, write the following:
```PHP
register_rest_field('newtype', 'attr', array(
    'get_callback' => function ($obj) {
        return get_post_meta($obj['id'], 'attr');
    }
));
```

### Step 5: Import files
Needless to say, the newly created files will not call themselves, and quite frankly it would be a miracle, not to mention less responsibility, if they were automatically read. You will need to call them in [`functions.php`](../../functions.php), which is the entry point of the theme.

In this context, "declaring a file" refers to `require('filename.php');`.

1. Declare your `register.php` file within `create_posttype`.
2. Declare your `rest.php` file within the anonymous function passed with `rest_api_init`.
3. Declare your `save.php` file at the top level along with the other existing declarations.

### Expectation
Assuming everything runs correctly, a menu tab with your new type will appear on the sidebar menu of your dashboard. When you edit a new post of the type, the metadata boxes should appear as declared.

I wish you luck on your quest to abandon Magic Fields for the better. - Derek