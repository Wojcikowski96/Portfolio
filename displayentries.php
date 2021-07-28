<?php


$result = mysqli_query($con,"SELECT * FROM blog_entries");


while($row = mysqli_fetch_array($result))
{
$title = $row['Title'];
$date = $row['EntryDate'];
$imageurl = $row['ImageUrl'];
$content = $row['Content'];

?>
<!-- <div class = "adsdsa" style="background-color: red; height: 200px"></div> -->
<div class='entry-tile'>
<div class ='entry-header'>
<?php echo "<h1>$title</h1>"?>
<?php echo "<h1>$date</h1>"?>  
</div>
<div class ='entry-body'>
<?php echo "<img src = $imageurl style='margin: auto; margin-left:0px'/>"?>  
<div class ='description'>
<?php echo "<p style = 'font-size: 30px'>$content</p>"?> 
<div class = 'urls-container'>

</div>
</div>
</div>
</div>
 
<?php

}

?>