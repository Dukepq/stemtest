export const questions = [
  {
    id: "1",
    statement:
      "Ook na 2035 moet je nog een nieuwe benzine- of dieselwagen kunnen kopen.",
  },
  {
    id: "2",
    statement:
      "Personeel van de Vlaamse overheid mag achter het loket een hoofddoek dragen.",
  },
  {
    id: "3",
    statement:
      "Er moeten meer buslijnen komen, ook op plaatsen waar weinig mensen opstappen.",
  },
  {
    id: "4",
    statement:
      "Werklozen moeten hun uitkering na een tijd automatisch verliezen.",
  },
  {
    id: "5",
    statement:
      "Socialemediabedrijven moeten zelf kunnen beslissen hoe ze omgaan met fake news op hun platform.",
  },
  {
    id: "6",
    statement:
      "Abortus moet toegelaten worden tot 18 weken in de zwangerschap.",
  },
  {
    id: "7",
    statement:
      "De schoolvakantie in de zomer moet korter, andere vakanties langer.",
  },
  {
    id: "8",
    statement:
      "De Europese Unie moet toestaan dat de lidstaten grotere begrotingstekorten hebben.",
  },
  {
    id: "9",
    statement:
      "Bouwen in overstromingsgevoelige gebieden moet verboden worden.",
  },
  {
    id: "10",
    statement:
      "Wie een levenslange straf krijgt, mag nooit vervroegd vrijkomen.",
  },
  {
    id: "11",
    statement: "Dienstencheques moeten duurder worden.",
  },
  {
    id: "12",
    statement:
      "EU-lidstaten die de democratische regels niet respecteren, moeten minder geld krijgen van de EU.",
  },
  {
    id: "13",
    statement:
      "De beperkingen om stikstof uit te stoten, moeten versoepeld worden.",
  },
  {
    id: "14",
    statement:
      "Stakers mogen de toegang tot bedrijventerreinen niet afsluiten.",
  },
  {
    id: "15",
    statement:
      "Mensen met een groot vermogen (veel geld of veel bezittingen) moeten meer belastingen betalen.",
  },
  {
    id: "16",
    statement: "De politie mag camera's met gezichtsherkenning gebruiken.",
  },
  {
    id: "17",
    statement: "Gaan stemmen moet verplicht blijven.",
  },
  {
    id: "18",
    statement:
      "De Europese Unie moet stoppen met het subsidiëren van intensieve veeteelt.",
  },
  {
    id: "19",
    statement: "Elke gemeente moet verplicht een aantal asielzoekers opvangen.",
  },
  {
    id: "20",
    statement: "Oekraïne moet lid worden van de Europese Unie.",
  },
  {
    id: "21",
    statement:
      "In plaats van sociale woningen te bouwen, moet de overheid mensen helpen om op de privémarkt te huren.",
  },
  {
    id: "22",
    statement: "België moet uit de NAVO stappen.",
  },
  {
    id: "23",
    statement:
      "Je moet meer belastingen betalen op vliegtuigtickets voor korte afstanden.",
  },
  {
    id: "24",
    statement: "De VRT moet stoppen met het uitzenden van misvieringen op tv.",
  },
  {
    id: "25",
    statement:
      "De sociale zekerheid moet volledig gesplitst worden en naar de deelstaten gaan.",
  },
  {
    id: "26",
    statement:
      "De Europese Unie moet zich afzijdig houden bij het conflict tussen Israël en de Palestijnen.",
  },
  {
    id: "27",
    statement: "De overheid mag geen nieuwe moskeeën erkennen.",
  },
  {
    id: "28",
    statement:
      "België moet Congo een schadevergoeding betalen voor het onrecht dat in de vroegere Belgische kolonie werd gepleegd.",
  },
  {
    id: "29",
    statement:
      "Leerlingen in de lagere school moeten gratis schoolmaaltijden krijgen.",
  },
  {
    id: "30",
    statement: "Wie geen Nederlands spreekt, kan geen sociale woning krijgen.",
  },
  {
    id: "31",
    statement:
      "De Vlaamse overheid moet meer geld geven aan kleine gemeenten en minder aan grote.",
  },
  {
    id: "32",
    statement:
      "Om de Belgische nationaliteit te krijgen, moet je slagen voor een inburgeringsexamen.",
  },
  {
    id: "33",
    statement:
      "Het moet duurder worden om elektrische auto’s uit China in te voeren in de Europese Unie.",
  },
  {
    id: "34",
    statement:
      "De volgende regering moet de beslissing nemen om een nieuwe kerncentrale te bouwen.",
  },
  {
    id: "35",
    statement:
      "De overheid moet de banken verplichten om de rente op spaarboekjes te verhogen.",
  },
];

export const parties = [
  {
    shorthand: "nva",
    commonName: "N-VA",
    partyColor: "#FCBD1B",
    logo: "/assets/logos/nva.svg",
  },
  {
    shorthand: "vb",
    commonName: "Vlaams Belang",
    partyColor: "#FFE500",
    logo: "/assets/logos/vb.svg",
  },
  {
    shorthand: "ovld",
    commonName: "Open VLD",
    partyColor: "#005DAA",
    logo: "/assets/logos/open-vld.svg",
  },
  {
    shorthand: "pvda",
    commonName: "PVDA",
    partyColor: "#CC0044",
    logo: "/assets/logos/pvda.svg",
  },
  {
    shorthand: "cdv",
    commonName: "CD&V",
    partyColor: "#FF6000",
    logo: "/assets/logos/cdv.svg",
  },
  {
    shorthand: "groen",
    commonName: "Groen",
    partyColor: "#03AE5C",
    logo: "/assets/logos/groen.png",
  },
  {
    shorthand: "vooruit",
    commonName: "Vooruit",
    partyColor: "#FF0014",
    logo: "/assets/logos/vooruit.svg",
  },
  {
    shorthand: "vooru",
    commonName: "Voor U",
    partyColor: "#E00BB9",
    logo: "/assets/logos/vooru.png",
  },
  {
    shorthand: "volt",
    commonName: "Volt",
    partyColor: "#502379",
    logo: "/assets/logos/volt.svg",
  },
] as const;

