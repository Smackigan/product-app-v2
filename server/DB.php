<?php

// require_once $_SERVER['DOCUMENT_ROOT'] . '/config/config.php';
require_once './config/db.php';

class DB
{
    protected $conn;


    protected const host = 'localhost';
    protected const user = 'root';
    protected const password = '';
    protected const database = 'scandiwebapp';


    public function __construct()
    {
        error_log("connecting to db");
        $this->conn = $this->connect();
    }

    public function connect()
    {

        $conn = mysqli_connect(self::host, self::user, self::password, self::database);

        if (mysqli_connect_errno()) {
            die('DB connection error: ' . mysqli_connect_error());
        }

        return $conn;
    }

    public function getConnection($sql)
    {
        if (!$this->conn) {
            die('No DB connection');
        }

        $stmt = mysqli_prepare($this->conn, $sql);

        if (!$stmt) {
            die('Failed to prepare stmt: ' . mysqli_error($this->conn));
        }

        return $stmt;
    }
}
