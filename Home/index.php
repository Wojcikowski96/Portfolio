<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Blog</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">
  <link rel="stylesheet" type="text/css" href="StyleSheets/styles.css">
  <link rel="stylesheet" type="text/css" href="StyleSheets/navigationBarStyle.css">
  <link rel="stylesheet" type="text/css" href="StyleSheets/blogEntryTileStyle.css">
  <link rel="stylesheet" type="text/css" href="StyleSheets/contactFormStyle.css">
  <link rel="stylesheet" type="text/css" href="StyleSheets/aboutUsStyle.css">
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
  <script src="smtp.js" defer></script>
  <script src="emailSender.js" defer></script>
  <script src="scrollAnimator.js"></script>
  <script src="hideOnScroll.js"></script>

</head>
<body>
<div class = "mainnavbar">
        <a href = "http://localhost/blog/Home/index.php" class = "homebutton" style="text-decoration: none">
            <img src = "Resources/home-icon.png", alt="nothing", id = "home-icon">
            <h1>Strona domowa</h1>
        </a> 
        
        <div class = "line">

        </div>
        <a href = "../Portfolio/index.html" class = "portfoliobutton" style="text-decoration: none">
            <img src = "Resources/portfolio.png", alt="nothing", id = "portfolio-icon">
            <h1>Portfolio</h1>
        </a>
        <div class = "line">
            
        </div>
        <div class = aboutusbutton>
            <img src = "Resources/about-us.png", alt="nothing", id = "aboutus-icon">
            <h1>O nas</h1>
        </div>
    </div>
    <div class = "emptyspace">
    </div>
    <div class = "about-us-wrapper">
        <div class = "col">
            <h1>Co robimy</h1>
            <p>Projektujemy herby, flagi i inne symbole samorządowe. 
                Naszym nadrzędnym celem jest poprawa kiepskiego stanu polskiej heraldyki samorządowej. 
                Profesjonalnie stworzymy herb dla gminy i zajmiemy się całą procedurą. 
                Doradzimy także przy organizowaniu konkursów na symbole.</p>
        </div>
        <div class = "col">
            <h1>Kim jesteśmy</h1>
            <p>Tworzymy duet pasjonatów heraldyki, w skład którego wchodzą:
                Kamil Wójcikowski, interesuje się heraldyką od 9 roku życia, tworzy projekt herbu, flagi i innych symboli oraz produkt końcowy, tj. dokumentację.
                Robert Fidura, miłośnik archiwistyki, poszukuje potencjalnych klientów i rozmawia z nimi.
                Wspólnie poszukujemy źródeł historycznych i ikonograficznych, obmyślamy projekty, wszystkie projekty konsultujemy na posiedzeniach Komisji Heraldycznej, redagujemy tekst uzasadnienia projektów.</p>
        </div>
        <div class = "col">
            <h1>Dlaczego my?</h1>
            <ul><li>Każdy projekt herbu tworzymy z pasją,</li>
                <li>Należymy do grupy kilku-kilkunastu osób w Polsce, którzy wiedzą jak projektować herby,</li>
                <li>Większość naszych projektów jest trafna już na samym początku,</li>
                <li>Działamy do skutku, tj. do uzyskania projektu, który zadowoli zarówno klienta, jak i Komisję Heraldyczną</li></ul>
        </div>
    </div>

<div class ="content-flexbox">
<div class = "news-sidebar">
    <div class="news-header" >
   <img src = "Resources/news.png" style= "width: 60px; height: 60px; margin-top: auto; margin-bottom:auto" alt= "nothing"/>
   <h1>Aktualności</h1>
     
</div>
<?php
include 'PHP/connecttodatabase.php';
include 'PHP/displayentries.php';
mysqli_close($con);
?>
</div>
<div class= "about-us-on-news-sidebar">
    <div class= "header">
        <h1 style = "font-size: 30px; color: white; margin-top: auto; margin-bottom: auto">Skontaktuj się<br>z nami</h1>
    </div>
    <div class="wrapper">
    <form class="form">
      <div class="secondaryTitle title">Uzupełnij poniższe pola.</div>
      <input type="text" class="name formEntry" id="nameInput" placeholder="Podaj imię" />
      <input type="text" class="email formEntry" id="emailInput" placeholder="Podaj Email"/>
      <textarea class="message formEntry" id="messageInput"></textarea>
      <button class="submit formEntry" onclick="js_send()" id="sendMessage"><h1 style="font-size: 25px">Wyślij</h1></button>
    </form>
  </div>
</div>
</div>
</body>
</html>