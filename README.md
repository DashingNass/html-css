## Le Corbusier

Live preview:
https://batuhanarican.github.io/html-css/

### Het concept

![Le_Corbusier](https://github.com/batuhanarican/html-css/blob/master/img/img1.jpg){:width="200px"} ![Le_Corbusier](https://github.com/batuhanarican/html-css/blob/master/img/img2.jpg){:width="200px"}

Voor deze opdracht heb ik ervoor gekozen om het boek "Le Corbusier" om te zetten in een interactieve website. De kaft van het boek bevat simpele schetsen van vier moderne gebouwen waar notities bij staan. Het leek mij interessant om een keer niet met abstracte vormen te werken. Ook had het boek verschillende kleuren kaften waar ik ook graag iets mee wilde doen.

### De uitwerking

#### Illustraties
De schetsen heb ik zo nauwkeurig mogelijk nagetekend in Illustrator. Vervolgens heb ik deze opgesplitst in verschillende delen en geëxporteerd als SVG code en in mijn HTML gezet. Om alle onderdelen goed uit te lijnen heb ik gebruik gemaakt van een grid.

#### Thema's
Het boek heeft verschillende kleur-variaties en dit wilde ik graag meenemen in het product. Dit heb gedaan door radio buttons aan de onderkant te plaatsen om de gebruiker de optie te geven om van thema te wisselen. De radio buttons wilde ik graag zelf stylen, maar standaard is dat niet mogelijk, dus heb ik een span bij de input aangemaakt en die vervolgens in een label geplaatst. Alles wat in de label geplaatst wordt is klikbaar, dus ook de span. De span heb ik gestyled als een knop en de radio button verborgen.

Om de kleuren van het boek en de schetsen aan te passen heb ik gebruik gemaakt van javascript die styling toevoegt aan de betreffende onderdelen.

#### Animatie
##### De schetsen
In de eerste instantie heb ik de hover state gebruikt om de schetsen te animeren met stroke-dasharray en stroke-dashoffset. Ik wilde graag het effect creëren dat er geschetst werd, dus heb ik met deze twee gewerkt. Wanneer je hovert over de schetsen verdwijnen de lijnen aan de binnenkant en komen ze weer terug als de hover state niet meer actief is. Om de animatie soepel te laten verlopen heb ik ook gebruik gemaakt van transition-duration van 2 seconden en transition-timing-function met een ease-in. Uiteindelijk vond ik de interactie niet interessant genoeg, dus heb ik de schetsen in een span en label gestopt (net als bij de knoppen voor de thema's) om het klikbaar te maken. Wanneer er op geklikt wordt, animeren de schetsen en komen ze omghoog in de vorm van een kaart.

##### Het boek
Het eerste concept bestond uit een rode vlak met een zwarte kop en verschillende schetsen die animeren. Om de vorm van het boek terug te laten komen heb ik gebruik gemaakt van verschillende divs die de onderdelen van het boek nabootsen, zoals de binnenkant, rug en achterkant. Dit gecombineerd met transform scale, perspective, rotateX, rotateY en rotateZ heeft ervoor gezorgd dat het boek diepte heeft gekregen en ook echt op een boek lijkt. Om de website meer interactief te maken heb ik een checkbox geplaatst die met behulp van javscript vershchillende classes toggled en animeert tussen de oude (plat) en nieuwe (boek) staat.

#### Input
Het is mogelijk om de website volledig met een muis te gebruiken. De schetsen, thema's en 3D knop kunnen allemaal aangeklikt worden. Toch vond ik dat er meer potentie was, dus heb ik ook key inputs gebruikt om te kunnen navigeren.

Spatie = schakelen tussen 2D en 3D weergave
Pijltjes omhoog/omlaag = schakelen tussen schetsen
Pijltjes rechts/links = shakelen tussen thema's

Omdat de input voor 2D/3D weergave gebruik maakt van spatie, ontstonden er problemen. De default instellingen van spatie stootten in sommige gevallen met mijn interactie. Soms scrollde de website bijvoorbeeld naar beneden, of werd de interactie niet uitgevoerd, omdat de knop was geselecteerd en dus dubbel werd aangeroepen. Om dit op te lossen heb ik een stukje javascript gevonden (zie bron: disable scroll down when spacebar is pressed) die de default interactie van spatie uitschakelt.

### Bronnen

- https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
- https://www.w3schools.com/jsref/prop_radio_checked.asp
- https://css-tricks.com/svg-line-animation-works/
- https://css-tricks.com/almanac/properties/t/transform/
- https://stackoverflow.com/questions/18522864/disable-scroll-down-when-spacebar-is-pressed-on-firefox
- https://keycode.info/
- https://developer.mozilla.org/nl/docs/Web/CSS/cursor
