<!doctype html>

<html lang="en">
<head>

</head>

<body>
    <?php
    include 'connecttodatabase.php';
    $data = array();
    $result = mysqli_query($con,"SELECT * FROM redirect_urls");
    
    while($row = mysqli_fetch_array($result))
    {
    $url = $row['url'];
    $urltext = $row['UrlText'];
    
    }
    
    ?>
</body>
</html>