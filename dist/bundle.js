'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var codeList = [{countryName:"Andorra",alpha2:"AD",alpha3:"AND",numeric:"020"},{countryName:"United Arab Emirates",alpha2:"AE",alpha3:"ARE",numeric:"784"},{countryName:"African Union",alpha2:"AFRUN",alpha3:"",numeric:""},{countryName:"Antigua and Barbuda",alpha2:"AG",alpha3:"ATG",numeric:"028"},{countryName:"Anguilla",alpha2:"AI",alpha3:"AIA",numeric:"660"},{countryName:"Albania",alpha2:"AL",alpha3:"ALB",numeric:"008"},{countryName:"Amernia",alpha2:"AM",alpha3:"ARM",numeric:"051"},{countryName:"Amsterdam",alpha2:"AMS",alpha3:"",numeric:""},{countryName:"Angola",alpha2:"AO",alpha3:"AGO",numeric:"024"},{countryName:"Antartctica",alpha2:"AQ",alpha3:"ATA",numeric:"010"},{countryName:"Argentina",alpha2:"AR",alpha3:"ARG",numeric:"032"},{countryName:"American Samoa",alpha2:"AS",alpha3:"ASM",numeric:"016"},{countryName:"Austria",alpha2:"AT",alpha3:"AUT",numeric:"040"},{countryName:"Australia",alpha2:"AU",alpha3:"AUS",numeric:"016"},{countryName:"Aruba",alpha2:"AW",alpha3:"ABW",numeric:"533"},{countryName:"Åland Islands",alpha2:"AX",alpha3:"ALA",numeric:"248"},{countryName:"Azerbaijan",alpha2:"AZ",alpha3:"AZE",numeric:"031"},{countryName:"Bosnia and Herzegovina",alpha2:"BA",alpha3:"BIH",numeric:"070"},{countryName:"Barbados",alpha2:"BB",alpha3:"BRB",numeric:"052"},{countryName:"Bangladesh",alpha2:"BD",alpha3:"BGD",numeric:"050"},{countryName:"Belgium",alpha2:"BE",alpha3:"BEL",numeric:"056"},{countryName:"Burkina Faso",alpha2:"BF",alpha3:"BFA",numeric:"854"},{countryName:"Bulgaria",alpha2:"BG",alpha3:"BGR",numeric:"100"},{countryName:"Bahrain",alpha2:"BH",alpha3:"BHR",numeric:"048"},{countryName:"Burundi",alpha2:"BI",alpha3:"BDI",numeric:"108"},{countryName:"Benin",alpha2:"BJ",alpha3:"BEN",numeric:"204"},{countryName:"Saint Barthélemy",alpha2:"BL",alpha3:"BLM",numeric:"652"},{countryName:"Bermuda",alpha2:"BM",alpha3:"BMU",numeric:"060"},{countryName:"Brunei",alpha2:"BN",alpha3:"BRN",numeric:"096"},{countryName:"Bolivia",alpha2:"BO",alpha3:"BOL",numeric:"068"},{countryName:"Bonaire",alpha2:"BQ-BO",alpha3:"",numeric:""},{countryName:"Saba",alpha2:"BQ-SA",alpha3:"",numeric:""},{countryName:"Sint Eustatius",alpha2:"BQ-SE",alpha3:"",numeric:""},{countryName:"Brazil",alpha2:"BR",alpha3:"BRA",numeric:"076"},{countryName:"Bahamas",alpha2:"BS",alpha3:"BHS",numeric:"044"},{countryName:"Bhutan",alpha2:"BT",alpha3:"BTN",numeric:"064"},{countryName:"Botswana",alpha2:"BW",alpha3:"BWA",numeric:"072"},{countryName:"Belarus",alpha2:"BY",alpha3:"BLR",numeric:"112"},{countryName:"Belize",alpha2:"BZ",alpha3:"BLZ",numeric:"084"},{countryName:"Canada",alpha2:"CA",alpha3:"CAN",numeric:"124"},{countryName:"Cocos Islands",alpha2:"CC",alpha3:"CCK",numeric:"166"},{countryName:"Democratis Republic of Congo",alpha2:"CD",alpha3:"COD",numeric:"180"},{countryName:"Central African Republic",alpha2:"CF",alpha3:"CAF",numeric:"140"},{countryName:"Congo",alpha2:"CG",alpha3:"COG",numeric:"178"},{countryName:"Switzerland",alpha2:"CH",alpha3:"CHE",numeric:"756"},{countryName:"Côte d'Ivoire",alpha2:"CI",alpha3:"CIV",numeric:"384"},{countryName:"Cook Island",alpha2:"CK",alpha3:"COK",numeric:"184"},{countryName:"Chile",alpha2:"CL",alpha3:"CHL",numeric:"152"},{countryName:"Cameroon",alpha2:"CM",alpha3:"CMR",numeric:"120"},{countryName:"China",alpha2:"CN",alpha3:"CHN",numeric:"156"},{countryName:"Colombia",alpha2:"CO",alpha3:"COL",numeric:"170"},{countryName:"Costa Rica",alpha2:"CR",alpha3:"CRI",numeric:"188"},{countryName:"Cuba",alpha2:"CU",alpha3:"CUB",numeric:"192"},{countryName:"Cape Verde",alpha2:"CV",alpha3:"CPV",numeric:"132"},{countryName:"Curaçao",alpha2:"CW",alpha3:"CUW",numeric:"531"},{countryName:"Christmas Island",alpha2:"CX",alpha3:"CXR",numeric:"162"},{countryName:"Cyprus",alpha2:"CY",alpha3:"CYP",numeric:"196"},{countryName:"Czech Republic",alpha2:"CZ",alpha3:"CZE",numeric:"203"},{countryName:"Germany",alpha2:"DE",alpha3:"DEU",numeric:"276"},{countryName:"Djibouti",alpha2:"DJ",alpha3:"DJI",numeric:"262"},{countryName:"Denmark",alpha2:"DK",alpha3:"DNK",numeric:"208"},{countryName:"Dominica",alpha2:"DM",alpha3:"DMA",numeric:"212"},{countryName:"Dominican Republic",alpha2:"DO",alpha3:"DOM",numeric:"214"},{countryName:"Ecuador",alpha2:"EC",alpha3:"ECU",numeric:"218"},{countryName:"Estonia",alpha2:"EE",alpha3:"EST",numeric:"233"},{countryName:"Egypt",alpha2:"EG",alpha3:"EGY",numeric:"818"},{countryName:"Western Sahara",alpha2:"EH",alpha3:"ESH",numeric:"732"},{countryName:"Eritrea",alpha2:"ER",alpha3:"ERI",numeric:"232"},{countryName:"Spain",alpha2:"ES",alpha3:"ESP",numeric:"724"},{countryName:"Ethiopia",alpha2:"ET",alpha3:"ETH",numeric:"231"},{countryName:"European Union",alpha2:"EU",alpha3:"",numeric:""},{countryName:"Finland",alpha2:"FI",alpha3:"FIN",numeric:"246"},{countryName:"Fiji",alpha2:"FJ",alpha3:"FJI",numeric:"242"},{countryName:"Falkland Islands",alpha2:"FK",alpha3:"FLK",numeric:"238"},{countryName:"Micronesia (Federated States of)",alpha2:"FM",alpha3:"FSM",numeric:"583"},{countryName:"Faroe Island",alpha2:"FO",alpha3:"FRO",numeric:"234"},{countryName:"France",alpha2:"FR",alpha3:"FRA",numeric:"250"},{countryName:"Gabon",alpha2:"GA",alpha3:"GAB",numeric:"266"},{countryName:"England",alpha2:"GB-ENG",alpha3:"",numeric:""},{countryName:"Scotland",alpha2:"GB-SCT",alpha3:"",numeric:""},{countryName:"United Kingdom",alpha2:"GB-UKM",alpha3:"",numeric:""},{countryName:"Wales",alpha2:"GB-WLS",alpha3:"",numeric:""},{countryName:"Northern Ireland",alpha2:"GB-NIR",alpha3:"",numeric:""},{countryName:"Grenada",alpha2:"GD",alpha3:"GRD",numeric:"308"},{countryName:"Georgia",alpha2:"GE",alpha3:"GEO",numeric:"268"},{countryName:"French Guiana",alpha2:"GF",alpha3:"GUF",numeric:"254"},{countryName:"Guernsey",alpha2:"GG",alpha3:"GGY",numeric:"831"},{countryName:"Ghana",alpha2:"GH",alpha3:"GHA",numeric:"288"},{countryName:"Gibraltar",alpha2:"GI",alpha3:"GIB",numeric:"292"},{countryName:"Greenland",alpha2:"GL",alpha3:"GRL",numeric:"304"},{countryName:"Gambia",alpha2:"GM",alpha3:"GMB",numeric:"270"},{countryName:"Guinea",alpha2:"GN",alpha3:"GIN",numeric:"324"},{countryName:"Guadeloupe",alpha2:"GP",alpha3:"GLP",numeric:"312"},{countryName:"Equatorial Guinea",alpha2:"GQ",alpha3:"GNQ",numeric:"226"},{countryName:"Greece",alpha2:"GR",alpha3:"GRC",numeric:"300"},{countryName:"South Gerogia and the South Sandwich Islands",alpha2:"GS",alpha3:"SGS",numeric:"239"},{countryName:"Guatemala",alpha2:"GT",alpha3:"GTM",numeric:"320"},{countryName:"Guam",alpha2:"GU",alpha3:"GUM",numeric:"316"},{countryName:"Guinea-Bissau",alpha2:"GW",alpha3:"GNB",numeric:"624"},{countryName:"Guyana",alpha2:"GY",alpha3:"GUY",numeric:"328"},{countryName:"Hong Kong",alpha2:"HK",alpha3:"HKG",numeric:"344"},{countryName:"Heard Island and McDonald Islands",alpha2:"HM",alpha3:"HMD",numeric:"334"},{countryName:"Honduras",alpha2:"HN",alpha3:"HND",numeric:"340"},{countryName:"Croatia",alpha2:"HR",alpha3:"HRV",numeric:"191"},{countryName:"Haiti",alpha2:"HT",alpha3:"HTI",numeric:"332"},{countryName:"Hungary",alpha2:"HU",alpha3:"HUN",numeric:"348"},{countryName:"Indonesia",alpha2:"ID",alpha3:"IDN",numeric:"360"},{countryName:"Ireland",alpha2:"IE",alpha3:"IRL",numeric:"372"},{countryName:"Israel",alpha2:"IL",alpha3:"ISR",numeric:"376"},{countryName:"Isle of Man",alpha2:"IM",alpha3:"IMN",numeric:"833"},{countryName:"India",alpha2:"IN",alpha3:"IND",numeric:"356"},{countryName:"British Indian Ocean Territory",alpha2:"IO",alpha3:"IOT",numeric:"086"},{countryName:"Iraq",alpha2:"IQ",alpha3:"IRQ",numeric:"368"},{countryName:"Iran",alpha2:"IR",alpha3:"IRN",numeric:"364"},{countryName:"Iceland",alpha2:"IS",alpha3:"ISL",numeric:"352"},{countryName:"Italy",alpha2:"IT",alpha3:"ITA",numeric:"380"},{countryName:"Jersey",alpha2:"JE",alpha3:"JEY",numeric:"832"},{countryName:"Jamaica",alpha2:"JM",alpha3:"JAM",numeric:"388"},{countryName:"Jordan",alpha2:"JO",alpha3:"JOR",numeric:"400"},{countryName:"Japan",alpha2:"JP",alpha3:"JPN",numeric:"392"},{countryName:"Kenya",alpha2:"KE",alpha3:"KEN",numeric:"404"},{countryName:"Kyrgyzstan",alpha2:"KG",alpha3:"KGZ",numeric:"417"},{countryName:"Cambodia",alpha2:"KH",alpha3:"KHM",numeric:"116"},{countryName:"Kiribati",alpha2:"KI",alpha3:"KIR",numeric:"296"},{countryName:"Comoros",alpha2:"KM",alpha3:"COM",numeric:"174"},{countryName:"Saint Kitts and Nevis",alpha2:"KN-SK",alpha3:"KNA",numeric:"659"},{countryName:"Korea (the Democratic People's Republic of)",alpha2:"KP",alpha3:"PRK",numeric:"408"},{countryName:"Korea (the Republic of)",alpha2:"KR",alpha3:"KOR",numeric:"410"},{countryName:"Kuwait",alpha2:"KW",alpha3:"KWT",numeric:"414"},{countryName:"Cayman Islands",alpha2:"KY",alpha3:"CYM",numeric:"136"},{countryName:"Kazakhstan",alpha2:"KZ",alpha3:"KAZ",numeric:"398"},{countryName:"Lao People's Democratic Republic (the)",alpha2:"LA",alpha3:"LAO",numeric:"418"},{countryName:"Lebanon",alpha2:"LB",alpha3:"LBN",numeric:"422"},{countryName:"Saint Lucia",alpha2:"LC",alpha3:"LCA",numeric:"662"},{countryName:"Liechtenstein",alpha2:"LI",alpha3:"LIE",numeric:"438"},{countryName:"Sri Lanka",alpha2:"LK",alpha3:"LKA",numeric:"144"},{countryName:"Liberia",alpha2:"LR",alpha3:"LBR",numeric:"430"},{countryName:"Lesotho",alpha2:"LS",alpha3:"LSO",numeric:"426"},{countryName:"Lithuania",alpha2:"LT",alpha3:"LTU",numeric:"440"},{countryName:"Luxembourg",alpha2:"LU",alpha3:"LUX",numeric:"442"},{countryName:"Latvia",alpha2:"LV",alpha3:"LVA",numeric:"428"},{countryName:"Libya",alpha2:"LY",alpha3:"LBY",numeric:"434"},{countryName:"Morocco",alpha2:"MA",alpha3:"MAR",numeric:"504"},{countryName:"Monaco",alpha2:"MC",alpha3:"MCO ",numeric:"492"},{countryName:"Moldova (the Republic of)",alpha2:"MD",alpha3:"MDA",numeric:"498"},{countryName:"Montenegro",alpha2:"ME",alpha3:"MNE",numeric:"499"},{countryName:"Saint Martin",alpha2:"MF",alpha3:"MAF",numeric:"663"},{countryName:"Madagascar",alpha2:"MG",alpha3:"MDG",numeric:"450"},{countryName:"Marshall Islands (the)",alpha2:"MH",alpha3:"MHL",numeric:"584"},{countryName:"North Macedonia",alpha2:"MK",alpha3:"MKD",numeric:"807"},{countryName:"Mali",alpha2:"ML",alpha3:"MLI",numeric:"466"},{countryName:"Myanmar",alpha2:"MM",alpha3:"MMR",numeric:"104"},{countryName:"Mongolia",alpha2:"MN",alpha3:"MNG",numeric:"496"},{countryName:"Macao",alpha2:"MO",alpha3:"MAC",numeric:"446"},{countryName:"Northern Mariana Islands (the)",alpha2:"MP",alpha3:"MNP",numeric:"580"},{countryName:"Martinique",alpha2:"MQ",alpha3:"MTQ",numeric:"474"},{countryName:"Mauritania",alpha2:"MR",alpha3:"MRT",numeric:"478"},{countryName:"Montserrat",alpha2:"MS",alpha3:"MSR",numeric:"500"},{countryName:"Malta",alpha2:"MT",alpha3:"MLT",numeric:"470"},{countryName:"Mauritius",alpha2:"MU",alpha3:"MUS",numeric:"480"},{countryName:"Maldives",alpha2:"MV",alpha3:"MDV",numeric:"462"},{countryName:"Malawi",alpha2:"MW",alpha3:"MWI",numeric:"454"},{countryName:"Mexico",alpha2:"MX",alpha3:"MEX",numeric:"484"},{countryName:"Malaysia",alpha2:"MY",alpha3:"MYS",numeric:"458"},{countryName:"Mozambique",alpha2:"MZ",alpha3:"MOZ",numeric:"508"},{countryName:"Namibia",alpha2:"NA",alpha3:"NAM",numeric:"516"},{countryName:"New Caledonia",alpha2:"NC",alpha3:"NCL",numeric:"540"},{countryName:"Niger",alpha2:"NE",alpha3:"NER",numeric:"562"},{countryName:"Norfolk Island",alpha2:"NF",alpha3:"NFK",numeric:"574"},{countryName:"Nigeria",alpha2:"NG",alpha3:"NGA",numeric:"566"},{countryName:"Nicaragua",alpha2:"NI",alpha3:"NIC",numeric:"558"},{countryName:"Netherlands",alpha2:"NL",alpha3:"NLD",numeric:"528"},{countryName:"Norway",alpha2:"NO",alpha3:"NOR",numeric:"578"},{countryName:"Nepal",alpha2:"NP",alpha3:"NPL",numeric:"524"},{countryName:"Nauru",alpha2:"NR",alpha3:"NRU",numeric:"520"},{countryName:"Niue",alpha2:"NU",alpha3:"NIU",numeric:"570"},{countryName:"New Zealand",alpha2:"NZ",alpha3:"NZL",numeric:"554"},{countryName:"Oman",alpha2:"OM",alpha3:"OMN",numeric:"512"},{countryName:"Panama",alpha2:"PA",alpha3:"PAN",numeric:"591"},{countryName:"Peru",alpha2:"PE",alpha3:"PER",numeric:"604"},{countryName:"French Polyesia",alpha2:"PF",alpha3:"PYF",numeric:"258"},{countryName:"Papua New Guinea",alpha2:"PG",alpha3:"PNG",numeric:"598"},{countryName:"Phillippines (the)",alpha2:"PH",alpha3:"PHL",numeric:"608"},{countryName:"Pakistan",alpha2:"PK",alpha3:"PAK",numeric:"586"},{countryName:"Poland",alpha2:"PL",alpha3:"POL",numeric:"616"},{countryName:"Saint Pierre and Miquelon",alpha2:"PM",alpha3:"SPM",numeric:"666"},{countryName:"Pitcairn",alpha2:"PN",alpha3:"PCN",numeric:"612"},{countryName:"Puerto Rico",alpha2:"PR",alpha3:"PRI",numeric:"630"},{countryName:"Palestine, State of",alpha2:"PS",alpha3:"PSE",numeric:"275"},{countryName:"Portugal",alpha2:"PT",alpha3:"PRT",numeric:"620"},{countryName:"Palau",alpha2:"PW",alpha3:"PLW",numeric:"585"},{countryName:"Paraguay",alpha2:"PY",alpha3:"PRY",numeric:"600"},{countryName:"Qatar",alpha2:"QA",alpha3:"QAT",numeric:"634"},{countryName:"Rainbow",alpha2:"RAINBOW",alpha3:"",numeric:""},{countryName:"Réunion",alpha2:"RE",alpha3:"REU",numeric:"638"},{countryName:"Romania",alpha2:"RO",alpha3:"ROU",numeric:"642"},{countryName:"Serbia",alpha2:"RS",alpha3:"SRB",numeric:"688"},{countryName:"Russian Federation (the)",alpha2:"RU",alpha3:"RUS",numeric:"643"},{countryName:"Rwanda",alpha2:"RW",alpha3:"RWA",numeric:"646"},{countryName:"Saudi Arabia",alpha2:"SA",alpha3:"SAU",numeric:"682"},{countryName:"Solomon Islands",alpha2:"SB",alpha3:"SLB",numeric:"090"},{countryName:"Seychelles",alpha2:"SC",alpha3:"SYC",numeric:"690"},{countryName:"Sudan (the)",alpha2:"SD",alpha3:"SDN",numeric:"729"},{countryName:"Sweden",alpha2:"SE",alpha3:"SWE",numeric:"752"},{countryName:"Singapore",alpha2:"SG",alpha3:"SGP",numeric:"702"},{countryName:"Saint Helena, Ascension Island, Traistan da Cunha",alpha2:"SH",alpha3:"SHN",numeric:"654"},{countryName:"Slovenia",alpha2:"SI",alpha3:"SVN",numeric:"705"},{countryName:"Svalbard, Jan Mayen",alpha2:"SJ",alpha3:"SJM",numeric:"744"},{countryName:"Slovakia",alpha2:"SK",alpha3:"SVK",numeric:"703"},{countryName:"Sierra Leone",alpha2:"SL",alpha3:"SLE",numeric:"694"},{countryName:"San Marino",alpha2:"SM",alpha3:"SMR",numeric:"674"},{countryName:"Senegal",alpha2:"SN",alpha3:"SEN",numeric:"686"},{countryName:"Somalia",alpha2:"SO",alpha3:"SOM",numeric:"706"},{countryName:"Suriname",alpha2:"SR",alpha3:"SUR",numeric:"740"},{countryName:"South Sudan",alpha2:"SS",alpha3:"SSD",numeric:"728"},{countryName:"Sao Tome and Principe",alpha2:"ST",alpha3:"STP",numeric:"678"},{countryName:"El Salvador",alpha2:"SV",alpha3:"SLV",numeric:"222"},{countryName:"Sint Maarten",alpha2:"SX",alpha3:"SXM",numeric:"534"},{countryName:"Syrian Arab Republic (the)",alpha2:"SY",alpha3:"SYR",numeric:"760"},{countryName:"Eswatini",alpha2:"SZ",alpha3:"SWZ",numeric:"748"},{countryName:"Turks and Caicos Islands (the)",alpha2:"TC",alpha3:"TCA",numeric:"796"},{countryName:"Chad",alpha2:"TD",alpha3:"TCD",numeric:"148"},{countryName:"French Southern Territories",alpha2:"TF",alpha3:"ATF",numeric:"260"},{countryName:"Togo",alpha2:"TG",alpha3:"TGO",numeric:"768"},{countryName:"Thailand",alpha2:"TH",alpha3:"THA",numeric:"764"},{countryName:"Tajikistan",alpha2:"TJ",alpha3:"TJK",numeric:"762"},{countryName:"Tokelau",alpha2:"TK",alpha3:"TKL",numeric:"772"},{countryName:"Timor-Leste",alpha2:"TL",alpha3:"TLS",numeric:"626"},{countryName:"Turkmenistan",alpha2:"TM",alpha3:"TKM",numeric:"795"},{countryName:"Tunisia",alpha2:"TN",alpha3:"TUN",numeric:"788"},{countryName:"Tonga",alpha2:"TO",alpha3:"TON",numeric:"776"},{countryName:"Turkey",alpha2:"TR",alpha3:"TUR",numeric:"792"},{countryName:"Trinidad and Tobago",alpha2:"TT",alpha3:"TTO",numeric:"780"},{countryName:"Tuvalu",alpha2:"TV",alpha3:"TUV",numeric:"798"},{countryName:"Taiwan",alpha2:"TW",alpha3:"TWN",numeric:"158"},{countryName:"Tanzania, the United Republic of",alpha2:"TZ",alpha3:"TZA",numeric:"834"},{countryName:"Ukraine",alpha2:"UA",alpha3:"UKR",numeric:"804"},{countryName:"Uganda",alpha2:"UG",alpha3:"UGA",numeric:"800"},{countryName:"United States Minor Outlying Islands (the)",alpha2:"UM",alpha3:"UMI",numeric:"581"},{countryName:"Union of South American Nations",alpha2:"UNASUR",alpha3:"",numeric:""},{countryName:"United States of America",alpha2:"US",alpha3:"USA",numeric:"840"},{countryName:"Uruguay",alpha2:"UY",alpha3:"URY",numeric:"858"},{countryName:"Uzbekistan",alpha2:"UZ",alpha3:"UZB",numeric:"860"},{countryName:"Holy See",alpha2:"VA",alpha3:"VAT",numeric:"336"},{countryName:"Saint Vincent and the Grenadines",alpha2:"VC",alpha3:"VCT",numeric:"670"},{countryName:"Venezuela (Bolivarian Republic of)",alpha2:"VE",alpha3:"VEN",numeric:"862"},{countryName:"Virgin Islands (British)",alpha2:"VG",alpha3:"VGB",numeric:"092"},{countryName:"Virgin Islands (U.S.)",alpha2:"VI",alpha3:"VIR",numeric:"850"},{countryName:"Vietnam",alpha2:"VN",alpha3:"VNM",numeric:"704"},{countryName:"Vanuatu",alpha2:"VU",alpha3:"VUT",numeric:"548"},{countryName:"Wallis and Futuna",alpha2:"WF",alpha3:"WLF",numeric:"876"},{countryName:"Samoa",alpha2:"WS",alpha3:"WSM",numeric:"882"},{countryName:"Yemen",alpha2:"YE",alpha3:"YEM",numeric:"887"},{countryName:"South Africa",alpha2:"ZA",alpha3:"ZAF",numeric:"710"},{countryName:"Zambia",alpha2:"ZM",alpha3:"ZMB",numeric:"894"},{countryName:"Zimbabwe",alpha2:"ZW",alpha3:"ZWE",numeric:"716"},{countryName:"Afghanistan",alpha2:"AF",alpha3:"AFG",numeric:"004"},{countryName:"Bouvet Island",alpha2:"BV",alpha3:"BVT",numeric:"074"}];

/* loaded by smart-asset */
var l = require("./flags/cDBuMQWP.svg");

/* loaded by smart-asset */
var m = require("./flags/bffwdEkt.svg");

/* loaded by smart-asset */
var s = require("./flags/cXaxgftL.svg");

var AD = {
  l: l,
  m: m,
  s: s
};

/* loaded by smart-asset */
var l$1 = require("./flags/cmWCAfoy.svg");

/* loaded by smart-asset */
var m$1 = require("./flags/fWeYwmNl.svg");

/* loaded by smart-asset */
var s$1 = require("./flags/cqEDpGqQ.svg");

var AE = {
  l: l$1,
  m: m$1,
  s: s$1
};

/* loaded by smart-asset */
var l$2 = require("./flags/eHjOswOz.svg");

/* loaded by smart-asset */
var m$2 = require("./flags/dIrcUWLo.svg");

/* loaded by smart-asset */
var s$2 = require("./flags/fAiFUDYH.svg");

var AFRUN = {
  l: l$2,
  m: m$2,
  s: s$2
};

/* loaded by smart-asset */
var l$3 = require("./flags/bgsHHMrg.svg");

/* loaded by smart-asset */
var m$3 = require("./flags/fKgkqqnP.svg");

/* loaded by smart-asset */
var s$3 = require("./flags/dXGNQXFI.svg");

var AG = {
  l: l$3,
  m: m$3,
  s: s$3
};

/* loaded by smart-asset */
var l$4 = require("./flags/ciNRJXia.svg");

/* loaded by smart-asset */
var m$4 = require("./flags/dmMJUltG.svg");

/* loaded by smart-asset */
var s$4 = require("./flags/cThTnnSg.svg");

var AI = {
  l: l$4,
  m: m$4,
  s: s$4
};

/* loaded by smart-asset */
var l$5 = require("./flags/cnlamQrj.svg");

/* loaded by smart-asset */
var m$5 = require("./flags/bBFVHTtK.svg");

/* loaded by smart-asset */
var s$5 = require("./flags/bcETVSlR.svg");

var AL = {
  l: l$5,
  m: m$5,
  s: s$5
};

/* loaded by smart-asset */
var l$6 = require("./flags/eUntzhug.svg");

/* loaded by smart-asset */
var m$6 = require("./flags/egpEmjNh.svg");

/* loaded by smart-asset */
var s$6 = require("./flags/ctPUEcnn.svg");

var AM = {
  l: l$6,
  m: m$6,
  s: s$6
};

/* loaded by smart-asset */
var l$7 = require("./flags/dbCyTrhF.svg");

/* loaded by smart-asset */
var m$7 = require("./flags/bivKTeNv.svg");

/* loaded by smart-asset */
var s$7 = require("./flags/eauEjkLR.svg");

var AMS = {
  l: l$7,
  m: m$7,
  s: s$7
};

/* loaded by smart-asset */
var l$8 = require("./flags/cAxtrkKs.svg");

/* loaded by smart-asset */
var m$8 = require("./flags/dmYWVYjY.svg");

/* loaded by smart-asset */
var s$8 = require("./flags/dwwvLcjq.svg");

var AO = {
  l: l$8,
  m: m$8,
  s: s$8
};

/* loaded by smart-asset */
var l$9 = require("./flags/ecUgTkse.svg");

/* loaded by smart-asset */
var m$9 = require("./flags/ZLhBDaZK.svg");

/* loaded by smart-asset */
var s$9 = require("./flags/fxtVpZTi.svg");

var AQ = {
  l: l$9,
  m: m$9,
  s: s$9
};

/* loaded by smart-asset */
var l$a = require("./flags/uqSWQnoP.svg");

/* loaded by smart-asset */
var m$a = require("./flags/dIIFnvsN.svg");

/* loaded by smart-asset */
var s$a = require("./flags/caonDSAX.svg");

var AR = {
  l: l$a,
  m: m$a,
  s: s$a
};

/* loaded by smart-asset */
var l$b = require("./flags/ocpOesmv.svg");

/* loaded by smart-asset */
var m$b = require("./flags/bYlxRfyM.svg");

/* loaded by smart-asset */
var s$b = require("./flags/fmMZZeFA.svg");

var AS = {
  l: l$b,
  m: m$b,
  s: s$b
};

/* loaded by smart-asset */
var l$c = require("./flags/eogDwEqw.svg");

/* loaded by smart-asset */
var m$c = require("./flags/cfCNIURU.svg");

/* loaded by smart-asset */
var s$c = require("./flags/cfUGjPSC.svg");

var AT = {
  l: l$c,
  m: m$c,
  s: s$c
};

/* loaded by smart-asset */
var l$d = require("./flags/cCgAiTtA.svg");

/* loaded by smart-asset */
var m$d = require("./flags/eLkVEpRa.svg");

/* loaded by smart-asset */
var s$d = require("./flags/euFkQlAH.svg");

var AU = {
  l: l$d,
  m: m$d,
  s: s$d
};

/* loaded by smart-asset */
var l$e = require("./flags/kNaInmzP.svg");

/* loaded by smart-asset */
var m$e = require("./flags/ecSbyeLu.svg");

/* loaded by smart-asset */
var s$e = require("./flags/dFwjeMaP.svg");

var AW = {
  l: l$e,
  m: m$e,
  s: s$e
};

/* loaded by smart-asset */
var l$f = require("./flags/XfOzGGPk.svg");

/* loaded by smart-asset */
var m$f = require("./flags/bFsBaGmm.svg");

/* loaded by smart-asset */
var s$f = require("./flags/chUjuhAm.svg");

var AX = {
  l: l$f,
  m: m$f,
  s: s$f
};

/* loaded by smart-asset */
var l$g = require("./flags/bXJDMFGC.svg");

/* loaded by smart-asset */
var m$g = require("./flags/bNnhgVOY.svg");

/* loaded by smart-asset */
var s$g = require("./flags/cZQMxHAP.svg");

var AZ = {
  l: l$g,
  m: m$g,
  s: s$g
};

/* loaded by smart-asset */
var l$h = require("./flags/fAYniOzt.svg");

/* loaded by smart-asset */
var m$h = require("./flags/bGKcJYkx.svg");

/* loaded by smart-asset */
var s$h = require("./flags/coiAVPvz.svg");

var BA = {
  l: l$h,
  m: m$h,
  s: s$h
};

/* loaded by smart-asset */
var l$i = require("./flags/dHsEhcSK.svg");

/* loaded by smart-asset */
var m$i = require("./flags/KJEbzISs.svg");

/* loaded by smart-asset */
var s$i = require("./flags/fDjudVXs.svg");

var BB = {
  l: l$i,
  m: m$i,
  s: s$i
};

/* loaded by smart-asset */
var l$j = require("./flags/cIYAiBXW.svg");

/* loaded by smart-asset */
var m$j = require("./flags/fNLDWeRn.svg");

/* loaded by smart-asset */
var s$j = require("./flags/dXtHvuow.svg");

var BD = {
  l: l$j,
  m: m$j,
  s: s$j
};

/* loaded by smart-asset */
var l$k = require("./flags/cmCvXrNJ.svg");

/* loaded by smart-asset */
var m$k = require("./flags/bOPNHbJq.svg");

/* loaded by smart-asset */
var s$k = require("./flags/dLACdtLb.svg");

var BE = {
  l: l$k,
  m: m$k,
  s: s$k
};

/* loaded by smart-asset */
var l$l = require("./flags/eRjrmYiY.svg");

/* loaded by smart-asset */
var m$l = require("./flags/crbHykrd.svg");

/* loaded by smart-asset */
var s$l = require("./flags/fpjeiNBi.svg");

var BF = {
  l: l$l,
  m: m$l,
  s: s$l
};

/* loaded by smart-asset */
var l$m = require("./flags/bxMHuwLF.svg");

/* loaded by smart-asset */
var m$m = require("./flags/bZiXwQPo.svg");

/* loaded by smart-asset */
var s$m = require("./flags/dvUuJZoe.svg");

var BG = {
  l: l$m,
  m: m$m,
  s: s$m
};

/* loaded by smart-asset */
var l$n = require("./flags/ecrshJJw.svg");

/* loaded by smart-asset */
var m$n = require("./flags/ePziLdmF.svg");

/* loaded by smart-asset */
var s$n = require("./flags/fvhgIEKy.svg");

var BH = {
  l: l$n,
  m: m$n,
  s: s$n
};

/* loaded by smart-asset */
var l$o = require("./flags/dwQwcXTG.svg");

/* loaded by smart-asset */
var m$o = require("./flags/dpElceLJ.svg");

/* loaded by smart-asset */
var s$o = require("./flags/caooTjip.svg");

var BI = {
  l: l$o,
  m: m$o,
  s: s$o
};

/* loaded by smart-asset */
var l$p = require("./flags/dxcRndgy.svg");

/* loaded by smart-asset */
var m$p = require("./flags/fnIVJMeV.svg");

/* loaded by smart-asset */
var s$p = require("./flags/eVCdYgxp.svg");

var BJ = {
  l: l$p,
  m: m$p,
  s: s$p
};

/* loaded by smart-asset */
var l$q = require("./flags/eOMUlSrC.svg");

/* loaded by smart-asset */
var m$q = require("./flags/ApNCWWhg.svg");

/* loaded by smart-asset */
var s$q = require("./flags/bmgnYWyO.svg");

var BL = {
  l: l$q,
  m: m$q,
  s: s$q
};

/* loaded by smart-asset */
var l$r = require("./flags/ehqJtJSa.svg");

/* loaded by smart-asset */
var m$r = require("./flags/dRrkBuqe.svg");

/* loaded by smart-asset */
var s$r = require("./flags/GMuBTqmi.svg");

var BM = {
  l: l$r,
  m: m$r,
  s: s$r
};

/* loaded by smart-asset */
var l$s = require("./flags/eKZPOPVu.svg");

/* loaded by smart-asset */
var m$s = require("./flags/tbzgJkJi.svg");

/* loaded by smart-asset */
var s$s = require("./flags/bFbLMqbs.svg");

var BN = {
  l: l$s,
  m: m$s,
  s: s$s
};

/* loaded by smart-asset */
var l$t = require("./flags/dBDwphrw.svg");

/* loaded by smart-asset */
var m$t = require("./flags/eRvkjdVZ.svg");

/* loaded by smart-asset */
var s$t = require("./flags/ddiJceTa.svg");

var BO = {
  l: l$t,
  m: m$t,
  s: s$t
};

/* loaded by smart-asset */
var l$u = require("./flags/eameaoth.svg");

/* loaded by smart-asset */
var m$u = require("./flags/flBTZzPe.svg");

/* loaded by smart-asset */
var s$u = require("./flags/gaSuxDzk.svg");

var BQ_BO = {
  l: l$u,
  m: m$u,
  s: s$u
};

/* loaded by smart-asset */
var l$v = require("./flags/fegirzYG.svg");

/* loaded by smart-asset */
var m$v = require("./flags/eAFNwDHv.svg");

/* loaded by smart-asset */
var s$v = require("./flags/cvdyOQUq.svg");

var BQ_SA = {
  l: l$v,
  m: m$v,
  s: s$v
};

/* loaded by smart-asset */
var l$w = require("./flags/eHuDxTGA.svg");

/* loaded by smart-asset */
var m$w = require("./flags/egdFJCTL.svg");

/* loaded by smart-asset */
var s$w = require("./flags/cmjmWOFw.svg");

var BQ_SE = {
  l: l$w,
  m: m$w,
  s: s$w
};

/* loaded by smart-asset */
var l$x = require("./flags/fRXyplLE.svg");

/* loaded by smart-asset */
var m$x = require("./flags/DhgUmkYQ.svg");

/* loaded by smart-asset */
var s$x = require("./flags/dtWpEluc.svg");

var BR = {
  l: l$x,
  m: m$x,
  s: s$x
};

/* loaded by smart-asset */
var l$y = require("./flags/cfaEFyof.svg");

/* loaded by smart-asset */
var m$y = require("./flags/eFvsOKDK.svg");

/* loaded by smart-asset */
var s$y = require("./flags/rNZVSOTm.svg");

var BS = {
  l: l$y,
  m: m$y,
  s: s$y
};

/* loaded by smart-asset */
var l$z = require("./flags/dTadPROI.svg");

/* loaded by smart-asset */
var m$z = require("./flags/hzbcEBaX.svg");

/* loaded by smart-asset */
var s$z = require("./flags/fdRoOFwb.svg");

var BT = {
  l: l$z,
  m: m$z,
  s: s$z
};

/* loaded by smart-asset */
var l$A = require("./flags/KVPeYpCe.svg");

/* loaded by smart-asset */
var m$A = require("./flags/fnnekcVb.svg");

/* loaded by smart-asset */
var s$A = require("./flags/LazJxdPR.svg");

var BW = {
  l: l$A,
  m: m$A,
  s: s$A
};

/* loaded by smart-asset */
var l$B = require("./flags/IyJJVHJb.svg");

/* loaded by smart-asset */
var m$B = require("./flags/bdpZHVoq.svg");

/* loaded by smart-asset */
var s$B = require("./flags/ddRFjnIz.svg");

var BY = {
  l: l$B,
  m: m$B,
  s: s$B
};

/* loaded by smart-asset */
var l$C = require("./flags/cNzETLeB.svg");

/* loaded by smart-asset */
var m$C = require("./flags/LrjRVTcQ.svg");

/* loaded by smart-asset */
var s$C = require("./flags/dsTyBgeQ.svg");

var BZ = {
  l: l$C,
  m: m$C,
  s: s$C
};

/* loaded by smart-asset */
var l$D = require("./flags/cwNjMqUr.svg");

/* loaded by smart-asset */
var m$D = require("./flags/dpeLLUAx.svg");

/* loaded by smart-asset */
var s$D = require("./flags/dLKrupPi.svg");

var CA = {
  l: l$D,
  m: m$D,
  s: s$D
};

/* loaded by smart-asset */
var l$E = require("./flags/dkOGiioC.svg");

/* loaded by smart-asset */
var m$E = require("./flags/cgvKdTyK.svg");

/* loaded by smart-asset */
var s$E = require("./flags/fvolsQFU.svg");

var CC = {
  l: l$E,
  m: m$E,
  s: s$E
};

/* loaded by smart-asset */
var l$F = require("./flags/bodvHFJI.svg");

/* loaded by smart-asset */
var m$F = require("./flags/eQDZaGxK.svg");

/* loaded by smart-asset */
var s$F = require("./flags/eQzneYtS.svg");

var CD = {
  l: l$F,
  m: m$F,
  s: s$F
};

/* loaded by smart-asset */
var l$G = require("./flags/fvhsJOAy.svg");

/* loaded by smart-asset */
var m$G = require("./flags/dzCAgqap.svg");

/* loaded by smart-asset */
var s$G = require("./flags/elmfmEcv.svg");

var CF = {
  l: l$G,
  m: m$G,
  s: s$G
};

/* loaded by smart-asset */
var l$H = require("./flags/cwVBWENX.svg");

/* loaded by smart-asset */
var m$H = require("./flags/zuaoCtCm.svg");

/* loaded by smart-asset */
var s$H = require("./flags/cHMxNHBF.svg");

var CG = {
  l: l$H,
  m: m$H,
  s: s$H
};

/* loaded by smart-asset */
var l$I = require("./flags/UGktBKlK.svg");

/* loaded by smart-asset */
var m$I = require("./flags/fyXFyOBl.svg");

/* loaded by smart-asset */
var s$I = require("./flags/eXXdcqzT.svg");

var CH = {
  l: l$I,
  m: m$I,
  s: s$I
};

/* loaded by smart-asset */
var l$J = require("./flags/euxofEAt.svg");

/* loaded by smart-asset */
var m$J = require("./flags/bFcwKmJd.svg");

/* loaded by smart-asset */
var s$J = require("./flags/blvUvCKB.svg");

var CI = {
  l: l$J,
  m: m$J,
  s: s$J
};

/* loaded by smart-asset */
var l$K = require("./flags/flkyevEi.svg");

/* loaded by smart-asset */
var m$K = require("./flags/fyBSuGcJ.svg");

/* loaded by smart-asset */
var s$K = require("./flags/dAZOIBBz.svg");

var CK = {
  l: l$K,
  m: m$K,
  s: s$K
};

/* loaded by smart-asset */
var l$L = require("./flags/bqKtuRYQ.svg");

/* loaded by smart-asset */
var m$L = require("./flags/cPxHvsty.svg");

/* loaded by smart-asset */
var s$L = require("./flags/xlqkATDl.svg");

var CL = {
  l: l$L,
  m: m$L,
  s: s$L
};

/* loaded by smart-asset */
var l$M = require("./flags/bhuVGUVU.svg");

/* loaded by smart-asset */
var m$M = require("./flags/bRsMLTgD.svg");

/* loaded by smart-asset */
var s$M = require("./flags/dSXOkpNb.svg");

var CM = {
  l: l$M,
  m: m$M,
  s: s$M
};

/* loaded by smart-asset */
var l$N = require("./flags/elnlftGN.svg");

/* loaded by smart-asset */
var m$N = require("./flags/bjldAqfu.svg");

/* loaded by smart-asset */
var s$N = require("./flags/dPpTjvUn.svg");

var CN = {
  l: l$N,
  m: m$N,
  s: s$N
};

/* loaded by smart-asset */
var l$O = require("./flags/eOKkXWgq.svg");

/* loaded by smart-asset */
var m$O = require("./flags/bBqVorxe.svg");

/* loaded by smart-asset */
var s$O = require("./flags/bFNvrREy.svg");

var CO = {
  l: l$O,
  m: m$O,
  s: s$O
};

/* loaded by smart-asset */
var l$P = require("./flags/dreEoJDH.svg");

/* loaded by smart-asset */
var m$P = require("./flags/cLZBVvIs.svg");

/* loaded by smart-asset */
var s$P = require("./flags/gWPsEVkH.svg");

var CR = {
  l: l$P,
  m: m$P,
  s: s$P
};

/* loaded by smart-asset */
var l$Q = require("./flags/bTuXYgKV.svg");

/* loaded by smart-asset */
var m$Q = require("./flags/dfWWqZht.svg");

/* loaded by smart-asset */
var s$Q = require("./flags/dJqKDdYv.svg");

var CU = {
  l: l$Q,
  m: m$Q,
  s: s$Q
};

/* loaded by smart-asset */
var l$R = require("./flags/dCysxmvj.svg");

/* loaded by smart-asset */
var m$R = require("./flags/cogPZSOT.svg");

/* loaded by smart-asset */
var s$R = require("./flags/efLzvwAG.svg");

var CV = {
  l: l$R,
  m: m$R,
  s: s$R
};

/* loaded by smart-asset */
var l$S = require("./flags/cRszUQaW.svg");

/* loaded by smart-asset */
var m$S = require("./flags/eKKIFtkD.svg");

/* loaded by smart-asset */
var s$S = require("./flags/eWGCwHxC.svg");

var CW = {
  l: l$S,
  m: m$S,
  s: s$S
};

/* loaded by smart-asset */
var l$T = require("./flags/PHskcPFK.svg");

/* loaded by smart-asset */
var m$T = require("./flags/bmGsWIgv.svg");

/* loaded by smart-asset */
var s$T = require("./flags/vHbtBPjk.svg");

var CX = {
  l: l$T,
  m: m$T,
  s: s$T
};

/* loaded by smart-asset */
var l$U = require("./flags/eOevkcjy.svg");

/* loaded by smart-asset */
var m$U = require("./flags/eEddqIAl.svg");

/* loaded by smart-asset */
var s$U = require("./flags/dIqJQFpf.svg");

var CY = {
  l: l$U,
  m: m$U,
  s: s$U
};

/* loaded by smart-asset */
var l$V = require("./flags/PiHdoNbr.svg");

/* loaded by smart-asset */
var m$V = require("./flags/booqYUQK.svg");

/* loaded by smart-asset */
var s$V = require("./flags/OUYAJgKZ.svg");

var CZ = {
  l: l$V,
  m: m$V,
  s: s$V
};

/* loaded by smart-asset */
var l$W = require("./flags/cmstGLSQ.svg");

/* loaded by smart-asset */
var m$W = require("./flags/ykBXQOYQ.svg");

/* loaded by smart-asset */
var s$W = require("./flags/dTOTPTEN.svg");

var DE = {
  l: l$W,
  m: m$W,
  s: s$W
};

/* loaded by smart-asset */
var l$X = require("./flags/bJJYCLvU.svg");

/* loaded by smart-asset */
var m$X = require("./flags/dIelpmTD.svg");

/* loaded by smart-asset */
var s$X = require("./flags/eYTVrFtQ.svg");

var DJ = {
  l: l$X,
  m: m$X,
  s: s$X
};

/* loaded by smart-asset */
var l$Y = require("./flags/emTiAQGm.svg");

/* loaded by smart-asset */
var m$Y = require("./flags/fcPNsoWm.svg");

/* loaded by smart-asset */
var s$Y = require("./flags/fLHlmMAz.svg");

var DK = {
  l: l$Y,
  m: m$Y,
  s: s$Y
};

/* loaded by smart-asset */
var l$Z = require("./flags/eqzEDIaI.svg");

/* loaded by smart-asset */
var m$Z = require("./flags/eKpMVFEt.svg");

/* loaded by smart-asset */
var s$Z = require("./flags/fjCEPCfC.svg");

var DM = {
  l: l$Z,
  m: m$Z,
  s: s$Z
};

/* loaded by smart-asset */
var l$_ = require("./flags/IgGlbRQQ.svg");

/* loaded by smart-asset */
var m$_ = require("./flags/cjqwrgeO.svg");

/* loaded by smart-asset */
var s$_ = require("./flags/fstYvLsT.svg");

var DO = {
  l: l$_,
  m: m$_,
  s: s$_
};

/* loaded by smart-asset */
var l$$ = require("./flags/evXZXIPn.svg");

/* loaded by smart-asset */
var m$$ = require("./flags/dumcTuAm.svg");

/* loaded by smart-asset */
var s$$ = require("./flags/ecCvZGce.svg");

var EC = {
  l: l$$,
  m: m$$,
  s: s$$
};

/* loaded by smart-asset */
var l$10 = require("./flags/etyJAely.svg");

/* loaded by smart-asset */
var m$10 = require("./flags/dkjODNRs.svg");

/* loaded by smart-asset */
var s$10 = require("./flags/cxfMYsHr.svg");

var EE = {
  l: l$10,
  m: m$10,
  s: s$10
};

/* loaded by smart-asset */
var l$11 = require("./flags/fEuSVBCZ.svg");

/* loaded by smart-asset */
var m$11 = require("./flags/euGWnlyt.svg");

/* loaded by smart-asset */
var s$11 = require("./flags/cwEdRqak.svg");

var EG = {
  l: l$11,
  m: m$11,
  s: s$11
};

/* loaded by smart-asset */
var l$12 = require("./flags/feWYjxLn.svg");

/* loaded by smart-asset */
var m$12 = require("./flags/fQvbfaOv.svg");

/* loaded by smart-asset */
var s$12 = require("./flags/daXFdqiP.svg");

var EH = {
  l: l$12,
  m: m$12,
  s: s$12
};

/* loaded by smart-asset */
var l$13 = require("./flags/ddepIOjb.svg");

/* loaded by smart-asset */
var m$13 = require("./flags/dvZBzDed.svg");

/* loaded by smart-asset */
var s$13 = require("./flags/bbEdAbtO.svg");

var ER = {
  l: l$13,
  m: m$13,
  s: s$13
};

/* loaded by smart-asset */
var l$14 = require("./flags/ceHCyjuM.svg");

/* loaded by smart-asset */
var m$14 = require("./flags/cTNLspIP.svg");

/* loaded by smart-asset */
var s$14 = require("./flags/cuVIArwv.svg");

var ES = {
  l: l$14,
  m: m$14,
  s: s$14
};

/* loaded by smart-asset */
var l$15 = require("./flags/bfqUmjWg.svg");

/* loaded by smart-asset */
var m$15 = require("./flags/dHnOTUwC.svg");

/* loaded by smart-asset */
var s$15 = require("./flags/bCdNBBGW.svg");

var ET = {
  l: l$15,
  m: m$15,
  s: s$15
};

/* loaded by smart-asset */
var l$16 = require("./flags/fqjdMlHF.svg");

/* loaded by smart-asset */
var m$16 = require("./flags/APRcJjKU.svg");

/* loaded by smart-asset */
var s$16 = require("./flags/dUyexRUS.svg");

var EU = {
  l: l$16,
  m: m$16,
  s: s$16
};

/* loaded by smart-asset */
var l$17 = require("./flags/BbUpcCiO.svg");

/* loaded by smart-asset */
var m$17 = require("./flags/curlWxVz.svg");

/* loaded by smart-asset */
var s$17 = require("./flags/eZLacBJq.svg");

var FI = {
  l: l$17,
  m: m$17,
  s: s$17
};

/* loaded by smart-asset */
var l$18 = require("./flags/cLOjOtdH.svg");

/* loaded by smart-asset */
var m$18 = require("./flags/bgVUfOQJ.svg");

/* loaded by smart-asset */
var s$18 = require("./flags/dTGwqAuc.svg");

var FJ = {
  l: l$18,
  m: m$18,
  s: s$18
};

/* loaded by smart-asset */
var l$19 = require("./flags/bAccbWnZ.svg");

/* loaded by smart-asset */
var m$19 = require("./flags/cFsMYeEa.svg");

/* loaded by smart-asset */
var s$19 = require("./flags/xOZsTaFe.svg");

var FK = {
  l: l$19,
  m: m$19,
  s: s$19
};

/* loaded by smart-asset */
var l$1a = require("./flags/cIiShrAD.svg");

/* loaded by smart-asset */
var m$1a = require("./flags/bIofBwjQ.svg");

/* loaded by smart-asset */
var s$1a = require("./flags/coTChdrg.svg");

var FM = {
  l: l$1a,
  m: m$1a,
  s: s$1a
};

/* loaded by smart-asset */
var l$1b = require("./flags/dUPGPpDy.svg");

/* loaded by smart-asset */
var m$1b = require("./flags/dPWFkLpT.svg");

/* loaded by smart-asset */
var s$1b = require("./flags/IPLTHgiT.svg");

var FO = {
  l: l$1b,
  m: m$1b,
  s: s$1b
};

/* loaded by smart-asset */
var l$1c = require("./flags/eOMUlSrC.svg");

/* loaded by smart-asset */
var m$1c = require("./flags/dnIkTuBq.svg");

/* loaded by smart-asset */
var s$1c = require("./flags/bmgnYWyO.svg");

var FR = {
  l: l$1c,
  m: m$1c,
  s: s$1c
};

/* loaded by smart-asset */
var l$1d = require("./flags/dfECkaPg.svg");

/* loaded by smart-asset */
var m$1d = require("./flags/dFaxqoIE.svg");

/* loaded by smart-asset */
var s$1d = require("./flags/dtLaJLkX.svg");

var GA = {
  l: l$1d,
  m: m$1d,
  s: s$1d
};

/* loaded by smart-asset */
var l$1e = require("./flags/fZmuEaTb.svg");

/* loaded by smart-asset */
var m$1e = require("./flags/skxnOyOI.svg");

/* loaded by smart-asset */
var s$1e = require("./flags/cPhszqDG.svg");

var GB_ENG = {
  l: l$1e,
  m: m$1e,
  s: s$1e
};

/* loaded by smart-asset */
var l$1f = require("./flags/dapJLUND.svg");

/* loaded by smart-asset */
var m$1f = require("./flags/tOitJupU.svg");

/* loaded by smart-asset */
var s$1f = require("./flags/dEeFYClW.svg");

var GB_SCT = {
  l: l$1f,
  m: m$1f,
  s: s$1f
};

/* loaded by smart-asset */
var l$1g = require("./flags/flHokCyq.svg");

/* loaded by smart-asset */
var m$1g = require("./flags/eHvMsrdJ.svg");

/* loaded by smart-asset */
var s$1g = require("./flags/QOJNoLDb.svg");

var GB_UKM = {
  l: l$1g,
  m: m$1g,
  s: s$1g
};

/* loaded by smart-asset */
var l$1h = require("./flags/ePwMxLOK.svg");

/* loaded by smart-asset */
var m$1h = require("./flags/cNDRnIyS.svg");

/* loaded by smart-asset */
var s$1h = require("./flags/OrdpluTi.svg");

var GB_WLS = {
  l: l$1h,
  m: m$1h,
  s: s$1h
};

/* loaded by smart-asset */
var l$1i = require("./flags/flHokCyq.svg");

/* loaded by smart-asset */
var m$1i = require("./flags/eHvMsrdJ.svg");

/* loaded by smart-asset */
var s$1i = require("./flags/eRDEtVjp.svg");

var GB_NIR = {
  l: l$1i,
  m: m$1i,
  s: s$1i
};

/* loaded by smart-asset */
var l$1j = require("./flags/fyaXAnPV.svg");

/* loaded by smart-asset */
var m$1j = require("./flags/lOqDCKAL.svg");

/* loaded by smart-asset */
var s$1j = require("./flags/bUpIvDPr.svg");

var GD = {
  l: l$1j,
  m: m$1j,
  s: s$1j
};

/* loaded by smart-asset */
var l$1k = require("./flags/dlGDEJur.svg");

/* loaded by smart-asset */
var m$1k = require("./flags/fanrOivd.svg");

/* loaded by smart-asset */
var s$1k = require("./flags/bcPCcAci.svg");

var GE = {
  l: l$1k,
  m: m$1k,
  s: s$1k
};

/* loaded by smart-asset */
var l$1l = require("./flags/fUJekTtR.svg");

/* loaded by smart-asset */
var m$1l = require("./flags/dhwMSspz.svg");

/* loaded by smart-asset */
var s$1l = require("./flags/cgoUKrvM.svg");

var GF = {
  l: l$1l,
  m: m$1l,
  s: s$1l
};

/* loaded by smart-asset */
var l$1m = require("./flags/bHZPbhWX.svg");

/* loaded by smart-asset */
var m$1m = require("./flags/dHosJiKH.svg");

/* loaded by smart-asset */
var s$1m = require("./flags/bNLCjnJZ.svg");

var GG = {
  l: l$1m,
  m: m$1m,
  s: s$1m
};

/* loaded by smart-asset */
var l$1n = require("./flags/bGSGxPBQ.svg");

/* loaded by smart-asset */
var m$1n = require("./flags/qeKHJTZa.svg");

/* loaded by smart-asset */
var s$1n = require("./flags/eNsclNPi.svg");

var GH = {
  l: l$1n,
  m: m$1n,
  s: s$1n
};

/* loaded by smart-asset */
var l$1o = require("./flags/eOmwKYwn.svg");

/* loaded by smart-asset */
var m$1o = require("./flags/bcBxpNDz.svg");

/* loaded by smart-asset */
var s$1o = require("./flags/cskAAxci.svg");

var GI = {
  l: l$1o,
  m: m$1o,
  s: s$1o
};

/* loaded by smart-asset */
var l$1p = require("./flags/esZVSANG.svg");

/* loaded by smart-asset */
var m$1p = require("./flags/tmxcJkXR.svg");

/* loaded by smart-asset */
var s$1p = require("./flags/euXLEPbo.svg");

var GL = {
  l: l$1p,
  m: m$1p,
  s: s$1p
};

/* loaded by smart-asset */
var l$1q = require("./flags/bxLluLBD.svg");

/* loaded by smart-asset */
var m$1q = require("./flags/spHygEKf.svg");

/* loaded by smart-asset */
var s$1q = require("./flags/bMMVjgVp.svg");

var GM = {
  l: l$1q,
  m: m$1q,
  s: s$1q
};

/* loaded by smart-asset */
var l$1r = require("./flags/bzNXKOFJ.svg");

/* loaded by smart-asset */
var m$1r = require("./flags/eErlOuKR.svg");

/* loaded by smart-asset */
var s$1r = require("./flags/gCKudhii.svg");

var GN = {
  l: l$1r,
  m: m$1r,
  s: s$1r
};

/* loaded by smart-asset */
var l$1s = require("./flags/cSKvkxbG.svg");

/* loaded by smart-asset */
var m$1s = require("./flags/fnGGEGzE.svg");

/* loaded by smart-asset */
var s$1s = require("./flags/cHwRNUTw.svg");

var GP = {
  l: l$1s,
  m: m$1s,
  s: s$1s
};

/* loaded by smart-asset */
var l$1t = require("./flags/ctQZyYFB.svg");

/* loaded by smart-asset */
var m$1t = require("./flags/cAEVDLyE.svg");

/* loaded by smart-asset */
var s$1t = require("./flags/ePUHiLNY.svg");

var GQ = {
  l: l$1t,
  m: m$1t,
  s: s$1t
};

/* loaded by smart-asset */
var l$1u = require("./flags/cBApNGbs.svg");

/* loaded by smart-asset */
var m$1u = require("./flags/beqYGFee.svg");

/* loaded by smart-asset */
var s$1u = require("./flags/cVDrZgwB.svg");

var GR = {
  l: l$1u,
  m: m$1u,
  s: s$1u
};

/* loaded by smart-asset */
var l$1v = require("./flags/eNFAWAak.svg");

/* loaded by smart-asset */
var m$1v = require("./flags/ZUaCzWXN.svg");

/* loaded by smart-asset */
var s$1v = require("./flags/fvxmHHcB.svg");

var GS = {
  l: l$1v,
  m: m$1v,
  s: s$1v
};

/* loaded by smart-asset */
var l$1w = require("./flags/cNzeErlP.svg");

/* loaded by smart-asset */
var m$1w = require("./flags/fHYutKeC.svg");

/* loaded by smart-asset */
var s$1w = require("./flags/efMlodXV.svg");

var GT = {
  l: l$1w,
  m: m$1w,
  s: s$1w
};

/* loaded by smart-asset */
var l$1x = require("./flags/eVTSvXNG.svg");

/* loaded by smart-asset */
var m$1x = require("./flags/fXeDsqXN.svg");

/* loaded by smart-asset */
var s$1x = require("./flags/cvhpgMYd.svg");

var GU = {
  l: l$1x,
  m: m$1x,
  s: s$1x
};

/* loaded by smart-asset */
var l$1y = require("./flags/dkTVBMgk.svg");

/* loaded by smart-asset */
var m$1y = require("./flags/gPASZNDp.svg");

/* loaded by smart-asset */
var s$1y = require("./flags/fdxveQse.svg");

var GW = {
  l: l$1y,
  m: m$1y,
  s: s$1y
};

/* loaded by smart-asset */
var l$1z = require("./flags/cSbwQgTc.svg");

/* loaded by smart-asset */
var m$1z = require("./flags/ddxflOHo.svg");

/* loaded by smart-asset */
var s$1z = require("./flags/cVPPdKGk.svg");

var GY = {
  l: l$1z,
  m: m$1z,
  s: s$1z
};

/* loaded by smart-asset */
var l$1A = require("./flags/fGxHpAiQ.svg");

/* loaded by smart-asset */
var m$1A = require("./flags/ftDpduaO.svg");

/* loaded by smart-asset */
var s$1A = require("./flags/fTUBcIox.svg");

var HK = {
  l: l$1A,
  m: m$1A,
  s: s$1A
};

/* loaded by smart-asset */
var l$1B = require("./flags/bIAwCKeU.svg");

/* loaded by smart-asset */
var m$1B = require("./flags/fwMZpOdl.svg");

/* loaded by smart-asset */
var s$1B = require("./flags/eHFWndcP.svg");

var HM = {
  l: l$1B,
  m: m$1B,
  s: s$1B
};

/* loaded by smart-asset */
var l$1C = require("./flags/bNSnrmLx.svg");

/* loaded by smart-asset */
var m$1C = require("./flags/dypLizxD.svg");

/* loaded by smart-asset */
var s$1C = require("./flags/VnEKfaBD.svg");

var HN = {
  l: l$1C,
  m: m$1C,
  s: s$1C
};

/* loaded by smart-asset */
var l$1D = require("./flags/dcNDXtDG.svg");

/* loaded by smart-asset */
var m$1D = require("./flags/ccijcXMy.svg");

/* loaded by smart-asset */
var s$1D = require("./flags/bfGEemrE.svg");

var HR = {
  l: l$1D,
  m: m$1D,
  s: s$1D
};

/* loaded by smart-asset */
var l$1E = require("./flags/ezDDkrPs.svg");

/* loaded by smart-asset */
var m$1E = require("./flags/UBLnfMXO.svg");

/* loaded by smart-asset */
var s$1E = require("./flags/dtRsRYzt.svg");

var HT = {
  l: l$1E,
  m: m$1E,
  s: s$1E
};

/* loaded by smart-asset */
var l$1F = require("./flags/dxauPgIV.svg");

/* loaded by smart-asset */
var m$1F = require("./flags/fmkVTfSP.svg");

/* loaded by smart-asset */
var s$1F = require("./flags/dpefBcpQ.svg");

var HU = {
  l: l$1F,
  m: m$1F,
  s: s$1F
};

/* loaded by smart-asset */
var l$1G = require("./flags/eLNUcRXO.svg");

/* loaded by smart-asset */
var m$1G = require("./flags/cogFFCMt.svg");

/* loaded by smart-asset */
var s$1G = require("./flags/eyEOgIDC.svg");

var ID = {
  l: l$1G,
  m: m$1G,
  s: s$1G
};

/* loaded by smart-asset */
var l$1H = require("./flags/ejgjRwVN.svg");

/* loaded by smart-asset */
var m$1H = require("./flags/dknjWoXO.svg");

/* loaded by smart-asset */
var s$1H = require("./flags/pieMCsiL.svg");

var IE = {
  l: l$1H,
  m: m$1H,
  s: s$1H
};

/* loaded by smart-asset */
var l$1I = require("./flags/eklPEMin.svg");

/* loaded by smart-asset */
var m$1I = require("./flags/cIUQXkAQ.svg");

/* loaded by smart-asset */
var s$1I = require("./flags/bROrVFGe.svg");

var IL = {
  l: l$1I,
  m: m$1I,
  s: s$1I
};

/* loaded by smart-asset */
var l$1J = require("./flags/erfEhSWi.svg");

/* loaded by smart-asset */
var m$1J = require("./flags/dirNQYVO.svg");

/* loaded by smart-asset */
var s$1J = require("./flags/fURKNuVS.svg");

var IM = {
  l: l$1J,
  m: m$1J,
  s: s$1J
};

/* loaded by smart-asset */
var l$1K = require("./flags/qfaBtlQD.svg");

/* loaded by smart-asset */
var m$1K = require("./flags/dNjoFRnP.svg");

/* loaded by smart-asset */
var s$1K = require("./flags/cMVexpbR.svg");

var IN = {
  l: l$1K,
  m: m$1K,
  s: s$1K
};

/* loaded by smart-asset */
var l$1L = require("./flags/dlLiDVXC.svg");

/* loaded by smart-asset */
var m$1L = require("./flags/fCfJkvyY.svg");

/* loaded by smart-asset */
var s$1L = require("./flags/dwsboXUT.svg");

var IO = {
  l: l$1L,
  m: m$1L,
  s: s$1L
};

/* loaded by smart-asset */
var l$1M = require("./flags/dvZSztzl.svg");

/* loaded by smart-asset */
var m$1M = require("./flags/eyYcpoeH.svg");

/* loaded by smart-asset */
var s$1M = require("./flags/eCFPaOEu.svg");

var IQ = {
  l: l$1M,
  m: m$1M,
  s: s$1M
};

/* loaded by smart-asset */
var l$1N = require("./flags/cdcsvIXZ.svg");

/* loaded by smart-asset */
var m$1N = require("./flags/eyfBwulg.svg");

/* loaded by smart-asset */
var s$1N = require("./flags/UbVSNOfh.svg");

var IR = {
  l: l$1N,
  m: m$1N,
  s: s$1N
};

/* loaded by smart-asset */
var l$1O = require("./flags/bzNuUgJz.svg");

/* loaded by smart-asset */
var m$1O = require("./flags/czzwHvpk.svg");

/* loaded by smart-asset */
var s$1O = require("./flags/zZfXJsgS.svg");

var IS = {
  l: l$1O,
  m: m$1O,
  s: s$1O
};

/* loaded by smart-asset */
var l$1P = require("./flags/oKiMbXjD.svg");

/* loaded by smart-asset */
var m$1P = require("./flags/jaetcBYZ.svg");

/* loaded by smart-asset */
var s$1P = require("./flags/cFrJCBCe.svg");

var IT = {
  l: l$1P,
  m: m$1P,
  s: s$1P
};

/* loaded by smart-asset */
var l$1Q = require("./flags/clufxLkH.svg");

/* loaded by smart-asset */
var m$1Q = require("./flags/dpyrAvVF.svg");

/* loaded by smart-asset */
var s$1Q = require("./flags/fOkEJMrG.svg");

var JE = {
  l: l$1Q,
  m: m$1Q,
  s: s$1Q
};

/* loaded by smart-asset */
var l$1R = require("./flags/bENtNeeM.svg");

/* loaded by smart-asset */
var m$1R = require("./flags/dxszPZLt.svg");

/* loaded by smart-asset */
var s$1R = require("./flags/vxkgjnQv.svg");

var JM = {
  l: l$1R,
  m: m$1R,
  s: s$1R
};

/* loaded by smart-asset */
var l$1S = require("./flags/ebtgSvmo.svg");

/* loaded by smart-asset */
var m$1S = require("./flags/bubVQeuF.svg");

/* loaded by smart-asset */
var s$1S = require("./flags/cbjFlZcK.svg");

var JO = {
  l: l$1S,
  m: m$1S,
  s: s$1S
};

/* loaded by smart-asset */
var l$1T = require("./flags/dBSdDBfF.svg");

/* loaded by smart-asset */
var m$1T = require("./flags/fLIkEnGk.svg");

/* loaded by smart-asset */
var s$1T = require("./flags/FLVToBfT.svg");

var JP = {
  l: l$1T,
  m: m$1T,
  s: s$1T
};

/* loaded by smart-asset */
var l$1U = require("./flags/cjLibIBl.svg");

/* loaded by smart-asset */
var m$1U = require("./flags/bYWUaScm.svg");

/* loaded by smart-asset */
var s$1U = require("./flags/bJuIiuHv.svg");

var KE = {
  l: l$1U,
  m: m$1U,
  s: s$1U
};

/* loaded by smart-asset */
var l$1V = require("./flags/fyCBugBR.svg");

/* loaded by smart-asset */
var m$1V = require("./flags/cPqMeSye.svg");

/* loaded by smart-asset */
var s$1V = require("./flags/cYghomSJ.svg");

var KG = {
  l: l$1V,
  m: m$1V,
  s: s$1V
};

/* loaded by smart-asset */
var l$1W = require("./flags/eTHOsgPX.svg");

/* loaded by smart-asset */
var m$1W = require("./flags/ejXYawTT.svg");

/* loaded by smart-asset */
var s$1W = require("./flags/ccpFzvmf.svg");

var KH = {
  l: l$1W,
  m: m$1W,
  s: s$1W
};

/* loaded by smart-asset */
var l$1X = require("./flags/eGdFSJfA.svg");

/* loaded by smart-asset */
var m$1X = require("./flags/dlLgnDZc.svg");

/* loaded by smart-asset */
var s$1X = require("./flags/dcqqkADr.svg");

var KI = {
  l: l$1X,
  m: m$1X,
  s: s$1X
};

/* loaded by smart-asset */
var l$1Y = require("./flags/bGIzclEk.svg");

/* loaded by smart-asset */
var m$1Y = require("./flags/eepkAaHy.svg");

/* loaded by smart-asset */
var s$1Y = require("./flags/etSFaPwK.svg");

var KM = {
  l: l$1Y,
  m: m$1Y,
  s: s$1Y
};

/* loaded by smart-asset */
var l$1Z = require("./flags/fKXsmTmO.svg");

/* loaded by smart-asset */
var m$1Z = require("./flags/mBNptsPJ.svg");

/* loaded by smart-asset */
var s$1Z = require("./flags/fcKdraRg.svg");

var KN_SK = {
  l: l$1Z,
  m: m$1Z,
  s: s$1Z
};

/* loaded by smart-asset */
var l$1_ = require("./flags/dDpbGrPH.svg");

/* loaded by smart-asset */
var m$1_ = require("./flags/qUKesReR.svg");

/* loaded by smart-asset */
var s$1_ = require("./flags/bVCHitPx.svg");

var KP = {
  l: l$1_,
  m: m$1_,
  s: s$1_
};

/* loaded by smart-asset */
var l$1$ = require("./flags/ciLdkroB.svg");

/* loaded by smart-asset */
var m$1$ = require("./flags/eDEvJrhE.svg");

/* loaded by smart-asset */
var s$1$ = require("./flags/erubnnEB.svg");

var KR = {
  l: l$1$,
  m: m$1$,
  s: s$1$
};

/* loaded by smart-asset */
var l$20 = require("./flags/cCVCnIAh.svg");

/* loaded by smart-asset */
var m$20 = require("./flags/bBeHdCxW.svg");

/* loaded by smart-asset */
var s$20 = require("./flags/bOaUppck.svg");

var KW = {
  l: l$20,
  m: m$20,
  s: s$20
};

/* loaded by smart-asset */
var l$21 = require("./flags/eeUXPjlz.svg");

/* loaded by smart-asset */
var m$21 = require("./flags/eWBkwbWN.svg");

/* loaded by smart-asset */
var s$21 = require("./flags/cCWWUvED.svg");

var KY = {
  l: l$21,
  m: m$21,
  s: s$21
};

/* loaded by smart-asset */
var l$22 = require("./flags/ezrzKioi.svg");

/* loaded by smart-asset */
var m$22 = require("./flags/fieqNnMW.svg");

/* loaded by smart-asset */
var s$22 = require("./flags/dvUmCjBE.svg");

var KZ = {
  l: l$22,
  m: m$22,
  s: s$22
};

/* loaded by smart-asset */
var l$23 = require("./flags/dgyQNagm.svg");

/* loaded by smart-asset */
var m$23 = require("./flags/buhAgOrz.svg");

/* loaded by smart-asset */
var s$23 = require("./flags/ZXMLcXLt.svg");

var LA = {
  l: l$23,
  m: m$23,
  s: s$23
};

/* loaded by smart-asset */
var l$24 = require("./flags/cWRoceDZ.svg");

/* loaded by smart-asset */
var m$24 = require("./flags/drzplzIO.svg");

/* loaded by smart-asset */
var s$24 = require("./flags/cbShtAbb.svg");

var LB = {
  l: l$24,
  m: m$24,
  s: s$24
};

/* loaded by smart-asset */
var l$25 = require("./flags/dMgREcoh.svg");

/* loaded by smart-asset */
var m$25 = require("./flags/boCNkwTS.svg");

/* loaded by smart-asset */
var s$25 = require("./flags/edSgWPVg.svg");

var LC = {
  l: l$25,
  m: m$25,
  s: s$25
};

/* loaded by smart-asset */
var l$26 = require("./flags/piQGxKxR.svg");

/* loaded by smart-asset */
var m$26 = require("./flags/bLtlybuG.svg");

/* loaded by smart-asset */
var s$26 = require("./flags/AcgDfAAH.svg");

var LI = {
  l: l$26,
  m: m$26,
  s: s$26
};

/* loaded by smart-asset */
var l$27 = require("./flags/fFbjopkf.svg");

/* loaded by smart-asset */
var m$27 = require("./flags/fXwYEEUA.svg");

/* loaded by smart-asset */
var s$27 = require("./flags/eKgJMMbb.svg");

var LK = {
  l: l$27,
  m: m$27,
  s: s$27
};

/* loaded by smart-asset */
var l$28 = require("./flags/fTLyNFrv.svg");

/* loaded by smart-asset */
var m$28 = require("./flags/fzfSwrKq.svg");

/* loaded by smart-asset */
var s$28 = require("./flags/dmSUeuTF.svg");

var LR = {
  l: l$28,
  m: m$28,
  s: s$28
};

/* loaded by smart-asset */
var l$29 = require("./flags/bLJBZwLL.svg");

/* loaded by smart-asset */
var m$29 = require("./flags/bmaTmUql.svg");

/* loaded by smart-asset */
var s$29 = require("./flags/dIyoCdno.svg");

var LS = {
  l: l$29,
  m: m$29,
  s: s$29
};

/* loaded by smart-asset */
var l$2a = require("./flags/fjuXaqzg.svg");

/* loaded by smart-asset */
var m$2a = require("./flags/cBtnjNnE.svg");

/* loaded by smart-asset */
var s$2a = require("./flags/chcKKVXO.svg");

var LT = {
  l: l$2a,
  m: m$2a,
  s: s$2a
};

/* loaded by smart-asset */
var l$2b = require("./flags/dMjQpXXz.svg");

/* loaded by smart-asset */
var m$2b = require("./flags/euVMoNkq.svg");

/* loaded by smart-asset */
var s$2b = require("./flags/dYLQisBq.svg");

var LU = {
  l: l$2b,
  m: m$2b,
  s: s$2b
};

/* loaded by smart-asset */
var l$2c = require("./flags/iIPHEfGb.svg");

/* loaded by smart-asset */
var m$2c = require("./flags/eqZYHiMd.svg");

/* loaded by smart-asset */
var s$2c = require("./flags/eVmsJyhQ.svg");

var LV = {
  l: l$2c,
  m: m$2c,
  s: s$2c
};

/* loaded by smart-asset */
var l$2d = require("./flags/dUaIukcL.svg");

/* loaded by smart-asset */
var m$2d = require("./flags/fVxdNyBl.svg");

/* loaded by smart-asset */
var s$2d = require("./flags/MaMyZMXi.svg");

var LY = {
  l: l$2d,
  m: m$2d,
  s: s$2d
};

/* loaded by smart-asset */
var l$2e = require("./flags/fACUmBRW.svg");

/* loaded by smart-asset */
var m$2e = require("./flags/chKOpAHn.svg");

/* loaded by smart-asset */
var s$2e = require("./flags/dRibSNoi.svg");

var MA = {
  l: l$2e,
  m: m$2e,
  s: s$2e
};

/* loaded by smart-asset */
var l$2f = require("./flags/fFodQVJQ.svg");

/* loaded by smart-asset */
var m$2f = require("./flags/emYWdxxT.svg");

/* loaded by smart-asset */
var s$2f = require("./flags/dcbRinvr.svg");

var MC = {
  l: l$2f,
  m: m$2f,
  s: s$2f
};

/* loaded by smart-asset */
var l$2g = require("./flags/cGFvMdBz.svg");

/* loaded by smart-asset */
var m$2g = require("./flags/bsDWSpQK.svg");

/* loaded by smart-asset */
var s$2g = require("./flags/fNbASgce.svg");

var MD = {
  l: l$2g,
  m: m$2g,
  s: s$2g
};

/* loaded by smart-asset */
var l$2h = require("./flags/xuQQZllU.svg");

/* loaded by smart-asset */
var m$2h = require("./flags/oAsxXGqo.svg");

/* loaded by smart-asset */
var s$2h = require("./flags/BNonMVTW.svg");

var ME = {
  l: l$2h,
  m: m$2h,
  s: s$2h
};

/* loaded by smart-asset */
var l$2i = require("./flags/eOMUlSrC.svg");

/* loaded by smart-asset */
var m$2i = require("./flags/DpMagqPr.svg");

/* loaded by smart-asset */
var s$2i = require("./flags/bmgnYWyO.svg");

var MF = {
  l: l$2i,
  m: m$2i,
  s: s$2i
};

/* loaded by smart-asset */
var l$2j = require("./flags/daOTeRHt.svg");

/* loaded by smart-asset */
var m$2j = require("./flags/fSwcJQtx.svg");

/* loaded by smart-asset */
var s$2j = require("./flags/fndcMVQw.svg");

var MG = {
  l: l$2j,
  m: m$2j,
  s: s$2j
};

/* loaded by smart-asset */
var l$2k = require("./flags/fkXywtdJ.svg");

/* loaded by smart-asset */
var m$2k = require("./flags/bNwnzaoF.svg");

/* loaded by smart-asset */
var s$2k = require("./flags/dKbndQDC.svg");

var MH = {
  l: l$2k,
  m: m$2k,
  s: s$2k
};

/* loaded by smart-asset */
var l$2l = require("./flags/buOJHjZw.svg");

/* loaded by smart-asset */
var m$2l = require("./flags/eQTxDtou.svg");

/* loaded by smart-asset */
var s$2l = require("./flags/fgytliFo.svg");

var MK = {
  l: l$2l,
  m: m$2l,
  s: s$2l
};

/* loaded by smart-asset */
var l$2m = require("./flags/eDdsjRFk.svg");

/* loaded by smart-asset */
var m$2m = require("./flags/cfryLBoM.svg");

/* loaded by smart-asset */
var s$2m = require("./flags/dAfUGlRk.svg");

var ML = {
  l: l$2m,
  m: m$2m,
  s: s$2m
};

/* loaded by smart-asset */
var l$2n = require("./flags/bOWgXwIM.svg");

/* loaded by smart-asset */
var m$2n = require("./flags/sDbNqyvn.svg");

/* loaded by smart-asset */
var s$2n = require("./flags/dwZUTBwn.svg");

var MM = {
  l: l$2n,
  m: m$2n,
  s: s$2n
};

/* loaded by smart-asset */
var l$2o = require("./flags/XwYbLNXC.svg");

/* loaded by smart-asset */
var m$2o = require("./flags/eIixqnWU.svg");

/* loaded by smart-asset */
var s$2o = require("./flags/fpoduSOD.svg");

var MN = {
  l: l$2o,
  m: m$2o,
  s: s$2o
};

/* loaded by smart-asset */
var l$2p = require("./flags/bvIpPEXF.svg");

/* loaded by smart-asset */
var m$2p = require("./flags/edOUZjXJ.svg");

/* loaded by smart-asset */
var s$2p = require("./flags/dvCEXKMY.svg");

var MO = {
  l: l$2p,
  m: m$2p,
  s: s$2p
};

/* loaded by smart-asset */
var l$2q = require("./flags/fsaYNaLB.svg");

/* loaded by smart-asset */
var m$2q = require("./flags/eNwKmcDG.svg");

/* loaded by smart-asset */
var s$2q = require("./flags/fXdRzWDW.svg");

var MP = {
  l: l$2q,
  m: m$2q,
  s: s$2q
};

/* loaded by smart-asset */
var l$2r = require("./flags/eOMUlSrC.svg");

/* loaded by smart-asset */
var m$2r = require("./flags/ApNCWWhg.svg");

/* loaded by smart-asset */
var s$2r = require("./flags/bmgnYWyO.svg");

var MQ = {
  l: l$2r,
  m: m$2r,
  s: s$2r
};

/* loaded by smart-asset */
var l$2s = require("./flags/caZSOLKq.svg");

/* loaded by smart-asset */
var m$2s = require("./flags/fqloliSW.svg");

/* loaded by smart-asset */
var s$2s = require("./flags/cnYlmqmN.svg");

var MR = {
  l: l$2s,
  m: m$2s,
  s: s$2s
};

/* loaded by smart-asset */
var l$2t = require("./flags/eiLNRfYE.svg");

/* loaded by smart-asset */
var m$2t = require("./flags/QubNdZgT.svg");

/* loaded by smart-asset */
var s$2t = require("./flags/fmrSQpNg.svg");

var MS = {
  l: l$2t,
  m: m$2t,
  s: s$2t
};

/* loaded by smart-asset */
var l$2u = require("./flags/cebiCdgy.svg");

/* loaded by smart-asset */
var m$2u = require("./flags/bJeOHGbF.svg");

/* loaded by smart-asset */
var s$2u = require("./flags/bmBIjadv.svg");

var MT = {
  l: l$2u,
  m: m$2u,
  s: s$2u
};

/* loaded by smart-asset */
var l$2v = require("./flags/bINVwuwH.svg");

/* loaded by smart-asset */
var m$2v = require("./flags/mDrQSUCd.svg");

/* loaded by smart-asset */
var s$2v = require("./flags/dXGfbtoU.svg");

var MU = {
  l: l$2v,
  m: m$2v,
  s: s$2v
};

/* loaded by smart-asset */
var l$2w = require("./flags/ZBsgfVMl.svg");

/* loaded by smart-asset */
var m$2w = require("./flags/ezJmNnMB.svg");

/* loaded by smart-asset */
var s$2w = require("./flags/bjXMhKJN.svg");

var MV = {
  l: l$2w,
  m: m$2w,
  s: s$2w
};

/* loaded by smart-asset */
var l$2x = require("./flags/fiKMtrgi.svg");

/* loaded by smart-asset */
var m$2x = require("./flags/dXRXWVme.svg");

/* loaded by smart-asset */
var s$2x = require("./flags/cqbVtFvZ.svg");

var MW = {
  l: l$2x,
  m: m$2x,
  s: s$2x
};

/* loaded by smart-asset */
var l$2y = require("./flags/dYYMEyuz.svg");

/* loaded by smart-asset */
var m$2y = require("./flags/BqHFaykW.svg");

/* loaded by smart-asset */
var s$2y = require("./flags/ciezTXag.svg");

var MX = {
  l: l$2y,
  m: m$2y,
  s: s$2y
};

/* loaded by smart-asset */
var l$2z = require("./flags/dcZjeFMx.svg");

/* loaded by smart-asset */
var m$2z = require("./flags/EjHJqtea.svg");

/* loaded by smart-asset */
var s$2z = require("./flags/beXPtbMM.svg");

var MY = {
  l: l$2z,
  m: m$2z,
  s: s$2z
};

/* loaded by smart-asset */
var l$2A = require("./flags/eTTjHEMo.svg");

/* loaded by smart-asset */
var m$2A = require("./flags/eqzouFGE.svg");

/* loaded by smart-asset */
var s$2A = require("./flags/elNKqqvO.svg");

var MZ = {
  l: l$2A,
  m: m$2A,
  s: s$2A
};

/* loaded by smart-asset */
var l$2B = require("./flags/fIPdOlQC.svg");

/* loaded by smart-asset */
var m$2B = require("./flags/ejavjNUy.svg");

/* loaded by smart-asset */
var s$2B = require("./flags/eZJpnGHL.svg");

var NA = {
  l: l$2B,
  m: m$2B,
  s: s$2B
};

/* loaded by smart-asset */
var l$2C = require("./flags/eOMUlSrC.svg");

/* loaded by smart-asset */
var m$2C = require("./flags/WJIfElYV.svg");

/* loaded by smart-asset */
var s$2C = require("./flags/fozBGdSf.svg");

var NC = {
  l: l$2C,
  m: m$2C,
  s: s$2C
};

/* loaded by smart-asset */
var l$2D = require("./flags/dzjVzKYK.svg");

/* loaded by smart-asset */
var m$2D = require("./flags/dvBqJBfu.svg");

/* loaded by smart-asset */
var s$2D = require("./flags/decNVVpe.svg");

var NE = {
  l: l$2D,
  m: m$2D,
  s: s$2D
};

/* loaded by smart-asset */
var l$2E = require("./flags/daRjUwVE.svg");

/* loaded by smart-asset */
var m$2E = require("./flags/paBTvnyO.svg");

/* loaded by smart-asset */
var s$2E = require("./flags/fytJUvGZ.svg");

var NF = {
  l: l$2E,
  m: m$2E,
  s: s$2E
};

/* loaded by smart-asset */
var l$2F = require("./flags/foipgWWL.svg");

/* loaded by smart-asset */
var m$2F = require("./flags/fACthEfg.svg");

/* loaded by smart-asset */
var s$2F = require("./flags/XegmKRZc.svg");

var NG = {
  l: l$2F,
  m: m$2F,
  s: s$2F
};

/* loaded by smart-asset */
var l$2G = require("./flags/bodcURPS.svg");

/* loaded by smart-asset */
var m$2G = require("./flags/eZJEahYf.svg");

/* loaded by smart-asset */
var s$2G = require("./flags/eMlvvRSZ.svg");

var NI = {
  l: l$2G,
  m: m$2G,
  s: s$2G
};

/* loaded by smart-asset */
var l$2H = require("./flags/eRAEcZhA.svg");

/* loaded by smart-asset */
var m$2H = require("./flags/caLEmnDb.svg");

/* loaded by smart-asset */
var s$2H = require("./flags/meXTULYl.svg");

var NL = {
  l: l$2H,
  m: m$2H,
  s: s$2H
};

/* loaded by smart-asset */
var l$2I = require("./flags/fdovizIy.svg");

/* loaded by smart-asset */
var m$2I = require("./flags/eXQKoenm.svg");

/* loaded by smart-asset */
var s$2I = require("./flags/ebtQTiHx.svg");

var NO = {
  l: l$2I,
  m: m$2I,
  s: s$2I
};

/* loaded by smart-asset */
var l$2J = require("./flags/dANjEFCi.svg");

/* loaded by smart-asset */
var m$2J = require("./flags/bAOwYYOS.svg");

/* loaded by smart-asset */
var s$2J = require("./flags/cvmGbOHe.svg");

var NP = {
  l: l$2J,
  m: m$2J,
  s: s$2J
};

/* loaded by smart-asset */
var l$2K = require("./flags/daJzgruS.svg");

/* loaded by smart-asset */
var m$2K = require("./flags/fGlwDuGz.svg");

/* loaded by smart-asset */
var s$2K = require("./flags/bGSnJmaf.svg");

var NR = {
  l: l$2K,
  m: m$2K,
  s: s$2K
};

/* loaded by smart-asset */
var l$2L = require("./flags/dvOMiNIB.svg");

/* loaded by smart-asset */
var m$2L = require("./flags/GemnJbVW.svg");

/* loaded by smart-asset */
var s$2L = require("./flags/fRMSyWFt.svg");

var NU = {
  l: l$2L,
  m: m$2L,
  s: s$2L
};

/* loaded by smart-asset */
var l$2M = require("./flags/hbGRbewO.svg");

/* loaded by smart-asset */
var m$2M = require("./flags/YsTWZhlg.svg");

/* loaded by smart-asset */
var s$2M = require("./flags/eEimpfaz.svg");

var NZ = {
  l: l$2M,
  m: m$2M,
  s: s$2M
};

/* loaded by smart-asset */
var l$2N = require("./flags/FEOuLyzt.svg");

/* loaded by smart-asset */
var m$2N = require("./flags/eyoiEHzc.svg");

/* loaded by smart-asset */
var s$2N = require("./flags/diOVOdYO.svg");

var OM = {
  l: l$2N,
  m: m$2N,
  s: s$2N
};

/* loaded by smart-asset */
var l$2O = require("./flags/dWbstsVW.svg");

/* loaded by smart-asset */
var m$2O = require("./flags/fpYUAqiH.svg");

/* loaded by smart-asset */
var s$2O = require("./flags/ejTOhLIJ.svg");

var PA = {
  l: l$2O,
  m: m$2O,
  s: s$2O
};

/* loaded by smart-asset */
var l$2P = require("./flags/cyidAZKi.svg");

/* loaded by smart-asset */
var m$2P = require("./flags/JOeDBJSA.svg");

/* loaded by smart-asset */
var s$2P = require("./flags/cFDnxZVe.svg");

var PE = {
  l: l$2P,
  m: m$2P,
  s: s$2P
};

/* loaded by smart-asset */
var l$2Q = require("./flags/dTUrWEKD.svg");

/* loaded by smart-asset */
var m$2Q = require("./flags/LeSfzGZj.svg");

/* loaded by smart-asset */
var s$2Q = require("./flags/ytRMxmSV.svg");

var PF = {
  l: l$2Q,
  m: m$2Q,
  s: s$2Q
};

/* loaded by smart-asset */
var l$2R = require("./flags/cJEYTPhh.svg");

/* loaded by smart-asset */
var m$2R = require("./flags/fGtTYsqt.svg");

/* loaded by smart-asset */
var s$2R = require("./flags/eDPQtHnd.svg");

var PG = {
  l: l$2R,
  m: m$2R,
  s: s$2R
};

/* loaded by smart-asset */
var l$2S = require("./flags/bRQBZdWU.svg");

/* loaded by smart-asset */
var m$2S = require("./flags/feHduHPD.svg");

/* loaded by smart-asset */
var s$2S = require("./flags/bjhhNvJS.svg");

var PH = {
  l: l$2S,
  m: m$2S,
  s: s$2S
};

/* loaded by smart-asset */
var l$2T = require("./flags/dXqmyKuY.svg");

/* loaded by smart-asset */
var m$2T = require("./flags/feiyCVhN.svg");

/* loaded by smart-asset */
var s$2T = require("./flags/cJrrlRCk.svg");

var PK = {
  l: l$2T,
  m: m$2T,
  s: s$2T
};

/* loaded by smart-asset */
var l$2U = require("./flags/vokoZJjd.svg");

/* loaded by smart-asset */
var m$2U = require("./flags/dKZDfDXW.svg");

/* loaded by smart-asset */
var s$2U = require("./flags/brTQciJy.svg");

var PL = {
  l: l$2U,
  m: m$2U,
  s: s$2U
};

/* loaded by smart-asset */
var l$2V = require("./flags/dSaTQEoc.svg");

/* loaded by smart-asset */
var m$2V = require("./flags/dfvbXKxd.svg");

/* loaded by smart-asset */
var s$2V = require("./flags/lVJMvFpv.svg");

var PM = {
  l: l$2V,
  m: m$2V,
  s: s$2V
};

/* loaded by smart-asset */
var l$2W = require("./flags/bUvdkdVB.svg");

/* loaded by smart-asset */
var m$2W = require("./flags/etGgcFWY.svg");

/* loaded by smart-asset */
var s$2W = require("./flags/rJWrlnMk.svg");

var PN = {
  l: l$2W,
  m: m$2W,
  s: s$2W
};

/* loaded by smart-asset */
var l$2X = require("./flags/dufneFyG.svg");

/* loaded by smart-asset */
var m$2X = require("./flags/djZLrtVd.svg");

/* loaded by smart-asset */
var s$2X = require("./flags/MJHSFKxF.svg");

var PR = {
  l: l$2X,
  m: m$2X,
  s: s$2X
};

/* loaded by smart-asset */
var l$2Y = require("./flags/ckZACQRH.svg");

/* loaded by smart-asset */
var m$2Y = require("./flags/eIqyGHgO.svg");

/* loaded by smart-asset */
var s$2Y = require("./flags/eyGQKiPP.svg");

var PS = {
  l: l$2Y,
  m: m$2Y,
  s: s$2Y
};

/* loaded by smart-asset */
var l$2Z = require("./flags/csOdMlOo.svg");

/* loaded by smart-asset */
var m$2Z = require("./flags/cNxlgNzq.svg");

/* loaded by smart-asset */
var s$2Z = require("./flags/dnTxaMLo.svg");

var PT = {
  l: l$2Z,
  m: m$2Z,
  s: s$2Z
};

/* loaded by smart-asset */
var l$2_ = require("./flags/bwVkJvws.svg");

/* loaded by smart-asset */
var m$2_ = require("./flags/dGJhAAMb.svg");

/* loaded by smart-asset */
var s$2_ = require("./flags/cVZAuJiw.svg");

var PW = {
  l: l$2_,
  m: m$2_,
  s: s$2_
};

/* loaded by smart-asset */
var l$2$ = require("./flags/bmfPzBxf.svg");

/* loaded by smart-asset */
var m$2$ = require("./flags/fJRntPjf.svg");

/* loaded by smart-asset */
var s$2$ = require("./flags/fgKAyqtr.svg");

var PY = {
  l: l$2$,
  m: m$2$,
  s: s$2$
};

/* loaded by smart-asset */
var l$30 = require("./flags/dgoyBNwf.svg");

/* loaded by smart-asset */
var m$30 = require("./flags/fCPoeYsZ.svg");

/* loaded by smart-asset */
var s$30 = require("./flags/cLcrfmyu.svg");

var QA = {
  l: l$30,
  m: m$30,
  s: s$30
};

/* loaded by smart-asset */
var l$31 = require("./flags/bAqZhbvx.svg");

/* loaded by smart-asset */
var m$31 = require("./flags/fdGwrDtJ.svg");

/* loaded by smart-asset */
var s$31 = require("./flags/fRcPylSu.svg");

var RAINBOW = {
  l: l$31,
  m: m$31,
  s: s$31
};

/* loaded by smart-asset */
var l$32 = require("./flags/ehsySCdU.svg");

/* loaded by smart-asset */
var m$32 = require("./flags/WJIfElYV.svg");

/* loaded by smart-asset */
var s$32 = require("./flags/bmgnYWyO.svg");

var RE = {
  l: l$32,
  m: m$32,
  s: s$32
};

/* loaded by smart-asset */
var l$33 = require("./flags/eZzxUEsD.svg");

/* loaded by smart-asset */
var m$33 = require("./flags/bvhABlQN.svg");

/* loaded by smart-asset */
var s$33 = require("./flags/ernnjEJk.svg");

var RO = {
  l: l$33,
  m: m$33,
  s: s$33
};

/* loaded by smart-asset */
var l$34 = require("./flags/fZAAVzSY.svg");

/* loaded by smart-asset */
var m$34 = require("./flags/ZiTgTxsF.svg");

/* loaded by smart-asset */
var s$34 = require("./flags/jUqGmSqN.svg");

var RS = {
  l: l$34,
  m: m$34,
  s: s$34
};

/* loaded by smart-asset */
var l$35 = require("./flags/eWePoiEm.svg");

/* loaded by smart-asset */
var m$35 = require("./flags/cZIaYJtS.svg");

/* loaded by smart-asset */
var s$35 = require("./flags/bcgRGKQk.svg");

var RU = {
  l: l$35,
  m: m$35,
  s: s$35
};

/* loaded by smart-asset */
var l$36 = require("./flags/eYSjAXPN.svg");

/* loaded by smart-asset */
var m$36 = require("./flags/BVkdfqhz.svg");

/* loaded by smart-asset */
var s$36 = require("./flags/dOviCkPB.svg");

var RW = {
  l: l$36,
  m: m$36,
  s: s$36
};

/* loaded by smart-asset */
var l$37 = require("./flags/eQzfSdkP.svg");

/* loaded by smart-asset */
var m$37 = require("./flags/bZLyQxZI.svg");

/* loaded by smart-asset */
var s$37 = require("./flags/BFcWMhVB.svg");

var SA = {
  l: l$37,
  m: m$37,
  s: s$37
};

/* loaded by smart-asset */
var l$38 = require("./flags/dBsEUqXI.svg");

/* loaded by smart-asset */
var m$38 = require("./flags/cbEwLGlW.svg");

/* loaded by smart-asset */
var s$38 = require("./flags/dbCBwaXr.svg");

var SB = {
  l: l$38,
  m: m$38,
  s: s$38
};

/* loaded by smart-asset */
var l$39 = require("./flags/dKkWrekj.svg");

/* loaded by smart-asset */
var m$39 = require("./flags/fUJUTcTl.svg");

/* loaded by smart-asset */
var s$39 = require("./flags/esXVRRNQ.svg");

var SC = {
  l: l$39,
  m: m$39,
  s: s$39
};

/* loaded by smart-asset */
var l$3a = require("./flags/ysxRJGvb.svg");

/* loaded by smart-asset */
var m$3a = require("./flags/bPGJFcPd.svg");

/* loaded by smart-asset */
var s$3a = require("./flags/ciPgNiSU.svg");

var SD = {
  l: l$3a,
  m: m$3a,
  s: s$3a
};

/* loaded by smart-asset */
var l$3b = require("./flags/fJwnLTZi.svg");

/* loaded by smart-asset */
var m$3b = require("./flags/bSofocue.svg");

/* loaded by smart-asset */
var s$3b = require("./flags/gYSxopTy.svg");

var SE = {
  l: l$3b,
  m: m$3b,
  s: s$3b
};

/* loaded by smart-asset */
var l$3c = require("./flags/bmwUcnvO.svg");

/* loaded by smart-asset */
var m$3c = require("./flags/chZEsCda.svg");

/* loaded by smart-asset */
var s$3c = require("./flags/ftflfzkr.svg");

var SG = {
  l: l$3c,
  m: m$3c,
  s: s$3c
};

/* loaded by smart-asset */
var l$3d = require("./flags/fWRKHHso.svg");

/* loaded by smart-asset */
var m$3d = require("./flags/bspJxVXE.svg");

/* loaded by smart-asset */
var s$3d = require("./flags/kNtkrUft.svg");

var SH = {
  l: l$3d,
  m: m$3d,
  s: s$3d
};

/* loaded by smart-asset */
var l$3e = require("./flags/fWdQVDvZ.svg");

/* loaded by smart-asset */
var m$3e = require("./flags/fyUKikBS.svg");

/* loaded by smart-asset */
var s$3e = require("./flags/cfiGcDAA.svg");

var SI = {
  l: l$3e,
  m: m$3e,
  s: s$3e
};

/* loaded by smart-asset */
var l$3f = require("./flags/fdovizIy.svg");

/* loaded by smart-asset */
var m$3f = require("./flags/eXQKoenm.svg");

/* loaded by smart-asset */
var s$3f = require("./flags/ebtQTiHx.svg");

var SJ = {
  l: l$3f,
  m: m$3f,
  s: s$3f
};

/* loaded by smart-asset */
var l$3g = require("./flags/hvVVNogC.svg");

/* loaded by smart-asset */
var m$3g = require("./flags/ckFBtRBH.svg");

/* loaded by smart-asset */
var s$3g = require("./flags/bpPLmdCf.svg");

var SK = {
  l: l$3g,
  m: m$3g,
  s: s$3g
};

/* loaded by smart-asset */
var l$3h = require("./flags/dLOUVfNl.svg");

/* loaded by smart-asset */
var m$3h = require("./flags/eWWMgafY.svg");

/* loaded by smart-asset */
var s$3h = require("./flags/bxNqSvTm.svg");

var SL = {
  l: l$3h,
  m: m$3h,
  s: s$3h
};

/* loaded by smart-asset */
var l$3i = require("./flags/cEgbwuEB.svg");

/* loaded by smart-asset */
var m$3i = require("./flags/eYKJOGtp.svg");

/* loaded by smart-asset */
var s$3i = require("./flags/dSbGYXbE.svg");

var SM = {
  l: l$3i,
  m: m$3i,
  s: s$3i
};

/* loaded by smart-asset */
var l$3j = require("./flags/GPSMNDeC.svg");

/* loaded by smart-asset */
var m$3j = require("./flags/cSwbiBuA.svg");

/* loaded by smart-asset */
var s$3j = require("./flags/cKfFkyQq.svg");

var SN = {
  l: l$3j,
  m: m$3j,
  s: s$3j
};

/* loaded by smart-asset */
var l$3k = require("./flags/fEqMkzZG.svg");

/* loaded by smart-asset */
var m$3k = require("./flags/dPiXcgJJ.svg");

/* loaded by smart-asset */
var s$3k = require("./flags/daIlUNus.svg");

var SO = {
  l: l$3k,
  m: m$3k,
  s: s$3k
};

/* loaded by smart-asset */
var l$3l = require("./flags/rQwCmnIC.svg");

/* loaded by smart-asset */
var m$3l = require("./flags/dCUgDUvR.svg");

/* loaded by smart-asset */
var s$3l = require("./flags/edylFAOk.svg");

var SR = {
  l: l$3l,
  m: m$3l,
  s: s$3l
};

/* loaded by smart-asset */
var l$3m = require("./flags/bHoUHLqb.svg");

/* loaded by smart-asset */
var m$3m = require("./flags/cLJmNDiq.svg");

/* loaded by smart-asset */
var s$3m = require("./flags/eamedPRp.svg");

var SS = {
  l: l$3m,
  m: m$3m,
  s: s$3m
};

/* loaded by smart-asset */
var l$3n = require("./flags/ZIIJsDbr.svg");

/* loaded by smart-asset */
var m$3n = require("./flags/jSntAAkR.svg");

/* loaded by smart-asset */
var s$3n = require("./flags/wqjeNWzo.svg");

var ST = {
  l: l$3n,
  m: m$3n,
  s: s$3n
};

/* loaded by smart-asset */
var l$3o = require("./flags/cttgrDBC.svg");

/* loaded by smart-asset */
var m$3o = require("./flags/fGaSGCFJ.svg");

/* loaded by smart-asset */
var s$3o = require("./flags/FjaRvmXQ.svg");

var SV = {
  l: l$3o,
  m: m$3o,
  s: s$3o
};

/* loaded by smart-asset */
var l$3p = require("./flags/dUSAsnXk.svg");

/* loaded by smart-asset */
var m$3p = require("./flags/bqbcucNb.svg");

/* loaded by smart-asset */
var s$3p = require("./flags/cuPzhkBZ.svg");

var SX = {
  l: l$3p,
  m: m$3p,
  s: s$3p
};

/* loaded by smart-asset */
var l$3q = require("./flags/cRDdeDnE.svg");

/* loaded by smart-asset */
var m$3q = require("./flags/eKceeXBj.svg");

/* loaded by smart-asset */
var s$3q = require("./flags/bsXWsXse.svg");

var SY = {
  l: l$3q,
  m: m$3q,
  s: s$3q
};

/* loaded by smart-asset */
var l$3r = require("./flags/criPJrIF.svg");

/* loaded by smart-asset */
var m$3r = require("./flags/cdoeyhsb.svg");

/* loaded by smart-asset */
var s$3r = require("./flags/dMwmjSLr.svg");

var SZ = {
  l: l$3r,
  m: m$3r,
  s: s$3r
};

/* loaded by smart-asset */
var l$3s = require("./flags/oqGuZVLi.svg");

/* loaded by smart-asset */
var m$3s = require("./flags/cvkLhiKX.svg");

/* loaded by smart-asset */
var s$3s = require("./flags/dRlneTAo.svg");

var TC = {
  l: l$3s,
  m: m$3s,
  s: s$3s
};

/* loaded by smart-asset */
var l$3t = require("./flags/fQmVWXUY.svg");

/* loaded by smart-asset */
var m$3t = require("./flags/bJVIlPhd.svg");

/* loaded by smart-asset */
var s$3t = require("./flags/dQZExAkk.svg");

var TD = {
  l: l$3t,
  m: m$3t,
  s: s$3t
};

/* loaded by smart-asset */
var l$3u = require("./flags/fLBBfmsh.svg");

/* loaded by smart-asset */
var m$3u = require("./flags/fxdLLmqa.svg");

/* loaded by smart-asset */
var s$3u = require("./flags/fBayjdtZ.svg");

var TF = {
  l: l$3u,
  m: m$3u,
  s: s$3u
};

/* loaded by smart-asset */
var l$3v = require("./flags/epGLdXBT.svg");

/* loaded by smart-asset */
var m$3v = require("./flags/essScqpI.svg");

/* loaded by smart-asset */
var s$3v = require("./flags/eVZmDXRU.svg");

var TG = {
  l: l$3v,
  m: m$3v,
  s: s$3v
};

/* loaded by smart-asset */
var l$3w = require("./flags/dprrvuNN.svg");

/* loaded by smart-asset */
var m$3w = require("./flags/ewfSamkE.svg");

/* loaded by smart-asset */
var s$3w = require("./flags/qfAFkFIG.svg");

var TH = {
  l: l$3w,
  m: m$3w,
  s: s$3w
};

/* loaded by smart-asset */
var l$3x = require("./flags/djkXeEAP.svg");

/* loaded by smart-asset */
var m$3x = require("./flags/eykPXJZE.svg");

/* loaded by smart-asset */
var s$3x = require("./flags/drkrwuwc.svg");

var TJ = {
  l: l$3x,
  m: m$3x,
  s: s$3x
};

/* loaded by smart-asset */
var l$3y = require("./flags/sYbstbvi.svg");

/* loaded by smart-asset */
var m$3y = require("./flags/ccrsotIC.svg");

/* loaded by smart-asset */
var s$3y = require("./flags/bDgQdgYd.svg");

var TK = {
  l: l$3y,
  m: m$3y,
  s: s$3y
};

/* loaded by smart-asset */
var l$3z = require("./flags/fhQXuvHC.svg");

/* loaded by smart-asset */
var m$3z = require("./flags/fBlWwoiF.svg");

/* loaded by smart-asset */
var s$3z = require("./flags/fkwZlAKt.svg");

var TL = {
  l: l$3z,
  m: m$3z,
  s: s$3z
};

/* loaded by smart-asset */
var l$3A = require("./flags/fhqLuBul.svg");

/* loaded by smart-asset */
var m$3A = require("./flags/ciUkbQft.svg");

/* loaded by smart-asset */
var s$3A = require("./flags/byqwPCZM.svg");

var TM = {
  l: l$3A,
  m: m$3A,
  s: s$3A
};

/* loaded by smart-asset */
var l$3B = require("./flags/CKDipwmL.svg");

/* loaded by smart-asset */
var m$3B = require("./flags/jJhaICvG.svg");

/* loaded by smart-asset */
var s$3B = require("./flags/dygTYVUG.svg");

var TN = {
  l: l$3B,
  m: m$3B,
  s: s$3B
};

/* loaded by smart-asset */
var l$3C = require("./flags/bhyrfsqQ.svg");

/* loaded by smart-asset */
var m$3C = require("./flags/doHtMslL.svg");

/* loaded by smart-asset */
var s$3C = require("./flags/fgKDHLjo.svg");

var TO = {
  l: l$3C,
  m: m$3C,
  s: s$3C
};

/* loaded by smart-asset */
var l$3D = require("./flags/bTPMDUdR.svg");

/* loaded by smart-asset */
var m$3D = require("./flags/ddJFVQvl.svg");

/* loaded by smart-asset */
var s$3D = require("./flags/bUCYANnb.svg");

var TR = {
  l: l$3D,
  m: m$3D,
  s: s$3D
};

/* loaded by smart-asset */
var l$3E = require("./flags/esfmrFNd.svg");

/* loaded by smart-asset */
var m$3E = require("./flags/cdIvQQkz.svg");

/* loaded by smart-asset */
var s$3E = require("./flags/enNDZsCr.svg");

var TT = {
  l: l$3E,
  m: m$3E,
  s: s$3E
};

/* loaded by smart-asset */
var l$3F = require("./flags/cmJQPtLU.svg");

/* loaded by smart-asset */
var m$3F = require("./flags/cgcCZWiH.svg");

/* loaded by smart-asset */
var s$3F = require("./flags/SuvlHZSS.svg");

var TV = {
  l: l$3F,
  m: m$3F,
  s: s$3F
};

/* loaded by smart-asset */
var l$3G = require("./flags/cSsUohWA.svg");

/* loaded by smart-asset */
var m$3G = require("./flags/cfXDIsml.svg");

/* loaded by smart-asset */
var s$3G = require("./flags/ckiNShtF.svg");

var TW = {
  l: l$3G,
  m: m$3G,
  s: s$3G
};

/* loaded by smart-asset */
var l$3H = require("./flags/eclLRBmB.svg");

/* loaded by smart-asset */
var m$3H = require("./flags/cAeYgdCL.svg");

/* loaded by smart-asset */
var s$3H = require("./flags/cYwcpAGF.svg");

var TZ = {
  l: l$3H,
  m: m$3H,
  s: s$3H
};

/* loaded by smart-asset */
var l$3I = require("./flags/bnaiAmAg.svg");

/* loaded by smart-asset */
var m$3I = require("./flags/dqynmwoN.svg");

/* loaded by smart-asset */
var s$3I = require("./flags/eetlienG.svg");

var UA = {
  l: l$3I,
  m: m$3I,
  s: s$3I
};

/* loaded by smart-asset */
var l$3J = require("./flags/eupykZmH.svg");

/* loaded by smart-asset */
var m$3J = require("./flags/LkwnbOcg.svg");

/* loaded by smart-asset */
var s$3J = require("./flags/dcqHPCXJ.svg");

var UG = {
  l: l$3J,
  m: m$3J,
  s: s$3J
};

/* loaded by smart-asset */
var l$3K = require("./flags/edxkKXkB.svg");

/* loaded by smart-asset */
var m$3K = require("./flags/chaomkTg.svg");

/* loaded by smart-asset */
var s$3K = require("./flags/cATpjFaf.svg");

var UM = {
  l: l$3K,
  m: m$3K,
  s: s$3K
};

/* loaded by smart-asset */
var l$3L = require("./flags/bBiWxTbJ.svg");

/* loaded by smart-asset */
var m$3L = require("./flags/buFJPpQu.svg");

/* loaded by smart-asset */
var s$3L = require("./flags/bluKTASh.svg");

var UNASUR = {
  l: l$3L,
  m: m$3L,
  s: s$3L
};

/* loaded by smart-asset */
var l$3M = require("./flags/bmKkjAbp.svg");

/* loaded by smart-asset */
var m$3M = require("./flags/chaomkTg.svg");

/* loaded by smart-asset */
var s$3M = require("./flags/cATpjFaf.svg");

var US = {
  l: l$3M,
  m: m$3M,
  s: s$3M
};

/* loaded by smart-asset */
var l$3N = require("./flags/emdrhslQ.svg");

/* loaded by smart-asset */
var m$3N = require("./flags/eOAzTdyO.svg");

/* loaded by smart-asset */
var s$3N = require("./flags/dwuleaXr.svg");

var UY = {
  l: l$3N,
  m: m$3N,
  s: s$3N
};

/* loaded by smart-asset */
var l$3O = require("./flags/eZgWElMX.svg");

/* loaded by smart-asset */
var m$3O = require("./flags/gMMVgPyl.svg");

/* loaded by smart-asset */
var s$3O = require("./flags/fAehyNSm.svg");

var UZ = {
  l: l$3O,
  m: m$3O,
  s: s$3O
};

/* loaded by smart-asset */
var l$3P = require("./flags/dXcnUzzK.svg");

/* loaded by smart-asset */
var m$3P = require("./flags/bSVpUhEM.svg");

/* loaded by smart-asset */
var s$3P = require("./flags/fuENfRto.svg");

var VA = {
  l: l$3P,
  m: m$3P,
  s: s$3P
};

/* loaded by smart-asset */
var l$3Q = require("./flags/qXEzuUfv.svg");

/* loaded by smart-asset */
var m$3Q = require("./flags/bMXhWwPr.svg");

/* loaded by smart-asset */
var s$3Q = require("./flags/eFvpTxUv.svg");

var VC = {
  l: l$3Q,
  m: m$3Q,
  s: s$3Q
};

/* loaded by smart-asset */
var l$3R = require("./flags/ejDKtJGM.svg");

/* loaded by smart-asset */
var m$3R = require("./flags/omAAyAgq.svg");

/* loaded by smart-asset */
var s$3R = require("./flags/eLwLEmIm.svg");

var VE = {
  l: l$3R,
  m: m$3R,
  s: s$3R
};

/* loaded by smart-asset */
var l$3S = require("./flags/cicJdpgN.svg");

/* loaded by smart-asset */
var m$3S = require("./flags/fXUQtTSX.svg");

/* loaded by smart-asset */
var s$3S = require("./flags/fjZEONGD.svg");

var VG = {
  l: l$3S,
  m: m$3S,
  s: s$3S
};

/* loaded by smart-asset */
var l$3T = require("./flags/bJxCnhYu.svg");

/* loaded by smart-asset */
var m$3T = require("./flags/icNqhmxr.svg");

/* loaded by smart-asset */
var s$3T = require("./flags/fJUastgk.svg");

var VI = {
  l: l$3T,
  m: m$3T,
  s: s$3T
};

/* loaded by smart-asset */
var l$3U = require("./flags/jkXTYkaF.svg");

/* loaded by smart-asset */
var m$3U = require("./flags/xmcwRxBO.svg");

/* loaded by smart-asset */
var s$3U = require("./flags/cAneiPSG.svg");

var VN = {
  l: l$3U,
  m: m$3U,
  s: s$3U
};

/* loaded by smart-asset */
var l$3V = require("./flags/sPXEyjkw.svg");

/* loaded by smart-asset */
var m$3V = require("./flags/bRPNPaGa.svg");

/* loaded by smart-asset */
var s$3V = require("./flags/XxHolDlY.svg");

var VU = {
  l: l$3V,
  m: m$3V,
  s: s$3V
};

/* loaded by smart-asset */
var l$3W = require("./flags/dSaTQEoc.svg");

/* loaded by smart-asset */
var m$3W = require("./flags/dfvbXKxd.svg");

/* loaded by smart-asset */
var s$3W = require("./flags/lVJMvFpv.svg");

var WF = {
  l: l$3W,
  m: m$3W,
  s: s$3W
};

/* loaded by smart-asset */
var l$3X = require("./flags/cyZwFdYs.svg");

/* loaded by smart-asset */
var m$3X = require("./flags/ehihBpBP.svg");

/* loaded by smart-asset */
var s$3X = require("./flags/egelvGMk.svg");

var WS = {
  l: l$3X,
  m: m$3X,
  s: s$3X
};

/* loaded by smart-asset */
var l$3Y = require("./flags/fRXBDINR.svg");

/* loaded by smart-asset */
var m$3Y = require("./flags/cMsacaQG.svg");

/* loaded by smart-asset */
var s$3Y = require("./flags/eKmJQTJm.svg");

var YE = {
  l: l$3Y,
  m: m$3Y,
  s: s$3Y
};

/* loaded by smart-asset */
var l$3Z = require("./flags/bTUuvuPG.svg");

/* loaded by smart-asset */
var m$3Z = require("./flags/fUywdETQ.svg");

/* loaded by smart-asset */
var s$3Z = require("./flags/xkhmLnIK.svg");

var ZA = {
  l: l$3Z,
  m: m$3Z,
  s: s$3Z
};

/* loaded by smart-asset */
var l$3_ = require("./flags/eSEGsTkv.svg");

/* loaded by smart-asset */
var m$3_ = require("./flags/bnPyEAXX.svg");

/* loaded by smart-asset */
var s$3_ = require("./flags/fvFFjbWB.svg");

var ZM = {
  l: l$3_,
  m: m$3_,
  s: s$3_
};

/* loaded by smart-asset */
var l$3$ = require("./flags/btgICCdf.svg");

/* loaded by smart-asset */
var m$3$ = require("./flags/blozoNsm.svg");

/* loaded by smart-asset */
var s$3$ = require("./flags/fplFLmeB.svg");

var ZW = {
  l: l$3$,
  m: m$3$,
  s: s$3$
};

/* loaded by smart-asset */
var l$40 = require("./flags/dHeVdGKV.svg");

/* loaded by smart-asset */
var m$40 = require("./flags/eeAaZDCe.svg");

/* loaded by smart-asset */
var s$40 = require("./flags/bhtTvBNM.svg");

var AF = {
  l: l$40,
  m: m$40,
  s: s$40
};

/* loaded by smart-asset */
var l$41 = require("./flags/fdovizIy.svg");

/* loaded by smart-asset */
var m$41 = require("./flags/eXQKoenm.svg");

/* loaded by smart-asset */
var s$41 = require("./flags/ebtQTiHx.svg");

var BV = {
  l: l$41,
  m: m$41,
  s: s$41
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
  GB_ENG: GB_ENG,
  GB_SCT: GB_SCT,
  GB_UKM: GB_UKM,
  GB_WLS: GB_WLS,
  GB_NIR: GB_NIR,
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
  GQ: GQ,
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
  KN_SK: KN_SK,
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
  UNASUR: UNASUR,
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
  ZA: ZA,
  ZM: ZM,
  ZW: ZW,
  AF: AF,
  BV: BV
};

function isoToCountryCode(isoCode) {
  var keyToGet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'alpha2';

  if (isoCode !== undefined) {
    var alpha2Code = codeList.find(function (countryObj) {
      return countryObj.alpha2 === isoCode || countryObj.alpha3 === isoCode || countryObj.numeric === isoCode;
    })[keyToGet];
    return alpha2Code;
  }

  throw new Error('This code returns undefined, see https://www.flagpack.xyz/docs/flag-index for all the available codes.');
}

function imageUrl(assetCode, size) {
  var formatAssetCode = assetCode.replace('-', '_');

  try {
    return flags[formatAssetCode][size];
  } catch (_unused) {
    throw new Error("No flag found for ".concat(assetCode, " / size ").concat(size));
  }
}

exports.codeList = codeList;
exports.flags = flags;
exports.imageUrl = imageUrl;
exports.isoToCountryCode = isoToCountryCode;
