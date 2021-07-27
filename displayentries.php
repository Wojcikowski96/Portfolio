<?php
$data = array();
$result = mysqli_query($con,"SELECT * FROM blog_entries");

while($row = mysqli_fetch_array($result))
{
$title = $row['Title'];
$date = $row['EntryDate'];
$imageurl = $row['ImageUrl'];
$content = $row['Content'];
$externalnewsurl = $row['ExternalNewsUrl'];

echo 
"<div class='entry-tile'>
<div class ='entry-header'>
<h1 style ='font-size: 35px; margin: auto'> $title </h1>
<h1 style ='font-size: 35px; margin: auto'> $date </h1>
</div>
<div class ='entry-body'>
<img src = '$imageurl' style='margin: auto; margin-left:0px'/>
<div class ='description'>
<p style = 'font-size: 30px'>$content</p>
<a href = '$externalnewsurl'><h1 style='font-size:30px'>Więcej</h1></a>
</div>
</div>
</div>";
}
?>