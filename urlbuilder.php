<?php
include 'connecttodatabase.php';
$data = array();
$result = mysqli_query($con,"SELECT * FROM redirect_urls");

while($row = mysqli_fetch_array($result))
{
$url = $row['url'];
$urltext = $row['UrlText'];

echo 
"
<a href ='$url'><h1 style ='font-size: 30px; margin-top: 20px'> $urltext </h1></a>";
}
?>