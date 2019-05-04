<?php
include('header.php');

// mysqli connection
$mysqli = new mysqli('localhost', 'root', '', 'attendance_system') or die(mysqli_error($mysqli));
// getting the data and storing it in a variable
$result = $mysqli->query('select * from attendance') or die(mysqli_error($mysqli));

$serialNo = 1;
$counter = 0;
?>
<div class="panel">
    <a href="body.php" class="btn add" id="back">Back</a>
</div>
<div class="today">
    <?php echo("Attendance For Date: ".date("d-m-Y")); ?>
</div>
<form method="POST" action="att_recordsDB.php">
    <div class="attend">
        <div class="row">
            <h3>Serial Number</h3>
            <h3>Student Name</h3>
            <h3>Student Matric No.</h3>
            <h3>Mark Attendance</h3>
        </div>
    <?php while($row = $result->fetch_assoc()): ?>
        <div class="row">
            <p><?php echo $serialNo; $serialNo++; ?></p>
            <p><?php echo ($row['stdname']); ?></p>
            <input type="hidden" value="<?php echo($row['stdname']); ?>" name="stdname[]">
            <p><?php echo ($row['stdmatric']); ?></p>
            <input type="hidden" value="<?php echo($row['stdmatric']); ?>" name="stdmatric[]">
            <div>
                <input type="radio" name="att_status[<?php echo($counter); ?>]" value="present">Present
                <input type="radio" name="att_status[<?php echo($counter); ?>]" value="absent">Absent
            </div>
        </div>
    <?php $counter++; endwhile; ?>
        <button type="submit" class="btn">Mark</button>
    </div>
</form>