export const answers = [
  {
    question:
      "Ook na 2035 moet je nog een nieuwe benzine- of dieselwagen kunnen kopen.",
    index: 0,
    answers: {
      vooru: {
        agrees: true,
        reason: "Minder verbieden, meer stimuleren.",
      },
      cdv: {
        agrees: true,
        reason:
          "Na 2035 kunnen er nog wagens met verbrandingsmotor verkocht worden op voorwaarde dat ze uitstootvrij zijn. De ecoscore van voertuigen moet omhoog als we een gezondere leefomgeving willen. En elektrisch rijden moet betaalbaar worden voor iedereen.",
      },
      nva: {
        agrees: true,
        reason:
          "We staan in principe achter de Europese ambitie om nieuwe wagens zo snel mogelijk emissievrij te krijgen. Maar daar verbinden we telkens een reeks voorwaarden aan inzake haalbaarheid en betaalbaarheid. Die hebben voorrang op elke deadline.",
      },
      pvda: {
        agrees: true,
        reason:
          "We verbieden de verkoop van nieuwe wagens met een verbrandingsmotor niet zolang elektrische wagens duurder zijn. Door volop in te zetten op openbaar vervoer en andere vormen van vervoer, zorgen we voor een echt alternatief voor de wagen.",
      },
      vb: {
        agrees: true,
        reason:
          "De versnelde omschakeling naar elektrische wagens is niet milieuvriendelijker (zeldzame grondstoffen), vernietigt onze autoindustrie (oneerlijke concurrentie uit China) en blijft voor de meesten onbetaalbaar, zelfs met subsidies uit belastinggeld.",
      },
      groen: {
        agrees: false,
        reason:
          "De EU heeft al besloten dat vanaf 2035 alleen nog emissievrije wagens verkocht mogen worden. We maken elektrische wagens goedkoper dan diesel- of benzinewagens, vooral voor de mensen die er nu geen kunnen betalen.",
      },
      ovld: {
        agrees: false,
        reason:
          "De huidige technologie van fossiele brandstoffen is een eindig verhaal. We moeten de deur niet terug openzetten voor het verleden, wel voor de toekomst. Voor ons maakt het niet uit welke technologie in onze auto’s zit, zolang ze zero emission zijn.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Elektrische auto's moeten betaalbaar worden voor iedereen. Die zijn veel beter voor het milieu. Het is al lang beslist om tegen 2035 geen nieuwe wagens op fossiele brandstoffen meer toe te laten. Het beleid moet niet constant omgegooid worden.",
      },
      volt: {
        agrees: false,
        reason:
          "Geen verkoop fossiele auto's na 2035 in overeenstemming met bestaande EU richtlijn. We investeren ook massaal in openbaar vervoer en deelauto's.",
      },
    },
  },
  {
    question:
      "Personeel van de Vlaamse overheid mag achter het loket een hoofddoek dragen.",
    index: 1,
    answers: {
      vooru: { agrees: false, reason: "Scheiding kerk en staat." },
      cdv: {
        agrees: true,
        reason:
          "Iedereen heeft politieke, filosofische, religieuze, ... overtuigingen. Daar is niets mis mee en dat mag ook tot uiting komen. Wel eisen we te allen tijde de neutraliteit van de geleverde diensten, zodat iedereen een gelijke behandeling krijgt.",
      },
      groen: {
        agrees: true,
        reason:
          "Een hoofddoek of kruisje maakt je geen minder goede ambtenaar. Je bent vrij om te dragen wat je wil. Onze samenleving is divers, dat hoeven we niet te verbergen.",
      },
      ovld: {
        agrees: true,
        reason:
          "Het belang van neutraliteit moet beoordeeld worden in zijn context. Dat zegt ook het Europees Hof. Als iemand geen gezagsfunctie heeft, moet dit kunnen. Het is wel aan de dienst om daar een beoordeling te maken.",
      },
      pvda: {
        agrees: true,
        reason:
          "Loketbedienden moeten iedereen neutraal en gelijk behandelen en een hoofddoek staat zo'n neutrale, kwalitatieve dienstverlening niet in de weg. We vragen dat de overheid respect opbrengt voor ieders persoonlijke overtuiging.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Loketpersoneel van de Vlaamse overheid moet neutraal zijn. Maar neutraliteit zit in wat je doet, niet in wat je draagt.",
      },
      nva: {
        agrees: false,
        reason:
          "De overheid mag op geen enkele wijze een religieuze, levensbeschouwelijke, filosofische of politieke voorkeur laten blijken en moet neutraal zijn. Daarom kunnen dergelijke symbolen niet gedragen worden bij rechtstreeks klantencontact.",
      },
      vb: {
        agrees: false,
        reason:
          "Burgers hebben recht op een neutrale openbare dienstverlening. Overheidspersoneel mag tijdens de uitoefening van het ambt dan ook geen uiting geven van de godsdienstige, politieke of filosofische overtuiging.",
      },
      volt: {
        agrees: true,
        reason: "Neutraliteitsregels moeten voor alle religies gelijk zijn.",
      },
    },
  },
  {
    question:
      "Er moeten meer buslijnen komen, ook op plaatsen waar weinig mensen opstappen.",
    index: 2,
    answers: {
      vooru: {
        agrees: false,
        reason: "Beperk de overheid tot de kerntaken",
      },
      cdv: {
        agrees: true,
        reason:
          "Iédereen moet kunnen genieten van zijn recht op mobiliteit. Witte vlekken zijn onaanvaardbaar. Daar waar er meer mensen reizen moet het aanbod stijgen maar dat mag niet ten koste gaan van andere mensen die afgelegen wonen.",
      },
      groen: {
        agrees: true,
        reason:
          "Eerlijk klimaatbeleid, dat is ook zorgen voor beter én goedkoper openbaar vervoer. We willen minstens één bus per half uur in elk dorp en een betere verbinding tussen het buitengebied en stads- en dorpskernen. We laten niemand achter.",
      },
      pvda: {
        agrees: true,
        reason:
          "We willen de afbraak van ons openbaar vervoer stoppen en het schrappen van meer dan 3.000 bushaltes terugdraaien. Ook wie niet in een grote stad of langs een grote weg woont, heeft recht op openbaar vervoer.",
      },
      vb: {
        agrees: true,
        reason:
          "We pleiten voor een toegankelijk busvervoer. Routes, stopplaatsen en frequenties moeten kunnen worden aangepast, als er een aantoonbare behoefte is.",
      },
      vooruit: {
        agrees: true,
        reason:
          "We willen investeren in meer, beter en goedkoper openbaar vervoer. De huidige Vlaamse regering heeft 3.000 haltes geschrapt waardoor veel mensen geen openbaar vervoer meer hebben in de buurt.",
      },
      nva: {
        agrees: false,
        reason:
          "In het verleden heeft men gesmeten met belastinggeld door overal lege bussen te laten rondrijden. We moeten inzetten op een sterk aanbod op drukke lijnen. Op plaatsen waar amper mensen opstappen voorzien we een aanvullend flexiaanbod.",
      },
      ovld: {
        agrees: false,
        reason:
          "Mensen moeten op hun bestemming geraken. Mobiliteit gaat over meer dan overal bussen laten rijden. Het gaat over passend aanbod voor de exacte vraag. Vervoer op maat, zoals flexbusjes, is daar een deel van.",
      },
      volt: {
        agrees: true,
        reason:
          "We herintroduceren landelijke busverbindingen waarbij bij betrouwbare en frequente verbindingen een aanzienlijk aantal passagiers kan worden verwacht. We leggen trams aan in steden en suburbane gebieden en buurttrams in meer landelijke regio's.",
      },
    },
  },
  {
    question:
      "Werklozen moeten hun uitkering na een tijd automatisch verliezen.",
    index: 3,
    answers: {
      vooru: {
        agrees: true,
        reason: "Beperk de werkloosheidsvergoedingen in de tijd.",
      },
      cdv: {
        agrees: true,
        reason:
          "Bij rechten horen ook plichten. Werkloosheidsuitkering kan maximaal drie jaar, maar wie niet meewerkt of geen inspanningen doet om Nederlands te leren, moet meteen zijn werkloosheidsuitkering kunnen verliezen. 55-plussers krijgen een uitzondering.",
      },
      nva: {
        agrees: true,
        reason:
          "België is één van de weinige landen ter wereld waar werkloosheidsuitkeringen onbeperkt in duur zijn. Dit houdt mensen aan de bedelstaf van de overheid en weg van de arbeidsmarkt. De uitkeringen moeten dus begrensd worden in de tijd.",
      },
      ovld: {
        agrees: true,
        reason:
          "Onbeperkte werkloosheid ondermijnt het rechtvaardigheidsgevoel en de betaalbaarheid van de sociale zekerheid. Zeker nu er zoveel vacatures openstaan! 2 jaar biedt voldoende bescherming. We voorzien extra begeleiding om terug aan de slag te gaan.",
      },
      vb: {
        agrees: true,
        reason:
          "Een werkloosheidsuitkering is bedoeld als vangnet, niet als hangmat. We pleiten voor een sociale beperking in de tijd (2 jaar), behalve voor 55-plussers, mantelzorgers en werklozen in opleiding voor een knelpuntberoep.",
      },
      groen: {
        agrees: false,
        reason:
          "Mensen zonder job geld afnemen is niet eerlijk. Onderzoek toont ook dat het niet werkt. Mensen belanden sneller in armoede en raken dan net minder snel aan werk. Wat werkt wel: mensen begeleiden. Enkel wie echt geen job zoekt, verliest de uitkering.",
      },
      pvda: {
        agrees: false,
        reason:
          "Studies tonen aan dat je mensen niet helpt om een job te vinden als je hun werkloosheidsuitkering afneemt en hen in de armoede duwt. Investeren in begeleiding en opleiding, dat is wat moet gebeuren.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Iedereen die kan werken, moeten we aan werk helpen. Hoe? Door strikte begeleiding. Als je na 2 jaar toch geen job vindt, moet je een basisbaan met een volwaardig loon krijgen. Die moet je aanvaarden voor een volwaardige sociale bescherming.",
      },
      volt: {
        agrees: false,
        reason:
          "De tewerkstellingsgraad moet omhoog, we stimuleren dit via allerlei initiatieven zoals opleidingen (gemeenschapsdienst indien mensen hier niet op willen ingaan). Niet automatisch uitkering verliezen, enkel als vooropgestelde trajecten niet gevolgd worden.",
      },
    },
  },
  {
    question:
      "Socialemediabedrijven moeten zelf kunnen beslissen hoe ze omgaan met fake news op hun platform.",
    index: 4,
    answers: {
      vooru: { agrees: true, reason: "Persvrijheid" },
      nva: {
        agrees: true,
        reason:
          "De overheid moet slechts ingrijpen in zeer welomschreven gevallen, zoals bij inhoud waarin opgeroepen wordt tot geweld. Voor de rest telt de vrije meningsutiging en moeten socialemediabedrijven zelf regels uitvaardigen en naleven.",
      },
      cdv: {
        agrees: false,
        reason:
          "DSA-richtlijn stelt dat socialemediabedrijven desinformatie moeten bestrijden en waken over het verspreiden van betrouwbare informatie. Gelet op de grote effecten van desinformatie op de democratische samenleving kan je dit niet aan hen overlaten.",
      },
      groen: {
        agrees: false,
        reason:
          "Veel mensen zitten op sociale media, dus daar zijn spelregels nodig, net zoals in de 'echte' samenleving. Zo treden we bijvoorbeeld op tegen desinformatie en tegen algoritmes die geweld en haat aanmoedigen voor likes.",
      },
      ovld: {
        agrees: false,
        reason:
          "Socialemediabedrijven moeten inzicht geven in de werking van hun algoritmes en wat ze doen om fake news tegen te gaan. Ze moeten snel handelen wanneer gebruikers fake news berichten melden, zeker wanneer het gaat over kwetsbare personen.",
      },
      pvda: {
        agrees: false,
        reason:
          "Instagram censureert topmodel Bella Hadid. Elon Musk van X spreekt zich uit tegen vakbonden. De sociale media worden gecontroleerd door grote multinationals en een handvol superrijken. Het is niet aan hen om te beslissen wat desinformatie is.",
      },
      vb: {
        agrees: false,
        reason:
          "Wat offline legaal is, moet dat online ook zijn. Bedrijven bepalen niet wat de waarheid is.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Om fake news, haatzaaien en desinformatie echt te kunnen bestrijden, moeten alle sociale media aan dezelfde regels onderworpen worden en hun verantwoordelijkheid nemen.",
      },
      volt: {
        agrees: false,
        reason:
          "Er zijn hier reeds richtlijnen rond in de Europese regelgeving, met name “digital services act”. We steunen deze regelgeving.",
      },
    },
  },
  {
    question: "Abortus moet toegelaten worden tot 18 weken in de zwangerschap.",
    index: 5,
    answers: {
      vooru: { agrees: true, reason: "Baas in eigen buik" },
      groen: {
        agrees: true,
        reason:
          "Over je lichaam beslis je zelf. Niemand gaat licht over een abortus. Een kortere termijn zorgt ook niet voor minder abortussen. Het zorgt wel dat je naar Nederland moet, waar een termijn van 24 weken geldt. En niet iedereen kan zich dat veroorloven.",
      },
      ovld: {
        agrees: true,
        reason:
          "Meer dan 500 vrouwen per jaar trekken naar Nederland omdat ze in ons land geen abortus meer kunnen laten uitvoeren. Alle experts zijn het eens dat we de termijn zouden moeten optrekken naar 18 weken. Vrouwen zijn baas in eigen buik.",
      },
      pvda: {
        agrees: true,
        reason:
          "Dat is ook wat wetenschappelijke experts aanbevelen. Jaarlijks trekken zo’n 400 Belgische vrouwen naar Nederland voor een abortus. Die vrouwen hebben recht op zorg in eigen land.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Vrouwen moeten zelf de vrijheid en de tijd krijgen om te beslissen over een zwangerschap. Door de termijn te verlengen tot 18 weken, helpen we jaarlijks honderden vrouwen in nood en gunnen we hen de tijd en zorg die nodig is.",
      },
      cdv: {
        agrees: false,
        reason:
          "Er moet respect zijn voor het ongeboren leven. Vanaf 15 weken wordt de procedure meer ingrijpend en is er mogelijks een pijnperceptie bij de foetus. Daarom mag de termijn niet later dan 14 weken na conceptie liggen.",
      },
      nva: {
        agrees: false,
        reason:
          "Een uitbreiding van de abortuswet verdient meer nuance dan louter gegoochel met termijnen. Vanaf 12 weken zijn vaak invasieve ingrepen nodig met een andere ethische lading. Een laattijdige abortus is onder bepaalde omstandigheden al mogelijk.",
      },
      vb: {
        agrees: false,
        reason:
          "We verzetten ons tegen iedere versoepeling en pleiten voor meer preventie en bijstand.",
      },
      volt: {
        agrees: true,
        reason:
          "Akkoord. Een onafhankelijke experten commissie heeft dit aanbevolen en het recht van de vrouw om over eigen lichaam te beslissen moet gewaarborgd worden.",
      },
    },
  },
  {
    question:
      "De schoolvakantie in de zomer moet korter, andere vakanties langer.",
    index: 6,
    answers: {
      vooru: {
        agrees: false,
        reason: "Meer focus op resultaten in het onderwijs.",
      },
      groen: {
        agrees: true,
        reason:
          "Met een wat kortere zomervakantie gaat er minder leerkennis verloren. We breiden andere vakanties uit, zodat leerlingen en leerkrachten meer rust krijgen tijdens het jaar. Werkende ouders kunnen daardoor opvang van jonge kinderen beter spreiden.",
      },
      ovld: {
        agrees: true,
        reason:
          "De zomervakantie duurt nu te lang. Daardoor is er leerverlies bij bepaalde leerlingen. Door de vakanties beter te spreiden kunnen we dat oplossen en zorgen we ervoor dat alle leerlingen dezelfde kansen krijgen. Zomerscholen zijn een goede opstap.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Een kortere zomervakantie is beter voor de ontwikkeling van kinderen en jongeren en verkleint de  leerachterstand. Tegelijk zorgen langere tussentijdse vakanties voor meer tussentijdse rust voor leerkrachten.",
      },
      cdv: {
        agrees: false,
        reason:
          "Pas op basis van een grondig debat, waarbij naast leerverlies ook andere aspecten worden meegenomen zoals de impact op het jeugdwerk, de impact voor personeelsleden, ... kan hierover een beslissing worden genomen. Leerkwaliteit moet voorop staan.",
      },
      nva: {
        agrees: false,
        reason:
          "Een hervorming is bespreekbaar, maar momenteel is er in het onderwijsveld geen breed draagvlak om deze hervorming door te voeren.",
      },
      pvda: {
        agrees: false,
        reason:
          "We willen één vakantieregeling in het hele land. En die moet rekening houden met wat het beste is voor kinderen en leerkrachten, maar ook met de organisatie van de samenleving, met de mogelijkheden tot opvang en met de situatie voor de ouders.",
      },
      vb: {
        agrees: false,
        reason:
          "Zolang er geen wetenschappelijk bewijs is dat een andere indeling van de vakanties leidt tot  betere leerprestaties, we willen de schooljaarkalender niet wijzigen.",
      },
      volt: {
        agrees: true,
        reason:
          "Akkoord. We denken dat dit  voor leerlingen in moeilijke sociale omstandigheden goed is (minder lange isolatie in de zomer), en het systeem in Brussel en België is best uniform.",
      },
    },
  },
  {
    question:
      "De Europese Unie moet toestaan dat de lidstaten grotere begrotingstekorten hebben.",
    index: 7,
    answers: {
      vooru: { agrees: false, reason: "Beperk de staatsuitgaven." },
      cdv: {
        agrees: true,
        reason:
          "We pleiten voor de implementatie van het nieuwe Europese begrotingskader waarbij schuldafbouw wordt gecombineerd met hervormingen en investeringen.",
      },
      groen: {
        agrees: true,
        reason:
          "De strenge Europese begrotingsregels bevorderen geen evenwichtig begrotingsbeleid. Ze leggen te veel nadruk op het terugdringen van het tekort op korte termijn, en te weinig op investeringen die zich op lange termijn terugbetalen, bv. klimaatbeleid",
      },
      pvda: {
        agrees: true,
        reason:
          "De Europese begrotingsregels zijn gebaseerd op willekeurige cijfers. Ze dienen enkel om besparingen op de sociale budgetten op te leggen. We hebben andere regels nodig, die inzetten op investeringen en sociaal beleid.",
      },
      vb: {
        agrees: true,
        reason:
          "De begroting is een wet die door een parlement gestemd wordt. De nationale democratieën (lidstaten) zijn dus verantwoordelijk, niet de EU. Landen die de euro gebruiken, moeten wel afspraken maken om de stabiliteit van de munt te verzekeren.",
      },
      nva: {
        agrees: false,
        reason:
          "De begrotingsafspraken op Europees niveau zijn belangrijk voor de stabiliteit van de Eurozone en de Europese economie. Uit de hand lopende overheidsschulden van één lidstaat, brengen alle lidstaten in de problemen.",
      },
      ovld: {
        agrees: false,
        reason:
          "Enkel een land met een budget op orde kan haar burgers beschermen en welvaart creëren. Een gezond budget is essentieel om ons sociaal model te behouden en toekomstige uitdagingen zoals de vergrijzing, het klimaat en mogelijke crisissen aan te kunnen.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Een gezonde begroting is de basis voor een sterke welvaartsstaat. Lidstaten moeten de nodige investeringen kunnen doen in zorg, duurzame economie, klimaattransitie en defensie. Dat vergt betere begrotingsregels, niet noodzakelijk grote terkorten.",
      },
      volt: {
        agrees: false,
        reason:
          "We moeten huidige EU afspraken respecteren. We vermijden echter blinde bezuinigingen die uiteindelijk averechts kunnen werken. Hogere werkgelegenheid, preventieve gezondheidsmaatregelen om ziekte te verminderen, een intensievere strijd tegen fraude, het stopzetten van subsidies voor fossiele brandstoffen en duurzame investeringen met terugverdieneffecten dragen allemaal bij aan een gezonde begroting.",
      },
    },
  },
  {
    question: "Bouwen in overstromingsgevoelige gebieden moet verboden worden.",
    index: 8,
    answers: {
      vooru: {
        agrees: false,
        reason: "Minder verbieden, meer stimuleren.",
      },
      cdv: {
        agrees: true,
        reason:
          "Niet met dictaat vanuit Brussel maar in overleg met lokale besturen. Enkel mits klimaatrobuuste bouwtechnieken kunnen alsnog bouwvergunningen kunnen gegeven worden.",
      },
      groen: {
        agrees: true,
        reason:
          "Iedereen heeft recht op een goede woning. Een huis dat regelmatig kan overstromen, dat wensen we niemand toe. We kunnen die gebieden ook net gebruiken om water op te nemen en vast te houden. Zo beschermen we andere gebieden tegen overstromingen.",
      },
      nva: {
        agrees: true,
        reason:
          "Op termijn zijn we gewonnen voor een volledig verbod op het bouwen in overstromingsgevoelig gebied. We moeten er wel op toezien dat er voldoende alternatieven zijn.",
      },
      ovld: {
        agrees: true,
        reason:
          "Dit is soms al het geval. Bouwen in overstromingsgevoelig gebied moet sterk afgeraden worden. Waar de risico’s echt te groot zijn, is het gewoon beter van niet. Eigenaars van bouwgronden daar krijgen een billijke vergoeding.",
      },
      pvda: {
        agrees: true,
        reason:
          "De grote overstromingen van de laatste tijd maken duidelijk dat we beter niet in overstromingsgevoelige gebieden bouwen. Gebieden met een groot waterbergend vermogen willen we omzetten naar natuur-, bos- of parkgebied met gepaste compensaties.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Overstromingen zorgen voor ondergelopen kelders en immense schade aan woningen. Met hoge kosten, zowel voor de eigenaars en de hele samenleving. We kunnen die kosten alleen vermijden door te stoppen met bouwen in overstromingsgevoelige gebieden.",
      },
      vb: {
        agrees: false,
        reason:
          "Een absoluut verbod is onbetaalbaar wanneer de bouwrechten vergoed moeten worden. Waar mogelijk moeten de bouwvoorschriften wel aangepast worden en eigenaars moeten goed geïnformeerd worden over de risico's.",
      },
      volt: {
        agrees: true,
        reason:
          "We erkennen de ontradende incentieven die er nu al zijn, maar dit is vaak niet voldoende. Wonen in overstromingsgebied kan financieel aantrekkelijk zijn, maar catastrofale gevolgen hebben. We pleiten voor een betere ruimtelijke ordening die rekening houdt met nieuwe klimaatomstandigheden. Nieuwe woningen worden preferentieel op duurzame locaties gebouwd, d.w.z. met beschikbaarheid van openbaar vervoer en voorzieningen.",
      },
    },
  },
  {
    question:
      "Wie een levenslange straf krijgt, mag nooit vervroegd vrijkomen.",
    index: 9,
    answers: {
      vooru: {
        agrees: false,
        reason: "Doordring het beleid met mensenrechten.",
      },
      cdv: {
        agrees: true,
        reason:
          "Levenslange opsluiting wordt opgelegd omdat mensen verwerpelijke misdrijven plegen. De uitzonderlijke redenen nagelaten, moet de regel zijn: levenslang is levenslang.",
      },
      nva: {
        agrees: true,
        reason:
          "Vervroegde vrijlating is een gunst die pas kan worden toegekend nadat een belangrijk deel van de straf werd uitgezeten en er een wil is om zich te integreren in de maatschappij. Voor levenslange straffen zou dit echter onmogelijk moeten zijn.",
      },
      vb: {
        agrees: true,
        reason:
          "We pleiten voor de volledige uitvoering van elke straf die de rechtbank in verhouding tot de ernst van het vergrijp, met inachtname van alle omstandigheden en conform de wet heeft uitgesproken.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Een rechter moet kunnen beslissen dat wie levenslang krijgt ook effectief levenslang opgesloten wordt.",
      },
      groen: {
        agrees: false,
        reason:
          "Een gevangenisstraf gaat ook over herstel en re-integratie in de samenleving. Een levenslange gevangenisstraf zonder hoop op vrijlating is onmenselijk. Vervroegde vrijlating gebeurt nooit zomaar: een rechter weegt iedere aanvraag zorgvuldig af.",
      },
      ovld: {
        agrees: false,
        reason:
          "Dit moet zaak per zaak bekeken worden. Onder de juiste en strikte voorwaarden moet iemand de kans krijgen om zich te re-integreren in de samenleving. Die voorwaarden moet hij of zij ook voor de rest van zijn leven naleven.",
      },
      pvda: {
        agrees: false,
        reason:
          "De strafuitvoeringsrechtbank bekijkt geval per geval, met als doel de samenleving te beschermen en re-integratie te bevorderen. Zij moet inschatten wat het risico op recidive is. Slachtoffers moeten beter betrokken worden bij de beslissing.",
      },
      volt: {
        agrees: false,
        reason:
          "Oneens. Prioriteit zou moeten liggen bij alternatieve straffen en succesvolle re-integratie  voor niet-gewelddadige misdrijven, met behoud van detentie voor individuen die als een gevaar voor de samenleving worden beschouwd.",
      },
    },
  },
  {
    question: "Dienstencheques moeten duurder worden.",
    index: 10,
    answers: {
      vooru: { agrees: false, reason: "Minder lasten voor de mensen." },
      cdv: {
        agrees: true,
        reason:
          "Alleen door de lonen van huishoudhulpen te verhogen, blijft dit systeem houdbaar. Een minimale verhoging van de dienstencheques is het verschil tussen een huishoudhulp, of geen huishoudhulp in de toekomst.",
      },
      groen: {
        agrees: true,
        reason:
          "We willen een eerlijk loon voor huishoudhulpen. Terwijl hun werk onmisbaar is, houden zij vaak nauwelijks iets over aan het eind van de maand. Daarom willen we een prijsstijging van één euro, die rechtstreeks naar de huishoudhulp gaat.",
      },
      ovld: {
        agrees: true,
        reason:
          "Wij voerden destijds de dienstencheques in. Goed voor gebruikers en werknemers. We willen dit systeem verder uitbreiden naar andere taken. Maar dan moet de prijs realistisch zijn. Zo blijft het systeem betaalbaar.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Dienstencheques kunnen wat duurder worden op voorwaarde dat dit extra geld naar betere loon- en arbeidsvoorwaarden voor huishoudhulpen gaat.",
      },
      nva: {
        agrees: false,
        reason:
          "De lage prijs van dienstencheques is een van de succesfactoren van het systeem. Eerder dan deze aan te passen kan gekeken worden om de voorwaarden en fiscale aftrek te herbekijken binnen een brede fiscale hervorming die de lasten op arbeid verlaagt.",
      },
      pvda: {
        agrees: false,
        reason:
          "Dienstencheques vormen een belangrijke ondersteuning voor gezinnen om de huishoudelijke taken rond te krijgen. We willen die breed toegankelijk houden met goede loon- en arbeidsvoorwaarden voor de huishoudhulpen.",
      },
      vb: {
        agrees: false,
        reason: "Voor veel gebruikers is een prijsverhoging niet haalbaar.",
      },
      volt: {
        agrees: true,
        reason:
          "Een bescheiden verhoging van de dienstencheques mag, zolang het de lonen van arbeiders verhoogt en niet alleen de bestaande subsidie vermindert",
      },
    },
  },
  {
    question:
      "EU-lidstaten die de democratische regels niet respecteren, moeten minder geld krijgen van de EU.",
    index: 11,
    answers: {
      vooru: {
        agrees: true,
        reason: "De EU moet meer democratisch worden.",
      },
      cdv: {
        agrees: true,
        reason:
          "De EU staat of valt bij het respecteren van de regels die afgesproken zijn. Alle EU-lidstaten moeten de fundamenten van rechtstaat en democratie respecteren. We willen lidstaten niet subsidiëren die de afgesproken regels niet naleven.",
      },
      groen: {
        agrees: true,
        reason:
          "Democratie, rechtstaat en mensenrechten vormen de basis van de Europese Unie. De EU moet geen geld blijven geven aan lidstaten zoals Hongarije die die waarden niet respecteren.",
      },
      nva: {
        agrees: true,
        reason:
          "Bij een ernstige en voortdurende schending van de rechtsstaat kan de EU optreden tegen een lidstaat. We moeten er uiteraard ook strikt op toezien dat lidstaten de Europese middelen niet afwenden of misbruiken en nemen desgevallend maatregelen.",
      },
      ovld: {
        agrees: true,
        reason:
          "Als je deel wil uitmaken van de club en wil profiteren van de voordelen, moet je ook de regels van de club volgen. De EU is meer dan een geldautomaat. Het is ook een unie van vrijheid en vooruitgang.",
      },
      pvda: {
        agrees: true,
        reason:
          "De Europese Unie moet geen antidemocratische praktijken subsidiëren. Maar we zijn tegen sancties die de gewone mensen treffen. Dat is oneerlijk en kan een omgekeerd effect hebben dat de antidemocratische krachten nog versterkt.",
      },
      vooruit: {
        agrees: true,
        reason:
          "De EU is meer dan een handelsblok, het is ook een unie van democratieën. Als extreme partijen zoals PiS in Polen of Fidesz in Hongarije de democratie aantasten, moeten hun subsidies ingetrokken worden. EU-geld dient niet om dictaturen te sponsoren.",
      },
      vb: {
        agrees: false,
        reason:
          "De EU moet zich niet bemoeien met interne aangelegenheden van lidstaten, laat staan democratisch gekozen regeringen aanvallen bv. omdat hun conservatieve beleid niet in de progressieve smaak valt (of omgekeerd).",
      },
      volt: {
        agrees: true,
        reason:
          "Er zijn hier nu al richtlijnen voor, en als Volt zijn we hier een sterke voorstander van.",
      },
    },
  },
  {
    question:
      "De beperkingen om stikstof uit te stoten, moeten versoepeld worden.",
    index: 12,
    answers: {
      vooru: { agrees: true, reason: "Zie landbouwherstelplan." },
      cdv: {
        agrees: true,
        reason:
          "De opgelegde stikstofdepositiereductiedoelstellingen zijn te streng, te snel, onrechtvaardig en schadelijk en moeten zo vlug mogelijk plaats ruimen voor stikstofemissiemaatregelen.",
      },
      ovld: {
        agrees: true,
        reason:
          "Terwijl we het stikstofbad laten leeglopen moet het wel nog mogelijk zijn om te ondernemen in ons land. Bovendien moeten we bij waardevolle natuur naar het grotere plaatje kijken. Daarom werken we aan een nieuw kader richting 2030.",
      },
      pvda: {
        agrees: true,
        reason:
          "De uitstoot van stikstof legt een grote druk op natuur en gezondheid, maar het stikstofdecreet biedt daarop geen antwoord. Wij willen rechtszekerheid, een eerlijke prijs voor de boeren en voldoende ondersteuning voor wie de uitstoot moet verlagen.",
      },
      vb: {
        agrees: true,
        reason:
          "De stikstofuitstoot moet omlaag door technologische innovatie. De huidige regels en doelstellingen zijn echter onhaalbaar, onbetaalbaar en oneerlijk. Ze schaden onze landbouw, industrie, mobiliteit en zelfs huizenmarkt.",
      },
      groen: {
        agrees: false,
        reason:
          "Stikstof is slecht voor je gezondheid en die van onze natuur. Dat weten we al heel lang. Dat we onze uitstoot moeten afbouwen dus ook. Toch bleven de Vlaamse regeringen treuzelen, waardoor nu strengere maatregelen nodig zijn.",
      },
      nva: {
        agrees: false,
        reason:
          "Rechterlijke beslissingen maken telkens opnieuw duidelijk dat er geen andere optie is dan de stikstofreductie nu door te zetten. Het huidige akkoord is de beste garantie om de komende jaren een vergunningstop te vermijden.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Om innovatieve landbouw en industrie een rechtszekere toekomst te geven moeten de beperkingen  om stikstof uit te stoten gehandhaafd worden. Ook voor de toekomst van onze natuur is dat noodzakelijk.",
      },
      volt: {
        agrees: false,
        reason:
          "Oneens. We willen minder stikstof en meer natuur en biodiversiteit. We willen constructief meewerken aan een oplossing die aanvaardbaar is voor natuur, menselijke gezondheid en landbouw. Een vergunningenstop moet absoluut vermeden worden. Zowel landbouwsector en industrie moeten voldoende duidelijkheid en transparantie krijgen naar de toekomst toe.",
      },
    },
  },
  {
    question: "Stakers mogen de toegang tot bedrijventerreinen niet afsluiten.",
    index: 13,
    answers: {
      vooru: {
        agrees: true,
        reason: "Doordring het beleid met mensenrechten, eigendomsrecht.",
      },
      cdv: {
        agrees: true,
        reason:
          "Iedereen heeft het recht om te staken, net zoals iedereen ook het recht heeft om wel te gaan werken. Respecteer elkaar en geef elkaar de ruimte om zijn/haar rechten uit te oefenen.",
      },
      groen: {
        agrees: true,
        reason:
          "Het recht op staken en betogen is belangrijk. Stakers mogen een stakingspost bezetten. Die dient ertoe om werknemers te overtuigen niet naar hun werkplek te gaan en zich bij de staking aan te sluiten. Wie toch wil werken, mag daarin niet belet worden.",
      },
      nva: {
        agrees: true,
        reason:
          "Naast het recht op staken, is er ook het recht op werken. Dat moet de overheid altijd garanderen.",
      },
      ovld: {
        agrees: true,
        reason:
          "Het recht om te kunnen gaan werken is even belangrijk als het recht om te staken. Wie wel wil werken, moet dat altijd kunnen.",
      },
      vb: {
        agrees: true,
        reason:
          "We verdedigen het recht op staken om de belangen van werknemers kracht bij te zetten, maar ook het recht op werken. Werkwilligen mogen dus niet gehinderd worden door stakers.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Het stakingsrecht moeten we vrijwaren zodat werknemers hun rechten kunnen afdwingen. Maar het afsluiten van bedrijventerreinen is een te grote inbreuk op het recht van andere mensen om wel te gaan werken.",
      },
      pvda: {
        agrees: false,
        reason:
          "Staken is een fundamenteel recht dat zwaar onder druk staat. Bij dat recht hoort het oprichten van stakingsposten. Dat is een legitieme manier om mensen te overtuigen om te staken en is niet hetzelfde als overtuigde werkwilligen beletten te werken.",
      },
      volt: {
        agrees: true,
        reason:
          "Het is aan de rechter om te besluiten of syndicale acties proportioneel zijn. Werkwilligen mogen niet verhinderd worden om te werken.",
      },
    },
  },
  {
    question:
      "Mensen met een groot vermogen (veel geld of veel bezittingen) moeten meer belastingen betalen.",
    index: 14,
    answers: {
      vooru: { agrees: false, reason: "Minder lasten voor de mensen." },
      cdv: {
        agrees: true,
        reason:
          "Wij willen een fiscale hervorming die belastingen rechtvaardiger maakt en werkende mensen meer beloont. Vandaag zijn er te veel achterpoortjes en worden inkomsten uit vermogen oneerlijk belast. De sterkste schouders moeten de zwaarste lasten dragen.",
      },
      groen: {
        agrees: true,
        reason:
          "Het is niet eerlijk dat je meer belastingen betaalt op je loon dan extreemrijken op de inkomsten uit hun miljoenenkapitaal. Daarom wil onze partij dat je meer overhoudt van je loon en dat de grootste vermogens eindelijk ook eerlijk bijdragen.",
      },
      ovld: {
        agrees: true,
        reason:
          "In een brede fiscale hervorming moeten de sterkste schouders meer bijdragen. We moeten er wel voor zorgen dat bij zo'n fiscale hervorming de algemene belastingdruk wel daalt.",
      },
      pvda: {
        agrees: true,
        reason:
          "Nu worden grote vermogens gewoon niet belast. Wij pleiten voor een miljonairstaks (2% boven 5 miljoen euro). Die taks raakt alleen de 1 procent rijksten maar brengt veel op omdat de vermogens in België zo sterk geconcentreerd zijn.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Werken moet lonen. Wie werkt, betaalt te veel belastingen omdat een kleine groep er te weinig betaalt. Door de belastingen op arbeid te verlagen en die op inkomen uit vermogen te verhogen, zullen werkenden netto meer overhouden.",
      },
      nva: {
        agrees: false,
        reason:
          "Overal waar men in het verleden een vermogensbelasting invoerde op zogenoemd grote vermogens bleek dit contraproductief te zijn en voerde men die meestal terug af. Vermogen wordt in België al op andere manieren stevig belast.",
      },
      vb: {
        agrees: false,
        reason:
          "We willen dat de sterkste schouders de zwaarste lasten dragen. De belastingen behoren nu al tot de hoogste in Europa. Het is echter niet het 'vermogen', maar het 'inkomen uit vermogen' dat moet belast worden.",
      },
      volt: {
        agrees: true,
        reason:
          "Om jonge mensen terug een kans te geven op de woningmarkt, willen we concentratie van woningbezit tegengaan door bezit van meerdere woningen progressief te belasten.  We vinden ook dat er in het algemeen moet nagedacht worden om inkomen uit arbeid en vermogen op een meer gelijke manier te belasten. Belastingen op arbeid moeten omlaag via verhoging van de belastingvrije som.",
      },
    },
  },
  {
    question: "De politie mag camera's met gezichtsherkenning gebruiken.",
    index: 15,
    answers: {
      vooru: {
        agrees: false,
        reason: "Doordring het beleid met mensenrechten.",
      },
      cdv: {
        agrees: true,
        reason:
          "Gebruik van camera’s met gezichtsherkenning enkel na rechterlijke machtiging. Sterk beperken in tijd en ruimte en voor bepaalde strikt afgelijnde situaties, zoals de zoektocht naar een vermist kind of bij een onmiddellijke terroristische dreiging.",
      },
      nva: {
        agrees: true,
        reason:
          "Maar enkel binnen een strikt omlijnd kader en indien gebruikt voor verantwoorde doeleinden. Bijvoorbeeld bij terreurdreiging. Het gebruik moet uiteraard in overeenstemming zijn met de privacywetgeving.",
      },
      vb: {
        agrees: true,
        reason:
          "Permanente monitoring van de eigen burgers, zoals in China, is onaanvaardbaar. Het gebruik van camera's met gezichtsherkenning door de politie kan enkel in het kader van terrorisme en zware criminaliteit.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Veiligheid eerst. Elk misdrijf moet bestraft worden. Als de technologie op punt staat en aan strikte voorwaarden is voldaan, mag de politie dit gebruiken. Het kan een belangrijk middel zijn om bijvoorbeeld kinderontvoeringen te voorkomen.",
      },
      groen: {
        agrees: false,
        reason:
          "Camera's met gezichtsherkenning brengen onze mensenrechten in gevaar. In autoritaire regimes als China zien we hoe gevaarlijk dat is. De technologie staat ook nog helemaal niet op punt. We willen een verbod zolang die risico's bestaan.",
      },
      ovld: {
        agrees: false,
        reason:
          "De politie mag dit niet zelf beslissen. Er is nood aan een strikt wettelijk kader dat het mits goedkeuring onderzoeksrechter mogelijk maakt bij het oplossen van de zwaarste misdrijven: terrorisme en de ontvoering van een kind.",
      },
      pvda: {
        agrees: false,
        reason:
          "Hier bestaat een reëel gevaar van misbruik. Het gebruik van camera’s moet zeer strikt gekaderd worden en tegelijk moet de privacy van de burgers beschermd worden.",
      },
      volt: {
        agrees: false,
        reason: "Nooit zonder rechterlijke toestemming",
      },
    },
  },
  {
    question: "Gaan stemmen moet verplicht blijven.",
    index: 16,
    answers: {
      vooru: {
        agrees: false,
        reason: "Individuele vrijheid, vrijheid van meningsuiting.",
      },
      cdv: {
        agrees: true,
        reason:
          "Verkiezingen zijn een van de belangrijkste hoekstenen van onze democratie. De bevolking geeft er aan welke partijen en personen zij het vertrouwen geeft.  Het is van absoluut belang dat elke kiezer daarbij zijn of haar stem uitbrengt.",
      },
      groen: {
        agrees: true,
        reason:
          "In een gezonde democratie is iedereen vertegenwoordigd. Als we de stemplicht afschaffen, worden vooral mensen die nu al slecht vertegenwoordigd zijn, nóg minder gehoord.",
      },
      pvda: {
        agrees: true,
        reason:
          "Door de stemplicht af te schaffen zullen mensen minder snel gaan stemmen, vooral mensen met een kortere opleiding of een lager inkomen. De basis van de democratie is een brede inspraak van zo veel mogelijk mensen uit de hele samenleving.",
      },
      vooruit: {
        agrees: true,
        reason:
          "We vinden het belangrijk dat elke stem gehoord wordt en dat zoveel mogelijk mensen vertegenwoordigd zijn in het parlement. De opkomstplicht is daar de beste garantie voor.",
      },
      nva: {
        agrees: false,
        reason:
          "Gaan stemmen is een teken van burgerzin, maar het hoort niet opgelegd te wordt door de overheid. Bovendien wordt de stemplicht in dit land al even niet meer gehandhaafd. Boetes geven aan afwezigen wordt terecht als absurd gezien.",
      },
      ovld: {
        agrees: false,
        reason:
          "Burgers moeten de keuze hebben om al dan niet te komen stemmen. Het is aan politici om burgers te overtuigen om te stemmen. Als dat niet lijkt te lukken, moeten politici beter hun best doen.",
      },
      vb: {
        agrees: false,
        reason:
          "We zijn voorstander van het stemrecht, niet de stemplicht. Iedereen is vrij om al dan niet te gaan stemmen.",
      },
      volt: {
        agrees: false,
        reason:
          "We pleiten voor stemrecht voor iedereen vanaf 16 jaar voor alle verkiezingen: Lokaal, regionaal, nationaal en Europees.",
      },
    },
  },
  {
    question:
      "De Europese Unie moet stoppen met het subsidiëren van intensieve veeteelt.",
    index: 17,
    answers: {
      vooru: { agrees: true, reason: "Minder subsidies" },
      groen: {
        agrees: true,
        reason:
          "Die grote subsidies zorgen voor overproductie, bodemprijzen en boeren in armoede. We willen steun voor lokale boeren in hun verduurzaming, voor gezonde voeding en eerlijke prijzen. Goed voor jouw gezondheid, die van de boer en die van de planeet.",
      },
      nva: {
        agrees: true,
        reason:
          "Intensieve landbouw kan, maar zonder oversubsidiëring. We willen een duurzaam voedselsysteem, waarbij de boer zelf kiest welk soort bedrijf hij wil – op voorwaarde dat hij de geldende normen respecteert en dat de uitstoot van de emissies daalt.",
      },
      pvda: {
        agrees: true,
        reason:
          "De intensieve veeteelt verhoogt het risico op dierenleed en epidemieën. We willen voldoende ruimte voor deze dieren: toegang tot natuurlijk licht, buitenlucht en de mogelijkheid voor elke soort om aan zijn specifieke gedrag te voldoen.",
      },
      vooruit: {
        agrees: true,
        reason:
          "De miljarden die momenteel in de vervuilende industriële veeteelt worden gepompt, kunnen beter gebruikt worden voor duurzaam landbouwbeleid.",
      },
      cdv: {
        agrees: false,
        reason:
          "Europese veeteelt heeft een toekomst. Subsidies zijn nodig op een wereldmarkt met derde landen die produceren zonder respect voor arbeidsvoorwaarden, … Afhankelijk zijn van hen voor voedsel in tijden van geopolitieke spanningen is ook onverantwoord.",
      },
      ovld: {
        agrees: false,
        reason:
          "Je moet boeren gelijk behandelen. We passen voor een verbod op veeteelt. De geboden inkomenssteun heroriënteren we wel meer en meer naar verduurzaming.",
      },
      vb: {
        agrees: false,
        reason:
          "Voedselproductie is een strategische sector. Financiële steun moet gaan naar onze familiale landbouwers.",
      },
      volt: {
        agrees: true,
        reason:
          "We pleiten voor een herziening van de huidige subsidies van de CAP (‘Common agricultural policy’) en een shift van de subsidies naar meer duurzame landbouwpraktijken. We steunen ook onderzoek naar en de implementatie van genetisch geoptimaliseerde gewassen.",
      },
    },
  },
  {
    question: "Elke gemeente moet verplicht een aantal asielzoekers opvangen.",
    index: 18,
    answers: {
      vooru: {
        agrees: false,
        reason: "Meer macht voor lokale besturen.",
      },
      groen: {
        agrees: true,
        reason:
          "Als elke gemeente een paar mensen opvangt, slaapt geen enkele asielzoeker nog op straat. Nu is de opvang slecht verdeeld: sommige gemeenten doen een grote inspanning, andere geen. Een verplicht spreidingsplan is eerlijker en werkt de tekorten weg.",
      },
      cdv: {
        agrees: false,
        reason:
          "We zijn geen voorstander van een verplicht spreidingsplan voor alle gemeenten. De gemeenten staan vandaag al onder druk. De facto is er al sprake van een spreiding en leveren de meeste gemeenten reeds een bijdrage naar hun mogelijkheden.",
      },
      nva: {
        agrees: false,
        reason:
          "We willen asielzoekers maximaal buiten de EU-grenzen opvangen. De binnenlandse opvang moet beperkt worden en gebeuren in overleg met de lokale besturen. Hierbij moet rekening gehouden worden met de draagkracht van elke gemeente.",
      },
      ovld: {
        agrees: false,
        reason:
          "Er is al vandaag al heel wat spreiding. Er zijn rond de honderd centra over Vlaanderen en een 500-tal gemeenten hebben een lokaal opvanginitiatief. We moeten op de meest efficiënte manier plaatsen maken. Dat is niet per se door te spreiden.",
      },
      pvda: {
        agrees: false,
        reason:
          "In de plaats van grote centra, zijn wij voorstander van plaatselijke opvanginitiatieven die verspreid zijn over het hele grondgebied. Die bevorderen de integratie. Er is daarbij dialoog en overleg nodig met de lokale overheden.",
      },
      vb: {
        agrees: false,
        reason:
          "We pleiten al langer voor 'opvang in eigen regio' als uitgangspunt. Bovendien zijn we tegen verplichte spreiding.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Asielzoekers moeten snel een antwoord krijgen op hun aanvraag, en indien dat negatief is ook effectief terugkeren. Niet alle gemeenten kunnen asielzoekers opvangen. Een solidaire verdeling van de inspanningen is wel belangrijk.",
      },
      volt: {
        agrees: true,
        reason:
          "Er moeten duidelijke Europese regels over migratie zijn. Dit kan een eerlijke verdeling van asielzoekers over gemeenten en regio’s inhouden.",
      },
    },
  },
  {
    question: "Oekraïne moet lid worden van de Europese Unie.",
    index: 19,
    answers: {
      vooru: {
        agrees: true,
        reason: "Consequent met onze lijsttrekker Europese lijst.",
      },
      groen: {
        agrees: true,
        reason:
          "De toekomst van Oekraïne ligt in de EU. Net zoals alle lidstaten moet het land wel eerst voldoen aan de voorwaarden op het gebied van mensenrechten, democratie en rechtsstaat, en handelen in lijn met het buitenland- en veiligheidsbeleid van de EU.",
      },
      nva: {
        agrees: true,
        reason:
          "We zijn akkoord met het feit dat Oekraïne kan beginnen aan de toetredingsprocedure. Maar ook Oekraïne zal moeten voldoen aan alle lidmaatschapscriteria (democratie, markteconomie,...) vooraleer het effectief tot de EU kan toetreden.",
      },
      ovld: {
        agrees: true,
        reason:
          "Het Oekraïense volk heeft al duidelijk gemaakt dat zij hun toekomst in Europa zien. Zowel Oekraïne als de EU moeten zich hier wel op voorbereiden om er een succes van te maken.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Oekraïne heeft net als andere landen de mogelijkheid om zich kandidaat te stellen (is al gebeurd, en aanvaard) en de procedure te doorlopen. Als ze voldoen aan alle voorwaarden, kunnen ze lid worden. Dit mag niet overhaast gebeuren.",
      },
      cdv: {
        agrees: false,
        reason:
          "We zijn voor zo sterk mogelijke samenwerking met Oekraïne en blijvende economische en militaire steun. Dit is echter geen reden om overhaast een volledig lidmaatschap van Oekraïne in te voeren. Zowel de EU zelf als Oekraïne hebben nog heel veel werk.",
      },
      pvda: {
        agrees: false,
        reason:
          "Oekraïne lid maken van de EU zou de concurrentie tussen Oekraïense en Europese werknemers en landbouwers vergroten. Het gevaar op sociale dumping en dumping in de landbouw is enorm. Prioriteit is om via diplomatie weer vrede te brengen in Oekraïne.",
      },
      vb: {
        agrees: false,
        reason:
          "We steunen Oekraïne in zijn strijd tegen de onverwachte en ongerechtvaardigde aanval op haar grondgebied. Tegelijk zijn wij niet voor een verdere uitbreiding van de EU.",
      },
      volt: {
        agrees: true,
        reason:
          "We zijn voor een snelle toetreding van Oekraïne tot de Europese Unie en willen Oekraïne helpen om aan de toetredingsvoorwaarden te voldoen.",
      },
    },
  },
  {
    question:
      "In plaats van sociale woningen te bouwen, moet de overheid mensen helpen om op de privémarkt te huren.",
    index: 20,
    answers: {
      vooru: {
        agrees: true,
        reason: "Beperk de overheid tot de kerntaken.",
      },
      ovld: {
        agrees: true,
        reason:
          "De bouw van sociale woningen verloopt te traag, waardoor de 176.000 kandidaat sociale huurders op de wachtlijst niet worden geholpen. De huurpremie moet uitgebreid worden. Dit kan gekoppeld worden aan werkbereidheid.",
      },
      cdv: {
        agrees: false,
        reason:
          "Het moet een én-én verhaal zijn. Het tempo waarop sociale woningen worden gebouwd moet omhoog. Mensen die wachten op een sociale woning moeten sneller toegang krijgen tot de huurpremie zodat zij makkelijker kunnen huren op de private huurmarkt.",
      },
      groen: {
        agrees: false,
        reason:
          "Beide maatregelen zijn nodig. Een goeie woonst is een basisrecht, en toch is die voor veel mensen onbetaalbaar. Er moeten dus net meer sociale woningen komen. Ook op de privémarkt willen we huurders met een laag inkomen ondersteunen.",
      },
      nva: {
        agrees: false,
        reason:
          "Het ene sluit het andere niet uit. We hebben beide nodig. We gaan door met de bouw van sociale woningen, maar ook de private huurmarkt kan een grote rol spelen in de sociale huisvesting.",
      },
      pvda: {
        agrees: false,
        reason:
          "We willen dat de overheid ingrijpt op de private huurmarkt door de huurprijzen te plafonneren op basis van objectieve criteria. Maar dat ontslaat de overheid niet van haar verantwoordelijkheid om meer sociale woningen te bouwen.",
      },
      vb: {
        agrees: false,
        reason:
          "We willen dat de overheid (i.s.m. de private sector) eerst en vooral meer sociale woningen bouwt. Wie op een wachtlijst staat (nu gemiddeld 4 jaar), krijgt wel sneller en automatisch recht op een huursubsidie.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Betaalbaar wonen is een prioriteit voor ons. Wij willen dat iedereen betaalbaar kan wonen. Dat lukt enkel als je private huurders steunt en extra overheidsaanbod voorziet. Alleen huursteun geven, leidt alleen tot hogere huurprijzen.",
      },
      volt: {
        agrees: false,
        reason:
          "Wonen moet betaalbaar zijn, ook voor jongere generaties die het steeds moeilijker hebben om een appartement of woning te huren of te kopen. We zijn voor meer sociale woningen en leren ook van goede Europese voorbeelden zoals Wenen. We stimuleren ook innovatie systemen zoals co-housing en huurkoop.  We willen betaalbaar wonen voor iedereen, ook de middenklasse, en zeker ook jongere generaties.",
      },
    },
  },
  {
    question: "België moet uit de NAVO stappen.",
    index: 21,
    answers: {
      vooru: {
        agrees: false,
        reason:
          "Er staat niet in het programma omdat we niet uit de Navo willen.",
      },
      pvda: {
        agrees: true,
        reason:
          "De Navo sleurt ons mee in militaire escalatie. Wij willen geleidelijk overstappen naar een ander, Europees systeem van collectieve veiligheid, een defensieve defensie, gekoppeld aan intensieve diplomatie met meer gewicht voor instellingen als de VN.",
      },
      cdv: {
        agrees: false,
        reason:
          "De NAVO blijft de hoeksteen van ons internationaal veiligheidsbeleid. De NAVO staat al meer dan een halve eeuw garant voor veiligheid en stabiliteit in Europa. Op ons NAVO-engagement mag er niets worden ingeboet.",
      },
      groen: {
        agrees: false,
        reason:
          "De oorlog in Oekraïne toont dat we moeten samenwerken om onze democratie te beschermen. De NAVO is daarbij belangrijk, net als een sterkere Europese defensiesamenwerking die minder afhangt van de Verenigde Staten.",
      },
      nva: {
        agrees: false,
        reason:
          "De NAVO is noodzakelijk om onze veiligheid te garanderen. Het verbond schrikt onze vijanden af en zorgt voor een goede coördinatie met onze defensiepartners. De hoofdkwartieren van de NAVO in Brussel zorgen voor een grote economische meerwaarde.",
      },
      ovld: {
        agrees: false,
        reason:
          "Een sterke NAVO betekent vrede in ons land en Europa. Ons lidmaatschap van de NAVO is de hoeksteen van onze collectieve veiligheid en dus onze vrijheid.",
      },
      vb: {
        agrees: false,
        reason:
          "De NAVO is op dit moment een hoeksteen van onze defensieve veiligheidsarchitectuur.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Internationale veiligheid is voor ons essentieel. De NAVO vormt de hoeksteen van de verdediging van ons land. Uit de NAVO stappen maakt ons land minder veilig en de kans op een oorlog alleen maar groter.",
      },
      volt: {
        agrees: false,
        reason:
          "Nee. De NAVO moet zijn rol blijven spelen. Daarbovenop willen we toewerken naar een gezamenlijke Europese defensie en een Europees leger.",
      },
    },
  },
  {
    question:
      "Je moet meer belastingen betalen op vliegtuigtickets voor korte afstanden.",
    index: 22,
    answers: {
      vooru: { agrees: false, reason: "Minder lasten voor de mensen" },
      groen: {
        agrees: true,
        reason:
          "We willen de bestaande inschepingstaks verfijnen en korte afstanden, waar de trein nemen beter is, eerlijk belasten. Bijvoorbeeld tussen Brussel en Parijs. We maken treinreizen voor die afstanden ook gemakkelijker, sneller en goedkoper.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Er zijn betere alternatieven voor korte afstanden, zoals de trein. Dat is veel beter voor het klimaat. Dat alternatief, zoals de trein, moet dan ook veel goedkoper worden.",
      },
      cdv: {
        agrees: false,
        reason:
          "We steunen het principe van een vliegtaks, maar het heeft geen zin om als België alleen nog méér belastingen in te voeren op vliegtickets want dan verplaatsen de vluchten zich gewoon naar onze buurlanden.",
      },
      nva: {
        agrees: false,
        reason:
          "België is nu al het duurste vliegland. Eenzijdig de vliegtuigtickets verhogen in prijs zal de trafiek en economische winst daaruit enkel nog meer doen verschuiven naar onze buurlanden.",
      },
      ovld: {
        agrees: false,
        reason:
          "Luchtvaart moet inderdaad zijn deel doen. We hebben dit al gedaan met een belasting op korte vluchten. Daarnaast zijn de kosteloze emissierechten afgeschaft en zal er voor CO2-uitstoot betaald moeten worden.",
      },
      pvda: {
        agrees: false,
        reason:
          "Wij willen een taks op privéjets. Die zou tot 140 miljoen euro kunnen opleveren, die we dan kunnen investeren in de ontwikkeling van een publiek netwerk van hogesnelheidstreinen, als een snel en goedkoop alternatief voor het vliegtuig.",
      },
      vb: {
        agrees: false,
        reason:
          "Dit is een pestmaatregel die enkel dient om de schatkist te vullen, terwijl Vlamingen al te veel worden belast in dit land. We willen wel dat er geen tickets onder de werkelijke kostprijs worden verkocht.",
      },
      volt: {
        agrees: true,
        reason:
          "In heel Europa moet de vrijstelling van belasting voor kerosine gestopt worden.",
      },
    },
  },
  {
    question: "De VRT moet stoppen met het uitzenden van misvieringen op tv.",
    index: 23,
    answers: {
      vooru: { agrees: true, reason: "Scheiding van kerk en staat." },
      ovld: {
        agrees: true,
        reason:
          "Er is vandaag geen enkele reden waarom dit op de nationale omroep zou moeten gebeuren. Er zijn voldoende mediaplatformen om misvieringen of andere vormen van godsdienstbeleving bij de burger te brengen. Dit is geen kerntaak van de overheid.",
      },
      pvda: {
        agrees: true,
        reason:
          "We vinden het niet de taak van de VRT om religieuze vieringen uit te zenden.",
      },
      cdv: {
        agrees: false,
        reason:
          "Dit is een dienstverlening aan de bevolking, net zoals het uitzenden van de Lottotrekking of sportwedstrijden. De VRT heeft decretale bevoegdheid om autonoom haar uitzendschema vast te leggen.",
      },
      groen: {
        agrees: false,
        reason:
          "In de samenleving is ruimte voor geloof en religie. Bij de openbare omroep dus ook. We verwachten een breed aanbod, maar de exacte programmatie en kanalen bepaalt de VRT zelf.",
      },
      nva: {
        agrees: false,
        reason:
          "De publieke omroep heeft ook een taak te vervullen op vlak van zingeving en levensbeschouwing. Zeker voor doelgroepen die op radio en tv zijn aangewezen voor participatie.",
      },
      vb: {
        agrees: false,
        reason:
          "Misvieringen op televisie zijn dienstig voor mensen die niet meer fysiek naar de kerk kunnen gaan.",
      },
      vooruit: {
        agrees: false,
        reason:
          "TV is voor veel oudere mensen de enige toegankelijke manier om de misviering te volgen. Het kost weinig geld en moeite om dat te laten bestaan.",
      },
      volt: {
        agrees: true,
        reason: "Wij zijn geen voorstander van staatssteun voor religies.",
      },
    },
  },
  {
    question:
      "De sociale zekerheid moet volledig gesplitst worden en naar de deelstaten gaan.",
    index: 24,
    answers: {
      vooru: {
        agrees: true,
        reason: "De bevoegdheden zo dicht mogelijk bij de mensen.",
      },
      nva: {
        agrees: true,
        reason:
          "Enkel als de deelstaten financieel verantwoordelijk worden voor hun beleid zal er een kentering komen die ook in Wallonië meer mensen doet bijdragen. Solidariteit tussen deelstaten kan blijven bestaan, maar dan op een eerlijke en transparante basis.",
      },
      vb: {
        agrees: true,
        reason:
          "De federale 'solidariteit' leidt tot miljardentransfers van Vlaanderen naar Wallonië dat daardoor nauwelijks hervormt en armer achterblijft. We willen dat Vlaanderen en Wallonië de lasten en de lusten van hun eigen sociaal beleid plukken.",
      },
      cdv: {
        agrees: false,
        reason:
          "We willen de solidariteit tussen Belgen behouden. Elke deelstaat moet wel zijn verantwoordelijkheid opnemen. Deelstaten kunnen minder middelen krijgen wanneer ze onvoldoende inspanningen leveren, bijvoorbeeld om werkzoekenden aan het werk te helpen.",
      },
      groen: {
        agrees: false,
        reason:
          "Onze sociale zekerheid steunt op solidariteit en samenwerking tussen alle Belgen. Als we die opsplitsen, wordt het systeem ingewikkelder en minder (veer)krachtig, ook voor burgers. Zeker als je in een ander gewest gaat wonen of werken.",
      },
      ovld: {
        agrees: false,
        reason:
          "Onze sociale zekerheid is nu al te complex. Het moet net met minder structuren en statuten. De splitsing zal alleen maar meer bureaucratie met zich meebrengen. Solidariteit wordt het best op een zo hoog mogelijk niveau georganiseerd.",
      },
      pvda: {
        agrees: false,
        reason:
          "De sociale zekerheid op het federale niveau behouden, is een garantie voor solidariteit en sociaal welzijn. Het systeem is het resultaat van de gezamenlijke strijd van de hele Belgische werkende klasse. We maken een eind aan de splitsingslogica.",
      },
      vooruit: {
        agrees: false,
        reason:
          "In het buitenland benijden ze ons voor onze sterke sociale zekerheid. Niemand zit te wachten op eindeloze discussies over communautaire symbolen die niemand vooruit helpen. Dat is het beste recept voor jarenlange stilstand.",
      },
      volt: {
        agrees: false,
        reason: "We moeten nadenken over een Europese sociale zekerheid.",
      },
    },
  },
  {
    question:
      "De Europese Unie moet zich afzijdig houden bij het conflict tussen Israël en de Palestijnen.",
    index: 25,
    answers: {
      vooru: {
        agrees: true,
        reason:
          "De rol van het internationaal Gerechtshof vereist terughoudendheid politiek.",
      },
      vb: {
        agrees: true,
        reason:
          "We veroordelen elke vorm van geweld en erkennen de soevereiniteit van elk volk. De EU moet zijn diplomatieke kracht gebruiken om het conflict te ontmijnen en niet te importeren.",
      },
      cdv: {
        agrees: false,
        reason:
          "We kunnen niet afzijdig blijven bij zoveel menselijk leed. We moeten ons inzetten voor het respecteren van het internationaal recht en voor onschuldige slachtoffers. Het is in het belang van de EU om een stabiel en vreedzaam Midden-Oosten te hebben.",
      },
      groen: {
        agrees: false,
        reason:
          "In tegendeel, Europa moet ijveren voor een permanent en onmiddellijk staakt-het-vuren. We komen op voor alle burgerslachtoffers en benoemen de kern van het probleem: dat Israël Palestina al decennialang koloniseert en op gewelddadige manier bezet.",
      },
      nva: {
        agrees: false,
        reason:
          "De instabiliteit in het Midden-Oosten heeft een rechtstreekse impact op de Europese veiligheid en economie. In een geest van goed nabuurschapsbeleid moet de EU constructief diplomatiek kunnen wegen op gebeurtenissen aan de buitengrenzen.",
      },
      ovld: {
        agrees: false,
        reason:
          "We kunnen als Europa niet wegkijken van wat er naast ons gebeurt. We moeten als diplomatieke actor drukken op de vrijlating van de gijzelaars, een staakt-het-vuren en een duurzaam vredesakkoord.",
      },
      pvda: {
        agrees: false,
        reason:
          "De Europese Unie moet haar steun aan de oorlogsmisdaden van Israël stopzetten en het associatieverdrag, dat Israël handelsprivileges biedt, opschorten. Europa moet de klacht bij het Internationaal Gerechtshof steunen en een wapenembargo opleggen.",
      },
      vooruit: {
        agrees: false,
        reason:
          "We zijn alleen maar veilig als iedereen veilig is. Wij kiezen de kant van de onschuldige slachtoffers. De Europese Unie moet dan ook pleiten voor een onmiddellijk staakt-het-vuren, humanitaire hulp en een duurzame vrede.",
      },
      volt: {
        agrees: false,
        reason:
          "Europa moet net een meer prominente rol spelen in geopolitieke dilemma’s. Europa kan zowel een rol spelen in garanderen humanitaire hulp en het bewerkstelligen van vrede.",
      },
    },
  },
  {
    question: "De overheid mag geen nieuwe moskeeën erkennen.",
    index: 26,
    answers: {
      vooru: { agrees: true, reason: "Scheiding van kerk en staat." },
      vb: {
        agrees: true,
        reason:
          "Islam is niet enkel een religie, maar ook een politieke ideologie en maatschappijmodel, dat haaks staat op onze westerse samenleving. Moskeeën worden al te vaak gebruikt om anti-westerse gevoelens aan te wakkeren.",
      },
      cdv: {
        agrees: false,
        reason:
          "Een erkende moskee is altijd te verkiezen boven een niet-erkende. Die laatste ontsnapt immers aan controle, is gevoelig voor buitenlandse invloed en financiering met alle negatieve gevolgen vandien.",
      },
      groen: {
        agrees: false,
        reason:
          "Je hebt het recht om jouw geloof te beleven. Geloofsgemeenschappen inpassen in de samenleving, dat betekent ook gebedshuizen erkennen. Dat geldt voor moskeeën én voor kerken en synagoges.",
      },
      nva: {
        agrees: false,
        reason:
          "Het Decreet Lokale geloofsgemeenschappen heeft in Vlaanderen een nieuwe, strenge erkenningsprocedure ingevoerd, waarmee beter kan gescreend en gecontroleerd worden (op buitenlandse inmenging) en sneller sancties kunnen worden genomen.",
      },
      ovld: {
        agrees: false,
        reason:
          "Voor de erkenning van geloofsgemeenschappen gelden er duidelijke regels. Wie in aanmerking komt, kan een aanvraag doen. Wie voldoet aan de regels, kan een erkenning krijgen. Screening is en blijft belangrijk, ook na de eventuele erkenning.",
      },
      pvda: {
        agrees: false,
        reason:
          "Op tien jaar tijd zijn er amper twee nieuwe moskeeën erkend, na een grondige screening door de veiligheidsdiensten. De procedure en de erkenning hebben voordelen: ze moeten aan regels voldoen en zorgen voor een goede band met de moslimgemeenschap.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Zelf moskeeën erkennen, geeft ons controle. We willen dat religieuze entiteiten samenwerken met de overheid zodat zij een positieve rol spelen, die past in onze Westerse samenleving. Zo vermijden we buitenlandse beïnvloeding of radicale stemmen.",
      },
      volt: {
        agrees: false,
        reason:
          "Nieuwe moskeeën mogen erkend worden. Er moet wel nauwgezet gewaakt worden op veiligheid en mensenrechten. Alle religies worden hierbij gelijk behandeld.",
      },
    },
  },
  {
    question:
      "België moet Congo een schadevergoeding betalen voor het onrecht dat in de vroegere Belgische kolonie werd gepleegd.",
    index: 27,
    answers: {
      vooru: { agrees: false, reason: "Beperk de staatsuitgaven." },
      pvda: {
        agrees: true,
        reason:
          "Het is niet de Belgische staat die moet betalen, maar – op basis van internationaal onderzoek – de grote industriëlen en de koninklijke familie, die zich hebben verrijkt door de kolonisatie.",
      },
      cdv: {
        agrees: false,
        reason:
          "Herstelbetalingen zijn niet aan de orde. We moeten het veroorzaakte leed erkennen, maar dat doe je niet door dit af te kopen. De focus moet voor ons op de toekomst liggen: werk maken van een sterk partnerschap, gebaseerd op evenwaardigheid.",
      },
      groen: {
        agrees: false,
        reason:
          "België moet excuses aanbieden voor dit onrecht en het bewustzijn daarover verhogen. We pleiten niet voor een schadevergoeding van land tot land, wél voor individuele vergoedingen aan rechtstreekse slachtoffers van koloniaal onrecht en geweld.",
      },
      nva: {
        agrees: false,
        reason:
          "Een historisch pardon op niveau van het staatshoofd was aan de orde. Een schadevergoeding zou echter leiden tot een absurd en ongewenst internationaal precedent.",
      },
      ovld: {
        agrees: false,
        reason:
          "Wat er in Congo gebeurd is, is vreselijk en valt niet goed te praten. De wandaden onder het kolonialisme zijn echter niet de verantwoordelijkheid van doorsnee Belgen en zeker niet van de huidige generatie.",
      },
      vb: {
        agrees: false,
        reason:
          "Excuses kunnen de geschiedenis niet veranderen. Ze hebben enkel zin, als ze oprecht zijn en van de verantwoordelijken komen: het Belgisch koningshuis en rijke industriële families.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Dekolonisering en officiële excuses zijn belangrijk. Maar in plaats van een schadevergoeding te betalen aan een regering, investeren we beter in projecten en hulp die de Congolezen rechtstreeks en meteen vooruit helpen.",
      },
      volt: {
        agrees: false,
        reason:
          "We zijn het absoluut eens dat het onrecht erkend moet worden. Een schadevergoeding door geld te geven is echter niet noodzakelijk de ideale of juiste manier om dit op te lossen.",
      },
    },
  },
  {
    question:
      "Leerlingen in de lagere school moeten gratis schoolmaaltijden krijgen.",
    index: 28,
    answers: {
      vooru: {
        agrees: true,
        reason: "We moeten armoede de wereld uit helpen.",
      },
      groen: {
        agrees: true,
        reason:
          "Leren lukt niet op een lege maag. Daarom willen we gezonde, lekkere maaltijden op school. Voor kinderen van ouders met een laag inkomen moet die maaltijd gratis zijn. Zo zorgen we voor een eerlijke start voor elk kind.",
      },
      ovld: {
        agrees: true,
        reason:
          "Met een lege maag kan je je niet concentreren. Het heeft ook geen zin om kinderen verantwoordelijk te houden voor ouders die er niet in slagen om eten te voorzien. Daarom moeten we gezonde maaltijden voorzien die voor kansarme leerlingen gratis zijn.",
      },
      pvda: {
        agrees: true,
        reason:
          "Met honger in de klas zitten is heel slecht voor de leerprestaties van kinderen en voor hun algemene ontwikkeling. We willen de strijd tegen honger op school aangaan met gratis en gezonde maaltijden.",
      },
      vooruit: {
        agrees: true,
        reason:
          "We willen ons onderwijs terugbrengen naar de top. Kinderen die met een lege brooddoos naar school moeten, dat kan gewoon niet. Op een lege maag kan je niet leren. Gratis schoolmaaltijden zorgen voor gelijke kansen voor elk kind.",
      },
      cdv: {
        agrees: false,
        reason:
          "Een lege brooddoos moet een signaal zijn dat er in de thuisomgeving wat aan de hand is, en aanzetten tot actie zodat het kind de nodige zorg krijgt. We passen voor lapmiddelen zoals scholen verplichten om voor een warme maaltijd te zorgen.",
      },
      nva: {
        agrees: false,
        reason:
          "Het is niet aan de Vlaamse overheid om gratis maaltijden aan alle scholen op te leggen. We laten lokale besturen beslissen of dit een maatregel is die past binnen hun lokaal sociaal beleid, op maat van hun inwoners.",
      },
      vb: {
        agrees: false,
        reason:
          "Een school is er om kinderen te leren lezen, schrijven en rekenen, niet om alle sociale problemen op te lossen. Scholen mogen uiteraard gratis schoolmaaltijden aanbieden als ze dat willen vanuit hun missie, maar niet als verplichting.",
      },
      volt: {
        agrees: true,
        reason:
          "Gratis gezonde lunchmaaltijden op school voor minder kansarmoede/meer gelijkheid en minder obesitas.",
      },
    },
  },
  {
    question: "Wie geen Nederlands spreekt, kan geen sociale woning krijgen.",
    index: 29,
    answers: {
      vooru: {
        agrees: false,
        reason: "Doordring het beleid met mensenrechten.",
      },
      cdv: {
        agrees: true,
        reason:
          "Wie een sociale woning krijgt moet ofwel Nederlands spreken, ofwel het engagement aangaan om Nederlands te leren. Na twee jaar huur moet men een basiskennis hebben. Er kunnen uitzonderingen gemaakt worden, bijvoorbeeld omwille van een beperking.",
      },
      nva: {
        agrees: true,
        reason:
          "Sociaal beleid is een verhaal van rechten en plichten. Integratie is essentieel om te kunnen meedraaien in onze samenleving.",
      },
      ovld: {
        agrees: true,
        reason:
          "Een sociale woning is geen cadeau. Het is een springplank om hogerop te geraken. Dat lukt alleen als je je ook integreert en de taal leert. Wij zijn voor het behoud van de bestaande taalkennisvereiste. Er zijn logische uitzonderingen.",
      },
      vb: {
        agrees: true,
        reason:
          "We pleiten voor een toegang tot onze sociale voorzieningen (bv. sociale woning) na min. 8 jaar legaal verblijf en kennis van het Nederlands (om veiligheidsvoorschriften te begrijpen). Voor toegang tot de sociale zekerheid geldt ook min. 3 jaar werk.",
      },
      vooruit: {
        agrees: true,
        reason:
          "We verwachten dat wie naar België komt, de taal leert. Dat heeft uiteraard tijd nodig, dus niet iedereen zal meteen Nederlands spreken. Maar we verwachten wel dat iedereen, ook iemand die in een sociale woning woont, Nederlands leert.",
      },
      groen: {
        agrees: false,
        reason:
          "Iedereen heeft recht op een dak boven het hoofd. Iemand dat recht afnemen omdat die niet genoeg Nederlands spreekt? Dat is onmenselijk en je helpt mensen op die manier niet om Nederlands te leren.",
      },
      pvda: {
        agrees: false,
        reason:
          "We hebben veel meer sociale woningen nodig, mensen weigeren op basis van welke taal ze spreken zal de wachtlijsten niet oplossen. Wel willen we iedereen aanmoedigen en ondersteunen om Nederlands te leren en hier voldoende aanbod voor voorzien.",
      },
      volt: {
        agrees: false,
        reason:
          "Binnen Europa/Schengen is er vrij verkeer van personen en goederen, dit moet ook zo zijn voor huisvestiging en werkgelegenheid.",
      },
    },
  },
  {
    question:
      "De Vlaamse overheid moet meer geld geven aan kleine gemeenten en minder aan grote.",
    index: 30,
    answers: {
      vooru: {
        agrees: false,
        reason:
          "Beperk de staatsuitgaven, minder geld voor iedereen, meer zelfstandigheid lokaal.",
      },
      cdv: {
        agrees: true,
        reason:
          "De 2 grootsteden ontvangen meer dan 1.500 euro per inwoner, het Vlaams gemiddelde is daarentegen minder dan 300 euro per inwoner. Ook andere steden als Vilvoorde of Denderleeuw ontvangen veel minder. De middelen moeten eerlijker verdeeld worden.",
      },
      ovld: {
        agrees: true,
        reason:
          "Overheidsgeld is belastinggeld en dat moet correct verdeeld worden. Het Gemeentefonds is aan herziening toe. De verdeelsleutel is achterhaald. De volgende Vlaamse regering moet dat fonds herzien.",
      },
      vb: {
        agrees: true,
        reason:
          "We willen meer autonomie geven aan de gemeenten, in het bijzonder op het platteland waar de dienstverlening verdwijnt. Ook kleinere gemeenten moeten een correct budget krijgen.",
      },
      groen: {
        agrees: false,
        reason:
          "Het ene mag niet ten koste gaan van het andere. We willen én kleine én grote gemeenten extra ondersteunen. Want de uitdagingen voor onze samenleving zijn groot en lokale besturen spelen een belangrijke rol in de oplossingen.",
      },
      nva: {
        agrees: false,
        reason:
          "(Centrum)steden hebben specifieke uitdagingen. De parameters van het gemeentefonds moeten transparanter maar hierbij moet er zowel aandacht zijn voor de uitdagingen en centrumfunctie van steden als de vrijwaring van open en landelijke gemeenten.",
      },
      pvda: {
        agrees: false,
        reason:
          "We willen een herfinanciering van het geheel van steden en gemeenten. Daarbij moet rekening worden gehouden met de specifieke uitdagingen waar grootsteden of landelijke gemeenten voor staan.",
      },
      vooruit: {
        agrees: false,
        reason:
          "Iedereen heeft recht op goede dienstverlening dichtbij huis. Wat voor ons telt, zijn efficiëntere steden en gemeenten met voldoende slagkracht. Daar stemmen we hun financiering op af.",
      },
      volt: {
        agrees: false,
        reason:
          "Huidige verdeelsleutels kunnen geoptimaliseerd worden om ze meer evenwichtig en rechtvaardig te maken, op basis van objectieve criteria.",
      },
    },
  },
  {
    question:
      "Om de Belgische nationaliteit te krijgen, moet je slagen voor een inburgeringsexamen.",
    index: 31,
    answers: {
      vooru: {
        agrees: true,
        reason: "Migratie volgens onze voorwaarden.",
      },
      cdv: {
        agrees: true,
        reason:
          "De Belgische nationaliteit verkrijgen is een symbolisch moment. Deel van de gemeenschap worden moet je vieren, na een nationaliteitsexamen en met een ceremonie.",
      },
      nva: {
        agrees: true,
        reason:
          "Wie de nationaliteit wil verwerven, moet bewijzen dat hij de waarden en normen van onze maatschappij kent en respecteert. Ook kennis van onze taal moet worden aangetoond.",
      },
      ovld: {
        agrees: true,
        reason:
          "De Belgische nationaliteit komt met rechten en plichten, maar ook met waarden en normen. Wie Belg wil worden moet die ook kennen. Dat zorgt ook voor de best mogelijke kansen om hogerop te geraken.",
      },
      vb: {
        agrees: true,
        reason:
          "Het inburgeringsexamen bestaat uit een participatietraject over onze kernwaarden (vrijheid, gelijkwaardigheid, solidariteit en maatschappelijk engagement), een examen taalvaardigheid (niveau A2) en een toets over de kennis van onze samenleving.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Veel nieuwkomers moeten nu al een inburgeringsexamen afleggen, en om de nationaliteit te krijgen moet je ook al bewijzen dat je geïntegreerd bent. We kunnen die voorwaarden bundelen, en na een examen de nationaliteit toekennen.",
      },
      groen: {
        agrees: false,
        reason:
          "Zo'n examen is betuttelend en geen échte test van inburgering. Je moet wel laten zien dat je de landstaal beheerst en een inburgeringstraject doorlopen of aantonen dat je actief deelneemt aan de samenleving.",
      },
      pvda: {
        agrees: false,
        reason:
          "Nieuwkomers verwerven niet snel de Belgische nationaliteit. Daarvoor moeten ze eerst een vrij lange periode legaal in ons land verblijven en hun integratie bewijzen. Het verwerven van de Belgische nationaliteit draagt bij tot een goede integratie.",
      },
      volt: {
        agrees: null,
        reason:
          "We vinden dit een moeilijk dilemma. We zijn voor inburgering, maar examens moet representatief zijn en het mag geen methode zijn om kwetsbare groepen uit te sluiten.",
      },
    },
  },
  {
    question:
      "Het moet duurder worden om elektrische auto’s uit China in te voeren in de Europese Unie.",
    index: 32,
    answers: {
      vooru: {
        agrees: true,
        reason: "Haal de massaproductie terug naar Europa.",
      },
      cdv: {
        agrees: true,
        reason:
          "In het kader van strategische autonomie waken we over de economische veiligheid van de EU. We moeten kritischer zijn t.o.v. import van een systeemrivaal zoals China waar we een negatieve handelsbalans mee hebben. We willen eigen Europese productie.",
      },
      nva: {
        agrees: true,
        reason:
          "We zijn een groot voorstander van vrije marktwerking, maar met zijn overmatige staatssubsidiëring van bepaalde exportsectoren zorgt China voor oneerlijke concurrentie die onze eigen bedrijven schade toebrengt. Daar moet over gewaakt worden.",
      },
      ovld: {
        agrees: true,
        reason:
          "Als blijkt dat die auto’s op milieu-onvriendelijke manier geproduceerd werden of het gelijk speelveld op een andere manier scheef zit, pakken we dit aan via een Europese Border Adjustment Tax.",
      },
      vb: {
        agrees: true,
        reason:
          "Goedkope Chinese wagens worden zwaar gesubsidieerd en zijn niet milieuvriendelijker. Deze oneerlijke concurrentie, die de Europese autosector en werkgelegenheid bedreigt, moet gecorrigeerd worden door een importheffing.",
      },
      vooruit: {
        agrees: true,
        reason:
          "De eigen Europese industrie en onze werknemers moeten beschermd worden tegen oneerlijke concurrentie uit andere continenten. De EU voert een onderzoek naar Chinese subsidies. Als onze constructeurs worden benadeeld, zijn strafheffingen noodzakelijk.",
      },
      groen: {
        agrees: false,
        reason:
          "Fabrikanten uit andere landen moeten wel voldoen aan dezelfde regels als Europese fabrikanten. Zo zorgen we voor je gezondheid en die van de planeet en voor betere werkomstandigheden. We zorgen ook dat Europese bedrijven niet benadeeld worden.",
      },
      pvda: {
        agrees: false,
        reason:
          "Zo’n maatregel zou zware vergeldingsmaatregelen uitlokken en is dus contraproductief. In plaats van elektrische wagens duurder te willen maken, investeren we beter in de productie van kleine, betaalbare voertuigen. Zo behouden we ook jobs.",
      },
      volt: {
        agrees: true,
        reason:
          "Volt roept de EU op om een koolstofbelasting toe te passen op producten die worden geïmporteerd uit China en andere niet-EU-landen.",
      },
    },
  },
  {
    question:
      "De volgende regering moet de beslissing nemen om een nieuwe kerncentrale te bouwen.",
    index: 33,
    answers: {
      vooru: {
        agrees: true,
        reason: "Geef ruimte om te investeren in nieuwe technologie.",
      },
      cdv: {
        agrees: true,
        reason:
          "Voor ons is een combinatie van hernieuwbare en kernenergie de toekomst. We zetten in op nieuwe kerncentrales (SMR's). We willen tegen 2035 een werkend demonstratiemodel van een SMR bouwen en tegen 2040 operationele SMR's",
      },
      nva: {
        agrees: true,
        reason:
          "Kernenergie is essentieel om onze energiemix de komende decennia duurzaam, zeker en betaalbaar te houden. Nieuwe investeringen in kernenergie zijn dan ook noodzakelijk.",
      },
      ovld: {
        agrees: true,
        reason:
          "We hebben genoeg propere, goedkope en zekere energie nodig. Dat kan met kernenergie en de bouw van nieuwe centrales. Daarvoor kijken we naar kleine, flexibele en modulaire reactoren (SMR’s).",
      },
      vb: {
        agrees: true,
        reason:
          "We pleiten voor meer en nieuwe kerncentrales. Dat is goed voor onze bevoorradingszekerheid en voor het milieu (slechts 12g CO2/kWh, evenveel als hernieuwbare energie en veertig keer minder dan gascentrales).",
      },
      vooruit: {
        agrees: true,
        reason:
          "We moeten alles doen om energie betaalbaar te houden en om de klimaatcrisis aan te pakken. We hebben niet de luxe om technologieën uit te sluiten. Nieuwe kerncentrales kunnen, als dat veilig, duurzaam en betaalbaar kan.",
      },
      groen: {
        agrees: false,
        reason:
          "Een nieuwe kerncentrale kost tientallen miljarden, leidt tot gevaarlijk radioactief afval en produceert ten vroegste in 2040 energie. Dat is te laat voor de klimaatstrijd. Hernieuwbare energie is veel goedkoper en kan sneller gebouwd worden.",
      },
      pvda: {
        agrees: false,
        reason:
          "Naast de verlenging van de huidige reactoren (met garanties voor veiligheid en prijs) en investeringen in hernieuwbare energie, moet de regering inzetten op wetenschappelijk onderzoek rond de verdere ontwikkeling van kernenergie.",
      },
      volt: {
        agrees: true,
        reason:
          "Volt wil met onmiddellijke ingang de wet op de kernuitstap die toekomstige kernenergie bevat, intrekken. Er moet een lange-termijn plan worden opgesteld om stabiliteit in energie voorzieningen voor de toekomst te verzekeren. Kenenergie blijft onderdeel van de energiemix.",
      },
    },
  },
  {
    question:
      "De overheid moet de banken verplichten om de rente op spaarboekjes te verhogen.",
    index: 34,
    answers: {
      vooru: {
        agrees: false,
        reason:
          "Geef ruimte aan de bedrijven om hun werk te doen, stimuleer de vrije markt.",
      },
      cdv: {
        agrees: true,
        reason:
          "We willen de banken dwingen tot hogere rentes en er op toezien dat ze zich niet bezondigen aan onwettige afspraken. Niet via een wettelijke bepaling van de minimumrente, vermits dit perverse effecten heeft voor de stabiliteit van ons bankenwezen.",
      },
      groen: {
        agrees: true,
        reason:
          "Als banken veel geld verdienen aan je spaargeld, moet jijzelf daar ook van kunnen profiteren. Daarom willen we een verplichte minimumrente op de eerste 10.000 euro per persoon en gezondere concurrentie tussen banken.",
      },
      nva: {
        agrees: true,
        reason:
          "In principe komt de overheid niet tussen in de prijszetting van bancaire producten, maar de ondermaatse concurrentie tussen Belgische banken benadeelt de spaarder. De rente op spaarboekjes moet voldoende parallel lopen met de ECB-depositorente.",
      },
      pvda: {
        agrees: true,
        reason:
          "De vier grote Belgische banken maken miljarden winst dankzij de hoge interestvoeten, maar daarvan vloeit bijna niks naar de kleine spaarder. Wij zijn ervoor om de banken te verplichten de rente op spaarboekjes te verhogen.",
      },
      vb: {
        agrees: true,
        reason: "We zijn voorstander van een minimumrente.",
      },
      vooruit: {
        agrees: true,
        reason:
          "Werken moet lonen. Wie hard werkt en spaart, moet daar iets deftigs voor terugkrijgen. Banken maken immers grote winsten met het spaargeld van gewone mensen. De minimale spaarrente moet worden verhoogd, desnoods bij wet.",
      },
      ovld: {
        agrees: false,
        reason:
          "Het verleden leert ons dat overheden best zelf niet bankier beginnen spelen. Wel moeten we ervoor zorgen dat er voldoende concurrentie is tussen de banken, waardoor spaarders voldoende keuze hebben om het best mogelijke spaarboekje te kiezen.",
      },
      volt: {
        agrees: false,
        reason:
          "De overheid kan initiatieven nemen om een hogere rente te bekomen, zoals concurrentie met staatsbonnen en andere voordelige formules. De rentevoet van banken bepalen gaat te ver. ",
      },
    },
  },
];
