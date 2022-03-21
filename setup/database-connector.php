<?php
define("DB_HOST", "ec2-52-215-225-178.eu-west-1.compute.amazonaws.com");
define("DB_NAME", "d9b563nab7o3vh");
define("DB_CHARSET", "utf8");
define("DB_USER", "imivjvoozftdpw");
define("DB_PASSWORD", "41f5f048748f56d812675a928005c9b2ff38423faf3592dd18335f95d824eeda");

// we are creating a singleton class for the database, to call when needed
class Database {
  private static $db;
  private $connection;
  private function __construct() {
      $this->connection = new PDO(
        "pgsql:host=" . DB_HOST . ";dbname=" . DB_NAME,
        DB_USER, DB_PASSWORD, [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_NAMED
        ]
      );
  }
  function __destruct() {
     // $this->connection->close();
  }
  public static function getConnection() {
      if (self::$db == null) {
          self::$db = new Database();
      }
      return self::$db->connection;
  }
}

// call my database and expose the variable to the rest of my projext
$db = Database::getConnection();
