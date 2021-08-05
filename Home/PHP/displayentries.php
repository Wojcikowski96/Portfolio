<?php
include 'urlbuilder.php';
$result = mysqli_query($con,"SELECT * FROM blog_entries");


while($row = mysqli_fetch_array($result))
{
$title = $row['Title'];
$datetime = new DateTime($row['EntryDate']);
$date = $datetime->format('Y-m-d');
$imageurl = $row['ImageUrl'];
$content = $row['Content'];
$entryid = $row['EntryId'];

?>
<!-- <div class = "adsdsa" style="background-color: red; height: 200px"></div> -->
<div class="entry-tile">
<div class ='entry-header'>
<?php echo "<h1>$title</h1>"?>
<?php echo "<div class ='header-label-gap'></div>"?>  
<?php echo "<h1 id='date-label'>$date</h1>"?>  
</div>
<div class ='entry-body'>
<?php echo "<img src = $imageurl style='margin: auto; margin-left:0px'/>"?>  
<div class ='description'>
<?php echo "<p>$content</p>"?> 
<div class = 'urls-container'>
<?php buildUrls($entryid) ?> 
</div>
</div>
</div>
</div>
 
<?php

}

?>