<?php
// database connection is handled elsewhere
include './database-connector.php';

// retrieve the file whcih creates our database schema
$external_sql_file = file_get_contents('./database-seeder-command.sql');;

// execute the command
$sql_transaction = $db->prepare($external_sql_file);
$sql_transaction->execute();

