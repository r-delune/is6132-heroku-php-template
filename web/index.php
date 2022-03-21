
<!-- begin adding your HTML here -->
<h1>My Example Page</h1>
<p>This is my example project using PHP, SQL, Javascript & Heroku</p>
<p>Here are the contents of your  <b>database</b></p>

<!-- contents of your database -->
<?php
include './database-test.php';
// output to page (var_dump is simialr to echo, but can print arrays & objects)
var_dump($table_contents)
?>
