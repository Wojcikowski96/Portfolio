<?php
function buildUrls($entryID){
    include 'connecttodatabase.php';
    $result = mysqli_query($con,"SELECT * FROM redirect_urls WHERE EntryId ='$entryID'");

    while($row = mysqli_fetch_array($result))
    {
    $url = $row['url'];
    $urltext = $row['UrlText'];
    
    echo 
    "
    <a href ='$url'><h1 style ='font-size: 25px; margin-top: 20px'> $urltext </h1></a>";
    }
}



?>