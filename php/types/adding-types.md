# Adding New Types

## Preface
Creating new types programmatically allows us to reduce dependence on third-party custom type plugins like Magic Fields. While the plugin is easy to use, it has been deprecated at writing of this document.

You will need to follow these steps to add a new type:
1. [Declare the type](#markdown-header-step-1).
2. Define its attributes.
3. Add a save hook specific to the type.
4. Expose the attributes to the REST API.
5. Register other useful REST API routes as needed.

## Step 1
### Declaring the type.
1. Create a folder for your new type.
2. Create a new file called `register.php` with the following contents:
```PHP
<?php
register_post_type('new type',
    array(
        'labels' => array(
            'name' => __('New Type'),
            'singular_name' => __('New Type')
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
    )
);

```