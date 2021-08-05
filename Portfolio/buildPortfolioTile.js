
var wrapper = document.createElement('div');
wrapper.setAttribute('class', 'grid-container');
document.body.appendChild(wrapper);  

function createTile($i){


var gminy = ['Gmina Młynarze', 'Miasto i gmina Chorzele', 'Miasto i gmina Stronie Śląskie', 'Gmina Sędziejowice', 'Gmina Kamieniec Ząbkowski', 'Gmina Szelków', 'Gmina Baranowo', 'Gmina Czerwonka', 'Gmina Rzekuń', 'Gmina Radoszyce', 'Gmina Gać', 'Gmina Zarszyn', 'Miasto Racibórz', 'Powiat przysuski', 'Gmina Goworowo', 'Gmina Węgierska Górka', 'Gmina Zakrzówek', 'Miasto i gmina Jedlicze', 'Gmina Dąbrowa Zielona', 'Gmina Malczyce', 'Miasto i gmina Lądek-Zdrój', 'Gmina i miasto Kcynia', 'Gmina Sławatycze', 'Gmina Markowa', 'Gmina i miasto Debrzno', 'Gmina i miasto Bełżyce', 'Powiat gorzowski', 'Gmina Łukowa', 'Gmina Marcinowice', 'Miasto Piechowice', 'Gmina i miasto Żychlin', 'Gmina i miasto Grodków', 'Powiat kędzierzyńsko-kozielski', 'Gmina Pionki', 'Gmina Milejowo', 'Miasto Międzyrzec Podlaski', 'Gmina Lubomia', 'Gmina Świeszyno', 'Gmina Dynów', 'Gmina Strzelce', 'Miasto i Gmina Rogoźno', 'Miasto Giżycko', 'Powiat brzeski', 'Gmina Uścimów', 'Gmina Wieniawa', 'Gmina Łagiewniki', 'Gmina Bukowisko', 'Gmina Radwanice'];

var imageURL = [' https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/POL_gmina_M%C5%82ynarze_COA.svg/1024px-POL_gmina_M%C5%82ynarze_COA.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/3/3b/POL_Chorzele_COA_new.svg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/POL_Stronie_%C5%9Al%C4%85skie_COA.svg/543px-POL_Stronie_%C5%9Al%C4%85skie_COA.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/POL_gmina_S%C4%99dziejowice_COA.svg/543px-POL_gmina_S%C4%99dziejowice_COA.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/5/5a/POL_Kamieniec_Z%C4%85bkowicki_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/POL_gmina_Szelk%C3%B3w_COA.svg/543px-POL_gmina_Szelk%C3%B3w_COA.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/f/fc/POL_gmina_Baranowo_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/b/b2/POL_gmina_Czerwonka_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/e/ef/POL_gmina_Rzeku%C5%84_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/c/cd/POL_gmina_Radoszyce_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/d/d6/POL_gmina_Ga%C4%87_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/b/b4/POL_gmina_Zarszyn_COA_%282013%29.svg',
'https://upload.wikimedia.org/wikipedia/commons/7/7d/POL_Racib%C3%B3rz_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/f/f8/POL_powiat_przysuski_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/d/de/POL_gmina_Goworowo_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/3/36/POL_gmina_W%C4%99gierska_G%C3%B3rka_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/3/35/POL_gmina_Zakrz%C3%B3wek_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/e/e7/POL_Jedlicze_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/b/b0/POL_gmina_D%C4%85browa_Zielona_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/c/c4/POL_gmina_Malczyce_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/b/bd/POL_L%C4%85dek-Zdr%C3%B3j_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/c/cf/POL_Kcynia_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/a/ac/POL_gmina_S%C5%82awatycze_COA.svg',
'http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/POL_gmina_Markowa_COA.svg/532px-POL_gmina_Markowa_COA.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/POL_Debrzno_COA.svg/512px-POL_Debrzno_COA.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/POL_Be%C5%82%C5%BCyce_COA.svg/512px-POL_Be%C5%82%C5%BCyce_COA.svg.png',
'https://upload.wikimedia.org/wikipedia/commons/4/4f/POL_powiat_gorzowski_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/9/90/POL_gmina_%C5%81ukowa_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/7/7a/POL_gmina_Marcinowice_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/d/d6/POL_Piechowice_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/5/53/POL_%C5%BBychlin_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/a/a2/POL_Grodk%C3%B3w_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/3/3b/POL_powiat_k%C4%99dzierzy%C5%84sko-kozielski_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/d/d0/POL_gmina_Pionki_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/b/bb/POL_gmina_Milejewo_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/7/74/POL_Mi%C4%99dzyrzec_Podlaski_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/2/28/POL_gmina_Lubomia_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/e/ec/POL_gmina_%C5%9Awieszyno_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/9/9f/POL_gmina_Dyn%C3%B3w_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/1/11/POL_gmina_Strzelce_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/0/09/POL_Rogo%C5%BAno_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/f/fa/POL_Gi%C5%BCycko_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/9/92/POL_powiat_brzeski_%28wojew%C3%B3dztwo_opolskie%29_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/3/33/POL_gmina_U%C5%9Bcim%C3%B3w_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/9/95/POL_gmina_Wieniawa_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/c/c7/POL_gmina_%C5%81agiewniki_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/8/8b/POL_gmina_Bukowsko_COA.svg',
'https://upload.wikimedia.org/wikipedia/commons/8/83/POL_gmina_Radwanice_COA.svg'];

var wojewodztwo = ['województwo mazowieckie', 'województwo mazowieckie', 'województwo dolnośląskie',
'województwo łódzkie', 'województwo dolnośląskie', 'województwo mazowieckie', 
'województwo mazowieckie', 'województwo mazowieckie', 'województwo mazowieckie',
'województwo świętokrzyskie', 'województwo podkarpackie', 'województwo podkarpackie',
'województwo śląskie', 'województwo mazowieckie', 'województwo mazowieckie',
'województwo małopolskie', 'województwo lubelskie', 'województwo podkarpackie',
'województwo śląskie', 'województwo dolnośląskie', 'województwo dolnośląskie',
'województwo kujawsko-pomorskie', 'województwo lubelskie', 'województwo podkarpackie',
'województwo pomorskie', 'województwo lubelskie', 'województwo lubuskie',
'województwo lubelskie', 'województwo dolnośląskie', 'województwo dolnośląskie',
'województwo łódzkie', 'województwo opolskie', 'województwo opolskie',
'województwo mazowieckie', 'woj. warmińsko-mazurskie', 'woj. lubelskie',
'województwo śląskie', 'woj. zachodniopomorskie', 'województwo podkarpackie',
'województwo łódzkie', 'województwo wielkopolskie', 'woj. warmińsko-mazurskie',
'województwo opolskie', 'województwo lubelskie', 'województwo mazowieckie',
'województwo dolnośląskie', 'województwo podkarpackie', 'województwo dolnośląskie'];

var powiaty = ['powiat makowski', 'powiat ostrołęcki', 'powiat kłodzki',
'powiat łaski', 'powiat ząbkowicki', 'powiat makowski',
'powiat ostrołęcki', 'powiat makowski', 'powiat ostrołęcki',
'powiat konecki', 'powiat przeworski', 'powiat sanocki',
'powiat raciborski', '', 'powiat ostrołęcki',
'powiat żywiecki', 'powiat kraśnicki', 'powiat krośnieński',
'powiat częstochowski', 'powiat średzki', 'powiat kłodzki',
'powiat nakielski', 'powiat bialski', 'powiat łańcucki',
'powiat człuchowski', 'powiat lubelski', '',
'powiat biłgorajski', 'powiat świdnicki', 'powiat jeleniogórski',
'powiat kutnowski', 'powiat brzeski', '',
'powiat radomski', 'powiat elbląski', 'powiat bialski',
'powiat raciborski', 'powiat koszaliński', 'powiat rzeszowski',
'powiat kutnowski', 'powiat obornicki', 'powiat giżycki',
'', 'powiat lubartowski', 'powiat przysuski',
'powiat dzierżoniowski', 'powiat sanocki', 'powiat polkowicki',];

var doneThings = ['Herb, flaga i pieczęcie', 'Herb, flaga i pieczęcie', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka',
'Herb, flaga, banner, pieczęcie, odznaka, logo', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner i pieczęcie',
'Herb, flaga banner i pieczęcie', 'Herb, flaga banner i pieczęcie', 'Herb, flaga banner i pieczęcie',
'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka',
'Herb i flaga', 'Herb i flaga', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka',
'Herb, flaga, banner, pieczęcie, łańcuchy', 'Herb, flaga, banner, flaga stolikowa, pieczęcie', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka',
'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka',
'Herb, flaga, banner, pieczęcie, łańcuchy', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka',
'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner, pieczęcie, łańcuchy, sztandar, odznaka, medal pamiątkowy', 'Herb, flaga, flaga stolikowa, banner, łańcuch starosty, laska przew. Rady, sztandar, odznaka',
'Herb, flaga, banner, flaga stolikowa, pieczęcie', 'Herb, flaga, banner, flaga stolikowa, pieczęcie', 'Herb, flaga, banner, flaga stolikowa, pieczęcie',
'Herb, flaga, banner, flaga stolikowa, pieczęcie, łańcuchy, sztandar, odznaka', 'Herb, flaga, banner, flaga stolikowa, pieczęcie', 'Herb, flaga, banner, flaga stolikowa, pieczęcie',
'Herb, flaga, banner, flaga stolikowa, pieczęcie', 'Herb, flaga, banner, flaga stolikowa, pieczęcie', 'Herb, flaga, banner, flaga stolikowa, pieczęcie, łańcuchy, sztandar, odznaka',
'Herb, flaga, banner, flaga stolikowa, pieczęcie, łańcuchy, sztandar', 'Herb, flaga, banner, flaga stolikowa, pieczęcie', 'Herb, flaga, banner, flaga stolikowa, pieczęcie',
'Herb, flaga, banner, flaga stolikowa, pieczęcie, sztandar, łańcuchy, odznaka', 'Herb, flaga, banner, flaga stolikowa, pieczęcie, sztandar, łańcuchy', 'Herb, flaga, banner, flaga stolikowa, pieczęcie, sztandar, łańcuchy, odznaka',
'Herb i flaga', 'Herb, flaga, banner, flaga stolikowa, pieczęcie, sztandar, łańcuchy, odznaka', 'Herb, flaga, banner, flaga stolikowa, pieczęcie',
'Herb, flaga, banner, flaga stolikowa, sztandar, pieczęcie', 'Herb, flaga, banner, flaga stolikowa, sztandar, pieczęcie', 'Herb, flaga, banner, flaga stolikowa']

var dates = ['30 marca 2012', '5 sierpnia 2012', '29 października 2012',
'28 grudnia 2012', '25 kwietnia 2013', '8 maja 2013',
'2 czerwca 2013', '29 lipca 2013', '11 listopada 2013',
'28 listopada 2013', '16 grudnia 2013', '18 grudnia 2013',
'18 grudnia 2013', '30 stycznia 2014', '28 maja 2014',
'30 czerwca 2014', '30 lipca 2014', '14 sierpnia 2014',
'12 października 2014', '28 października 2014', '27 lipca 2015',
'27 sierpnia 2015', '11 października 2015', '9 listopada 2015',
'29 lutego 2016', '17 marca 2016', '29 czerwca 2016',
'26 sierpnia 2016', '16 grudnia 2016', '29 grudnia 2016',
'25 stycznia 2017', '31 maja 2017', '26 września 2017',
'28 grudnia 2017', '11 maja 2018', '29 marca 2019',
'3 kwietnia 2019', '25 kwietnia 2019', '5 czerwca 2019',
'30 maja 2019', '28 sierpnia 2019', '30 października 2019',
'23 kwietnia 2020', '23 czerwca 2020', '20 lipca 2020',
'21 lutego 2021', '15 marca 2021', '23 marca 2021'];
var resourceFolders = ['Mlynarze', 'Chorzele', 'Stronie',
'Sedziejowice', 'Kamieniec', 'Szelkow',
'Baranowo', 'Czerwonka', 'Rzekun',
'Radoszyce', 'Gac', 'Zarszyn',
'Raciborz', 'Przysucha', 'Goworowo',
'Wegierska-Gorka', 'Zakrzówek', 'Jedlicze',
'Dabrowa-Zielona', 'Malczyce', 'Ladek',
'Kcynia', 'Slawatycze', 'Markowa',
'Debrzno', 'Belzyce', 'Gorzowski',
'Lukowa', 'Marcinowice', 'Piechowice',
'Zychlin', 'Brzeg', 'Kedzierzyn',
'Pionki', 'Milejowo', 'Miedzyrzec',
'Lubomia', 'Swierzyno', 'Dynow',
'Strzelce', 'Rogozno', 'Gizycko',
'Brzeski', 'Uscimiow', 'Wieniawa',
'Lagiewniki', 'Bukowsko',]

    
if($i <=47){
  var insideGrid = document.createElement('div')
  var image = document.createElement('img')
  var mainTile = document.createElement('div');
  var headerTittle = document.createElement('h1');
  var wojewodztwoName= document.createElement('h1');
  var powiatName = document.createElement('h1');
  var bottomDiv = document.createElement('div');
  var designedElementsDiv = document.createElement('div');
  var dateDiv = document.createElement('div');
  var locationDiv = document.createElement('div');
  var designedElements = document.createElement('h1');
  var date = document.createElement('h1');
  
  insideGrid.setAttribute('class', 'grid-tile-insidor');
  headerTittle.setAttribute('class', 'headerTittle');
  wojewodztwoName.setAttribute('class', 'wojewodztwoName');
  powiatName.setAttribute('class', 'powiatName');
  image.setAttribute('src', imageURL[$i]);
  designedElementsDiv.setAttribute('class', 'designedElementsDiv');
  dateDiv.setAttribute('class', 'dateDiv');
  bottomDiv.setAttribute('class', 'bottomDiv');
  locationDiv.setAttribute('class', 'locationDiv');
  designedElements.setAttribute('class', 'designedElements');
  date.setAttribute('class', 'date');
  mainTile.setAttribute('class', 'tile');
  var singleFolder = "window.location.href="+"'"+resourceFolders[$i]+"/details.html'";
  mainTile.setAttribute('onclick', singleFolder);
  mainTile.setAttribute('style', 'cursor: pointer;');
  headerTittle.innerHTML += gminy[$i];
  wojewodztwoName.innerHTML +=wojewodztwo[$i];
  powiatName.innerHTML += powiaty[$i];
  designedElements.innerHTML += doneThings[$i]
  date.innerHTML += dates[$i];
  
  
  insideGrid.appendChild(headerTittle);
  insideGrid.appendChild(image);

  locationDiv.appendChild(wojewodztwoName);
  locationDiv.appendChild(powiatName);
  
  insideGrid.appendChild(locationDiv);
  insideGrid.appendChild(bottomDiv);
  
  mainTile.appendChild(insideGrid);

  dateDiv.appendChild(date);
  designedElementsDiv.appendChild(designedElements);
  bottomDiv.appendChild(designedElementsDiv);
  bottomDiv.appendChild(dateDiv);
  wrapper.appendChild(mainTile);
  
}

  }