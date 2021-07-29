<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Blog</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <link rel="stylesheet" type="text/css" href="navigationBarStyle.css">
  <link rel="stylesheet" type="text/css" href="blogEntryTileStyle.css">
  <link rel="stylesheet" type="text/css" href="contactFormStyle.css">

</head>
<body>
<div class = "mainnavbar">
        <a href = "http://localhost/blog/Home/index.php" class = "homebutton" style="text-decoration: none">
            <img src = "home-icon.png", alt="nothing", id = "home-icon">
            <h1>Strona domowa</h1>
        </a> 
        
        <div class = "line">

        </div>
        <a href = "../Portfolio/index.html" class = "portfoliobutton" style="text-decoration: none">
            <img src = "portfolio.png", alt="nothing", id = "portfolio-icon">
            <h1>Portfolio</h1>
        </a>
        <div class = "line">
            
        </div>
        <div class = aboutusbutton>
            <img src = "about-us.png", alt="nothing", id = "aboutus-icon">
            <h1>O nas</h1>
        </div>
    </div>
    <div class = "emptyspace">
    </div>

<div class ="content-flexbox">
<div class = "news-sidebar">
    <div class="news-header" >
     <img src = "news.png" style= "width: 60px; height: 60px; margin-top: auto; margin-bottom:auto" alt= "nothing"/>   
    <h1>Aktualności</h1>
</div>
<?php
include 'connecttodatabase.php';
include 'displayentries.php';
mysqli_close($con);
?>
</div>
<div class= "about-us-on-news-sidebar">
    <div class= "header">
        <h1 style = "font-size: 25px; color: white; margin-top: auto; margin-bottom: auto">O nas w mediach</h1>
    </div>
    <div class="wrapper">
    <form class="form">
      <div class="pageTitle title"><h1 style = "font-size: 35px; border-top: solid; border-bottom: solid">Formularz kontaktowy</h1></div>
      <div class="secondaryTitle title">Uzupełnij poniższe pola.</div>
      <input type="text" class="name formEntry" placeholder="Podaj imię" />
      <input type="text" class="email formEntry" placeholder="Podaj Email"/>
      <textarea class="message formEntry"></textarea>
      <button class="submit formEntry" onclick="thanks()"><h1 style="font-size: 25px">Wyślij</h1></button>
    </form>
  </div>
  <script src="app.js"></script>
</div>
</div>
</body>
</html>