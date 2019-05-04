<?php

$mysqli = new mysqli('localhost', 'root', '', 'attendance_system') or die($mysqli_error($mysqli));

if(isset($_POST)){
    $values = explode(",", $_POST['name']);
    json_encode($values, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    $result = $mysqli->query("insert into attendance (stdname, stdmatric) values ('$values[0]', '$values[1]')") or die(mysqli_error($mysqli));
    if($result){
        echo("Success!!! Data Inserted Into the database successfully");
    }else{
        echo("error");
    }
}

?>