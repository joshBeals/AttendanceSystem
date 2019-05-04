<?php

$mysqli = new mysqli('localhost', 'root', '', 'attendance_system') or die($mysqli_error($mysqli));

$result = $mysqli->query('select * from attendance') or die($mysqli_error($mysqli));


$details = array();

while($row = $result->fetch_assoc()){
    array_push($details, $row);
}

echo(json_encode($details, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));


?>