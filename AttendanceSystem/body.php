<?php
 include('header.php');
?>
<div class="panel">
    <div>
        <button class="btn add" id="add">Add Student</button>
    </div>
    <div>
        <button class="btn view" id="view">View All</button> 
    </div>
    <div>
        <a href="markAttendance.php" class="btn mark" id="mark">Mark Attendance</a> 
    </div>
</div>
<div class="form-div" id="form-div">
    <div id="alert"></div>
    <form id="form">
        <label for="stdname">Student Name</label>
        <input class="input" type="text" name="stdname" id="stdname" required>
        <label for="stdmatric">Matric Number</label>
        <input class="input" type="text" name="stdmatric" id="stdmatric" required>
        <button type="submit" class="btn" id="submit">submit</button>
    </form>
</div>
<div class="viewall" id="viewall"></div>
<script src="ajax_call.js"></script>