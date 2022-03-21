<?php
// database connection is handled elsewhere
include '.././setup/database-connector.php';

// navigate to /database-test.php to create a row, and print to page

// generate random string
function generateRandomString($length = 10) {
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
    $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
}

// adding a single row to the food table
$sql_transaction = $db->prepare("INSERT INTO food (food_id, food_name, food_description)
VALUES (12, '".generateRandomString()."', 25)");
$sql_transaction->execute();

// retrieve all tables from database
$sql_transaction = $db->prepare("SELECT * FROM food");
$sql_transaction->execute();
$table_contents = $sql_transaction->fetchAll();