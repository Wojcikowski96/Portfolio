<?php
$con=mysqli_connect("localhost","root","","blog");

if (mysqli_connect_errno())
{
    echo "<h1> Nie udało się połączyć z bazą danych</h1>";
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    
}

?>