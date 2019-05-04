<?php
$mysqli = new mysqli('localhost', 'root', '', 'attendance_system') or die(mysqli_error($mysqli));

if(isset($_POST['submit'])){
    echo('hello');
    foreach($_POST['att_status'] as $id=>$att_status){
        $stdname = $_POST['stdname'][$id];
        $stdmatric = $_POST['stdmatric'][$id];
        $date = date('d-m-Y');

        $result = $mysqli->query("insert into attendance_records (stdname, stdmatric, date, att_status) values ('$stdname', '$stdmatric', '$date', '$att_status')") or die(mysqli_error($mysqli));
        if($result){
            echo('successful');
        }else{
            echo('not successful');
        }
    }

}

?>