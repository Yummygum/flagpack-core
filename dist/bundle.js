'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var codeList = [{countryName:"Andorra",alpha2:"AD",alpha3:"AND",numeric:"020"},{countryName:"United Arab Emirates",alpha2:"AE",alpha3:"ARE",numeric:"784"},{countryName:"African Union",alpha2:"AFRUN",alpha3:"",numeric:""},{countryName:"Antigua and Barbuda",alpha2:"AG",alpha3:"ATG",numeric:"028"},{countryName:"Anguilla",alpha2:"AI",alpha3:"AIA",numeric:"660"},{countryName:"Albania",alpha2:"AL",alpha3:"ALB",numeric:"008"},{countryName:"Amernia",alpha2:"AM",alpha3:"ARM",numeric:"051"},{countryName:"Amsterdam",alpha2:"AMS",alpha3:"",numeric:""},{countryName:"Angola",alpha2:"AO",alpha3:"AGO",numeric:"024"},{countryName:"Antartctica",alpha2:"AQ",alpha3:"ATA",numeric:"010"},{countryName:"Argentina",alpha2:"AR",alpha3:"ARG",numeric:"032"},{countryName:"American Samoa",alpha2:"AS",alpha3:"ASM",numeric:"016"},{countryName:"Austria",alpha2:"AT",alpha3:"AUT",numeric:"040"},{countryName:"Australia",alpha2:"AU",alpha3:"AUS",numeric:"016"},{countryName:"Aruba",alpha2:"AW",alpha3:"ABW",numeric:"533"},{countryName:"Åland Islands",alpha2:"AX",alpha3:"ALA",numeric:"248"},{countryName:"Azerbaijan",alpha2:"AZ",alpha3:"AZE",numeric:"031"},{countryName:"Bosnia and Herzegovina",alpha2:"BA",alpha3:"BIH",numeric:"070"},{countryName:"Barbados",alpha2:"BB",alpha3:"BRB",numeric:"052"},{countryName:"Bangladesh",alpha2:"BD",alpha3:"BGD",numeric:"050"},{countryName:"Belgium",alpha2:"BE",alpha3:"BEL",numeric:"056"},{countryName:"Burkina Faso",alpha2:"BF",alpha3:"BFA",numeric:"854"},{countryName:"Bulgaria",alpha2:"BG",alpha3:"BGR",numeric:"100"},{countryName:"Bahrain",alpha2:"BH",alpha3:"BHR",numeric:"048"},{countryName:"Burundi",alpha2:"BI",alpha3:"BDI",numeric:"108"},{countryName:"Benin",alpha2:"BJ",alpha3:"BEN",numeric:"204"},{countryName:"Saint Barthélemy",alpha2:"BL",alpha3:"BLM",numeric:"652"},{countryName:"Bermuda",alpha2:"BM",alpha3:"BMU",numeric:"060"},{countryName:"Brunei",alpha2:"BN",alpha3:"BRN",numeric:"096"},{countryName:"Bolivia",alpha2:"BO",alpha3:"BOL",numeric:"068"},{countryName:"Bonaire",alpha2:"BQ-BO",alpha3:"",numeric:""},{countryName:"Saba",alpha2:"BQ-SA",alpha3:"",numeric:""},{countryName:"Sint Eustatius",alpha2:"BQ-SE",alpha3:"",numeric:""},{countryName:"Brazil",alpha2:"BR",alpha3:"BRA",numeric:"076"},{countryName:"Bahamas",alpha2:"BS",alpha3:"BHS",numeric:"044"},{countryName:"Bhutan",alpha2:"BT",alpha3:"BTN",numeric:"064"},{countryName:"Botswana",alpha2:"BW",alpha3:"BWA",numeric:"072"},{countryName:"Belarus",alpha2:"BY",alpha3:"BLR",numeric:"112"},{countryName:"Belize",alpha2:"BZ",alpha3:"BLZ",numeric:"084"},{countryName:"Canada",alpha2:"CA",alpha3:"CAN",numeric:"124"},{countryName:"Cocos Islands",alpha2:"CC",alpha3:"CCK",numeric:"166"},{countryName:"Democratis Republic of Congo",alpha2:"CD",alpha3:"COD",numeric:"180"},{countryName:"Central African Republic",alpha2:"CF",alpha3:"CAF",numeric:"140"},{countryName:"Congo",alpha2:"CG",alpha3:"COG",numeric:"178"},{countryName:"Switzerland",alpha2:"CH",alpha3:"CHE",numeric:"756"},{countryName:"Côte d'Ivoire",alpha2:"CI",alpha3:"CIV",numeric:"384"},{countryName:"Cook Island",alpha2:"CK",alpha3:"COK",numeric:"184"},{countryName:"Chile",alpha2:"CL",alpha3:"CHL",numeric:"152"},{countryName:"Cameroon",alpha2:"CM",alpha3:"CMR",numeric:"120"},{countryName:"China",alpha2:"CN",alpha3:"CHN",numeric:"156"},{countryName:"Colombia",alpha2:"CO",alpha3:"COL",numeric:"170"},{countryName:"Costa Rica",alpha2:"CR",alpha3:"CRI",numeric:"188"},{countryName:"Cuba",alpha2:"CU",alpha3:"CUB",numeric:"192"},{countryName:"Cape Verde",alpha2:"CV",alpha3:"CPV",numeric:"132"},{countryName:"Curaçao",alpha2:"CW",alpha3:"CUW",numeric:"531"},{countryName:"Christmas Island",alpha2:"CX",alpha3:"CXR",numeric:"162"},{countryName:"Cyprus",alpha2:"CY",alpha3:"CYP",numeric:"196"},{countryName:"Czech Republic",alpha2:"CZ",alpha3:"CZE",numeric:"203"},{countryName:"Germany",alpha2:"DE",alpha3:"DEU",numeric:"276"},{countryName:"Djibouti",alpha2:"DJ",alpha3:"DJI",numeric:"262"},{countryName:"Denmark",alpha2:"DK",alpha3:"DNK",numeric:"208"},{countryName:"Dominica",alpha2:"DM",alpha3:"DMA",numeric:"212"},{countryName:"Dominican Republic",alpha2:"DO",alpha3:"DOM",numeric:"214"},{countryName:"Ecuador",alpha2:"EC",alpha3:"ECU",numeric:"218"},{countryName:"Estonia",alpha2:"EE",alpha3:"EST",numeric:"233"},{countryName:"Egypt",alpha2:"EG",alpha3:"EGY",numeric:"818"},{countryName:"Western Sahara",alpha2:"EH",alpha3:"ESH",numeric:"732"},{countryName:"Eritrea",alpha2:"ER",alpha3:"ERI",numeric:"232"},{countryName:"Spain",alpha2:"ES",alpha3:"ESP",numeric:"724"},{countryName:"Ethiopia",alpha2:"ET",alpha3:"ETH",numeric:"231"},{countryName:"European Union",alpha2:"EU",alpha3:"",numeric:""},{countryName:"Finland",alpha2:"FI",alpha3:"FIN",numeric:"246"},{countryName:"Fiji",alpha2:"FJ",alpha3:"FJI",numeric:"242"},{countryName:"Falkland Islands",alpha2:"FK",alpha3:"FLK",numeric:"238"},{countryName:"Micronesia (Federated States of)",alpha2:"FM",alpha3:"FSM",numeric:"583"},{countryName:"Faroe Island",alpha2:"FO",alpha3:"FRO",numeric:"234"},{countryName:"France",alpha2:"FR",alpha3:"FRA",numeric:"250"},{countryName:"Gabon",alpha2:"GA",alpha3:"GAB",numeric:"266"},{countryName:"United Kingdom of Great Britain and Northern Ireland",alpha2:"GB",alpha3:"GBR",numeric:"826"},{countryName:"England",alpha2:"GB-ENG",alpha3:"",numeric:""},{countryName:"Scotland",alpha2:"GB-SCT",alpha3:"",numeric:""},{countryName:"United Kingdom",alpha2:"GB-UKM",alpha3:"",numeric:""},{countryName:"Wales",alpha2:"GB-WLS",alpha3:"",numeric:""},{countryName:"Grenada",alpha2:"GD",alpha3:"GRD",numeric:"308"},{countryName:"Georgia",alpha2:"GE",alpha3:"GEO",numeric:"268"},{countryName:"French Guiana",alpha2:"GF",alpha3:"GUF",numeric:"254"},{countryName:"Guernsey",alpha2:"GG",alpha3:"GGY",numeric:"831"},{countryName:"Ghana",alpha2:"GH",alpha3:"GHA",numeric:"288"},{countryName:"Gibraltar",alpha2:"GI",alpha3:"GIB",numeric:"292"},{countryName:"Greenland",alpha2:"GL",alpha3:"GRL",numeric:"304"},{countryName:"Gambia",alpha2:"GM",alpha3:"GMB",numeric:"270"},{countryName:"Guinea",alpha2:"GN",alpha3:"GIN",numeric:"324"},{countryName:"Guadeloupe",alpha2:"GP",alpha3:"GLP",numeric:"312"},{countryName:"Equatorial Guinea",alpha2:"GQ",alpha3:"GNQ",numeric:"226"},{countryName:"Greece",alpha2:"GR",alpha3:"GRC",numeric:"300"},{countryName:"South Gerogia and the South Sandwich Islands",alpha2:"GS",alpha3:"SGS",numeric:"239"},{countryName:"Guatemala",alpha2:"GT",alpha3:"GTM",numeric:"320"},{countryName:"Guam",alpha2:"GU",alpha3:"GUM",numeric:"316"},{countryName:"Guinea-Bissau",alpha2:"GW",alpha3:"GNB",numeric:"624"},{countryName:"Guyana",alpha2:"GY",alpha3:"GUY",numeric:"328"},{countryName:"Hong Kong",alpha2:"HK",alpha3:"HKG",numeric:"344"},{countryName:"Heard Island and McDonald Islands",alpha2:"HM",alpha3:"HMD",numeric:"334"},{countryName:"Honduras",alpha2:"HN",alpha3:"HND",numeric:"340"},{countryName:"Croatia",alpha2:"HR",alpha3:"HRV",numeric:"191"},{countryName:"Haiti",alpha2:"HT",alpha3:"HTI",numeric:"332"},{countryName:"Hungary",alpha2:"HU",alpha3:"HUN",numeric:"348"},{countryName:"Indonesia",alpha2:"ID",alpha3:"IDN",numeric:"360"},{countryName:"Ireland",alpha2:"IE",alpha3:"IRL",numeric:"372"},{countryName:"Israel",alpha2:"IL",alpha3:"ISR",numeric:"376"},{countryName:"Isle of Man",alpha2:"IM",alpha3:"IMN",numeric:"833"},{countryName:"India",alpha2:"IN",alpha3:"IND",numeric:"356"},{countryName:"British Indian Ocean Territory",alpha2:"IO",alpha3:"IOT",numeric:"086"},{countryName:"Iraq",alpha2:"IQ",alpha3:"IRQ",numeric:"368"},{countryName:"Iran",alpha2:"IR",alpha3:"IRN",numeric:"364"},{countryName:"Iceland",alpha2:"IS",alpha3:"ISL",numeric:"352"},{countryName:"Italy",alpha2:"IT",alpha3:"ITA",numeric:"380"},{countryName:"Jersey",alpha2:"JE",alpha3:"JEY",numeric:"832"},{countryName:"Jamaica",alpha2:"JM",alpha3:"JAM",numeric:"388"},{countryName:"Jordan",alpha2:"JO",alpha3:"JOR",numeric:"400"},{countryName:"Japan",alpha2:"JP",alpha3:"JPN",numeric:"392"},{countryName:"Kenya",alpha2:"KE",alpha3:"KEN",numeric:"404"},{countryName:"Kyrgyzstan",alpha2:"KG",alpha3:"KGZ",numeric:"417"},{countryName:"Cambodia",alpha2:"KH",alpha3:"KHM",numeric:"116"},{countryName:"Kiribati",alpha2:"KI",alpha3:"KIR",numeric:"296"},{countryName:"Comoros",alpha2:"KM",alpha3:"COM",numeric:"174"},{countryName:"Saint Kitts and Nevis",alpha2:"KN",alpha3:"KNA",numeric:"659"},{countryName:"Korea (the Democratic People's Republic of)",alpha2:"KP",alpha3:"PRK",numeric:"408"},{countryName:"Korea (the Republic of)",alpha2:"KR",alpha3:"KOR",numeric:"410"},{countryName:"Kuwait",alpha2:"KW",alpha3:"KWT",numeric:"414"},{countryName:"Cayman Islands",alpha2:"KY",alpha3:"CYM",numeric:"136"},{countryName:"Kazakhstan",alpha2:"KZ",alpha3:"KAZ",numeric:"398"},{countryName:"Lao People's Democratic Republic (the)",alpha2:"LA",alpha3:"LAO",numeric:"418"},{countryName:"Lebanon",alpha2:"LB",alpha3:"LBN",numeric:"422"},{countryName:"Saint Lucia",alpha2:"LC",alpha3:"LCA",numeric:"662"},{countryName:"Liechtenstein",alpha2:"LI",alpha3:"LIE",numeric:"438"},{countryName:"Sri Lanka",alpha2:"LK",alpha3:"LKA",numeric:"144"},{countryName:"Liberia",alpha2:"LR",alpha3:"LBR",numeric:"430"},{countryName:"Lesotho",alpha2:"LS",alpha3:"LSO",numeric:"426"},{countryName:"Lithuania",alpha2:"LT",alpha3:"LTU",numeric:"440"},{countryName:"Luxembourg",alpha2:"LU",alpha3:"LUX",numeric:"442"},{countryName:"Latvia",alpha2:"LV",alpha3:"LVA",numeric:"428"},{countryName:"Libya",alpha2:"LY",alpha3:"LBY",numeric:"434"},{countryName:"Morocco",alpha2:"MA",alpha3:"MAR",numeric:"504"},{countryName:"Monaco",alpha2:"MC",alpha3:"MCO ",numeric:"492"},{countryName:"Moldova (the Republic of)",alpha2:"MD",alpha3:"MDA",numeric:"498"},{countryName:"Montenegro",alpha2:"ME",alpha3:"MNE",numeric:"499"},{countryName:"Saint Martin",alpha2:"MF",alpha3:"MAF",numeric:"663"},{countryName:"Madagascar",alpha2:"MG",alpha3:"MDG",numeric:"450"},{countryName:"Marshall Islands (the)",alpha2:"MH",alpha3:"MHL",numeric:"584"},{countryName:"North Macedonia",alpha2:"MK",alpha3:"MKD",numeric:"807"},{countryName:"Mali",alpha2:"ML",alpha3:"MLI",numeric:"466"},{countryName:"Myanmar",alpha2:"MM",alpha3:"MMR",numeric:"104"},{countryName:"Mongolia",alpha2:"MN",alpha3:"MNG",numeric:"496"},{countryName:"Macao",alpha2:"MO",alpha3:"MAC",numeric:"446"},{countryName:"Northern Mariana Islands (the)",alpha2:"MP",alpha3:"MNP",numeric:"580"},{countryName:"Martinique",alpha2:"MQ",alpha3:"MTQ",numeric:"474"},{countryName:"Mauritania",alpha2:"MR",alpha3:"MRT",numeric:"478"},{countryName:"Montserrat",alpha2:"MS",alpha3:"MSR",numeric:"500"},{countryName:"Malta",alpha2:"MT",alpha3:"MLT",numeric:"470"},{countryName:"Mauritius",alpha2:"MU",alpha3:"MUS",numeric:"480"},{countryName:"Maldives",alpha2:"MV",alpha3:"MDV",numeric:"462"},{countryName:"Malawi",alpha2:"MW",alpha3:"MWI",numeric:"454"},{countryName:"Mexico",alpha2:"MX",alpha3:"MEX",numeric:"484"},{countryName:"Malaysia",alpha2:"MY",alpha3:"MYS",numeric:"458"},{countryName:"Mozambique",alpha2:"MZ",alpha3:"MOZ",numeric:"508"},{countryName:"Namibia",alpha2:"NA",alpha3:"NAM",numeric:"516"},{countryName:"New Caledonia",alpha2:"NC",alpha3:"NCL",numeric:"540"},{countryName:"Niger",alpha2:"NE",alpha3:"NER",numeric:"562"},{countryName:"Norfolk Island",alpha2:"NF",alpha3:"NFK",numeric:"574"},{countryName:"Nigeria",alpha2:"NG",alpha3:"NGA",numeric:"566"},{countryName:"Nicaragua",alpha2:"NI",alpha3:"NIC",numeric:"558"},{countryName:"Netherlands",alpha2:"NL",alpha3:"NLD",numeric:"528"},{countryName:"Norway",alpha2:"NO",alpha3:"NOR",numeric:"578"},{countryName:"Nepal",alpha2:"NP",alpha3:"NPL",numeric:"524"},{countryName:"Nauru",alpha2:"NR",alpha3:"NRU",numeric:"520"},{countryName:"Niue",alpha2:"NU",alpha3:"NIU",numeric:"570"},{countryName:"New Zealand",alpha2:"NZ",alpha3:"NZL",numeric:"554"},{countryName:"Oman",alpha2:"OM",alpha3:"OMN",numeric:"512"},{countryName:"Panama",alpha2:"PA",alpha3:"PAN",numeric:"591"},{countryName:"Peru",alpha2:"PE",alpha3:"PER",numeric:"604"},{countryName:"French Polyesia",alpha2:"PF",alpha3:"PYF",numeric:"258"},{countryName:"Papua New Guinea",alpha2:"PG",alpha3:"PNG",numeric:"598"},{countryName:"Phillippines (the)",alpha2:"PH",alpha3:"PHL",numeric:"608"},{countryName:"Pakistan",alpha2:"PK",alpha3:"PAK",numeric:"586"},{countryName:"Poland",alpha2:"PL",alpha3:"POL",numeric:"616"},{countryName:"Saint Pierre and Miquelon",alpha2:"PM",alpha3:"SPM",numeric:"666"},{countryName:"Pitcairn",alpha2:"PN",alpha3:"PCN",numeric:"612"},{countryName:"Puerto Rico",alpha2:"PR",alpha3:"PRI",numeric:"630"},{countryName:"Palestine, State of",alpha2:"PS",alpha3:"PSE",numeric:"275"},{countryName:"Portugal",alpha2:"PT",alpha3:"PRT",numeric:"620"},{countryName:"Palau",alpha2:"PW",alpha3:"PLW",numeric:"585"},{countryName:"Paraguay",alpha2:"PY",alpha3:"PRY",numeric:"600"},{countryName:"Qatar",alpha2:"QA",alpha3:"QAT",numeric:"634"},{countryName:"Rainbow",alpha2:"RAINBOW",alpha3:"",numeric:""},{countryName:"Réunion",alpha2:"RE",alpha3:"REU",numeric:"638"},{countryName:"Romania",alpha2:"RO",alpha3:"ROU",numeric:"642"},{countryName:"Serbia",alpha2:"RS",alpha3:"SRB",numeric:"688"},{countryName:"Russian Federation (the)",alpha2:"RU",alpha3:"RUS",numeric:"643"},{countryName:"Rwanda",alpha2:"RW",alpha3:"RWA",numeric:"646"},{countryName:"Saudi Arabia",alpha2:"SA",alpha3:"SAU",numeric:"682"},{countryName:"Solomon Islands",alpha2:"SB",alpha3:"SLB",numeric:"090"},{countryName:"Seychelles",alpha2:"SC",alpha3:"SYC",numeric:"690"},{countryName:"Sudan (the)",alpha2:"SD",alpha3:"SDN",numeric:"729"},{countryName:"Sweden",alpha2:"SE",alpha3:"SWE",numeric:"752"},{countryName:"Singapore",alpha2:"SG",alpha3:"SGP",numeric:"702"},{countryName:"Saint Helena, Ascension Island, Traistan da Cunha",alpha2:"SH",alpha3:"SHN",numeric:"654"},{countryName:"Slovenia",alpha2:"SI",alpha3:"SVN",numeric:"705"},{countryName:"Svalbard, Jan Mayen",alpha2:"SJ",alpha3:"SJM",numeric:"744"},{countryName:"Slovakia",alpha2:"SK",alpha3:"SVK",numeric:"703"},{countryName:"Sierra Leone",alpha2:"SL",alpha3:"SLE",numeric:"694"},{countryName:"San Marino",alpha2:"SM",alpha3:"SMR",numeric:"674"},{countryName:"Senegal",alpha2:"SN",alpha3:"SEN",numeric:"686"},{countryName:"Somalia",alpha2:"SO",alpha3:"SOM",numeric:"706"},{countryName:"Suriname",alpha2:"SR",alpha3:"SUR",numeric:"740"},{countryName:"South Sudan",alpha2:"SS",alpha3:"SSD",numeric:"728"},{countryName:"Sao Tome and Principe",alpha2:"ST",alpha3:"STP",numeric:"678"},{countryName:"El Salvador",alpha2:"SV",alpha3:"SLV",numeric:"222"},{countryName:"Sint Maarten",alpha2:"SX",alpha3:"SXM",numeric:"534"},{countryName:"Syrian Arab Republic (the)",alpha2:"SY",alpha3:"SYR",numeric:"760"},{countryName:"Eswatini",alpha2:"SZ",alpha3:"SWZ",numeric:"748"},{countryName:"Turks and Caicos Islands (the)",alpha2:"TC",alpha3:"TCA",numeric:"796"},{countryName:"Chad",alpha2:"TD",alpha3:"TCD",numeric:"148"},{countryName:"French Southern Territories",alpha2:"TF",alpha3:"ATF",numeric:"260"},{countryName:"Togo",alpha2:"TG",alpha3:"TGO",numeric:"768"},{countryName:"Thailand",alpha2:"TH",alpha3:"THA",numeric:"764"},{countryName:"Tajikistan",alpha2:"TJ",alpha3:"TJK",numeric:"762"},{countryName:"Tokelau",alpha2:"TK",alpha3:"TKL",numeric:"772"},{countryName:"Timor-Leste",alpha2:"TL",alpha3:"TLS",numeric:"626"},{countryName:"Turkmenistan",alpha2:"TM",alpha3:"TKM",numeric:"795"},{countryName:"Tunisia",alpha2:"TN",alpha3:"TUN",numeric:"788"},{countryName:"Tonga",alpha2:"TO",alpha3:"TON",numeric:"776"},{countryName:"Turkey",alpha2:"TR",alpha3:"TUR",numeric:"792"},{countryName:"Trinidad and Tobago",alpha2:"TT",alpha3:"TTO",numeric:"780"},{countryName:"Tuvalu",alpha2:"TV",alpha3:"TUV",numeric:"798"},{countryName:"Taiwan",alpha2:"TW",alpha3:"TWN",numeric:"158"},{countryName:"Tanzania, the United Republic of",alpha2:"TZ",alpha3:"TZA",numeric:"834"},{countryName:"Ukraine",alpha2:"UA",alpha3:"UKR",numeric:"804"},{countryName:"Uganda",alpha2:"UG",alpha3:"UGA",numeric:"800"},{countryName:"United States Minor Outlying Islands (the)",alpha2:"UM",alpha3:"UMI",numeric:"581"},{countryName:"Union of South American Nations",alpha2:"UOSAN",alpha3:"",numeric:""},{countryName:"United States of America",alpha2:"US",alpha3:"USA",numeric:"840"},{countryName:"Uruguay",alpha2:"UY",alpha3:"URY",numeric:"858"},{countryName:"Uzbekistan",alpha2:"UZ",alpha3:"UZB",numeric:"860"},{countryName:"Holy See",alpha2:"VA",alpha3:"VAT",numeric:"336"},{countryName:"Saint Vincent and the Grenadines",alpha2:"VC",alpha3:"VCT",numeric:"670"},{countryName:"Venezuela (Bolivarian Republic of)",alpha2:"VE",alpha3:"VEN",numeric:"862"},{countryName:"Virgin Islands (British)",alpha2:"VG",alpha3:"VGB",numeric:"092"},{countryName:"Virgin Islands (U.S.)",alpha2:"VI",alpha3:"VIR",numeric:"850"},{countryName:"Viet Nam",alpha2:"VN",alpha3:"VNM",numeric:"704"},{countryName:"Vanuatu",alpha2:"VU",alpha3:"VUT",numeric:"548"},{countryName:"Wallis and Futuna",alpha2:"WF",alpha3:"WLF",numeric:"876"},{countryName:"Samoa",alpha2:"WS",alpha3:"WSM",numeric:"882"},{countryName:"Yemen",alpha2:"YE",alpha3:"YEM",numeric:"887"},{countryName:"Mayotte",alpha2:"YT",alpha3:"MYT",numeric:"175"},{countryName:"South Africa",alpha2:"ZA",alpha3:"ZAF",numeric:"710"},{countryName:"Zambia",alpha2:"ZM",alpha3:"ZMB",numeric:"894"},{countryName:"Zimbabwe",alpha2:"ZW",alpha3:"ZWE",numeric:"716"}];

/* loaded by smart-asset */
var l = require("./flags/ebcOgFlY.svg");

/* loaded by smart-asset */
var m = require("./flags/pzuWBtDU.svg");

/* loaded by smart-asset */
var s = require("./flags/csRrvodz.svg");

var AD = {
  l: l,
  m: m,
  s: s
};

/* loaded by smart-asset */
var l$1 = require("./flags/bOnOszbf.svg");

/* loaded by smart-asset */
var m$1 = require("./flags/bCMdShLq.svg");

/* loaded by smart-asset */
var s$1 = require("./flags/edoyLHtQ.svg");

var AE = {
  l: l$1,
  m: m$1,
  s: s$1
};

/* loaded by smart-asset */
var l$2 = require("./flags/bxcVelRv.svg");

/* loaded by smart-asset */
var m$2 = require("./flags/dxZtnvtc.svg");

/* loaded by smart-asset */
var s$2 = require("./flags/cuhWjYAV.svg");

var AFRUN = {
  l: l$2,
  m: m$2,
  s: s$2
};

/* loaded by smart-asset */
var l$3 = require("./flags/bxVCmxWB.svg");

/* loaded by smart-asset */
var m$3 = require("./flags/evqbmrbP.svg");

/* loaded by smart-asset */
var s$3 = require("./flags/bUeSZzzj.svg");

var AG = {
  l: l$3,
  m: m$3,
  s: s$3
};

/* loaded by smart-asset */
var l$4 = require("./flags/eoHhMYkY.svg");

/* loaded by smart-asset */
var m$4 = require("./flags/cLEEaQws.svg");

/* loaded by smart-asset */
var s$4 = require("./flags/cmpkZZey.svg");

var AI = {
  l: l$4,
  m: m$4,
  s: s$4
};

/* loaded by smart-asset */
var l$5 = require("./flags/cHhEbhFy.svg");

/* loaded by smart-asset */
var m$5 = require("./flags/dEpiyjht.svg");

/* loaded by smart-asset */
var s$5 = require("./flags/bqosxwKW.svg");

var AL = {
  l: l$5,
  m: m$5,
  s: s$5
};

/* loaded by smart-asset */
var l$6 = require("./flags/foqWGNiY.svg");

/* loaded by smart-asset */
var m$6 = require("./flags/ffymLVBu.svg");

/* loaded by smart-asset */
var s$6 = require("./flags/cfgzSYgu.svg");

var AM = {
  l: l$6,
  m: m$6,
  s: s$6
};

/* loaded by smart-asset */
var l$7 = require("./flags/haJbUOaQ.svg");

/* loaded by smart-asset */
var m$7 = require("./flags/dmsGhcfN.svg");

/* loaded by smart-asset */
var s$7 = require("./flags/dNIrTUtw.svg");

var AMS = {
  l: l$7,
  m: m$7,
  s: s$7
};

/* loaded by smart-asset */
var l$8 = require("./flags/dZnfrkTy.svg");

/* loaded by smart-asset */
var m$8 = require("./flags/bFWJSwKZ.svg");

/* loaded by smart-asset */
var s$8 = require("./flags/cYuNjzGA.svg");

var AO = {
  l: l$8,
  m: m$8,
  s: s$8
};

/* loaded by smart-asset */
var l$9 = require("./flags/eVpljzCs.svg");

/* loaded by smart-asset */
var m$9 = require("./flags/dOHvxxXf.svg");

/* loaded by smart-asset */
var s$9 = require("./flags/fMSvwURY.svg");

var AQ = {
  l: l$9,
  m: m$9,
  s: s$9
};

/* loaded by smart-asset */
var l$a = require("./flags/esfHfxph.svg");

/* loaded by smart-asset */
var m$a = require("./flags/dQebZFQN.svg");

/* loaded by smart-asset */
var s$a = require("./flags/crBMuwOM.svg");

var AR = {
  l: l$a,
  m: m$a,
  s: s$a
};

/* loaded by smart-asset */
var l$b = require("./flags/eJBxbVQv.svg");

/* loaded by smart-asset */
var m$b = require("./flags/BNNivYAQ.svg");

/* loaded by smart-asset */
var s$b = require("./flags/cLvsBeXx.svg");

var AS = {
  l: l$b,
  m: m$b,
  s: s$b
};

/* loaded by smart-asset */
var l$c = require("./flags/JcberJGT.svg");

/* loaded by smart-asset */
var m$c = require("./flags/fZNSWeaE.svg");

/* loaded by smart-asset */
var s$c = require("./flags/gEknnBkL.svg");

var AT = {
  l: l$c,
  m: m$c,
  s: s$c
};

/* loaded by smart-asset */
var l$d = require("./flags/eFaHLDPO.svg");

/* loaded by smart-asset */
var m$d = require("./flags/dMGYjvJf.svg");

/* loaded by smart-asset */
var s$d = require("./flags/fAlOePCx.svg");

var AU = {
  l: l$d,
  m: m$d,
  s: s$d
};

/* loaded by smart-asset */
var l$e = require("./flags/dwgaoLCG.svg");

/* loaded by smart-asset */
var m$e = require("./flags/cWxtoRSs.svg");

/* loaded by smart-asset */
var s$e = require("./flags/ceebSwSB.svg");

var AW = {
  l: l$e,
  m: m$e,
  s: s$e
};

/* loaded by smart-asset */
var l$f = require("./flags/bnPRGgEs.svg");

/* loaded by smart-asset */
var m$f = require("./flags/bydmMIPi.svg");

/* loaded by smart-asset */
var s$f = require("./flags/RsMnSJGe.svg");

var AX = {
  l: l$f,
  m: m$f,
  s: s$f
};

/* loaded by smart-asset */
var l$g = require("./flags/XhoncOjn.svg");

/* loaded by smart-asset */
var m$g = require("./flags/eHpDyfFP.svg");

/* loaded by smart-asset */
var s$g = require("./flags/dLvoETnM.svg");

var AZ = {
  l: l$g,
  m: m$g,
  s: s$g
};

/* loaded by smart-asset */
var l$h = require("./flags/cxMeWtjD.svg");

/* loaded by smart-asset */
var m$h = require("./flags/IcuhLbSY.svg");

/* loaded by smart-asset */
var s$h = require("./flags/eqkQXLey.svg");

var BA = {
  l: l$h,
  m: m$h,
  s: s$h
};

/* loaded by smart-asset */
var l$i = require("./flags/bZSqQkMR.svg");

/* loaded by smart-asset */
var m$i = require("./flags/bjIGqNmx.svg");

/* loaded by smart-asset */
var s$i = require("./flags/bHxrmntt.svg");

var BB = {
  l: l$i,
  m: m$i,
  s: s$i
};

/* loaded by smart-asset */
var l$j = require("./flags/bKFBcXiF.svg");

/* loaded by smart-asset */
var m$j = require("./flags/dVUKkoiC.svg");

/* loaded by smart-asset */
var s$j = require("./flags/dKGSAJTb.svg");

var BD = {
  l: l$j,
  m: m$j,
  s: s$j
};

/* loaded by smart-asset */
var l$k = require("./flags/bZKkURKX.svg");

/* loaded by smart-asset */
var m$k = require("./flags/bZgZKVLx.svg");

/* loaded by smart-asset */
var s$k = require("./flags/gbckYmQC.svg");

var BE = {
  l: l$k,
  m: m$k,
  s: s$k
};

/* loaded by smart-asset */
var l$l = require("./flags/diiCtukb.svg");

/* loaded by smart-asset */
var m$l = require("./flags/ccjmXDoz.svg");

/* loaded by smart-asset */
var s$l = require("./flags/fbHCIVMe.svg");

var BF = {
  l: l$l,
  m: m$l,
  s: s$l
};

/* loaded by smart-asset */
var l$m = require("./flags/fhjguAWM.svg");

/* loaded by smart-asset */
var m$m = require("./flags/BSjzuXFt.svg");

/* loaded by smart-asset */
var s$m = require("./flags/clqQQpaC.svg");

var BG = {
  l: l$m,
  m: m$m,
  s: s$m
};

/* loaded by smart-asset */
var l$n = require("./flags/enXghKBC.svg");

/* loaded by smart-asset */
var m$n = require("./flags/bKHrsqTl.svg");

/* loaded by smart-asset */
var s$n = require("./flags/dvxwOqbT.svg");

var BH = {
  l: l$n,
  m: m$n,
  s: s$n
};

/* loaded by smart-asset */
var l$o = require("./flags/dAluBeBd.svg");

/* loaded by smart-asset */
var m$o = require("./flags/ctdhpXbg.svg");

/* loaded by smart-asset */
var s$o = require("./flags/fJYFAqHb.svg");

var BI = {
  l: l$o,
  m: m$o,
  s: s$o
};

/* loaded by smart-asset */
var l$p = require("./flags/beagjmsA.svg");

/* loaded by smart-asset */
var m$p = require("./flags/vWGMkVQy.svg");

/* loaded by smart-asset */
var s$p = require("./flags/cBrrhLOX.svg");

var BJ = {
  l: l$p,
  m: m$p,
  s: s$p
};

/* loaded by smart-asset */
var l$q = require("./flags/ekCZJWRY.svg");

/* loaded by smart-asset */
var m$q = require("./flags/dqNaPlrV.svg");

/* loaded by smart-asset */
var s$q = require("./flags/KskiHZhB.svg");

var BL = {
  l: l$q,
  m: m$q,
  s: s$q
};

/* loaded by smart-asset */
var l$r = require("./flags/bfRRESUP.svg");

/* loaded by smart-asset */
var m$r = require("./flags/bOPMTBBd.svg");

/* loaded by smart-asset */
var s$r = require("./flags/fObdLRoy.svg");

var BM = {
  l: l$r,
  m: m$r,
  s: s$r
};

/* loaded by smart-asset */
var l$s = require("./flags/eGzNIOYf.svg");

/* loaded by smart-asset */
var m$s = require("./flags/fNGKIHwW.svg");

/* loaded by smart-asset */
var s$s = require("./flags/daDmbItf.svg");

var BN = {
  l: l$s,
  m: m$s,
  s: s$s
};

/* loaded by smart-asset */
var l$t = require("./flags/fwsllPLs.svg");

/* loaded by smart-asset */
var m$t = require("./flags/cYtOiUnZ.svg");

/* loaded by smart-asset */
var s$t = require("./flags/ednjGZrT.svg");

var BO = {
  l: l$t,
  m: m$t,
  s: s$t
};

/* loaded by smart-asset */
var l$u = require("./flags/eMbcssOw.svg");

/* loaded by smart-asset */
var m$u = require("./flags/fCvrsPoG.svg");

/* loaded by smart-asset */
var s$u = require("./flags/fOlWhRBh.svg");

var BQ_BO = {
  l: l$u,
  m: m$u,
  s: s$u
};

/* loaded by smart-asset */
var l$v = require("./flags/dlSCjryq.svg");

/* loaded by smart-asset */
var m$v = require("./flags/eKjbLfHd.svg");

/* loaded by smart-asset */
var s$v = require("./flags/bJsvuDEQ.svg");

var BQ_SA = {
  l: l$v,
  m: m$v,
  s: s$v
};

/* loaded by smart-asset */
var l$w = require("./flags/dSFLZHkb.svg");

/* loaded by smart-asset */
var m$w = require("./flags/sEcFFOtK.svg");

/* loaded by smart-asset */
var s$w = require("./flags/chmsRwig.svg");

var BQ_SE = {
  l: l$w,
  m: m$w,
  s: s$w
};

/* loaded by smart-asset */
var l$x = require("./flags/dkUCtcig.svg");

/* loaded by smart-asset */
var m$x = require("./flags/bKqtaIyv.svg");

/* loaded by smart-asset */
var s$x = require("./flags/fTvTZNuA.svg");

var BR = {
  l: l$x,
  m: m$x,
  s: s$x
};

/* loaded by smart-asset */
var l$y = require("./flags/gypDvOpG.svg");

/* loaded by smart-asset */
var m$y = require("./flags/ctRHgMbK.svg");

/* loaded by smart-asset */
var s$y = require("./flags/dadDzmQL.svg");

var BS = {
  l: l$y,
  m: m$y,
  s: s$y
};

/* loaded by smart-asset */
var l$z = require("./flags/fbbkflUK.svg");

/* loaded by smart-asset */
var m$z = require("./flags/fHTDafcq.svg");

/* loaded by smart-asset */
var s$z = require("./flags/bxRHGfeX.svg");

var BT = {
  l: l$z,
  m: m$z,
  s: s$z
};

/* loaded by smart-asset */
var l$A = require("./flags/fapFaSBh.svg");

/* loaded by smart-asset */
var m$A = require("./flags/cdWYhAKB.svg");

/* loaded by smart-asset */
var s$A = require("./flags/dpjsveVN.svg");

var BW = {
  l: l$A,
  m: m$A,
  s: s$A
};

/* loaded by smart-asset */
var l$B = require("./flags/fbkwmspp.svg");

/* loaded by smart-asset */
var m$B = require("./flags/cZuUSGAj.svg");

/* loaded by smart-asset */
var s$B = require("./flags/dmtWyfIP.svg");

var BY = {
  l: l$B,
  m: m$B,
  s: s$B
};

/* loaded by smart-asset */
var l$C = require("./flags/cDIHgzMt.svg");

/* loaded by smart-asset */
var m$C = require("./flags/fHppOZqj.svg");

/* loaded by smart-asset */
var s$C = require("./flags/cmLWJBPr.svg");

var BZ = {
  l: l$C,
  m: m$C,
  s: s$C
};

/* loaded by smart-asset */
var l$D = require("./flags/tFZLljAK.svg");

/* loaded by smart-asset */
var m$D = require("./flags/evQaZfmv.svg");

/* loaded by smart-asset */
var s$D = require("./flags/bVNymLVI.svg");

var CA = {
  l: l$D,
  m: m$D,
  s: s$D
};

/* loaded by smart-asset */
var l$E = require("./flags/dUrZsLnK.svg");

/* loaded by smart-asset */
var m$E = require("./flags/vpfFhxTN.svg");

/* loaded by smart-asset */
var s$E = require("./flags/nBgtgYca.svg");

var CC = {
  l: l$E,
  m: m$E,
  s: s$E
};

/* loaded by smart-asset */
var l$F = require("./flags/cHWYbLKk.svg");

/* loaded by smart-asset */
var m$F = require("./flags/fBluJQcr.svg");

/* loaded by smart-asset */
var s$F = require("./flags/KjlVIlPM.svg");

var CD = {
  l: l$F,
  m: m$F,
  s: s$F
};

/* loaded by smart-asset */
var l$G = require("./flags/cUkZCIDd.svg");

/* loaded by smart-asset */
var m$G = require("./flags/leYZjpQC.svg");

/* loaded by smart-asset */
var s$G = require("./flags/yzhqINrJ.svg");

var CF = {
  l: l$G,
  m: m$G,
  s: s$G
};

/* loaded by smart-asset */
var l$H = require("./flags/CMvRKoAa.svg");

/* loaded by smart-asset */
var m$H = require("./flags/dHesejiO.svg");

/* loaded by smart-asset */
var s$H = require("./flags/fbOCGBSo.svg");

var CG = {
  l: l$H,
  m: m$H,
  s: s$H
};

/* loaded by smart-asset */
var l$I = require("./flags/eiOqOaMX.svg");

/* loaded by smart-asset */
var m$I = require("./flags/djZylaTk.svg");

/* loaded by smart-asset */
var s$I = require("./flags/eLIRKBzE.svg");

var CH = {
  l: l$I,
  m: m$I,
  s: s$I
};

/* loaded by smart-asset */
var l$J = require("./flags/GvxSBehD.svg");

/* loaded by smart-asset */
var m$J = require("./flags/yGmFfKyp.svg");

/* loaded by smart-asset */
var s$J = require("./flags/dnDjiVGi.svg");

var CI = {
  l: l$J,
  m: m$J,
  s: s$J
};

/* loaded by smart-asset */
var l$K = require("./flags/ezPavpNN.svg");

/* loaded by smart-asset */
var m$K = require("./flags/bJAvHzdm.svg");

/* loaded by smart-asset */
var s$K = require("./flags/fIjDRUZW.svg");

var CK = {
  l: l$K,
  m: m$K,
  s: s$K
};

/* loaded by smart-asset */
var l$L = require("./flags/dDryQRcw.svg");

/* loaded by smart-asset */
var m$L = require("./flags/fUumslOZ.svg");

/* loaded by smart-asset */
var s$L = require("./flags/drDQhHoN.svg");

var CL = {
  l: l$L,
  m: m$L,
  s: s$L
};

/* loaded by smart-asset */
var l$M = require("./flags/frARyXiP.svg");

/* loaded by smart-asset */
var m$M = require("./flags/GTKqSEkw.svg");

/* loaded by smart-asset */
var s$M = require("./flags/cuLdwXCs.svg");

var CM = {
  l: l$M,
  m: m$M,
  s: s$M
};

/* loaded by smart-asset */
var l$N = require("./flags/cBpfUGPT.svg");

/* loaded by smart-asset */
var m$N = require("./flags/cmvBgpKs.svg");

/* loaded by smart-asset */
var s$N = require("./flags/faTpKDMs.svg");

var CN = {
  l: l$N,
  m: m$N,
  s: s$N
};

/* loaded by smart-asset */
var l$O = require("./flags/cFCFOjYu.svg");

/* loaded by smart-asset */
var m$O = require("./flags/bwXgTHRA.svg");

/* loaded by smart-asset */
var s$O = require("./flags/fulNnvbc.svg");

var CO = {
  l: l$O,
  m: m$O,
  s: s$O
};

/* loaded by smart-asset */
var l$P = require("./flags/chmuXORg.svg");

/* loaded by smart-asset */
var m$P = require("./flags/dIRHciYK.svg");

/* loaded by smart-asset */
var s$P = require("./flags/cOzRdbKE.svg");

var CR = {
  l: l$P,
  m: m$P,
  s: s$P
};

/* loaded by smart-asset */
var l$Q = require("./flags/bLcSTSUh.svg");

/* loaded by smart-asset */
var m$Q = require("./flags/cLxwCTkZ.svg");

/* loaded by smart-asset */
var s$Q = require("./flags/cdHXkmGG.svg");

var CU = {
  l: l$Q,
  m: m$Q,
  s: s$Q
};

/* loaded by smart-asset */
var l$R = require("./flags/fCxatPeG.svg");

/* loaded by smart-asset */
var m$R = require("./flags/eJoWIcSD.svg");

/* loaded by smart-asset */
var s$R = require("./flags/bHIBtJQw.svg");

var CV = {
  l: l$R,
  m: m$R,
  s: s$R
};

/* loaded by smart-asset */
var l$S = require("./flags/KeVrKDdj.svg");

/* loaded by smart-asset */
var m$S = require("./flags/AVIpRKld.svg");

/* loaded by smart-asset */
var s$S = require("./flags/cYWNJjTS.svg");

var CW = {
  l: l$S,
  m: m$S,
  s: s$S
};

/* loaded by smart-asset */
var l$T = require("./flags/fsdBhRWZ.svg");

/* loaded by smart-asset */
var m$T = require("./flags/ctkSBcsN.svg");

/* loaded by smart-asset */
var s$T = require("./flags/dOmGbJyN.svg");

var CX = {
  l: l$T,
  m: m$T,
  s: s$T
};

/* loaded by smart-asset */
var l$U = require("./flags/bFIRXdRI.svg");

/* loaded by smart-asset */
var m$U = require("./flags/qyKIsNxq.svg");

/* loaded by smart-asset */
var s$U = require("./flags/cbucpuFf.svg");

var CY = {
  l: l$U,
  m: m$U,
  s: s$U
};

/* loaded by smart-asset */
var l$V = require("./flags/HsYzsMJQ.svg");

/* loaded by smart-asset */
var m$V = require("./flags/fpygfJQu.svg");

/* loaded by smart-asset */
var s$V = require("./flags/fWxlHGUX.svg");

var CZ = {
  l: l$V,
  m: m$V,
  s: s$V
};

/* loaded by smart-asset */
var l$W = require("./flags/fobnMNOk.svg");

/* loaded by smart-asset */
var m$W = require("./flags/eDsljFsF.svg");

/* loaded by smart-asset */
var s$W = require("./flags/fzsCZEIG.svg");

var DE = {
  l: l$W,
  m: m$W,
  s: s$W
};

/* loaded by smart-asset */
var l$X = require("./flags/ehHDuKtK.svg");

/* loaded by smart-asset */
var m$X = require("./flags/ULdwBefB.svg");

/* loaded by smart-asset */
var s$X = require("./flags/dGOpvvaJ.svg");

var DJ = {
  l: l$X,
  m: m$X,
  s: s$X
};

/* loaded by smart-asset */
var l$Y = require("./flags/mvljIxuo.svg");

/* loaded by smart-asset */
var m$Y = require("./flags/brmaLemB.svg");

/* loaded by smart-asset */
var s$Y = require("./flags/cHRUHqrK.svg");

var DK = {
  l: l$Y,
  m: m$Y,
  s: s$Y
};

/* loaded by smart-asset */
var l$Z = require("./flags/dpnFTKJT.svg");

/* loaded by smart-asset */
var m$Z = require("./flags/OZpTIMSE.svg");

/* loaded by smart-asset */
var s$Z = require("./flags/dviyhTqF.svg");

var DM = {
  l: l$Z,
  m: m$Z,
  s: s$Z
};

/* loaded by smart-asset */
var l$_ = require("./flags/fDrPWSWZ.svg");

/* loaded by smart-asset */
var m$_ = require("./flags/cvqGOOjS.svg");

/* loaded by smart-asset */
var s$_ = require("./flags/bQSopvQV.svg");

var DO = {
  l: l$_,
  m: m$_,
  s: s$_
};

/* loaded by smart-asset */
var l$$ = require("./flags/eGxxvhgU.svg");

/* loaded by smart-asset */
var m$$ = require("./flags/CVjveluU.svg");

/* loaded by smart-asset */
var s$$ = require("./flags/HwnHzMyw.svg");

var EC = {
  l: l$$,
  m: m$$,
  s: s$$
};

/* loaded by smart-asset */
var l$10 = require("./flags/exEYLyZm.svg");

/* loaded by smart-asset */
var m$10 = require("./flags/fHyYuQXk.svg");

/* loaded by smart-asset */
var s$10 = require("./flags/knILJioN.svg");

var EE = {
  l: l$10,
  m: m$10,
  s: s$10
};

/* loaded by smart-asset */
var l$11 = require("./flags/eKVOeHIW.svg");

/* loaded by smart-asset */
var m$11 = require("./flags/eIJffHBf.svg");

/* loaded by smart-asset */
var s$11 = require("./flags/fQkHMqqn.svg");

var EG = {
  l: l$11,
  m: m$11,
  s: s$11
};

/* loaded by smart-asset */
var l$12 = require("./flags/nrNQAtBj.svg");

/* loaded by smart-asset */
var m$12 = require("./flags/dXAMNHba.svg");

/* loaded by smart-asset */
var s$12 = require("./flags/fVnVbtHh.svg");

var EH = {
  l: l$12,
  m: m$12,
  s: s$12
};

/* loaded by smart-asset */
var l$13 = require("./flags/dTeDaQlC.svg");

/* loaded by smart-asset */
var m$13 = require("./flags/fzmMsQmL.svg");

/* loaded by smart-asset */
var s$13 = require("./flags/fAsymjQe.svg");

var ER = {
  l: l$13,
  m: m$13,
  s: s$13
};

/* loaded by smart-asset */
var l$14 = require("./flags/eXhNjHef.svg");

/* loaded by smart-asset */
var m$14 = require("./flags/cBmwvOkz.svg");

/* loaded by smart-asset */
var s$14 = require("./flags/ePqItsoh.svg");

var ES = {
  l: l$14,
  m: m$14,
  s: s$14
};

/* loaded by smart-asset */
var l$15 = require("./flags/dtebFWTt.svg");

/* loaded by smart-asset */
var m$15 = require("./flags/bsRGcEXy.svg");

/* loaded by smart-asset */
var s$15 = require("./flags/soTHPeQD.svg");

var ET = {
  l: l$15,
  m: m$15,
  s: s$15
};

/* loaded by smart-asset */
var l$16 = require("./flags/dEQpoLcq.svg");

/* loaded by smart-asset */
var m$16 = require("./flags/flezDZMz.svg");

/* loaded by smart-asset */
var s$16 = require("./flags/AgoFVFMY.svg");

var EU = {
  l: l$16,
  m: m$16,
  s: s$16
};

/* loaded by smart-asset */
var l$17 = require("./flags/eKkIaiHq.svg");

/* loaded by smart-asset */
var m$17 = require("./flags/fJqZjAXS.svg");

/* loaded by smart-asset */
var s$17 = require("./flags/eSmmRpYz.svg");

var FI = {
  l: l$17,
  m: m$17,
  s: s$17
};

/* loaded by smart-asset */
var l$18 = require("./flags/eYdDvuqF.svg");

/* loaded by smart-asset */
var m$18 = require("./flags/evGObPSl.svg");

/* loaded by smart-asset */
var s$18 = require("./flags/wASuBDeh.svg");

var FJ = {
  l: l$18,
  m: m$18,
  s: s$18
};

/* loaded by smart-asset */
var l$19 = require("./flags/eTiOBaDB.svg");

/* loaded by smart-asset */
var m$19 = require("./flags/cajFrGgm.svg");

/* loaded by smart-asset */
var s$19 = require("./flags/gSRqFpvo.svg");

var FK = {
  l: l$19,
  m: m$19,
  s: s$19
};

/* loaded by smart-asset */
var l$1a = require("./flags/pNnjGpbA.svg");

/* loaded by smart-asset */
var m$1a = require("./flags/fcsCifky.svg");

/* loaded by smart-asset */
var s$1a = require("./flags/bUgOchJo.svg");

var FM = {
  l: l$1a,
  m: m$1a,
  s: s$1a
};

/* loaded by smart-asset */
var l$1b = require("./flags/dWrwowxu.svg");

/* loaded by smart-asset */
var m$1b = require("./flags/drggGALL.svg");

/* loaded by smart-asset */
var s$1b = require("./flags/dtfbxgUa.svg");

var FO = {
  l: l$1b,
  m: m$1b,
  s: s$1b
};

/* loaded by smart-asset */
var l$1c = require("./flags/biNfXwUL.svg");

/* loaded by smart-asset */
var m$1c = require("./flags/cinqAupu.svg");

/* loaded by smart-asset */
var s$1c = require("./flags/fGkgeaxE.svg");

var FR = {
  l: l$1c,
  m: m$1c,
  s: s$1c
};

/* loaded by smart-asset */
var l$1d = require("./flags/eNgwQTqz.svg");

/* loaded by smart-asset */
var m$1d = require("./flags/dwqQTxNZ.svg");

/* loaded by smart-asset */
var s$1d = require("./flags/nuKOhGlg.svg");

var GA = {
  l: l$1d,
  m: m$1d,
  s: s$1d
};

/* loaded by smart-asset */
var l$1e = require("./flags/fCHEzAnw.svg");

/* loaded by smart-asset */
var m$1e = require("./flags/zHdZFnjF.svg");

/* loaded by smart-asset */
var s$1e = require("./flags/dTjCCULt.svg");

var GB_ENG = {
  l: l$1e,
  m: m$1e,
  s: s$1e
};

/* loaded by smart-asset */
var l$1f = require("./flags/JJqnOjdw.svg");

/* loaded by smart-asset */
var m$1f = require("./flags/lQYRHmuN.svg");

/* loaded by smart-asset */
var s$1f = require("./flags/eGlgtbqO.svg");

var GB_SCT = {
  l: l$1f,
  m: m$1f,
  s: s$1f
};

/* loaded by smart-asset */
var l$1g = require("./flags/fLtozveg.svg");

/* loaded by smart-asset */
var m$1g = require("./flags/bqlmJWSy.svg");

/* loaded by smart-asset */
var s$1g = require("./flags/ffTgjuGo.svg");

var GB_UKM = {
  l: l$1g,
  m: m$1g,
  s: s$1g
};

/* loaded by smart-asset */
var l$1h = require("./flags/mIHijjkN.svg");

/* loaded by smart-asset */
var m$1h = require("./flags/bxlGfzyB.svg");

/* loaded by smart-asset */
var s$1h = require("./flags/epyWSkvw.svg");

var GB_WLS = {
  l: l$1h,
  m: m$1h,
  s: s$1h
};

/* loaded by smart-asset */
var l$1i = require("./flags/ejgqHqph.svg");

/* loaded by smart-asset */
var m$1i = require("./flags/bhQLFWMS.svg");

/* loaded by smart-asset */
var s$1i = require("./flags/cAWrARpa.svg");

var GD = {
  l: l$1i,
  m: m$1i,
  s: s$1i
};

/* loaded by smart-asset */
var l$1j = require("./flags/fOaiIfeO.svg");

/* loaded by smart-asset */
var m$1j = require("./flags/efItvvya.svg");

/* loaded by smart-asset */
var s$1j = require("./flags/bkuwqsbF.svg");

var GE = {
  l: l$1j,
  m: m$1j,
  s: s$1j
};

/* loaded by smart-asset */
var l$1k = require("./flags/fBgkhnLd.svg");

/* loaded by smart-asset */
var m$1k = require("./flags/cuznrAHG.svg");

/* loaded by smart-asset */
var s$1k = require("./flags/GKQJCVxF.svg");

var GF = {
  l: l$1k,
  m: m$1k,
  s: s$1k
};

/* loaded by smart-asset */
var l$1l = require("./flags/fowjhqsM.svg");

/* loaded by smart-asset */
var m$1l = require("./flags/bVUmxHfe.svg");

/* loaded by smart-asset */
var s$1l = require("./flags/PMvpbsuY.svg");

var GG = {
  l: l$1l,
  m: m$1l,
  s: s$1l
};

/* loaded by smart-asset */
var l$1m = require("./flags/cRPdbMPb.svg");

/* loaded by smart-asset */
var m$1m = require("./flags/hsiycOZq.svg");

/* loaded by smart-asset */
var s$1m = require("./flags/VvEVGGbv.svg");

var GH = {
  l: l$1m,
  m: m$1m,
  s: s$1m
};

/* loaded by smart-asset */
var l$1n = require("./flags/efuIyZdc.svg");

/* loaded by smart-asset */
var m$1n = require("./flags/dFCZqzLy.svg");

/* loaded by smart-asset */
var s$1n = require("./flags/fyIBodZQ.svg");

var GI = {
  l: l$1n,
  m: m$1n,
  s: s$1n
};

/* loaded by smart-asset */
var l$1o = require("./flags/drtVqIqg.svg");

/* loaded by smart-asset */
var m$1o = require("./flags/bPwZxmMV.svg");

/* loaded by smart-asset */
var s$1o = require("./flags/yrFhljPZ.svg");

var GL = {
  l: l$1o,
  m: m$1o,
  s: s$1o
};

/* loaded by smart-asset */
var l$1p = require("./flags/czePbczK.svg");

/* loaded by smart-asset */
var m$1p = require("./flags/bwHCwrog.svg");

/* loaded by smart-asset */
var s$1p = require("./flags/dKfvIbYn.svg");

var GM = {
  l: l$1p,
  m: m$1p,
  s: s$1p
};

/* loaded by smart-asset */
var l$1q = require("./flags/btWQRlIg.svg");

/* loaded by smart-asset */
var m$1q = require("./flags/cDufzeec.svg");

/* loaded by smart-asset */
var s$1q = require("./flags/cbkSrqCX.svg");

var GN = {
  l: l$1q,
  m: m$1q,
  s: s$1q
};

/* loaded by smart-asset */
var l$1r = require("./flags/fUzKAIet.svg");

/* loaded by smart-asset */
var m$1r = require("./flags/dzZyjsTG.svg");

/* loaded by smart-asset */
var s$1r = require("./flags/cvyBgnuf.svg");

var GP = {
  l: l$1r,
  m: m$1r,
  s: s$1r
};

/* loaded by smart-asset */
var l$1s = require("./flags/eBxZjDEr.svg");

/* loaded by smart-asset */
var m$1s = require("./flags/fnqxouuR.svg");

/* loaded by smart-asset */
var s$1s = require("./flags/JzVjcmWB.svg");

var GR = {
  l: l$1s,
  m: m$1s,
  s: s$1s
};

/* loaded by smart-asset */
var l$1t = require("./flags/kpLBeLqV.svg");

/* loaded by smart-asset */
var m$1t = require("./flags/cBRZqLBe.svg");

/* loaded by smart-asset */
var s$1t = require("./flags/epBTQVdQ.svg");

var GS = {
  l: l$1t,
  m: m$1t,
  s: s$1t
};

/* loaded by smart-asset */
var l$1u = require("./flags/ErQPdIIZ.svg");

/* loaded by smart-asset */
var m$1u = require("./flags/ecqoOqCM.svg");

/* loaded by smart-asset */
var s$1u = require("./flags/dnmhdzOn.svg");

var GT = {
  l: l$1u,
  m: m$1u,
  s: s$1u
};

/* loaded by smart-asset */
var l$1v = require("./flags/brPvxtVM.svg");

/* loaded by smart-asset */
var m$1v = require("./flags/ePltRdsw.svg");

/* loaded by smart-asset */
var s$1v = require("./flags/cUBoxCwn.svg");

var GU = {
  l: l$1v,
  m: m$1v,
  s: s$1v
};

/* loaded by smart-asset */
var l$1w = require("./flags/egQkKJkq.svg");

/* loaded by smart-asset */
var m$1w = require("./flags/bYIbINIe.svg");

/* loaded by smart-asset */
var s$1w = require("./flags/eWyOIKpU.svg");

var GW = {
  l: l$1w,
  m: m$1w,
  s: s$1w
};

/* loaded by smart-asset */
var l$1x = require("./flags/fQIRdxVO.svg");

/* loaded by smart-asset */
var m$1x = require("./flags/frFiJaCR.svg");

/* loaded by smart-asset */
var s$1x = require("./flags/XGTTYelL.svg");

var GY = {
  l: l$1x,
  m: m$1x,
  s: s$1x
};

/* loaded by smart-asset */
var l$1y = require("./flags/bwNAQFMz.svg");

/* loaded by smart-asset */
var m$1y = require("./flags/fLZWLBSl.svg");

/* loaded by smart-asset */
var s$1y = require("./flags/eQhncELz.svg");

var HK = {
  l: l$1y,
  m: m$1y,
  s: s$1y
};

/* loaded by smart-asset */
var l$1z = require("./flags/QESilQmY.svg");

/* loaded by smart-asset */
var m$1z = require("./flags/fnuSfuna.svg");

/* loaded by smart-asset */
var s$1z = require("./flags/fEhyrfau.svg");

var HM = {
  l: l$1z,
  m: m$1z,
  s: s$1z
};

/* loaded by smart-asset */
var l$1A = require("./flags/ciUAVPqs.svg");

/* loaded by smart-asset */
var m$1A = require("./flags/dhonTMKA.svg");

/* loaded by smart-asset */
var s$1A = require("./flags/ccRgwosI.svg");

var HN = {
  l: l$1A,
  m: m$1A,
  s: s$1A
};

/* loaded by smart-asset */
var l$1B = require("./flags/czXBJFUP.svg");

/* loaded by smart-asset */
var m$1B = require("./flags/efqTdZNs.svg");

/* loaded by smart-asset */
var s$1B = require("./flags/bHZUCYoj.svg");

var HR = {
  l: l$1B,
  m: m$1B,
  s: s$1B
};

/* loaded by smart-asset */
var l$1C = require("./flags/dvuRAYEc.svg");

/* loaded by smart-asset */
var m$1C = require("./flags/bLWcdFgf.svg");

/* loaded by smart-asset */
var s$1C = require("./flags/bsOxYImr.svg");

var HT = {
  l: l$1C,
  m: m$1C,
  s: s$1C
};

/* loaded by smart-asset */
var l$1D = require("./flags/eFEOoKKe.svg");

/* loaded by smart-asset */
var m$1D = require("./flags/fpfsmvjN.svg");

/* loaded by smart-asset */
var s$1D = require("./flags/eNmSaFCW.svg");

var HU = {
  l: l$1D,
  m: m$1D,
  s: s$1D
};

/* loaded by smart-asset */
var l$1E = require("./flags/bapGmqWs.svg");

/* loaded by smart-asset */
var m$1E = require("./flags/dVDDGtVu.svg");

/* loaded by smart-asset */
var s$1E = require("./flags/dtqubcrf.svg");

var ID = {
  l: l$1E,
  m: m$1E,
  s: s$1E
};

/* loaded by smart-asset */
var l$1F = require("./flags/fwByPuVs.svg");

/* loaded by smart-asset */
var m$1F = require("./flags/fvOkPKjr.svg");

/* loaded by smart-asset */
var s$1F = require("./flags/eilqHIPt.svg");

var IE = {
  l: l$1F,
  m: m$1F,
  s: s$1F
};

/* loaded by smart-asset */
var l$1G = require("./flags/oWyaXoRK.svg");

/* loaded by smart-asset */
var m$1G = require("./flags/evjCCtuF.svg");

/* loaded by smart-asset */
var s$1G = require("./flags/dcEqCEyA.svg");

var IL = {
  l: l$1G,
  m: m$1G,
  s: s$1G
};

/* loaded by smart-asset */
var l$1H = require("./flags/bUankIKa.svg");

/* loaded by smart-asset */
var m$1H = require("./flags/fJyAAFIg.svg");

/* loaded by smart-asset */
var s$1H = require("./flags/bbuhPFed.svg");

var IM = {
  l: l$1H,
  m: m$1H,
  s: s$1H
};

/* loaded by smart-asset */
var l$1I = require("./flags/GBHhoivu.svg");

/* loaded by smart-asset */
var m$1I = require("./flags/esabUDcZ.svg");

/* loaded by smart-asset */
var s$1I = require("./flags/xqLFMidW.svg");

var IN = {
  l: l$1I,
  m: m$1I,
  s: s$1I
};

/* loaded by smart-asset */
var l$1J = require("./flags/epTiERCr.svg");

/* loaded by smart-asset */
var m$1J = require("./flags/IuzOKDkb.svg");

/* loaded by smart-asset */
var s$1J = require("./flags/bQtYfnmn.svg");

var IO = {
  l: l$1J,
  m: m$1J,
  s: s$1J
};

/* loaded by smart-asset */
var l$1K = require("./flags/dDjjnfON.svg");

/* loaded by smart-asset */
var m$1K = require("./flags/eaMIqOUE.svg");

/* loaded by smart-asset */
var s$1K = require("./flags/dnnDSova.svg");

var IQ = {
  l: l$1K,
  m: m$1K,
  s: s$1K
};

/* loaded by smart-asset */
var l$1L = require("./flags/zSPuwGlA.svg");

/* loaded by smart-asset */
var m$1L = require("./flags/bLrGyKgb.svg");

/* loaded by smart-asset */
var s$1L = require("./flags/CJgGXyZG.svg");

var IR = {
  l: l$1L,
  m: m$1L,
  s: s$1L
};

/* loaded by smart-asset */
var l$1M = require("./flags/eouiMRWA.svg");

/* loaded by smart-asset */
var m$1M = require("./flags/dcZQWCwT.svg");

/* loaded by smart-asset */
var s$1M = require("./flags/dRBoYtOH.svg");

var IS = {
  l: l$1M,
  m: m$1M,
  s: s$1M
};

/* loaded by smart-asset */
var l$1N = require("./flags/dULwsgQa.svg");

/* loaded by smart-asset */
var m$1N = require("./flags/eGgojajm.svg");

/* loaded by smart-asset */
var s$1N = require("./flags/bUCQpuIe.svg");

var IT = {
  l: l$1N,
  m: m$1N,
  s: s$1N
};

/* loaded by smart-asset */
var l$1O = require("./flags/cGRKJytt.svg");

/* loaded by smart-asset */
var m$1O = require("./flags/eEJFgDfl.svg");

/* loaded by smart-asset */
var s$1O = require("./flags/bjjRTXrF.svg");

var JE = {
  l: l$1O,
  m: m$1O,
  s: s$1O
};

/* loaded by smart-asset */
var l$1P = require("./flags/ezsKOUKK.svg");

/* loaded by smart-asset */
var m$1P = require("./flags/CycLgBIF.svg");

/* loaded by smart-asset */
var s$1P = require("./flags/egHOxutZ.svg");

var JM = {
  l: l$1P,
  m: m$1P,
  s: s$1P
};

/* loaded by smart-asset */
var l$1Q = require("./flags/cNBjpjNw.svg");

/* loaded by smart-asset */
var m$1Q = require("./flags/fOCuIFRK.svg");

/* loaded by smart-asset */
var s$1Q = require("./flags/bNjCfPoG.svg");

var JO = {
  l: l$1Q,
  m: m$1Q,
  s: s$1Q
};

/* loaded by smart-asset */
var l$1R = require("./flags/eLzTgPpe.svg");

/* loaded by smart-asset */
var m$1R = require("./flags/fWBqSrTQ.svg");

/* loaded by smart-asset */
var s$1R = require("./flags/dgnpAWUN.svg");

var JP = {
  l: l$1R,
  m: m$1R,
  s: s$1R
};

/* loaded by smart-asset */
var l$1S = require("./flags/eaIizvha.svg");

/* loaded by smart-asset */
var m$1S = require("./flags/cnTVeFQR.svg");

/* loaded by smart-asset */
var s$1S = require("./flags/bblBCCeL.svg");

var KE = {
  l: l$1S,
  m: m$1S,
  s: s$1S
};

/* loaded by smart-asset */
var l$1T = require("./flags/bQtFghAR.svg");

/* loaded by smart-asset */
var m$1T = require("./flags/dlLynwxg.svg");

/* loaded by smart-asset */
var s$1T = require("./flags/fVACYOQV.svg");

var KG = {
  l: l$1T,
  m: m$1T,
  s: s$1T
};

/* loaded by smart-asset */
var l$1U = require("./flags/cDtYZKwe.svg");

/* loaded by smart-asset */
var m$1U = require("./flags/coCfcKws.svg");

/* loaded by smart-asset */
var s$1U = require("./flags/bFnqROap.svg");

var KH = {
  l: l$1U,
  m: m$1U,
  s: s$1U
};

/* loaded by smart-asset */
var l$1V = require("./flags/eErlIfZo.svg");

/* loaded by smart-asset */
var m$1V = require("./flags/fzeYPjlc.svg");

/* loaded by smart-asset */
var s$1V = require("./flags/ecQHKFwe.svg");

var KI = {
  l: l$1V,
  m: m$1V,
  s: s$1V
};

/* loaded by smart-asset */
var l$1W = require("./flags/bDtUxJWM.svg");

/* loaded by smart-asset */
var m$1W = require("./flags/fTxOgBly.svg");

/* loaded by smart-asset */
var s$1W = require("./flags/zoQDItbU.svg");

var KM = {
  l: l$1W,
  m: m$1W,
  s: s$1W
};

/* loaded by smart-asset */
var l$1X = require("./flags/btWenUaD.svg");

/* loaded by smart-asset */
var m$1X = require("./flags/WiccMjqC.svg");

/* loaded by smart-asset */
var s$1X = require("./flags/fNHAwywH.svg");

var KN = {
  l: l$1X,
  m: m$1X,
  s: s$1X
};

/* loaded by smart-asset */
var l$1Y = require("./flags/czxFknZO.svg");

/* loaded by smart-asset */
var m$1Y = require("./flags/cwpaSGGZ.svg");

/* loaded by smart-asset */
var s$1Y = require("./flags/dXmFJlkB.svg");

var KP = {
  l: l$1Y,
  m: m$1Y,
  s: s$1Y
};

/* loaded by smart-asset */
var l$1Z = require("./flags/cylIkSIc.svg");

/* loaded by smart-asset */
var m$1Z = require("./flags/cQkpVREC.svg");

/* loaded by smart-asset */
var s$1Z = require("./flags/cuctPwFP.svg");

var KR = {
  l: l$1Z,
  m: m$1Z,
  s: s$1Z
};

/* loaded by smart-asset */
var l$1_ = require("./flags/eJaoeBjn.svg");

/* loaded by smart-asset */
var m$1_ = require("./flags/ciWoZHdU.svg");

/* loaded by smart-asset */
var s$1_ = require("./flags/bMeAUNag.svg");

var KW = {
  l: l$1_,
  m: m$1_,
  s: s$1_
};

/* loaded by smart-asset */
var l$1$ = require("./flags/drAZjkyp.svg");

/* loaded by smart-asset */
var m$1$ = require("./flags/cKysQCLw.svg");

/* loaded by smart-asset */
var s$1$ = require("./flags/ejHkLpJY.svg");

var KY = {
  l: l$1$,
  m: m$1$,
  s: s$1$
};

/* loaded by smart-asset */
var l$20 = require("./flags/cYzgeKXc.svg");

/* loaded by smart-asset */
var m$20 = require("./flags/cOSyhVAm.svg");

/* loaded by smart-asset */
var s$20 = require("./flags/fURaIktb.svg");

var KZ = {
  l: l$20,
  m: m$20,
  s: s$20
};

/* loaded by smart-asset */
var l$21 = require("./flags/cXXlWXlZ.svg");

/* loaded by smart-asset */
var m$21 = require("./flags/exxyZQJg.svg");

/* loaded by smart-asset */
var s$21 = require("./flags/dNQPSKzf.svg");

var LA = {
  l: l$21,
  m: m$21,
  s: s$21
};

/* loaded by smart-asset */
var l$22 = require("./flags/dPwtiacS.svg");

/* loaded by smart-asset */
var m$22 = require("./flags/elksxehJ.svg");

/* loaded by smart-asset */
var s$22 = require("./flags/dtBGbqJD.svg");

var LB = {
  l: l$22,
  m: m$22,
  s: s$22
};

/* loaded by smart-asset */
var l$23 = require("./flags/eynhycnY.svg");

/* loaded by smart-asset */
var m$23 = require("./flags/cftNjTqP.svg");

/* loaded by smart-asset */
var s$23 = require("./flags/qmKBjBVT.svg");

var LC = {
  l: l$23,
  m: m$23,
  s: s$23
};

/* loaded by smart-asset */
var l$24 = require("./flags/fHJsHyhw.svg");

/* loaded by smart-asset */
var m$24 = require("./flags/ezEoljlW.svg");

/* loaded by smart-asset */
var s$24 = require("./flags/dlQfPeVg.svg");

var LI = {
  l: l$24,
  m: m$24,
  s: s$24
};

/* loaded by smart-asset */
var l$25 = require("./flags/GAoYNcYf.svg");

/* loaded by smart-asset */
var m$25 = require("./flags/fUXsVOAj.svg");

/* loaded by smart-asset */
var s$25 = require("./flags/lsAnIsyY.svg");

var LK = {
  l: l$25,
  m: m$25,
  s: s$25
};

/* loaded by smart-asset */
var l$26 = require("./flags/eOpBLZTv.svg");

/* loaded by smart-asset */
var m$26 = require("./flags/dkktNkEV.svg");

/* loaded by smart-asset */
var s$26 = require("./flags/fpfmigjI.svg");

var LR = {
  l: l$26,
  m: m$26,
  s: s$26
};

/* loaded by smart-asset */
var l$27 = require("./flags/dxwXESez.svg");

/* loaded by smart-asset */
var m$27 = require("./flags/fBenPuEE.svg");

/* loaded by smart-asset */
var s$27 = require("./flags/dDquOerh.svg");

var LS = {
  l: l$27,
  m: m$27,
  s: s$27
};

/* loaded by smart-asset */
var l$28 = require("./flags/btYMIAvV.svg");

/* loaded by smart-asset */
var m$28 = require("./flags/fZLweSIt.svg");

/* loaded by smart-asset */
var s$28 = require("./flags/fnMSsQvM.svg");

var LT = {
  l: l$28,
  m: m$28,
  s: s$28
};

/* loaded by smart-asset */
var l$29 = require("./flags/cPMTHazV.svg");

/* loaded by smart-asset */
var m$29 = require("./flags/xHOAKHdu.svg");

/* loaded by smart-asset */
var s$29 = require("./flags/fMHwkJPY.svg");

var LU = {
  l: l$29,
  m: m$29,
  s: s$29
};

/* loaded by smart-asset */
var l$2a = require("./flags/bLsevWma.svg");

/* loaded by smart-asset */
var m$2a = require("./flags/fCZdJiPc.svg");

/* loaded by smart-asset */
var s$2a = require("./flags/epRyrDmE.svg");

var LV = {
  l: l$2a,
  m: m$2a,
  s: s$2a
};

/* loaded by smart-asset */
var l$2b = require("./flags/eDxiPUum.svg");

/* loaded by smart-asset */
var m$2b = require("./flags/eXVznmGW.svg");

/* loaded by smart-asset */
var s$2b = require("./flags/cThyOIip.svg");

var LY = {
  l: l$2b,
  m: m$2b,
  s: s$2b
};

/* loaded by smart-asset */
var l$2c = require("./flags/dQuUvCiZ.svg");

/* loaded by smart-asset */
var m$2c = require("./flags/bwjvgcpJ.svg");

/* loaded by smart-asset */
var s$2c = require("./flags/epQvzLys.svg");

var MA = {
  l: l$2c,
  m: m$2c,
  s: s$2c
};

/* loaded by smart-asset */
var l$2d = require("./flags/cOhDFRcR.svg");

/* loaded by smart-asset */
var m$2d = require("./flags/daMnpPGs.svg");

/* loaded by smart-asset */
var s$2d = require("./flags/bCuaasxg.svg");

var MC = {
  l: l$2d,
  m: m$2d,
  s: s$2d
};

/* loaded by smart-asset */
var l$2e = require("./flags/cFhccvOG.svg");

/* loaded by smart-asset */
var m$2e = require("./flags/fxvYjikQ.svg");

/* loaded by smart-asset */
var s$2e = require("./flags/dGcJoZNx.svg");

var MD = {
  l: l$2e,
  m: m$2e,
  s: s$2e
};

/* loaded by smart-asset */
var l$2f = require("./flags/bxuDcxBP.svg");

/* loaded by smart-asset */
var m$2f = require("./flags/ejEyJVsg.svg");

/* loaded by smart-asset */
var s$2f = require("./flags/bvRDqrQe.svg");

var ME = {
  l: l$2f,
  m: m$2f,
  s: s$2f
};

/* loaded by smart-asset */
var l$2g = require("./flags/bKgRytqx.svg");

/* loaded by smart-asset */
var m$2g = require("./flags/dpeOuYfO.svg");

/* loaded by smart-asset */
var s$2g = require("./flags/ebUqBGSx.svg");

var MF = {
  l: l$2g,
  m: m$2g,
  s: s$2g
};

/* loaded by smart-asset */
var l$2h = require("./flags/fXGguGTM.svg");

/* loaded by smart-asset */
var m$2h = require("./flags/eLvJWAax.svg");

/* loaded by smart-asset */
var s$2h = require("./flags/ejdqpCys.svg");

var MG = {
  l: l$2h,
  m: m$2h,
  s: s$2h
};

/* loaded by smart-asset */
var l$2i = require("./flags/cwXwtRSy.svg");

/* loaded by smart-asset */
var m$2i = require("./flags/coTYHWcy.svg");

/* loaded by smart-asset */
var s$2i = require("./flags/eHyeHBId.svg");

var MH = {
  l: l$2i,
  m: m$2i,
  s: s$2i
};

/* loaded by smart-asset */
var l$2j = require("./flags/cuGyJXjx.svg");

/* loaded by smart-asset */
var m$2j = require("./flags/cGSOstDG.svg");

/* loaded by smart-asset */
var s$2j = require("./flags/bjkJSIvi.svg");

var MK = {
  l: l$2j,
  m: m$2j,
  s: s$2j
};

/* loaded by smart-asset */
var l$2k = require("./flags/eVbMtOdp.svg");

/* loaded by smart-asset */
var m$2k = require("./flags/daOsoAAQ.svg");

/* loaded by smart-asset */
var s$2k = require("./flags/doGXhYCv.svg");

var ML = {
  l: l$2k,
  m: m$2k,
  s: s$2k
};

/* loaded by smart-asset */
var l$2l = require("./flags/dHmODduP.svg");

/* loaded by smart-asset */
var m$2l = require("./flags/lpLZYfOl.svg");

/* loaded by smart-asset */
var s$2l = require("./flags/dIfFgYRv.svg");

var MM = {
  l: l$2l,
  m: m$2l,
  s: s$2l
};

/* loaded by smart-asset */
var l$2m = require("./flags/foUzthOy.svg");

/* loaded by smart-asset */
var m$2m = require("./flags/ckAZOGgG.svg");

/* loaded by smart-asset */
var s$2m = require("./flags/cWYcDwaL.svg");

var MN = {
  l: l$2m,
  m: m$2m,
  s: s$2m
};

/* loaded by smart-asset */
var l$2n = require("./flags/YGYXFVzU.svg");

/* loaded by smart-asset */
var m$2n = require("./flags/faIsRJtF.svg");

/* loaded by smart-asset */
var s$2n = require("./flags/dmcSUdwO.svg");

var MO = {
  l: l$2n,
  m: m$2n,
  s: s$2n
};

/* loaded by smart-asset */
var l$2o = require("./flags/UErhkSRO.svg");

/* loaded by smart-asset */
var m$2o = require("./flags/jMjbLTEJ.svg");

/* loaded by smart-asset */
var s$2o = require("./flags/dobDXcFJ.svg");

var MP = {
  l: l$2o,
  m: m$2o,
  s: s$2o
};

/* loaded by smart-asset */
var l$2p = require("./flags/cuTCwusQ.svg");

/* loaded by smart-asset */
var m$2p = require("./flags/cIOiNTUs.svg");

/* loaded by smart-asset */
var s$2p = require("./flags/cLRnaWqx.svg");

var MQ = {
  l: l$2p,
  m: m$2p,
  s: s$2p
};

/* loaded by smart-asset */
var l$2q = require("./flags/cLGuPVVB.svg");

/* loaded by smart-asset */
var m$2q = require("./flags/cBsclWTD.svg");

/* loaded by smart-asset */
var s$2q = require("./flags/cYxcKwjI.svg");

var MR = {
  l: l$2q,
  m: m$2q,
  s: s$2q
};

/* loaded by smart-asset */
var l$2r = require("./flags/boENGfnx.svg");

/* loaded by smart-asset */
var m$2r = require("./flags/dXnpVsLA.svg");

/* loaded by smart-asset */
var s$2r = require("./flags/bVRzgxYH.svg");

var MS = {
  l: l$2r,
  m: m$2r,
  s: s$2r
};

/* loaded by smart-asset */
var l$2s = require("./flags/AxbxTJKZ.svg");

/* loaded by smart-asset */
var m$2s = require("./flags/bKRDrvXp.svg");

/* loaded by smart-asset */
var s$2s = require("./flags/cWLtyqIq.svg");

var MT = {
  l: l$2s,
  m: m$2s,
  s: s$2s
};

/* loaded by smart-asset */
var l$2t = require("./flags/eaqLJQPJ.svg");

/* loaded by smart-asset */
var m$2t = require("./flags/bqKvQgOO.svg");

/* loaded by smart-asset */
var s$2t = require("./flags/fzfwZlhD.svg");

var MU = {
  l: l$2t,
  m: m$2t,
  s: s$2t
};

/* loaded by smart-asset */
var l$2u = require("./flags/bFeulFBZ.svg");

/* loaded by smart-asset */
var m$2u = require("./flags/cSYYXyvJ.svg");

/* loaded by smart-asset */
var s$2u = require("./flags/eRUgQCCT.svg");

var MV = {
  l: l$2u,
  m: m$2u,
  s: s$2u
};

/* loaded by smart-asset */
var l$2v = require("./flags/bwUVvWiB.svg");

/* loaded by smart-asset */
var m$2v = require("./flags/bTkDpjCG.svg");

/* loaded by smart-asset */
var s$2v = require("./flags/fkcqvJxj.svg");

var MW = {
  l: l$2v,
  m: m$2v,
  s: s$2v
};

/* loaded by smart-asset */
var l$2w = require("./flags/bbwpMaiS.svg");

/* loaded by smart-asset */
var m$2w = require("./flags/LybbqSri.svg");

/* loaded by smart-asset */
var s$2w = require("./flags/cdeKkbRr.svg");

var MX = {
  l: l$2w,
  m: m$2w,
  s: s$2w
};

/* loaded by smart-asset */
var l$2x = require("./flags/cWmdsyRZ.svg");

/* loaded by smart-asset */
var m$2x = require("./flags/bAeMGcku.svg");

/* loaded by smart-asset */
var s$2x = require("./flags/bJKLxCWe.svg");

var MY = {
  l: l$2x,
  m: m$2x,
  s: s$2x
};

/* loaded by smart-asset */
var l$2y = require("./flags/cnviWbME.svg");

/* loaded by smart-asset */
var m$2y = require("./flags/bYtDNTsE.svg");

/* loaded by smart-asset */
var s$2y = require("./flags/bOyjwQSv.svg");

var MZ = {
  l: l$2y,
  m: m$2y,
  s: s$2y
};

/* loaded by smart-asset */
var l$2z = require("./flags/cdClaSCV.svg");

/* loaded by smart-asset */
var m$2z = require("./flags/dpDnxfHl.svg");

/* loaded by smart-asset */
var s$2z = require("./flags/eQFeMGcv.svg");

var NA = {
  l: l$2z,
  m: m$2z,
  s: s$2z
};

/* loaded by smart-asset */
var l$2A = require("./flags/eADvlBYc.svg");

/* loaded by smart-asset */
var m$2A = require("./flags/vLCZMhxX.svg");

/* loaded by smart-asset */
var s$2A = require("./flags/bxoughBu.svg");

var NC = {
  l: l$2A,
  m: m$2A,
  s: s$2A
};

/* loaded by smart-asset */
var l$2B = require("./flags/eEqTOGtz.svg");

/* loaded by smart-asset */
var m$2B = require("./flags/fQOATQtl.svg");

/* loaded by smart-asset */
var s$2B = require("./flags/OfgrZZpq.svg");

var NE = {
  l: l$2B,
  m: m$2B,
  s: s$2B
};

/* loaded by smart-asset */
var l$2C = require("./flags/dqqpfnJx.svg");

/* loaded by smart-asset */
var m$2C = require("./flags/eZRsRxRk.svg");

/* loaded by smart-asset */
var s$2C = require("./flags/fjOrwtTO.svg");

var NF = {
  l: l$2C,
  m: m$2C,
  s: s$2C
};

/* loaded by smart-asset */
var l$2D = require("./flags/bWbXfCnR.svg");

/* loaded by smart-asset */
var m$2D = require("./flags/iJEsftiI.svg");

/* loaded by smart-asset */
var s$2D = require("./flags/eJxTrKrK.svg");

var NG = {
  l: l$2D,
  m: m$2D,
  s: s$2D
};

/* loaded by smart-asset */
var l$2E = require("./flags/bgnaAeSH.svg");

/* loaded by smart-asset */
var m$2E = require("./flags/dQKjMtgs.svg");

/* loaded by smart-asset */
var s$2E = require("./flags/diTsLuqN.svg");

var NI = {
  l: l$2E,
  m: m$2E,
  s: s$2E
};

/* loaded by smart-asset */
var l$2F = require("./flags/ficlUIEM.svg");

/* loaded by smart-asset */
var m$2F = require("./flags/fUjhsPbj.svg");

/* loaded by smart-asset */
var s$2F = require("./flags/EdxgOjig.svg");

var NL = {
  l: l$2F,
  m: m$2F,
  s: s$2F
};

/* loaded by smart-asset */
var l$2G = require("./flags/fLdbfBFC.svg");

/* loaded by smart-asset */
var m$2G = require("./flags/czyFJYpt.svg");

/* loaded by smart-asset */
var s$2G = require("./flags/WktpHLez.svg");

var NO = {
  l: l$2G,
  m: m$2G,
  s: s$2G
};

/* loaded by smart-asset */
var l$2H = require("./flags/cMQdsEVj.svg");

/* loaded by smart-asset */
var m$2H = require("./flags/dzclWbfr.svg");

/* loaded by smart-asset */
var s$2H = require("./flags/eUPVefed.svg");

var NP = {
  l: l$2H,
  m: m$2H,
  s: s$2H
};

/* loaded by smart-asset */
var l$2I = require("./flags/fGPRwGIz.svg");

/* loaded by smart-asset */
var m$2I = require("./flags/dLEMqUcr.svg");

/* loaded by smart-asset */
var s$2I = require("./flags/dLotOcWl.svg");

var NR = {
  l: l$2I,
  m: m$2I,
  s: s$2I
};

/* loaded by smart-asset */
var l$2J = require("./flags/bXNOjtLw.svg");

/* loaded by smart-asset */
var m$2J = require("./flags/ekmntgNC.svg");

/* loaded by smart-asset */
var s$2J = require("./flags/cKCNuglX.svg");

var NU = {
  l: l$2J,
  m: m$2J,
  s: s$2J
};

/* loaded by smart-asset */
var l$2K = require("./flags/fMhkRoMc.svg");

/* loaded by smart-asset */
var m$2K = require("./flags/fJNoLegk.svg");

/* loaded by smart-asset */
var s$2K = require("./flags/cQRfgJMY.svg");

var NZ = {
  l: l$2K,
  m: m$2K,
  s: s$2K
};

/* loaded by smart-asset */
var l$2L = require("./flags/euxrXsoT.svg");

/* loaded by smart-asset */
var m$2L = require("./flags/fwscSQIC.svg");

/* loaded by smart-asset */
var s$2L = require("./flags/eNtsGJgh.svg");

var OM = {
  l: l$2L,
  m: m$2L,
  s: s$2L
};

/* loaded by smart-asset */
var l$2M = require("./flags/bvqagySG.svg");

/* loaded by smart-asset */
var m$2M = require("./flags/dNnnsdhm.svg");

/* loaded by smart-asset */
var s$2M = require("./flags/yUKhBaZW.svg");

var PA = {
  l: l$2M,
  m: m$2M,
  s: s$2M
};

/* loaded by smart-asset */
var l$2N = require("./flags/eGqtwgNi.svg");

/* loaded by smart-asset */
var m$2N = require("./flags/GnuyhaIN.svg");

/* loaded by smart-asset */
var s$2N = require("./flags/fddNcSTp.svg");

var PE = {
  l: l$2N,
  m: m$2N,
  s: s$2N
};

/* loaded by smart-asset */
var l$2O = require("./flags/kyGJHDoF.svg");

/* loaded by smart-asset */
var m$2O = require("./flags/eQThENTA.svg");

/* loaded by smart-asset */
var s$2O = require("./flags/bMhOZnCX.svg");

var PF = {
  l: l$2O,
  m: m$2O,
  s: s$2O
};

/* loaded by smart-asset */
var l$2P = require("./flags/jHyUCpgt.svg");

/* loaded by smart-asset */
var m$2P = require("./flags/cIaebika.svg");

/* loaded by smart-asset */
var s$2P = require("./flags/fYQdhdHT.svg");

var PG = {
  l: l$2P,
  m: m$2P,
  s: s$2P
};

/* loaded by smart-asset */
var l$2Q = require("./flags/bDCYxCnJ.svg");

/* loaded by smart-asset */
var m$2Q = require("./flags/eWPryseO.svg");

/* loaded by smart-asset */
var s$2Q = require("./flags/fRujxQrk.svg");

var PH = {
  l: l$2Q,
  m: m$2Q,
  s: s$2Q
};

/* loaded by smart-asset */
var l$2R = require("./flags/RjgKAeJg.svg");

/* loaded by smart-asset */
var m$2R = require("./flags/bRwQEuJm.svg");

/* loaded by smart-asset */
var s$2R = require("./flags/fpHvEUkx.svg");

var PK = {
  l: l$2R,
  m: m$2R,
  s: s$2R
};

/* loaded by smart-asset */
var l$2S = require("./flags/dkgBmgpL.svg");

/* loaded by smart-asset */
var m$2S = require("./flags/ezzyHlZT.svg");

/* loaded by smart-asset */
var s$2S = require("./flags/cpELWyMH.svg");

var PL = {
  l: l$2S,
  m: m$2S,
  s: s$2S
};

/* loaded by smart-asset */
var l$2T = require("./flags/OIDYGKfk.svg");

/* loaded by smart-asset */
var m$2T = require("./flags/sVLcgqgf.svg");

/* loaded by smart-asset */
var s$2T = require("./flags/fATjIspn.svg");

var PM = {
  l: l$2T,
  m: m$2T,
  s: s$2T
};

/* loaded by smart-asset */
var l$2U = require("./flags/cfJSaYiI.svg");

/* loaded by smart-asset */
var m$2U = require("./flags/bEbGYLGm.svg");

/* loaded by smart-asset */
var s$2U = require("./flags/fNkCtamb.svg");

var PN = {
  l: l$2U,
  m: m$2U,
  s: s$2U
};

/* loaded by smart-asset */
var l$2V = require("./flags/fgNRtwAn.svg");

/* loaded by smart-asset */
var m$2V = require("./flags/cxIZgiFO.svg");

/* loaded by smart-asset */
var s$2V = require("./flags/dnGyszlH.svg");

var PR = {
  l: l$2V,
  m: m$2V,
  s: s$2V
};

/* loaded by smart-asset */
var l$2W = require("./flags/bQCogDur.svg");

/* loaded by smart-asset */
var m$2W = require("./flags/eiyMvgGq.svg");

/* loaded by smart-asset */
var s$2W = require("./flags/fBxUsMNG.svg");

var PS = {
  l: l$2W,
  m: m$2W,
  s: s$2W
};

/* loaded by smart-asset */
var l$2X = require("./flags/bpjFdxhW.svg");

/* loaded by smart-asset */
var m$2X = require("./flags/dTuMbCpf.svg");

/* loaded by smart-asset */
var s$2X = require("./flags/dhLDogka.svg");

var PT = {
  l: l$2X,
  m: m$2X,
  s: s$2X
};

/* loaded by smart-asset */
var l$2Y = require("./flags/fNvlSwWO.svg");

/* loaded by smart-asset */
var m$2Y = require("./flags/mmMstzLu.svg");

/* loaded by smart-asset */
var s$2Y = require("./flags/GqJEYOnk.svg");

var PW = {
  l: l$2Y,
  m: m$2Y,
  s: s$2Y
};

/* loaded by smart-asset */
var l$2Z = require("./flags/doCBgGIN.svg");

/* loaded by smart-asset */
var m$2Z = require("./flags/fNaofmQU.svg");

/* loaded by smart-asset */
var s$2Z = require("./flags/toWMigen.svg");

var PY = {
  l: l$2Z,
  m: m$2Z,
  s: s$2Z
};

/* loaded by smart-asset */
var l$2_ = require("./flags/cPIAgfSq.svg");

/* loaded by smart-asset */
var m$2_ = require("./flags/cJEefRZf.svg");

/* loaded by smart-asset */
var s$2_ = require("./flags/fiwxAVYx.svg");

var QA = {
  l: l$2_,
  m: m$2_,
  s: s$2_
};

/* loaded by smart-asset */
var l$2$ = require("./flags/elZOcbRr.svg");

/* loaded by smart-asset */
var m$2$ = require("./flags/cjJkPdiQ.svg");

/* loaded by smart-asset */
var s$2$ = require("./flags/bBoRihGs.svg");

var RAINBOW = {
  l: l$2$,
  m: m$2$,
  s: s$2$
};

/* loaded by smart-asset */
var l$30 = require("./flags/cayaDuDi.svg");

/* loaded by smart-asset */
var m$30 = require("./flags/drbfQBcD.svg");

/* loaded by smart-asset */
var s$30 = require("./flags/VDRPPKqw.svg");

var RE = {
  l: l$30,
  m: m$30,
  s: s$30
};

/* loaded by smart-asset */
var l$31 = require("./flags/edUbsDXD.svg");

/* loaded by smart-asset */
var m$31 = require("./flags/fKXLvAnl.svg");

/* loaded by smart-asset */
var s$31 = require("./flags/fELJdhVz.svg");

var RO = {
  l: l$31,
  m: m$31,
  s: s$31
};

/* loaded by smart-asset */
var l$32 = require("./flags/bUktDHxc.svg");

/* loaded by smart-asset */
var m$32 = require("./flags/dRQqVfSb.svg");

/* loaded by smart-asset */
var s$32 = require("./flags/cNkpyROx.svg");

var RS = {
  l: l$32,
  m: m$32,
  s: s$32
};

/* loaded by smart-asset */
var l$33 = require("./flags/fSuPYhZV.svg");

/* loaded by smart-asset */
var m$33 = require("./flags/bkNKyiHT.svg");

/* loaded by smart-asset */
var s$33 = require("./flags/ccqYqFOb.svg");

var RU = {
  l: l$33,
  m: m$33,
  s: s$33
};

/* loaded by smart-asset */
var l$34 = require("./flags/bFseTouh.svg");

/* loaded by smart-asset */
var m$34 = require("./flags/eFLGgvzt.svg");

/* loaded by smart-asset */
var s$34 = require("./flags/bDZykjyq.svg");

var RW = {
  l: l$34,
  m: m$34,
  s: s$34
};

/* loaded by smart-asset */
var l$35 = require("./flags/cBytgGOF.svg");

/* loaded by smart-asset */
var m$35 = require("./flags/eanyHGeM.svg");

/* loaded by smart-asset */
var s$35 = require("./flags/fgaBIvNW.svg");

var SA = {
  l: l$35,
  m: m$35,
  s: s$35
};

/* loaded by smart-asset */
var l$36 = require("./flags/bKOjKzdi.svg");

/* loaded by smart-asset */
var m$36 = require("./flags/cgiCQgXG.svg");

/* loaded by smart-asset */
var s$36 = require("./flags/cPQXrbjy.svg");

var SB = {
  l: l$36,
  m: m$36,
  s: s$36
};

/* loaded by smart-asset */
var l$37 = require("./flags/elunVmRf.svg");

/* loaded by smart-asset */
var m$37 = require("./flags/bhwyWFLC.svg");

/* loaded by smart-asset */
var s$37 = require("./flags/dZYjQbPV.svg");

var SC = {
  l: l$37,
  m: m$37,
  s: s$37
};

/* loaded by smart-asset */
var l$38 = require("./flags/cxplxVtO.svg");

/* loaded by smart-asset */
var m$38 = require("./flags/fVEUVrBP.svg");

/* loaded by smart-asset */
var s$38 = require("./flags/eOBJRpVS.svg");

var SD = {
  l: l$38,
  m: m$38,
  s: s$38
};

/* loaded by smart-asset */
var l$39 = require("./flags/dBYYRPWJ.svg");

/* loaded by smart-asset */
var m$39 = require("./flags/cQaVwwJJ.svg");

/* loaded by smart-asset */
var s$39 = require("./flags/KTPebMLv.svg");

var SE = {
  l: l$39,
  m: m$39,
  s: s$39
};

/* loaded by smart-asset */
var l$3a = require("./flags/bsqcQtGR.svg");

/* loaded by smart-asset */
var m$3a = require("./flags/hZaPSuQY.svg");

/* loaded by smart-asset */
var s$3a = require("./flags/egbKnlLZ.svg");

var SG = {
  l: l$3a,
  m: m$3a,
  s: s$3a
};

/* loaded by smart-asset */
var l$3b = require("./flags/dhpivTOj.svg");

/* loaded by smart-asset */
var m$3b = require("./flags/bMznCzvy.svg");

/* loaded by smart-asset */
var s$3b = require("./flags/LEAtSryZ.svg");

var SH = {
  l: l$3b,
  m: m$3b,
  s: s$3b
};

/* loaded by smart-asset */
var l$3c = require("./flags/exAJslkh.svg");

/* loaded by smart-asset */
var m$3c = require("./flags/hyUmTDHE.svg");

/* loaded by smart-asset */
var s$3c = require("./flags/fOtDNdgh.svg");

var SI = {
  l: l$3c,
  m: m$3c,
  s: s$3c
};

/* loaded by smart-asset */
var l$3d = require("./flags/fyXJpCXV.svg");

/* loaded by smart-asset */
var m$3d = require("./flags/cjGJyCpp.svg");

/* loaded by smart-asset */
var s$3d = require("./flags/fkIHbPJb.svg");

var SJ = {
  l: l$3d,
  m: m$3d,
  s: s$3d
};

/* loaded by smart-asset */
var l$3e = require("./flags/erzegRst.svg");

/* loaded by smart-asset */
var m$3e = require("./flags/fSQNeQas.svg");

/* loaded by smart-asset */
var s$3e = require("./flags/IrhAFOPD.svg");

var SK = {
  l: l$3e,
  m: m$3e,
  s: s$3e
};

/* loaded by smart-asset */
var l$3f = require("./flags/bCXGfUdG.svg");

/* loaded by smart-asset */
var m$3f = require("./flags/gSEuuKtt.svg");

/* loaded by smart-asset */
var s$3f = require("./flags/cFywDkuq.svg");

var SL = {
  l: l$3f,
  m: m$3f,
  s: s$3f
};

/* loaded by smart-asset */
var l$3g = require("./flags/cZqIDwsy.svg");

/* loaded by smart-asset */
var m$3g = require("./flags/fFiLpVda.svg");

/* loaded by smart-asset */
var s$3g = require("./flags/VbnGXhGj.svg");

var SM = {
  l: l$3g,
  m: m$3g,
  s: s$3g
};

/* loaded by smart-asset */
var l$3h = require("./flags/ekaNEnnU.svg");

/* loaded by smart-asset */
var m$3h = require("./flags/JgdFgWIT.svg");

/* loaded by smart-asset */
var s$3h = require("./flags/fJmKRdUb.svg");

var SN = {
  l: l$3h,
  m: m$3h,
  s: s$3h
};

/* loaded by smart-asset */
var l$3i = require("./flags/dNCLODCS.svg");

/* loaded by smart-asset */
var m$3i = require("./flags/iXXYIjkd.svg");

/* loaded by smart-asset */
var s$3i = require("./flags/cRhzfCzb.svg");

var SO = {
  l: l$3i,
  m: m$3i,
  s: s$3i
};

/* loaded by smart-asset */
var l$3j = require("./flags/pdaYExKU.svg");

/* loaded by smart-asset */
var m$3j = require("./flags/UzzfClsm.svg");

/* loaded by smart-asset */
var s$3j = require("./flags/cdBmDqDS.svg");

var SR = {
  l: l$3j,
  m: m$3j,
  s: s$3j
};

/* loaded by smart-asset */
var l$3k = require("./flags/feSwbNDn.svg");

/* loaded by smart-asset */
var m$3k = require("./flags/ejFyUiWB.svg");

/* loaded by smart-asset */
var s$3k = require("./flags/cCViNLhO.svg");

var SS = {
  l: l$3k,
  m: m$3k,
  s: s$3k
};

/* loaded by smart-asset */
var l$3l = require("./flags/cJYZeFey.svg");

/* loaded by smart-asset */
var m$3l = require("./flags/dYMGAJAt.svg");

/* loaded by smart-asset */
var s$3l = require("./flags/eqSAipqz.svg");

var ST = {
  l: l$3l,
  m: m$3l,
  s: s$3l
};

/* loaded by smart-asset */
var l$3m = require("./flags/FpHLtQaX.svg");

/* loaded by smart-asset */
var m$3m = require("./flags/eOabIScz.svg");

/* loaded by smart-asset */
var s$3m = require("./flags/WaxgeMMK.svg");

var SV = {
  l: l$3m,
  m: m$3m,
  s: s$3m
};

/* loaded by smart-asset */
var l$3n = require("./flags/mbhYdpjT.svg");

/* loaded by smart-asset */
var m$3n = require("./flags/eVJzhoiZ.svg");

/* loaded by smart-asset */
var s$3n = require("./flags/ftPGXiEg.svg");

var SX = {
  l: l$3n,
  m: m$3n,
  s: s$3n
};

/* loaded by smart-asset */
var l$3o = require("./flags/ccAOSqjF.svg");

/* loaded by smart-asset */
var m$3o = require("./flags/dQVviJZE.svg");

/* loaded by smart-asset */
var s$3o = require("./flags/DFxodoKm.svg");

var SY = {
  l: l$3o,
  m: m$3o,
  s: s$3o
};

/* loaded by smart-asset */
var l$3p = require("./flags/KsGtFEIl.svg");

/* loaded by smart-asset */
var m$3p = require("./flags/boJsZSzy.svg");

/* loaded by smart-asset */
var s$3p = require("./flags/fDZcRjeL.svg");

var SZ = {
  l: l$3p,
  m: m$3p,
  s: s$3p
};

/* loaded by smart-asset */
var l$3q = require("./flags/bXLZeITa.svg");

/* loaded by smart-asset */
var m$3q = require("./flags/eeVhQmSE.svg");

/* loaded by smart-asset */
var s$3q = require("./flags/fNuhVGUc.svg");

var TC = {
  l: l$3q,
  m: m$3q,
  s: s$3q
};

/* loaded by smart-asset */
var l$3r = require("./flags/cNcUOADA.svg");

/* loaded by smart-asset */
var m$3r = require("./flags/eJYkHRfN.svg");

/* loaded by smart-asset */
var s$3r = require("./flags/crDUJYEd.svg");

var TD = {
  l: l$3r,
  m: m$3r,
  s: s$3r
};

/* loaded by smart-asset */
var l$3s = require("./flags/bIyIUlwg.svg");

/* loaded by smart-asset */
var m$3s = require("./flags/ZpZIGPyt.svg");

/* loaded by smart-asset */
var s$3s = require("./flags/dqosrqFQ.svg");

var TF = {
  l: l$3s,
  m: m$3s,
  s: s$3s
};

/* loaded by smart-asset */
var l$3t = require("./flags/dRFzUpIj.svg");

/* loaded by smart-asset */
var m$3t = require("./flags/fIAauuAt.svg");

/* loaded by smart-asset */
var s$3t = require("./flags/JdvhiRJH.svg");

var TG = {
  l: l$3t,
  m: m$3t,
  s: s$3t
};

/* loaded by smart-asset */
var l$3u = require("./flags/djoqMtCl.svg");

/* loaded by smart-asset */
var m$3u = require("./flags/etaIeJKH.svg");

/* loaded by smart-asset */
var s$3u = require("./flags/etvOtcbO.svg");

var TH = {
  l: l$3u,
  m: m$3u,
  s: s$3u
};

/* loaded by smart-asset */
var l$3v = require("./flags/cwFHcNZo.svg");

/* loaded by smart-asset */
var m$3v = require("./flags/TRTHdsaO.svg");

/* loaded by smart-asset */
var s$3v = require("./flags/dqUnaPdt.svg");

var TJ = {
  l: l$3v,
  m: m$3v,
  s: s$3v
};

/* loaded by smart-asset */
var l$3w = require("./flags/eUppsvfc.svg");

/* loaded by smart-asset */
var m$3w = require("./flags/cvVezKeD.svg");

/* loaded by smart-asset */
var s$3w = require("./flags/DEDPBXOR.svg");

var TK = {
  l: l$3w,
  m: m$3w,
  s: s$3w
};

/* loaded by smart-asset */
var l$3x = require("./flags/cviovivv.svg");

/* loaded by smart-asset */
var m$3x = require("./flags/dwRUIVUI.svg");

/* loaded by smart-asset */
var s$3x = require("./flags/fDqekWyP.svg");

var TL = {
  l: l$3x,
  m: m$3x,
  s: s$3x
};

/* loaded by smart-asset */
var l$3y = require("./flags/TitakaaT.svg");

/* loaded by smart-asset */
var m$3y = require("./flags/uoZYLUZg.svg");

/* loaded by smart-asset */
var s$3y = require("./flags/cdgIPUnn.svg");

var TM = {
  l: l$3y,
  m: m$3y,
  s: s$3y
};

/* loaded by smart-asset */
var l$3z = require("./flags/cxJtxMiC.svg");

/* loaded by smart-asset */
var m$3z = require("./flags/eVbcTmXb.svg");

/* loaded by smart-asset */
var s$3z = require("./flags/XtxEzYrT.svg");

var TN = {
  l: l$3z,
  m: m$3z,
  s: s$3z
};

/* loaded by smart-asset */
var l$3A = require("./flags/diZeIfGB.svg");

/* loaded by smart-asset */
var m$3A = require("./flags/fFORUOym.svg");

/* loaded by smart-asset */
var s$3A = require("./flags/vvsKZjrF.svg");

var TO = {
  l: l$3A,
  m: m$3A,
  s: s$3A
};

/* loaded by smart-asset */
var l$3B = require("./flags/bPzOqmOF.svg");

/* loaded by smart-asset */
var m$3B = require("./flags/cbvFviZg.svg");

/* loaded by smart-asset */
var s$3B = require("./flags/bCUtdPDp.svg");

var TR = {
  l: l$3B,
  m: m$3B,
  s: s$3B
};

/* loaded by smart-asset */
var l$3C = require("./flags/eHRkSbhv.svg");

/* loaded by smart-asset */
var m$3C = require("./flags/bXyjDRVb.svg");

/* loaded by smart-asset */
var s$3C = require("./flags/eOIbHagK.svg");

var TT = {
  l: l$3C,
  m: m$3C,
  s: s$3C
};

/* loaded by smart-asset */
var l$3D = require("./flags/bCkBZsRU.svg");

/* loaded by smart-asset */
var m$3D = require("./flags/bpcDqQvG.svg");

/* loaded by smart-asset */
var s$3D = require("./flags/baVBgqTJ.svg");

var TV = {
  l: l$3D,
  m: m$3D,
  s: s$3D
};

/* loaded by smart-asset */
var l$3E = require("./flags/dAxwYfpX.svg");

/* loaded by smart-asset */
var m$3E = require("./flags/cidRkZGv.svg");

/* loaded by smart-asset */
var s$3E = require("./flags/evtLsMtx.svg");

var TW = {
  l: l$3E,
  m: m$3E,
  s: s$3E
};

/* loaded by smart-asset */
var l$3F = require("./flags/dyHTuOEL.svg");

/* loaded by smart-asset */
var m$3F = require("./flags/bIRmbuQP.svg");

/* loaded by smart-asset */
var s$3F = require("./flags/cIlAaUcl.svg");

var TZ = {
  l: l$3F,
  m: m$3F,
  s: s$3F
};

/* loaded by smart-asset */
var l$3G = require("./flags/cVuRlxET.svg");

/* loaded by smart-asset */
var m$3G = require("./flags/dJMMjiMO.svg");

/* loaded by smart-asset */
var s$3G = require("./flags/eXbdcMNO.svg");

var UA = {
  l: l$3G,
  m: m$3G,
  s: s$3G
};

/* loaded by smart-asset */
var l$3H = require("./flags/fzYTETNe.svg");

/* loaded by smart-asset */
var m$3H = require("./flags/fVSAatGl.svg");

/* loaded by smart-asset */
var s$3H = require("./flags/dirnlogr.svg");

var UG = {
  l: l$3H,
  m: m$3H,
  s: s$3H
};

/* loaded by smart-asset */
var l$3I = require("./flags/cAQBRvtP.svg");

/* loaded by smart-asset */
var m$3I = require("./flags/cOeAzoEK.svg");

/* loaded by smart-asset */
var s$3I = require("./flags/eqAOmZPl.svg");

var UM = {
  l: l$3I,
  m: m$3I,
  s: s$3I
};

/* loaded by smart-asset */
var l$3J = require("./flags/ccRLwUGf.svg");

/* loaded by smart-asset */
var m$3J = require("./flags/cjUSUlMA.svg");

/* loaded by smart-asset */
var s$3J = require("./flags/dreTHNCv.svg");

var UOSAN = {
  l: l$3J,
  m: m$3J,
  s: s$3J
};

/* loaded by smart-asset */
var l$3K = require("./flags/fuLgUhkS.svg");

/* loaded by smart-asset */
var m$3K = require("./flags/dYrIUTII.svg");

/* loaded by smart-asset */
var s$3K = require("./flags/MJRgvaLz.svg");

var US = {
  l: l$3K,
  m: m$3K,
  s: s$3K
};

/* loaded by smart-asset */
var l$3L = require("./flags/cLUpEUKy.svg");

/* loaded by smart-asset */
var m$3L = require("./flags/cvHZkamb.svg");

/* loaded by smart-asset */
var s$3L = require("./flags/euCmZvRA.svg");

var UY = {
  l: l$3L,
  m: m$3L,
  s: s$3L
};

/* loaded by smart-asset */
var l$3M = require("./flags/fZlRfQge.svg");

/* loaded by smart-asset */
var m$3M = require("./flags/cuxxYxXN.svg");

/* loaded by smart-asset */
var s$3M = require("./flags/cYhgBUkx.svg");

var UZ = {
  l: l$3M,
  m: m$3M,
  s: s$3M
};

/* loaded by smart-asset */
var l$3N = require("./flags/fjlmATuX.svg");

/* loaded by smart-asset */
var m$3N = require("./flags/DAvvhGLo.svg");

/* loaded by smart-asset */
var s$3N = require("./flags/eWglgToP.svg");

var VA = {
  l: l$3N,
  m: m$3N,
  s: s$3N
};

/* loaded by smart-asset */
var l$3O = require("./flags/bqTtHUdi.svg");

/* loaded by smart-asset */
var m$3O = require("./flags/eHQAcgVh.svg");

/* loaded by smart-asset */
var s$3O = require("./flags/LNnCsBck.svg");

var VC = {
  l: l$3O,
  m: m$3O,
  s: s$3O
};

/* loaded by smart-asset */
var l$3P = require("./flags/bbvrUahl.svg");

/* loaded by smart-asset */
var m$3P = require("./flags/dQuQEmyv.svg");

/* loaded by smart-asset */
var s$3P = require("./flags/cMFMYVQG.svg");

var VE = {
  l: l$3P,
  m: m$3P,
  s: s$3P
};

/* loaded by smart-asset */
var l$3Q = require("./flags/cxgwMhaX.svg");

/* loaded by smart-asset */
var m$3Q = require("./flags/eRxkexfn.svg");

/* loaded by smart-asset */
var s$3Q = require("./flags/bIEpluxg.svg");

var VG = {
  l: l$3Q,
  m: m$3Q,
  s: s$3Q
};

/* loaded by smart-asset */
var l$3R = require("./flags/eYSbQtdL.svg");

/* loaded by smart-asset */
var m$3R = require("./flags/fYvzyOzi.svg");

/* loaded by smart-asset */
var s$3R = require("./flags/eqdRZWRN.svg");

var VI = {
  l: l$3R,
  m: m$3R,
  s: s$3R
};

/* loaded by smart-asset */
var l$3S = require("./flags/fllOvrsU.svg");

/* loaded by smart-asset */
var m$3S = require("./flags/cMEhapLn.svg");

/* loaded by smart-asset */
var s$3S = require("./flags/ekhlrpZM.svg");

var VN = {
  l: l$3S,
  m: m$3S,
  s: s$3S
};

/* loaded by smart-asset */
var l$3T = require("./flags/dpxlMuhH.svg");

/* loaded by smart-asset */
var m$3T = require("./flags/fdQNJYQU.svg");

/* loaded by smart-asset */
var s$3T = require("./flags/fOprfTtf.svg");

var VU = {
  l: l$3T,
  m: m$3T,
  s: s$3T
};

/* loaded by smart-asset */
var l$3U = require("./flags/bytvPwjy.svg");

/* loaded by smart-asset */
var m$3U = require("./flags/ehvacodO.svg");

/* loaded by smart-asset */
var s$3U = require("./flags/xIwJiost.svg");

var WF = {
  l: l$3U,
  m: m$3U,
  s: s$3U
};

/* loaded by smart-asset */
var l$3V = require("./flags/dkyIfUHa.svg");

/* loaded by smart-asset */
var m$3V = require("./flags/cTQOQMvv.svg");

/* loaded by smart-asset */
var s$3V = require("./flags/fOWFqhXh.svg");

var WS = {
  l: l$3V,
  m: m$3V,
  s: s$3V
};

/* loaded by smart-asset */
var l$3W = require("./flags/cbPBnKGe.svg");

/* loaded by smart-asset */
var m$3W = require("./flags/bIGlbeeW.svg");

/* loaded by smart-asset */
var s$3W = require("./flags/EofxrtoF.svg");

var YE = {
  l: l$3W,
  m: m$3W,
  s: s$3W
};

/* loaded by smart-asset */
var l$3X = require("./flags/cUYvAYac.svg");

/* loaded by smart-asset */
var m$3X = require("./flags/exGAQMQb.svg");

/* loaded by smart-asset */
var s$3X = require("./flags/cyLUOTzq.svg");

var ZA = {
  l: l$3X,
  m: m$3X,
  s: s$3X
};

/* loaded by smart-asset */
var l$3Y = require("./flags/ddaBhxWT.svg");

/* loaded by smart-asset */
var m$3Y = require("./flags/eXJkoplj.svg");

/* loaded by smart-asset */
var s$3Y = require("./flags/fXoWxrBO.svg");

var ZM = {
  l: l$3Y,
  m: m$3Y,
  s: s$3Y
};

/* loaded by smart-asset */
var l$3Z = require("./flags/dNoqBJDo.svg");

/* loaded by smart-asset */
var m$3Z = require("./flags/bEhEurri.svg");

/* loaded by smart-asset */
var s$3Z = require("./flags/fTThvXkU.svg");

var ZW = {
  l: l$3Z,
  m: m$3Z,
  s: s$3Z
};

var flags = {
  AD: AD,
  AE: AE,
  AFRUN: AFRUN,
  AG: AG,
  AI: AI,
  AL: AL,
  AM: AM,
  AMS: AMS,
  AO: AO,
  AQ: AQ,
  AR: AR,
  AS: AS,
  AT: AT,
  AU: AU,
  AW: AW,
  AX: AX,
  AZ: AZ,
  BA: BA,
  BB: BB,
  BD: BD,
  BE: BE,
  BF: BF,
  BG: BG,
  BH: BH,
  BI: BI,
  BJ: BJ,
  BL: BL,
  BM: BM,
  BN: BN,
  BO: BO,
  BQ_BO: BQ_BO,
  BQ_SA: BQ_SA,
  BQ_SE: BQ_SE,
  BR: BR,
  BS: BS,
  BT: BT,
  BW: BW,
  BY: BY,
  BZ: BZ,
  CA: CA,
  CC: CC,
  CD: CD,
  CF: CF,
  CG: CG,
  CH: CH,
  CI: CI,
  CK: CK,
  CL: CL,
  CM: CM,
  CN: CN,
  CO: CO,
  CR: CR,
  CU: CU,
  CV: CV,
  CW: CW,
  CX: CX,
  CY: CY,
  CZ: CZ,
  DE: DE,
  DJ: DJ,
  DK: DK,
  DM: DM,
  DO: DO,
  EC: EC,
  EE: EE,
  EG: EG,
  EH: EH,
  ER: ER,
  ES: ES,
  ET: ET,
  EU: EU,
  FI: FI,
  FJ: FJ,
  FK: FK,
  FM: FM,
  FO: FO,
  FR: FR,
  GA: GA,

  /*GB,*/
  GB_ENG: GB_ENG,
  GB_SCT: GB_SCT,
  GB_UKM: GB_UKM,
  GB_WLS: GB_WLS,
  GD: GD,
  GE: GE,
  GF: GF,
  GG: GG,
  GH: GH,
  GI: GI,
  GL: GL,
  GM: GM,
  GN: GN,
  GP: GP,

  /*GQ,*/
  GR: GR,
  GS: GS,
  GT: GT,
  GU: GU,
  GW: GW,
  GY: GY,
  HK: HK,
  HM: HM,
  HN: HN,
  HR: HR,
  HT: HT,
  HU: HU,
  ID: ID,
  IE: IE,
  IL: IL,
  IM: IM,
  IN: IN,
  IO: IO,
  IQ: IQ,
  IR: IR,
  IS: IS,
  IT: IT,
  JE: JE,
  JM: JM,
  JO: JO,
  JP: JP,
  KE: KE,
  KG: KG,
  KH: KH,
  KI: KI,
  KM: KM,
  KN: KN,
  KP: KP,
  KR: KR,
  KW: KW,
  KY: KY,
  KZ: KZ,
  LA: LA,
  LB: LB,
  LC: LC,
  LI: LI,
  LK: LK,
  LR: LR,
  LS: LS,
  LT: LT,
  LU: LU,
  LV: LV,
  LY: LY,
  MA: MA,
  MC: MC,
  MD: MD,
  ME: ME,
  MF: MF,
  MG: MG,
  MH: MH,
  MK: MK,
  ML: ML,
  MM: MM,
  MN: MN,
  MO: MO,
  MP: MP,
  MQ: MQ,
  MR: MR,
  MS: MS,
  MT: MT,
  MU: MU,
  MV: MV,
  MW: MW,
  MX: MX,
  MY: MY,
  MZ: MZ,
  NA: NA,
  NC: NC,
  NE: NE,
  NF: NF,
  NG: NG,
  NI: NI,
  NL: NL,
  NO: NO,
  NP: NP,
  NR: NR,
  NU: NU,
  NZ: NZ,
  OM: OM,
  PA: PA,
  PE: PE,
  PF: PF,
  PG: PG,
  PH: PH,
  PK: PK,
  PL: PL,
  PM: PM,
  PN: PN,
  PR: PR,
  PS: PS,
  PT: PT,
  PW: PW,
  PY: PY,
  QA: QA,
  RAINBOW: RAINBOW,
  RE: RE,
  RO: RO,
  RS: RS,
  RU: RU,
  RW: RW,
  SA: SA,
  SB: SB,
  SC: SC,
  SD: SD,
  SE: SE,
  SG: SG,
  SH: SH,
  SI: SI,
  SJ: SJ,
  SK: SK,
  SL: SL,
  SM: SM,
  SN: SN,
  SO: SO,
  SR: SR,
  SS: SS,
  ST: ST,
  SV: SV,
  SX: SX,
  SY: SY,
  SZ: SZ,
  TC: TC,
  TD: TD,
  TF: TF,
  TG: TG,
  TH: TH,
  TJ: TJ,
  TK: TK,
  TL: TL,
  TM: TM,
  TN: TN,
  TO: TO,
  TR: TR,
  TT: TT,
  TV: TV,
  TW: TW,
  TZ: TZ,
  UA: UA,
  UG: UG,
  UM: UM,
  UOSAN: UOSAN,
  US: US,
  UY: UY,
  UZ: UZ,
  VA: VA,
  VC: VC,
  VE: VE,
  VG: VG,
  VI: VI,
  VN: VN,
  VU: VU,
  WF: WF,
  WS: WS,
  YE: YE,

  /*YT,*/
  ZA: ZA,
  ZM: ZM,
  ZW: ZW
};

function isoToCountryCode(isoCode) {
  var keyToGet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'alpha2';

  if (isoCode !== undefined) {
    var alpha2Code = codeList.find(function (countryObj) {
      return countryObj.alpha2 === isoCode || countryObj.alpha3 === isoCode || countryObj.numeric === isoCode;
    })[keyToGet];
    return alpha2Code;
  }

  console.error('This code returns undefined, see www.flagpack.xyz/docs/flag-index for all the available codes.');
}

function imageUrl(assetCode, size) {
  try {
    return flags[assetCode][size];
  } catch (_unused) {
    console.error('No flag found for ' + assetCode + ' / size ' + size);
  }
}

exports.codeList = codeList;
exports.flags = flags;
exports.imageUrl = imageUrl;
exports.isoToCountryCode = isoToCountryCode;
