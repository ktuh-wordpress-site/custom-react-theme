<?php
/**
 * The main template file
 */
 ?>
<!DOCTYPE html>
<html>
  <head>
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://use.typekit.net/kdq4qji.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
  </head>
  <body>
    <script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></script>
    <div id="react-root">
    </div>
    <?php wp_footer(); ?>
  </body>
</html>
