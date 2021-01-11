'use strict';Object.defineProperty(exports,'__esModule',{value:true});var codeList = [{countryName:"Andorra",alpha2:"AD",alpha3:"AND",numeric:"020"},{countryName:"United Arab Emirates",alpha2:"AE",alpha3:"ARE",numeric:"784"},{countryName:"African Union",alpha2:"AFRUN",alpha3:"",numeric:""},{countryName:"Antigua and Barbuda",alpha2:"AG",alpha3:"ATG",numeric:"028"},{countryName:"Anguilla",alpha2:"AI",alpha3:"AIA",numeric:"660"},{countryName:"Albania",alpha2:"AL",alpha3:"ALB",numeric:"008"},{countryName:"Amernia",alpha2:"AM",alpha3:"ARM",numeric:"051"},{countryName:"Amsterdam",alpha2:"AMS",alpha3:"",numeric:""},{countryName:"Angola",alpha2:"AO",alpha3:"AGO",numeric:"024"},{countryName:"Antartctica",alpha2:"AQ",alpha3:"ATA",numeric:"010"},{countryName:"Argentina",alpha2:"AR",alpha3:"ARG",numeric:"032"},{countryName:"American Samoa",alpha2:"AS",alpha3:"ASM",numeric:"016"},{countryName:"Austria",alpha2:"AT",alpha3:"AUT",numeric:"040"},{countryName:"Australia",alpha2:"AU",alpha3:"AUS",numeric:"016"},{countryName:"Aruba",alpha2:"AW",alpha3:"ABW",numeric:"533"},{countryName:"Åland Islands",alpha2:"AX",alpha3:"ALA",numeric:"248"},{countryName:"Azerbaijan",alpha2:"AZ",alpha3:"AZE",numeric:"031"},{countryName:"Bosnia and Herzegovina",alpha2:"BA",alpha3:"BIH",numeric:"070"},{countryName:"Barbados",alpha2:"BB",alpha3:"BRB",numeric:"052"},{countryName:"Bangladesh",alpha2:"BD",alpha3:"BGD",numeric:"050"},{countryName:"Belgium",alpha2:"BE",alpha3:"BEL",numeric:"056"},{countryName:"Burkina Faso",alpha2:"BF",alpha3:"BFA",numeric:"854"},{countryName:"Bulgaria",alpha2:"BG",alpha3:"BGR",numeric:"100"},{countryName:"Bahrain",alpha2:"BH",alpha3:"BHR",numeric:"048"},{countryName:"Burundi",alpha2:"BI",alpha3:"BDI",numeric:"108"},{countryName:"Benin",alpha2:"BJ",alpha3:"BEN",numeric:"204"},{countryName:"Saint Barthélemy",alpha2:"BL",alpha3:"BLM",numeric:"652"},{countryName:"Bermuda",alpha2:"BM",alpha3:"BMU",numeric:"060"},{countryName:"Brunei",alpha2:"BN",alpha3:"BRN",numeric:"096"},{countryName:"Bolivia",alpha2:"BO",alpha3:"BOL",numeric:"068"},{countryName:"Bonaire",alpha2:"BQ-BO",alpha3:"",numeric:""},{countryName:"Saba",alpha2:"BQ-SA",alpha3:"",numeric:""},{countryName:"Sint Eustatius",alpha2:"BQ-SE",alpha3:"",numeric:""},{countryName:"Brazil",alpha2:"BR",alpha3:"BRA",numeric:"076"},{countryName:"Bahamas",alpha2:"BS",alpha3:"BHS",numeric:"044"},{countryName:"Bhutan",alpha2:"BT",alpha3:"BTN",numeric:"064"},{countryName:"Botswana",alpha2:"BW",alpha3:"BWA",numeric:"072"},{countryName:"Belarus",alpha2:"BY",alpha3:"BLR",numeric:"112"},{countryName:"Belize",alpha2:"BZ",alpha3:"BLZ",numeric:"084"},{countryName:"Canada",alpha2:"CA",alpha3:"CAN",numeric:"124"},{countryName:"Cocos Islands",alpha2:"CC",alpha3:"CCK",numeric:"166"},{countryName:"Democratis Republic of Congo",alpha2:"CD",alpha3:"COD",numeric:"180"},{countryName:"Central African Republic",alpha2:"CF",alpha3:"CAF",numeric:"140"},{countryName:"Congo",alpha2:"CG",alpha3:"COG",numeric:"178"},{countryName:"Switzerland",alpha2:"CH",alpha3:"CHE",numeric:"756"},{countryName:"Côte d'Ivoire",alpha2:"CI",alpha3:"CIV",numeric:"384"},{countryName:"Cook Island",alpha2:"CK",alpha3:"COK",numeric:"184"},{countryName:"Chile",alpha2:"CL",alpha3:"CHL",numeric:"152"},{countryName:"Cameroon",alpha2:"CM",alpha3:"CMR",numeric:"120"},{countryName:"China",alpha2:"CN",alpha3:"CHN",numeric:"156"},{countryName:"Colombia",alpha2:"CO",alpha3:"COL",numeric:"170"},{countryName:"Costa Rica",alpha2:"CR",alpha3:"CRI",numeric:"188"},{countryName:"Cuba",alpha2:"CU",alpha3:"CUB",numeric:"192"},{countryName:"Cape Verde",alpha2:"CV",alpha3:"CPV",numeric:"132"},{countryName:"Curaçao",alpha2:"CW",alpha3:"CUW",numeric:"531"},{countryName:"Christmas Island",alpha2:"CX",alpha3:"CXR",numeric:"162"},{countryName:"Cyprus",alpha2:"CY",alpha3:"CYP",numeric:"196"},{countryName:"Czech Republic",alpha2:"CZ",alpha3:"CZE",numeric:"203"},{countryName:"Germany",alpha2:"DE",alpha3:"DEU",numeric:"276"},{countryName:"Djibouti",alpha2:"DJ",alpha3:"DJI",numeric:"262"},{countryName:"Denmark",alpha2:"DK",alpha3:"DNK",numeric:"208"},{countryName:"Dominica",alpha2:"DM",alpha3:"DMA",numeric:"212"},{countryName:"Dominican Republic",alpha2:"DO",alpha3:"DOM",numeric:"214"},{countryName:"Ecuador",alpha2:"EC",alpha3:"ECU",numeric:"218"},{countryName:"Estonia",alpha2:"EE",alpha3:"EST",numeric:"233"},{countryName:"Egypt",alpha2:"EG",alpha3:"EGY",numeric:"818"},{countryName:"Western Sahara",alpha2:"EH",alpha3:"ESH",numeric:"732"},{countryName:"Eritrea",alpha2:"ER",alpha3:"ERI",numeric:"232"},{countryName:"Spain",alpha2:"ES",alpha3:"ESP",numeric:"724"},{countryName:"Ethiopia",alpha2:"ET",alpha3:"ETH",numeric:"231"},{countryName:"European Union",alpha2:"EU",alpha3:"",numeric:""},{countryName:"Finland",alpha2:"FI",alpha3:"FIN",numeric:"246"},{countryName:"Fiji",alpha2:"FJ",alpha3:"FJI",numeric:"242"},{countryName:"Falkland Islands",alpha2:"FK",alpha3:"FLK",numeric:"238"},{countryName:"Micronesia (Federated States of)",alpha2:"FM",alpha3:"FSM",numeric:"583"},{countryName:"Faroe Island",alpha2:"FO",alpha3:"FRO",numeric:"234"},{countryName:"France",alpha2:"FR",alpha3:"FRA",numeric:"250"},{countryName:"Gabon",alpha2:"GA",alpha3:"GAB",numeric:"266"},{countryName:"England",alpha2:"GB-ENG",alpha3:"",numeric:""},{countryName:"Scotland",alpha2:"GB-SCT",alpha3:"",numeric:""},{countryName:"United Kingdom",alpha2:"GB-UKM",alpha3:"",numeric:""},{countryName:"Wales",alpha2:"GB-WLS",alpha3:"",numeric:""},{countryName:"Northern Ireland",alpha2:"GB-NIR",alpha3:"",numeric:""},{countryName:"Grenada",alpha2:"GD",alpha3:"GRD",numeric:"308"},{countryName:"Georgia",alpha2:"GE",alpha3:"GEO",numeric:"268"},{countryName:"French Guiana",alpha2:"GF",alpha3:"GUF",numeric:"254"},{countryName:"Guernsey",alpha2:"GG",alpha3:"GGY",numeric:"831"},{countryName:"Ghana",alpha2:"GH",alpha3:"GHA",numeric:"288"},{countryName:"Gibraltar",alpha2:"GI",alpha3:"GIB",numeric:"292"},{countryName:"Greenland",alpha2:"GL",alpha3:"GRL",numeric:"304"},{countryName:"Gambia",alpha2:"GM",alpha3:"GMB",numeric:"270"},{countryName:"Guinea",alpha2:"GN",alpha3:"GIN",numeric:"324"},{countryName:"Guadeloupe",alpha2:"GP",alpha3:"GLP",numeric:"312"},{countryName:"Equatorial Guinea",alpha2:"GQ",alpha3:"GNQ",numeric:"226"},{countryName:"Greece",alpha2:"GR",alpha3:"GRC",numeric:"300"},{countryName:"South Gerogia and the South Sandwich Islands",alpha2:"GS",alpha3:"SGS",numeric:"239"},{countryName:"Guatemala",alpha2:"GT",alpha3:"GTM",numeric:"320"},{countryName:"Guam",alpha2:"GU",alpha3:"GUM",numeric:"316"},{countryName:"Guinea-Bissau",alpha2:"GW",alpha3:"GNB",numeric:"624"},{countryName:"Guyana",alpha2:"GY",alpha3:"GUY",numeric:"328"},{countryName:"Hong Kong",alpha2:"HK",alpha3:"HKG",numeric:"344"},{countryName:"Heard Island and McDonald Islands",alpha2:"HM",alpha3:"HMD",numeric:"334"},{countryName:"Honduras",alpha2:"HN",alpha3:"HND",numeric:"340"},{countryName:"Croatia",alpha2:"HR",alpha3:"HRV",numeric:"191"},{countryName:"Haiti",alpha2:"HT",alpha3:"HTI",numeric:"332"},{countryName:"Hungary",alpha2:"HU",alpha3:"HUN",numeric:"348"},{countryName:"Indonesia",alpha2:"ID",alpha3:"IDN",numeric:"360"},{countryName:"Ireland",alpha2:"IE",alpha3:"IRL",numeric:"372"},{countryName:"Israel",alpha2:"IL",alpha3:"ISR",numeric:"376"},{countryName:"Isle of Man",alpha2:"IM",alpha3:"IMN",numeric:"833"},{countryName:"India",alpha2:"IN",alpha3:"IND",numeric:"356"},{countryName:"British Indian Ocean Territory",alpha2:"IO",alpha3:"IOT",numeric:"086"},{countryName:"Iraq",alpha2:"IQ",alpha3:"IRQ",numeric:"368"},{countryName:"Iran",alpha2:"IR",alpha3:"IRN",numeric:"364"},{countryName:"Iceland",alpha2:"IS",alpha3:"ISL",numeric:"352"},{countryName:"Italy",alpha2:"IT",alpha3:"ITA",numeric:"380"},{countryName:"Jersey",alpha2:"JE",alpha3:"JEY",numeric:"832"},{countryName:"Jamaica",alpha2:"JM",alpha3:"JAM",numeric:"388"},{countryName:"Jordan",alpha2:"JO",alpha3:"JOR",numeric:"400"},{countryName:"Japan",alpha2:"JP",alpha3:"JPN",numeric:"392"},{countryName:"Kenya",alpha2:"KE",alpha3:"KEN",numeric:"404"},{countryName:"Kyrgyzstan",alpha2:"KG",alpha3:"KGZ",numeric:"417"},{countryName:"Cambodia",alpha2:"KH",alpha3:"KHM",numeric:"116"},{countryName:"Kiribati",alpha2:"KI",alpha3:"KIR",numeric:"296"},{countryName:"Comoros",alpha2:"KM",alpha3:"COM",numeric:"174"},{countryName:"Saint Kitts and Nevis",alpha2:"KN-SK",alpha3:"KNA",numeric:"659"},{countryName:"Korea (the Democratic People's Republic of)",alpha2:"KP",alpha3:"PRK",numeric:"408"},{countryName:"Korea (the Republic of)",alpha2:"KR",alpha3:"KOR",numeric:"410"},{countryName:"Kuwait",alpha2:"KW",alpha3:"KWT",numeric:"414"},{countryName:"Cayman Islands",alpha2:"KY",alpha3:"CYM",numeric:"136"},{countryName:"Kazakhstan",alpha2:"KZ",alpha3:"KAZ",numeric:"398"},{countryName:"Lao People's Democratic Republic (the)",alpha2:"LA",alpha3:"LAO",numeric:"418"},{countryName:"Lebanon",alpha2:"LB",alpha3:"LBN",numeric:"422"},{countryName:"Saint Lucia",alpha2:"LC",alpha3:"LCA",numeric:"662"},{countryName:"Liechtenstein",alpha2:"LI",alpha3:"LIE",numeric:"438"},{countryName:"Sri Lanka",alpha2:"LK",alpha3:"LKA",numeric:"144"},{countryName:"Liberia",alpha2:"LR",alpha3:"LBR",numeric:"430"},{countryName:"Lesotho",alpha2:"LS",alpha3:"LSO",numeric:"426"},{countryName:"Lithuania",alpha2:"LT",alpha3:"LTU",numeric:"440"},{countryName:"Luxembourg",alpha2:"LU",alpha3:"LUX",numeric:"442"},{countryName:"Latvia",alpha2:"LV",alpha3:"LVA",numeric:"428"},{countryName:"Libya",alpha2:"LY",alpha3:"LBY",numeric:"434"},{countryName:"Morocco",alpha2:"MA",alpha3:"MAR",numeric:"504"},{countryName:"Monaco",alpha2:"MC",alpha3:"MCO ",numeric:"492"},{countryName:"Moldova (the Republic of)",alpha2:"MD",alpha3:"MDA",numeric:"498"},{countryName:"Montenegro",alpha2:"ME",alpha3:"MNE",numeric:"499"},{countryName:"Saint Martin",alpha2:"MF",alpha3:"MAF",numeric:"663"},{countryName:"Madagascar",alpha2:"MG",alpha3:"MDG",numeric:"450"},{countryName:"Marshall Islands (the)",alpha2:"MH",alpha3:"MHL",numeric:"584"},{countryName:"North Macedonia",alpha2:"MK",alpha3:"MKD",numeric:"807"},{countryName:"Mali",alpha2:"ML",alpha3:"MLI",numeric:"466"},{countryName:"Myanmar",alpha2:"MM",alpha3:"MMR",numeric:"104"},{countryName:"Mongolia",alpha2:"MN",alpha3:"MNG",numeric:"496"},{countryName:"Macao",alpha2:"MO",alpha3:"MAC",numeric:"446"},{countryName:"Northern Mariana Islands (the)",alpha2:"MP",alpha3:"MNP",numeric:"580"},{countryName:"Martinique",alpha2:"MQ",alpha3:"MTQ",numeric:"474"},{countryName:"Mauritania",alpha2:"MR",alpha3:"MRT",numeric:"478"},{countryName:"Montserrat",alpha2:"MS",alpha3:"MSR",numeric:"500"},{countryName:"Malta",alpha2:"MT",alpha3:"MLT",numeric:"470"},{countryName:"Mauritius",alpha2:"MU",alpha3:"MUS",numeric:"480"},{countryName:"Maldives",alpha2:"MV",alpha3:"MDV",numeric:"462"},{countryName:"Malawi",alpha2:"MW",alpha3:"MWI",numeric:"454"},{countryName:"Mexico",alpha2:"MX",alpha3:"MEX",numeric:"484"},{countryName:"Malaysia",alpha2:"MY",alpha3:"MYS",numeric:"458"},{countryName:"Mozambique",alpha2:"MZ",alpha3:"MOZ",numeric:"508"},{countryName:"Namibia",alpha2:"NA",alpha3:"NAM",numeric:"516"},{countryName:"New Caledonia",alpha2:"NC",alpha3:"NCL",numeric:"540"},{countryName:"Niger",alpha2:"NE",alpha3:"NER",numeric:"562"},{countryName:"Norfolk Island",alpha2:"NF",alpha3:"NFK",numeric:"574"},{countryName:"Nigeria",alpha2:"NG",alpha3:"NGA",numeric:"566"},{countryName:"Nicaragua",alpha2:"NI",alpha3:"NIC",numeric:"558"},{countryName:"Netherlands",alpha2:"NL",alpha3:"NLD",numeric:"528"},{countryName:"Norway",alpha2:"NO",alpha3:"NOR",numeric:"578"},{countryName:"Nepal",alpha2:"NP",alpha3:"NPL",numeric:"524"},{countryName:"Nauru",alpha2:"NR",alpha3:"NRU",numeric:"520"},{countryName:"Niue",alpha2:"NU",alpha3:"NIU",numeric:"570"},{countryName:"New Zealand",alpha2:"NZ",alpha3:"NZL",numeric:"554"},{countryName:"Oman",alpha2:"OM",alpha3:"OMN",numeric:"512"},{countryName:"Panama",alpha2:"PA",alpha3:"PAN",numeric:"591"},{countryName:"Peru",alpha2:"PE",alpha3:"PER",numeric:"604"},{countryName:"French Polyesia",alpha2:"PF",alpha3:"PYF",numeric:"258"},{countryName:"Papua New Guinea",alpha2:"PG",alpha3:"PNG",numeric:"598"},{countryName:"Phillippines (the)",alpha2:"PH",alpha3:"PHL",numeric:"608"},{countryName:"Pakistan",alpha2:"PK",alpha3:"PAK",numeric:"586"},{countryName:"Poland",alpha2:"PL",alpha3:"POL",numeric:"616"},{countryName:"Saint Pierre and Miquelon",alpha2:"PM",alpha3:"SPM",numeric:"666"},{countryName:"Pitcairn",alpha2:"PN",alpha3:"PCN",numeric:"612"},{countryName:"Puerto Rico",alpha2:"PR",alpha3:"PRI",numeric:"630"},{countryName:"Palestine, State of",alpha2:"PS",alpha3:"PSE",numeric:"275"},{countryName:"Portugal",alpha2:"PT",alpha3:"PRT",numeric:"620"},{countryName:"Palau",alpha2:"PW",alpha3:"PLW",numeric:"585"},{countryName:"Paraguay",alpha2:"PY",alpha3:"PRY",numeric:"600"},{countryName:"Qatar",alpha2:"QA",alpha3:"QAT",numeric:"634"},{countryName:"Rainbow",alpha2:"RAINBOW",alpha3:"",numeric:""},{countryName:"Réunion",alpha2:"RE",alpha3:"REU",numeric:"638"},{countryName:"Romania",alpha2:"RO",alpha3:"ROU",numeric:"642"},{countryName:"Serbia",alpha2:"RS",alpha3:"SRB",numeric:"688"},{countryName:"Russian Federation (the)",alpha2:"RU",alpha3:"RUS",numeric:"643"},{countryName:"Rwanda",alpha2:"RW",alpha3:"RWA",numeric:"646"},{countryName:"Saudi Arabia",alpha2:"SA",alpha3:"SAU",numeric:"682"},{countryName:"Solomon Islands",alpha2:"SB",alpha3:"SLB",numeric:"090"},{countryName:"Seychelles",alpha2:"SC",alpha3:"SYC",numeric:"690"},{countryName:"Sudan (the)",alpha2:"SD",alpha3:"SDN",numeric:"729"},{countryName:"Sweden",alpha2:"SE",alpha3:"SWE",numeric:"752"},{countryName:"Singapore",alpha2:"SG",alpha3:"SGP",numeric:"702"},{countryName:"Saint Helena, Ascension Island, Traistan da Cunha",alpha2:"SH",alpha3:"SHN",numeric:"654"},{countryName:"Slovenia",alpha2:"SI",alpha3:"SVN",numeric:"705"},{countryName:"Svalbard, Jan Mayen",alpha2:"SJ",alpha3:"SJM",numeric:"744"},{countryName:"Slovakia",alpha2:"SK",alpha3:"SVK",numeric:"703"},{countryName:"Sierra Leone",alpha2:"SL",alpha3:"SLE",numeric:"694"},{countryName:"San Marino",alpha2:"SM",alpha3:"SMR",numeric:"674"},{countryName:"Senegal",alpha2:"SN",alpha3:"SEN",numeric:"686"},{countryName:"Somalia",alpha2:"SO",alpha3:"SOM",numeric:"706"},{countryName:"Suriname",alpha2:"SR",alpha3:"SUR",numeric:"740"},{countryName:"South Sudan",alpha2:"SS",alpha3:"SSD",numeric:"728"},{countryName:"Sao Tome and Principe",alpha2:"ST",alpha3:"STP",numeric:"678"},{countryName:"El Salvador",alpha2:"SV",alpha3:"SLV",numeric:"222"},{countryName:"Sint Maarten",alpha2:"SX",alpha3:"SXM",numeric:"534"},{countryName:"Syrian Arab Republic (the)",alpha2:"SY",alpha3:"SYR",numeric:"760"},{countryName:"Eswatini",alpha2:"SZ",alpha3:"SWZ",numeric:"748"},{countryName:"Turks and Caicos Islands (the)",alpha2:"TC",alpha3:"TCA",numeric:"796"},{countryName:"Chad",alpha2:"TD",alpha3:"TCD",numeric:"148"},{countryName:"French Southern Territories",alpha2:"TF",alpha3:"ATF",numeric:"260"},{countryName:"Togo",alpha2:"TG",alpha3:"TGO",numeric:"768"},{countryName:"Thailand",alpha2:"TH",alpha3:"THA",numeric:"764"},{countryName:"Tajikistan",alpha2:"TJ",alpha3:"TJK",numeric:"762"},{countryName:"Tokelau",alpha2:"TK",alpha3:"TKL",numeric:"772"},{countryName:"Timor-Leste",alpha2:"TL",alpha3:"TLS",numeric:"626"},{countryName:"Turkmenistan",alpha2:"TM",alpha3:"TKM",numeric:"795"},{countryName:"Tunisia",alpha2:"TN",alpha3:"TUN",numeric:"788"},{countryName:"Tonga",alpha2:"TO",alpha3:"TON",numeric:"776"},{countryName:"Turkey",alpha2:"TR",alpha3:"TUR",numeric:"792"},{countryName:"Trinidad and Tobago",alpha2:"TT",alpha3:"TTO",numeric:"780"},{countryName:"Tuvalu",alpha2:"TV",alpha3:"TUV",numeric:"798"},{countryName:"Taiwan",alpha2:"TW",alpha3:"TWN",numeric:"158"},{countryName:"Tanzania, the United Republic of",alpha2:"TZ",alpha3:"TZA",numeric:"834"},{countryName:"Ukraine",alpha2:"UA",alpha3:"UKR",numeric:"804"},{countryName:"Uganda",alpha2:"UG",alpha3:"UGA",numeric:"800"},{countryName:"United States Minor Outlying Islands (the)",alpha2:"UM",alpha3:"UMI",numeric:"581"},{countryName:"Union of South American Nations",alpha2:"UNASUR",alpha3:"",numeric:""},{countryName:"United States of America",alpha2:"US",alpha3:"USA",numeric:"840"},{countryName:"Uruguay",alpha2:"UY",alpha3:"URY",numeric:"858"},{countryName:"Uzbekistan",alpha2:"UZ",alpha3:"UZB",numeric:"860"},{countryName:"Holy See",alpha2:"VA",alpha3:"VAT",numeric:"336"},{countryName:"Saint Vincent and the Grenadines",alpha2:"VC",alpha3:"VCT",numeric:"670"},{countryName:"Venezuela (Bolivarian Republic of)",alpha2:"VE",alpha3:"VEN",numeric:"862"},{countryName:"Virgin Islands (British)",alpha2:"VG",alpha3:"VGB",numeric:"092"},{countryName:"Virgin Islands (U.S.)",alpha2:"VI",alpha3:"VIR",numeric:"850"},{countryName:"Vietnam",alpha2:"VN",alpha3:"VNM",numeric:"704"},{countryName:"Vanuatu",alpha2:"VU",alpha3:"VUT",numeric:"548"},{countryName:"Wallis and Futuna",alpha2:"WF",alpha3:"WLF",numeric:"876"},{countryName:"Samoa",alpha2:"WS",alpha3:"WSM",numeric:"882"},{countryName:"Yemen",alpha2:"YE",alpha3:"YEM",numeric:"887"},{countryName:"South Africa",alpha2:"ZA",alpha3:"ZAF",numeric:"710"},{countryName:"Zambia",alpha2:"ZM",alpha3:"ZMB",numeric:"894"},{countryName:"Zimbabwe",alpha2:"ZW",alpha3:"ZWE",numeric:"716"},{countryName:"Afghanistan",alpha2:"AF",alpha3:"AFG",numeric:"004"},{countryName:"Bouvet Island",alpha2:"BV",alpha3:"BVT",numeric:"074"}];/* loaded by smart-asset */
var l = require("./flags/SEZcWhVW.svg");/* loaded by smart-asset */
var m = require("./flags/dvRJJKNi.svg");/* loaded by smart-asset */
var s = require("./flags/cGBFNTjs.svg");var AD = {
  l: l,
  m: m,
  s: s
};/* loaded by smart-asset */
var l$1 = require("./flags/JkHTfhOE.svg");/* loaded by smart-asset */
var m$1 = require("./flags/cIfxMYbI.svg");/* loaded by smart-asset */
var s$1 = require("./flags/zpipXoYF.svg");var AE = {
  l: l$1,
  m: m$1,
  s: s$1
};/* loaded by smart-asset */
var l$2 = require("./flags/eUIhojHi.svg");/* loaded by smart-asset */
var m$2 = require("./flags/cpGGGpTT.svg");/* loaded by smart-asset */
var s$2 = require("./flags/bxwKBzuL.svg");var AFRUN = {
  l: l$2,
  m: m$2,
  s: s$2
};/* loaded by smart-asset */
var l$3 = require("./flags/dwsPbRwn.svg");/* loaded by smart-asset */
var m$3 = require("./flags/fOAZaIWC.svg");/* loaded by smart-asset */
var s$3 = require("./flags/BNQaOmLI.svg");var AG = {
  l: l$3,
  m: m$3,
  s: s$3
};/* loaded by smart-asset */
var l$4 = require("./flags/KldmVBMJ.svg");/* loaded by smart-asset */
var m$4 = require("./flags/ejVuUdMq.svg");/* loaded by smart-asset */
var s$4 = require("./flags/bdswNvmh.svg");var AI = {
  l: l$4,
  m: m$4,
  s: s$4
};/* loaded by smart-asset */
var l$5 = require("./flags/CVHfzead.svg");/* loaded by smart-asset */
var m$5 = require("./flags/eyONuBRe.svg");/* loaded by smart-asset */
var s$5 = require("./flags/fUknqPmV.svg");var AL = {
  l: l$5,
  m: m$5,
  s: s$5
};/* loaded by smart-asset */
var l$6 = require("./flags/cCBdnRoC.svg");/* loaded by smart-asset */
var m$6 = require("./flags/eTBPGxjc.svg");/* loaded by smart-asset */
var s$6 = require("./flags/cCJpjujG.svg");var AM = {
  l: l$6,
  m: m$6,
  s: s$6
};/* loaded by smart-asset */
var l$7 = require("./flags/cpvwTplA.svg");/* loaded by smart-asset */
var m$7 = require("./flags/fPurXbXW.svg");/* loaded by smart-asset */
var s$7 = require("./flags/bNoBdOBQ.svg");var AMS = {
  l: l$7,
  m: m$7,
  s: s$7
};/* loaded by smart-asset */
var l$8 = require("./flags/eUTpxZJg.svg");/* loaded by smart-asset */
var m$8 = require("./flags/frJRNvHK.svg");/* loaded by smart-asset */
var s$8 = require("./flags/ddsUobhy.svg");var AO = {
  l: l$8,
  m: m$8,
  s: s$8
};/* loaded by smart-asset */
var l$9 = require("./flags/cMDJnSLx.svg");/* loaded by smart-asset */
var m$9 = require("./flags/dKOzMLwN.svg");/* loaded by smart-asset */
var s$9 = require("./flags/dEwBarvA.svg");var AQ = {
  l: l$9,
  m: m$9,
  s: s$9
};/* loaded by smart-asset */
var l$a = require("./flags/csUirUli.svg");/* loaded by smart-asset */
var m$a = require("./flags/bpvGVGis.svg");/* loaded by smart-asset */
var s$a = require("./flags/dybnyXgK.svg");var AR = {
  l: l$a,
  m: m$a,
  s: s$a
};/* loaded by smart-asset */
var l$b = require("./flags/crzmBjXv.svg");/* loaded by smart-asset */
var m$b = require("./flags/faaojbJZ.svg");/* loaded by smart-asset */
var s$b = require("./flags/cThuwqjz.svg");var AS = {
  l: l$b,
  m: m$b,
  s: s$b
};/* loaded by smart-asset */
var l$c = require("./flags/egjciJts.svg");/* loaded by smart-asset */
var m$c = require("./flags/fmhfsUqu.svg");/* loaded by smart-asset */
var s$c = require("./flags/bPgfOATM.svg");var AT = {
  l: l$c,
  m: m$c,
  s: s$c
};/* loaded by smart-asset */
var l$d = require("./flags/bXJecGjh.svg");/* loaded by smart-asset */
var m$d = require("./flags/BYtVnwkg.svg");/* loaded by smart-asset */
var s$d = require("./flags/dGRXzbnH.svg");var AU = {
  l: l$d,
  m: m$d,
  s: s$d
};/* loaded by smart-asset */
var l$e = require("./flags/esMKuGaX.svg");/* loaded by smart-asset */
var m$e = require("./flags/bxnyAYQw.svg");/* loaded by smart-asset */
var s$e = require("./flags/bcoEcaxR.svg");var AW = {
  l: l$e,
  m: m$e,
  s: s$e
};/* loaded by smart-asset */
var l$f = require("./flags/bUZfiPFa.svg");/* loaded by smart-asset */
var m$f = require("./flags/daywtIaS.svg");/* loaded by smart-asset */
var s$f = require("./flags/carGgRIn.svg");var AX = {
  l: l$f,
  m: m$f,
  s: s$f
};/* loaded by smart-asset */
var l$g = require("./flags/dnEUQWua.svg");/* loaded by smart-asset */
var m$g = require("./flags/bmveegdZ.svg");/* loaded by smart-asset */
var s$g = require("./flags/dBymbdNV.svg");var AZ = {
  l: l$g,
  m: m$g,
  s: s$g
};/* loaded by smart-asset */
var l$h = require("./flags/fnoaHjIj.svg");/* loaded by smart-asset */
var m$h = require("./flags/cWevRRdB.svg");/* loaded by smart-asset */
var s$h = require("./flags/fmkhaSfS.svg");var BA = {
  l: l$h,
  m: m$h,
  s: s$h
};/* loaded by smart-asset */
var l$i = require("./flags/eyBgdeUI.svg");/* loaded by smart-asset */
var m$i = require("./flags/fIqfxzJJ.svg");/* loaded by smart-asset */
var s$i = require("./flags/epqpAisZ.svg");var BB = {
  l: l$i,
  m: m$i,
  s: s$i
};/* loaded by smart-asset */
var l$j = require("./flags/cpLuEVUy.svg");/* loaded by smart-asset */
var m$j = require("./flags/fNNhULLS.svg");/* loaded by smart-asset */
var s$j = require("./flags/cDMbyJBy.svg");var BD = {
  l: l$j,
  m: m$j,
  s: s$j
};/* loaded by smart-asset */
var l$k = require("./flags/cqRjedHO.svg");/* loaded by smart-asset */
var m$k = require("./flags/cJVLYbmO.svg");/* loaded by smart-asset */
var s$k = require("./flags/btqYoWEB.svg");var BE = {
  l: l$k,
  m: m$k,
  s: s$k
};/* loaded by smart-asset */
var l$l = require("./flags/cVCMCeWy.svg");/* loaded by smart-asset */
var m$l = require("./flags/fCnycdXi.svg");/* loaded by smart-asset */
var s$l = require("./flags/bClkwYAM.svg");var BF = {
  l: l$l,
  m: m$l,
  s: s$l
};/* loaded by smart-asset */
var l$m = require("./flags/dWsZPbMY.svg");/* loaded by smart-asset */
var m$m = require("./flags/eYAGJrmW.svg");/* loaded by smart-asset */
var s$m = require("./flags/cLfXdzmm.svg");var BG = {
  l: l$m,
  m: m$m,
  s: s$m
};/* loaded by smart-asset */
var l$n = require("./flags/ecrshJJw.svg");/* loaded by smart-asset */
var m$n = require("./flags/ePziLdmF.svg");/* loaded by smart-asset */
var s$n = require("./flags/fvhgIEKy.svg");var BH = {
  l: l$n,
  m: m$n,
  s: s$n
};/* loaded by smart-asset */
var l$o = require("./flags/fdMkOQCN.svg");/* loaded by smart-asset */
var m$o = require("./flags/dPJWnAPC.svg");/* loaded by smart-asset */
var s$o = require("./flags/eShlZviH.svg");var BI = {
  l: l$o,
  m: m$o,
  s: s$o
};/* loaded by smart-asset */
var l$p = require("./flags/dxcRndgy.svg");/* loaded by smart-asset */
var m$p = require("./flags/fnIVJMeV.svg");/* loaded by smart-asset */
var s$p = require("./flags/eAsimPwT.svg");var BJ = {
  l: l$p,
  m: m$p,
  s: s$p
};/* loaded by smart-asset */
var l$q = require("./flags/fEhXNfAo.svg");/* loaded by smart-asset */
var m$q = require("./flags/cKBesAgm.svg");/* loaded by smart-asset */
var s$q = require("./flags/DxLlBMex.svg");var BL = {
  l: l$q,
  m: m$q,
  s: s$q
};/* loaded by smart-asset */
var l$r = require("./flags/cfcfBIJt.svg");/* loaded by smart-asset */
var m$r = require("./flags/fhSVWauc.svg");/* loaded by smart-asset */
var s$r = require("./flags/bgmTDdzV.svg");var BM = {
  l: l$r,
  m: m$r,
  s: s$r
};/* loaded by smart-asset */
var l$s = require("./flags/dXznfzKe.svg");/* loaded by smart-asset */
var m$s = require("./flags/dkQuGurJ.svg");/* loaded by smart-asset */
var s$s = require("./flags/fQPbtEMO.svg");var BN = {
  l: l$s,
  m: m$s,
  s: s$s
};/* loaded by smart-asset */
var l$t = require("./flags/fDPmgvJE.svg");/* loaded by smart-asset */
var m$t = require("./flags/blsvddyG.svg");/* loaded by smart-asset */
var s$t = require("./flags/bqcdtPdC.svg");var BO = {
  l: l$t,
  m: m$t,
  s: s$t
};/* loaded by smart-asset */
var l$u = require("./flags/eWgrrdsG.svg");/* loaded by smart-asset */
var m$u = require("./flags/cDCGgwVa.svg");/* loaded by smart-asset */
var s$u = require("./flags/vJbHRVZh.svg");var BQ_BO = {
  l: l$u,
  m: m$u,
  s: s$u
};/* loaded by smart-asset */
var l$v = require("./flags/bGuZFaxo.svg");/* loaded by smart-asset */
var m$v = require("./flags/clprtTAk.svg");/* loaded by smart-asset */
var s$v = require("./flags/csAIoVFi.svg");var BQ_SA = {
  l: l$v,
  m: m$v,
  s: s$v
};/* loaded by smart-asset */
var l$w = require("./flags/dkuCQDwv.svg");/* loaded by smart-asset */
var m$w = require("./flags/fwCPmNAm.svg");/* loaded by smart-asset */
var s$w = require("./flags/bdRKxlVR.svg");var BQ_SE = {
  l: l$w,
  m: m$w,
  s: s$w
};/* loaded by smart-asset */
var l$x = require("./flags/eSJUqnwC.svg");/* loaded by smart-asset */
var m$x = require("./flags/bGhUaDND.svg");/* loaded by smart-asset */
var s$x = require("./flags/fXJCzeOV.svg");var BR = {
  l: l$x,
  m: m$x,
  s: s$x
};/* loaded by smart-asset */
var l$y = require("./flags/fJZaxYwI.svg");/* loaded by smart-asset */
var m$y = require("./flags/LkZOqIIZ.svg");/* loaded by smart-asset */
var s$y = require("./flags/cgpGbHDc.svg");var BS = {
  l: l$y,
  m: m$y,
  s: s$y
};/* loaded by smart-asset */
var l$z = require("./flags/crPcWrwl.svg");/* loaded by smart-asset */
var m$z = require("./flags/bJEYWehm.svg");/* loaded by smart-asset */
var s$z = require("./flags/cRydEolF.svg");var BT = {
  l: l$z,
  m: m$z,
  s: s$z
};/* loaded by smart-asset */
var l$A = require("./flags/bSaftbLu.svg");/* loaded by smart-asset */
var m$A = require("./flags/dDbVlbAI.svg");/* loaded by smart-asset */
var s$A = require("./flags/eFnlazVh.svg");var BW = {
  l: l$A,
  m: m$A,
  s: s$A
};/* loaded by smart-asset */
var l$B = require("./flags/cbJXEIPl.svg");/* loaded by smart-asset */
var m$B = require("./flags/ecLwlGZy.svg");/* loaded by smart-asset */
var s$B = require("./flags/ePEmExyx.svg");var BY = {
  l: l$B,
  m: m$B,
  s: s$B
};/* loaded by smart-asset */
var l$C = require("./flags/dTPUyRdw.svg");/* loaded by smart-asset */
var m$C = require("./flags/cEplUFRq.svg");/* loaded by smart-asset */
var s$C = require("./flags/RqlQMXmm.svg");var BZ = {
  l: l$C,
  m: m$C,
  s: s$C
};/* loaded by smart-asset */
var l$D = require("./flags/fLdGqZWl.svg");/* loaded by smart-asset */
var m$D = require("./flags/exlkrLMX.svg");/* loaded by smart-asset */
var s$D = require("./flags/AEeQFoTq.svg");var CA = {
  l: l$D,
  m: m$D,
  s: s$D
};/* loaded by smart-asset */
var l$E = require("./flags/bEnLcMel.svg");/* loaded by smart-asset */
var m$E = require("./flags/eBZFzSOA.svg");/* loaded by smart-asset */
var s$E = require("./flags/czjlEhPT.svg");var CC = {
  l: l$E,
  m: m$E,
  s: s$E
};/* loaded by smart-asset */
var l$F = require("./flags/bCQNLKAt.svg");/* loaded by smart-asset */
var m$F = require("./flags/noRikWwa.svg");/* loaded by smart-asset */
var s$F = require("./flags/fvrUdjhc.svg");var CD = {
  l: l$F,
  m: m$F,
  s: s$F
};/* loaded by smart-asset */
var l$G = require("./flags/bjhDYEAD.svg");/* loaded by smart-asset */
var m$G = require("./flags/AbjAzhmc.svg");/* loaded by smart-asset */
var s$G = require("./flags/czJWYxfl.svg");var CF = {
  l: l$G,
  m: m$G,
  s: s$G
};/* loaded by smart-asset */
var l$H = require("./flags/eILqehCU.svg");/* loaded by smart-asset */
var m$H = require("./flags/bfadpNIe.svg");/* loaded by smart-asset */
var s$H = require("./flags/ZXZEcIHj.svg");var CG = {
  l: l$H,
  m: m$H,
  s: s$H
};/* loaded by smart-asset */
var l$I = require("./flags/eQmcaZaF.svg");/* loaded by smart-asset */
var m$I = require("./flags/cfkQoGbW.svg");/* loaded by smart-asset */
var s$I = require("./flags/UWeaqIgt.svg");var CH = {
  l: l$I,
  m: m$I,
  s: s$I
};/* loaded by smart-asset */
var l$J = require("./flags/DqFzTDQq.svg");/* loaded by smart-asset */
var m$J = require("./flags/dJojEyZk.svg");/* loaded by smart-asset */
var s$J = require("./flags/diaAnQpi.svg");var CI = {
  l: l$J,
  m: m$J,
  s: s$J
};/* loaded by smart-asset */
var l$K = require("./flags/OwfXCuJS.svg");/* loaded by smart-asset */
var m$K = require("./flags/sGyBcvsy.svg");/* loaded by smart-asset */
var s$K = require("./flags/PxMdcEpn.svg");var CK = {
  l: l$K,
  m: m$K,
  s: s$K
};/* loaded by smart-asset */
var l$L = require("./flags/eLvWwyrM.svg");/* loaded by smart-asset */
var m$L = require("./flags/fciXZWDU.svg");/* loaded by smart-asset */
var s$L = require("./flags/gaXAxkBg.svg");var CL = {
  l: l$L,
  m: m$L,
  s: s$L
};/* loaded by smart-asset */
var l$M = require("./flags/eOsnVsHl.svg");/* loaded by smart-asset */
var m$M = require("./flags/bVvRnifL.svg");/* loaded by smart-asset */
var s$M = require("./flags/fWWEqvEK.svg");var CM = {
  l: l$M,
  m: m$M,
  s: s$M
};/* loaded by smart-asset */
var l$N = require("./flags/cegKwZJK.svg");/* loaded by smart-asset */
var m$N = require("./flags/fHTaFCWA.svg");/* loaded by smart-asset */
var s$N = require("./flags/cemVsgjw.svg");var CN = {
  l: l$N,
  m: m$N,
  s: s$N
};/* loaded by smart-asset */
var l$O = require("./flags/dqugXeql.svg");/* loaded by smart-asset */
var m$O = require("./flags/dwRXrmeh.svg");/* loaded by smart-asset */
var s$O = require("./flags/fOPxEKGL.svg");var CO = {
  l: l$O,
  m: m$O,
  s: s$O
};/* loaded by smart-asset */
var l$P = require("./flags/exWRUiJr.svg");/* loaded by smart-asset */
var m$P = require("./flags/dLigGsou.svg");/* loaded by smart-asset */
var s$P = require("./flags/eoXWqbHp.svg");var CR = {
  l: l$P,
  m: m$P,
  s: s$P
};/* loaded by smart-asset */
var l$Q = require("./flags/fUGuDoox.svg");/* loaded by smart-asset */
var m$Q = require("./flags/egipcjfP.svg");/* loaded by smart-asset */
var s$Q = require("./flags/fejMEQda.svg");var CU = {
  l: l$Q,
  m: m$Q,
  s: s$Q
};/* loaded by smart-asset */
var l$R = require("./flags/bdnPigQG.svg");/* loaded by smart-asset */
var m$R = require("./flags/fpLaTdFU.svg");/* loaded by smart-asset */
var s$R = require("./flags/enQlagzq.svg");var CV = {
  l: l$R,
  m: m$R,
  s: s$R
};/* loaded by smart-asset */
var l$S = require("./flags/cwbGWnap.svg");/* loaded by smart-asset */
var m$S = require("./flags/bqTJEehP.svg");/* loaded by smart-asset */
var s$S = require("./flags/VTExJKuq.svg");var CW = {
  l: l$S,
  m: m$S,
  s: s$S
};/* loaded by smart-asset */
var l$T = require("./flags/epwFcRbY.svg");/* loaded by smart-asset */
var m$T = require("./flags/bemZLKQX.svg");/* loaded by smart-asset */
var s$T = require("./flags/eYIAikII.svg");var CX = {
  l: l$T,
  m: m$T,
  s: s$T
};/* loaded by smart-asset */
var l$U = require("./flags/eoNcOcKP.svg");/* loaded by smart-asset */
var m$U = require("./flags/jLuuGkBJ.svg");/* loaded by smart-asset */
var s$U = require("./flags/dbRxxaoR.svg");var CY = {
  l: l$U,
  m: m$U,
  s: s$U
};/* loaded by smart-asset */
var l$V = require("./flags/dyQYgjoh.svg");/* loaded by smart-asset */
var m$V = require("./flags/cfStdCMP.svg");/* loaded by smart-asset */
var s$V = require("./flags/fWONLotH.svg");var CZ = {
  l: l$V,
  m: m$V,
  s: s$V
};/* loaded by smart-asset */
var l$W = require("./flags/cIBManDs.svg");/* loaded by smart-asset */
var m$W = require("./flags/eAOlyydc.svg");/* loaded by smart-asset */
var s$W = require("./flags/culKPHEd.svg");var DE = {
  l: l$W,
  m: m$W,
  s: s$W
};/* loaded by smart-asset */
var l$X = require("./flags/dPxlopHi.svg");/* loaded by smart-asset */
var m$X = require("./flags/fIMTyjhp.svg");/* loaded by smart-asset */
var s$X = require("./flags/NYGnUhLQ.svg");var DJ = {
  l: l$X,
  m: m$X,
  s: s$X
};/* loaded by smart-asset */
var l$Y = require("./flags/btQsfLYt.svg");/* loaded by smart-asset */
var m$Y = require("./flags/dQSlbbUb.svg");/* loaded by smart-asset */
var s$Y = require("./flags/dqyMWbZV.svg");var DK = {
  l: l$Y,
  m: m$Y,
  s: s$Y
};/* loaded by smart-asset */
var l$Z = require("./flags/dJyLrykD.svg");/* loaded by smart-asset */
var m$Z = require("./flags/btUPhEXf.svg");/* loaded by smart-asset */
var s$Z = require("./flags/fzLhhyzO.svg");var DM = {
  l: l$Z,
  m: m$Z,
  s: s$Z
};/* loaded by smart-asset */
var l$_ = require("./flags/dySfXMKb.svg");/* loaded by smart-asset */
var m$_ = require("./flags/fbLkmhIA.svg");/* loaded by smart-asset */
var s$_ = require("./flags/fsvQrqAg.svg");var DO = {
  l: l$_,
  m: m$_,
  s: s$_
};/* loaded by smart-asset */
var l$$ = require("./flags/dFYOcwMW.svg");/* loaded by smart-asset */
var m$$ = require("./flags/bEInVBGo.svg");/* loaded by smart-asset */
var s$$ = require("./flags/bRFhfCXG.svg");var EC = {
  l: l$$,
  m: m$$,
  s: s$$
};/* loaded by smart-asset */
var l$10 = require("./flags/ftVCjRCH.svg");/* loaded by smart-asset */
var m$10 = require("./flags/eFlgFmGw.svg");/* loaded by smart-asset */
var s$10 = require("./flags/bHuwbslW.svg");var EE = {
  l: l$10,
  m: m$10,
  s: s$10
};/* loaded by smart-asset */
var l$11 = require("./flags/CuPuVYbZ.svg");/* loaded by smart-asset */
var m$11 = require("./flags/eepsyRDK.svg");/* loaded by smart-asset */
var s$11 = require("./flags/fAmJPEdY.svg");var EG = {
  l: l$11,
  m: m$11,
  s: s$11
};/* loaded by smart-asset */
var l$12 = require("./flags/ffOOyqLz.svg");/* loaded by smart-asset */
var m$12 = require("./flags/funDCDIr.svg");/* loaded by smart-asset */
var s$12 = require("./flags/enVdTCKX.svg");var EH = {
  l: l$12,
  m: m$12,
  s: s$12
};/* loaded by smart-asset */
var l$13 = require("./flags/bmStyBOw.svg");/* loaded by smart-asset */
var m$13 = require("./flags/ubbxOJNS.svg");/* loaded by smart-asset */
var s$13 = require("./flags/cnBJvqiU.svg");var ER = {
  l: l$13,
  m: m$13,
  s: s$13
};/* loaded by smart-asset */
var l$14 = require("./flags/dzTJTUJc.svg");/* loaded by smart-asset */
var m$14 = require("./flags/fchYyDNm.svg");/* loaded by smart-asset */
var s$14 = require("./flags/cTmyxDXP.svg");var ES = {
  l: l$14,
  m: m$14,
  s: s$14
};/* loaded by smart-asset */
var l$15 = require("./flags/dWGzMzOM.svg");/* loaded by smart-asset */
var m$15 = require("./flags/fmzpIFmr.svg");/* loaded by smart-asset */
var s$15 = require("./flags/dVXkbWkV.svg");var ET = {
  l: l$15,
  m: m$15,
  s: s$15
};/* loaded by smart-asset */
var l$16 = require("./flags/bVrSVnFw.svg");/* loaded by smart-asset */
var m$16 = require("./flags/bmzKTyTF.svg");/* loaded by smart-asset */
var s$16 = require("./flags/dgNyoeWn.svg");var EU = {
  l: l$16,
  m: m$16,
  s: s$16
};/* loaded by smart-asset */
var l$17 = require("./flags/UxRxGFJr.svg");/* loaded by smart-asset */
var m$17 = require("./flags/fKZmrAGS.svg");/* loaded by smart-asset */
var s$17 = require("./flags/fdRshQcv.svg");var FI = {
  l: l$17,
  m: m$17,
  s: s$17
};/* loaded by smart-asset */
var l$18 = require("./flags/nDbxCZTu.svg");/* loaded by smart-asset */
var m$18 = require("./flags/fjexUxzn.svg");/* loaded by smart-asset */
var s$18 = require("./flags/NXvxjieE.svg");var FJ = {
  l: l$18,
  m: m$18,
  s: s$18
};/* loaded by smart-asset */
var l$19 = require("./flags/NLdTZiKV.svg");/* loaded by smart-asset */
var m$19 = require("./flags/kefrTFbU.svg");/* loaded by smart-asset */
var s$19 = require("./flags/SxAySAjV.svg");var FK = {
  l: l$19,
  m: m$19,
  s: s$19
};/* loaded by smart-asset */
var l$1a = require("./flags/dqfRhksC.svg");/* loaded by smart-asset */
var m$1a = require("./flags/fznJISRs.svg");/* loaded by smart-asset */
var s$1a = require("./flags/fyeGEQlp.svg");var FM = {
  l: l$1a,
  m: m$1a,
  s: s$1a
};/* loaded by smart-asset */
var l$1b = require("./flags/csOhMHNq.svg");/* loaded by smart-asset */
var m$1b = require("./flags/bZDuRBOh.svg");/* loaded by smart-asset */
var s$1b = require("./flags/euHTcdEU.svg");var FO = {
  l: l$1b,
  m: m$1b,
  s: s$1b
};/* loaded by smart-asset */
var l$1c = require("./flags/fEhXNfAo.svg");/* loaded by smart-asset */
var m$1c = require("./flags/cAGLdCHX.svg");/* loaded by smart-asset */
var s$1c = require("./flags/DxLlBMex.svg");var FR = {
  l: l$1c,
  m: m$1c,
  s: s$1c
};/* loaded by smart-asset */
var l$1d = require("./flags/fQxBidMD.svg");/* loaded by smart-asset */
var m$1d = require("./flags/bXKFxjLD.svg");/* loaded by smart-asset */
var s$1d = require("./flags/fFtaeBUR.svg");var GA = {
  l: l$1d,
  m: m$1d,
  s: s$1d
};/* loaded by smart-asset */
var l$1e = require("./flags/bBfeWAPP.svg");/* loaded by smart-asset */
var m$1e = require("./flags/skxnOyOI.svg");/* loaded by smart-asset */
var s$1e = require("./flags/cPhszqDG.svg");var GB_ENG = {
  l: l$1e,
  m: m$1e,
  s: s$1e
};/* loaded by smart-asset */
var l$1f = require("./flags/fxyjjqtF.svg");/* loaded by smart-asset */
var m$1f = require("./flags/bMIQGziK.svg");/* loaded by smart-asset */
var s$1f = require("./flags/bBvjupZE.svg");var GB_SCT = {
  l: l$1f,
  m: m$1f,
  s: s$1f
};/* loaded by smart-asset */
var l$1g = require("./flags/fjYstraU.svg");/* loaded by smart-asset */
var m$1g = require("./flags/eqSNqLKE.svg");/* loaded by smart-asset */
var s$1g = require("./flags/fpqqLefs.svg");var GB_UKM = {
  l: l$1g,
  m: m$1g,
  s: s$1g
};/* loaded by smart-asset */
var l$1h = require("./flags/cEwGvsHZ.svg");/* loaded by smart-asset */
var m$1h = require("./flags/cnZWmJdc.svg");/* loaded by smart-asset */
var s$1h = require("./flags/btIZlWPV.svg");var GB_WLS = {
  l: l$1h,
  m: m$1h,
  s: s$1h
};/* loaded by smart-asset */
var l$1i = require("./flags/fjYstraU.svg");/* loaded by smart-asset */
var m$1i = require("./flags/eqSNqLKE.svg");/* loaded by smart-asset */
var s$1i = require("./flags/ecJQnauL.svg");var GB_NIR = {
  l: l$1i,
  m: m$1i,
  s: s$1i
};/* loaded by smart-asset */
var l$1j = require("./flags/XwTZNVXz.svg");/* loaded by smart-asset */
var m$1j = require("./flags/bkCpNJjd.svg");/* loaded by smart-asset */
var s$1j = require("./flags/bBkCtTsj.svg");var GD = {
  l: l$1j,
  m: m$1j,
  s: s$1j
};/* loaded by smart-asset */
var l$1k = require("./flags/dGOOrrPh.svg");/* loaded by smart-asset */
var m$1k = require("./flags/ckjnJXeH.svg");/* loaded by smart-asset */
var s$1k = require("./flags/bOKkzLSU.svg");var GE = {
  l: l$1k,
  m: m$1k,
  s: s$1k
};/* loaded by smart-asset */
var l$1l = require("./flags/eaJhPqdC.svg");/* loaded by smart-asset */
var m$1l = require("./flags/dYrUtxbI.svg");/* loaded by smart-asset */
var s$1l = require("./flags/fBdAeDTK.svg");var GF = {
  l: l$1l,
  m: m$1l,
  s: s$1l
};/* loaded by smart-asset */
var l$1m = require("./flags/esnRImtF.svg");/* loaded by smart-asset */
var m$1m = require("./flags/hqgIyQUv.svg");/* loaded by smart-asset */
var s$1m = require("./flags/fnDMKhue.svg");var GG = {
  l: l$1m,
  m: m$1m,
  s: s$1m
};/* loaded by smart-asset */
var l$1n = require("./flags/cWkAGBzk.svg");/* loaded by smart-asset */
var m$1n = require("./flags/vdQdFBqP.svg");/* loaded by smart-asset */
var s$1n = require("./flags/bdqADQWx.svg");var GH = {
  l: l$1n,
  m: m$1n,
  s: s$1n
};/* loaded by smart-asset */
var l$1o = require("./flags/fABiPRGu.svg");/* loaded by smart-asset */
var m$1o = require("./flags/deAiFtqu.svg");/* loaded by smart-asset */
var s$1o = require("./flags/fMPMpnon.svg");var GI = {
  l: l$1o,
  m: m$1o,
  s: s$1o
};/* loaded by smart-asset */
var l$1p = require("./flags/bkizUytw.svg");/* loaded by smart-asset */
var m$1p = require("./flags/BNQlxkkP.svg");/* loaded by smart-asset */
var s$1p = require("./flags/dvSwXDzf.svg");var GL = {
  l: l$1p,
  m: m$1p,
  s: s$1p
};/* loaded by smart-asset */
var l$1q = require("./flags/bxLluLBD.svg");/* loaded by smart-asset */
var m$1q = require("./flags/spHygEKf.svg");/* loaded by smart-asset */
var s$1q = require("./flags/bMMVjgVp.svg");var GM = {
  l: l$1q,
  m: m$1q,
  s: s$1q
};/* loaded by smart-asset */
var l$1r = require("./flags/cOssEovH.svg");/* loaded by smart-asset */
var m$1r = require("./flags/cXvWoflZ.svg");/* loaded by smart-asset */
var s$1r = require("./flags/qzvOuhzw.svg");var GN = {
  l: l$1r,
  m: m$1r,
  s: s$1r
};/* loaded by smart-asset */
var l$1s = require("./flags/bncOdYBF.svg");/* loaded by smart-asset */
var m$1s = require("./flags/fIIiNjTJ.svg");/* loaded by smart-asset */
var s$1s = require("./flags/cZGXYLhE.svg");var GP = {
  l: l$1s,
  m: m$1s,
  s: s$1s
};/* loaded by smart-asset */
var l$1t = require("./flags/dUHfRHmp.svg");/* loaded by smart-asset */
var m$1t = require("./flags/clZZWtyR.svg");/* loaded by smart-asset */
var s$1t = require("./flags/cpvTkzmu.svg");var GQ = {
  l: l$1t,
  m: m$1t,
  s: s$1t
};/* loaded by smart-asset */
var l$1u = require("./flags/cOWhVvlD.svg");/* loaded by smart-asset */
var m$1u = require("./flags/ldkxEHpI.svg");/* loaded by smart-asset */
var s$1u = require("./flags/buVFMJdx.svg");var GR = {
  l: l$1u,
  m: m$1u,
  s: s$1u
};/* loaded by smart-asset */
var l$1v = require("./flags/dBMhTigm.svg");/* loaded by smart-asset */
var m$1v = require("./flags/fIuMPFDO.svg");/* loaded by smart-asset */
var s$1v = require("./flags/eoSRJBwt.svg");var GS = {
  l: l$1v,
  m: m$1v,
  s: s$1v
};/* loaded by smart-asset */
var l$1w = require("./flags/fARvrSak.svg");/* loaded by smart-asset */
var m$1w = require("./flags/eDlRvwhN.svg");/* loaded by smart-asset */
var s$1w = require("./flags/dHTGfOxE.svg");var GT = {
  l: l$1w,
  m: m$1w,
  s: s$1w
};/* loaded by smart-asset */
var l$1x = require("./flags/flvUuEpU.svg");/* loaded by smart-asset */
var m$1x = require("./flags/etOPxGBG.svg");/* loaded by smart-asset */
var s$1x = require("./flags/bueXOGUK.svg");var GU = {
  l: l$1x,
  m: m$1x,
  s: s$1x
};/* loaded by smart-asset */
var l$1y = require("./flags/dLWRUoIB.svg");/* loaded by smart-asset */
var m$1y = require("./flags/cZmUIFFM.svg");/* loaded by smart-asset */
var s$1y = require("./flags/UipnKRLO.svg");var GW = {
  l: l$1y,
  m: m$1y,
  s: s$1y
};/* loaded by smart-asset */
var l$1z = require("./flags/bPLSznur.svg");/* loaded by smart-asset */
var m$1z = require("./flags/dDsFsxBz.svg");/* loaded by smart-asset */
var s$1z = require("./flags/fIXncmwV.svg");var GY = {
  l: l$1z,
  m: m$1z,
  s: s$1z
};/* loaded by smart-asset */
var l$1A = require("./flags/cHxYjddO.svg");/* loaded by smart-asset */
var m$1A = require("./flags/bOGNFtFy.svg");/* loaded by smart-asset */
var s$1A = require("./flags/emErzzZJ.svg");var HK = {
  l: l$1A,
  m: m$1A,
  s: s$1A
};/* loaded by smart-asset */
var l$1B = require("./flags/buqWHcYz.svg");/* loaded by smart-asset */
var m$1B = require("./flags/bkdbuVDY.svg");/* loaded by smart-asset */
var s$1B = require("./flags/eDZINPIk.svg");var HM = {
  l: l$1B,
  m: m$1B,
  s: s$1B
};/* loaded by smart-asset */
var l$1C = require("./flags/fSTwzBpK.svg");/* loaded by smart-asset */
var m$1C = require("./flags/bZjyEqoU.svg");/* loaded by smart-asset */
var s$1C = require("./flags/cnUjvmSl.svg");var HN = {
  l: l$1C,
  m: m$1C,
  s: s$1C
};/* loaded by smart-asset */
var l$1D = require("./flags/cPOKopMN.svg");/* loaded by smart-asset */
var m$1D = require("./flags/TYOUOsLA.svg");/* loaded by smart-asset */
var s$1D = require("./flags/cByFnGYQ.svg");var HR = {
  l: l$1D,
  m: m$1D,
  s: s$1D
};/* loaded by smart-asset */
var l$1E = require("./flags/eGQuJHZX.svg");/* loaded by smart-asset */
var m$1E = require("./flags/fhIruAPW.svg");/* loaded by smart-asset */
var s$1E = require("./flags/bDPSnxbF.svg");var HT = {
  l: l$1E,
  m: m$1E,
  s: s$1E
};/* loaded by smart-asset */
var l$1F = require("./flags/dapFGePF.svg");/* loaded by smart-asset */
var m$1F = require("./flags/djrGLjxF.svg");/* loaded by smart-asset */
var s$1F = require("./flags/eFotueDf.svg");var HU = {
  l: l$1F,
  m: m$1F,
  s: s$1F
};/* loaded by smart-asset */
var l$1G = require("./flags/qCYHdEHA.svg");/* loaded by smart-asset */
var m$1G = require("./flags/bgJKmhzq.svg");/* loaded by smart-asset */
var s$1G = require("./flags/efCyueCc.svg");var ID = {
  l: l$1G,
  m: m$1G,
  s: s$1G
};/* loaded by smart-asset */
var l$1H = require("./flags/dPWTRLGZ.svg");/* loaded by smart-asset */
var m$1H = require("./flags/cFUxnmXK.svg");/* loaded by smart-asset */
var s$1H = require("./flags/esABWRKD.svg");var IE = {
  l: l$1H,
  m: m$1H,
  s: s$1H
};/* loaded by smart-asset */
var l$1I = require("./flags/eEOTvYMM.svg");/* loaded by smart-asset */
var m$1I = require("./flags/dfnAhPyp.svg");/* loaded by smart-asset */
var s$1I = require("./flags/chFaMIuN.svg");var IL = {
  l: l$1I,
  m: m$1I,
  s: s$1I
};/* loaded by smart-asset */
var l$1J = require("./flags/ciXxTwzu.svg");/* loaded by smart-asset */
var m$1J = require("./flags/dOLJHqYn.svg");/* loaded by smart-asset */
var s$1J = require("./flags/fTPGvbEb.svg");var IM = {
  l: l$1J,
  m: m$1J,
  s: s$1J
};/* loaded by smart-asset */
var l$1K = require("./flags/dFTgiQfF.svg");/* loaded by smart-asset */
var m$1K = require("./flags/etzBGFvo.svg");/* loaded by smart-asset */
var s$1K = require("./flags/dLXxjKWv.svg");var IN = {
  l: l$1K,
  m: m$1K,
  s: s$1K
};/* loaded by smart-asset */
var l$1L = require("./flags/eGLDnFqp.svg");/* loaded by smart-asset */
var m$1L = require("./flags/bUmZlqan.svg");/* loaded by smart-asset */
var s$1L = require("./flags/fnGFCnvO.svg");var IO = {
  l: l$1L,
  m: m$1L,
  s: s$1L
};/* loaded by smart-asset */
var l$1M = require("./flags/fofDGzRY.svg");/* loaded by smart-asset */
var m$1M = require("./flags/cXfYbVBM.svg");/* loaded by smart-asset */
var s$1M = require("./flags/bkAzwvIp.svg");var IQ = {
  l: l$1M,
  m: m$1M,
  s: s$1M
};/* loaded by smart-asset */
var l$1N = require("./flags/eHHrxiAG.svg");/* loaded by smart-asset */
var m$1N = require("./flags/eRZvquKw.svg");/* loaded by smart-asset */
var s$1N = require("./flags/bcGdxmnA.svg");var IR = {
  l: l$1N,
  m: m$1N,
  s: s$1N
};/* loaded by smart-asset */
var l$1O = require("./flags/dhxPeGcQ.svg");/* loaded by smart-asset */
var m$1O = require("./flags/eLfZBRrn.svg");/* loaded by smart-asset */
var s$1O = require("./flags/cQyqSlGT.svg");var IS = {
  l: l$1O,
  m: m$1O,
  s: s$1O
};/* loaded by smart-asset */
var l$1P = require("./flags/cWlKERop.svg");/* loaded by smart-asset */
var m$1P = require("./flags/cgRKHuVv.svg");/* loaded by smart-asset */
var s$1P = require("./flags/fWxlcnyy.svg");var IT = {
  l: l$1P,
  m: m$1P,
  s: s$1P
};/* loaded by smart-asset */
var l$1Q = require("./flags/entFZtXS.svg");/* loaded by smart-asset */
var m$1Q = require("./flags/cVmSUUBG.svg");/* loaded by smart-asset */
var s$1Q = require("./flags/dXzlttDq.svg");var JE = {
  l: l$1Q,
  m: m$1Q,
  s: s$1Q
};/* loaded by smart-asset */
var l$1R = require("./flags/dWYpPIIW.svg");/* loaded by smart-asset */
var m$1R = require("./flags/TNHAWipt.svg");/* loaded by smart-asset */
var s$1R = require("./flags/ddLjWLCS.svg");var JM = {
  l: l$1R,
  m: m$1R,
  s: s$1R
};/* loaded by smart-asset */
var l$1S = require("./flags/eTMQooRs.svg");/* loaded by smart-asset */
var m$1S = require("./flags/UGmfTVXm.svg");/* loaded by smart-asset */
var s$1S = require("./flags/oTKalIAa.svg");var JO = {
  l: l$1S,
  m: m$1S,
  s: s$1S
};/* loaded by smart-asset */
var l$1T = require("./flags/ePibwwba.svg");/* loaded by smart-asset */
var m$1T = require("./flags/dITPkvwk.svg");/* loaded by smart-asset */
var s$1T = require("./flags/eJgaPjKb.svg");var JP = {
  l: l$1T,
  m: m$1T,
  s: s$1T
};/* loaded by smart-asset */
var l$1U = require("./flags/cFRIQKbp.svg");/* loaded by smart-asset */
var m$1U = require("./flags/fCFESNyW.svg");/* loaded by smart-asset */
var s$1U = require("./flags/dewMBhCG.svg");var KE = {
  l: l$1U,
  m: m$1U,
  s: s$1U
};/* loaded by smart-asset */
var l$1V = require("./flags/fcKmhfRy.svg");/* loaded by smart-asset */
var m$1V = require("./flags/eoSFOgWX.svg");/* loaded by smart-asset */
var s$1V = require("./flags/bmMwAESV.svg");var KG = {
  l: l$1V,
  m: m$1V,
  s: s$1V
};/* loaded by smart-asset */
var l$1W = require("./flags/dOqNBSZR.svg");/* loaded by smart-asset */
var m$1W = require("./flags/AoskOQeb.svg");/* loaded by smart-asset */
var s$1W = require("./flags/fHMTyBzQ.svg");var KH = {
  l: l$1W,
  m: m$1W,
  s: s$1W
};/* loaded by smart-asset */
var l$1X = require("./flags/dKanmmrB.svg");/* loaded by smart-asset */
var m$1X = require("./flags/ckJbfxCi.svg");/* loaded by smart-asset */
var s$1X = require("./flags/eqJoLbVx.svg");var KI = {
  l: l$1X,
  m: m$1X,
  s: s$1X
};/* loaded by smart-asset */
var l$1Y = require("./flags/bBQQgQDI.svg");/* loaded by smart-asset */
var m$1Y = require("./flags/cvzbPBJz.svg");/* loaded by smart-asset */
var s$1Y = require("./flags/NdQHhrrp.svg");var KM = {
  l: l$1Y,
  m: m$1Y,
  s: s$1Y
};/* loaded by smart-asset */
var l$1Z = require("./flags/eJpzrgZz.svg");/* loaded by smart-asset */
var m$1Z = require("./flags/fWcmJfAX.svg");/* loaded by smart-asset */
var s$1Z = require("./flags/eEwDZDXA.svg");var KN_SK = {
  l: l$1Z,
  m: m$1Z,
  s: s$1Z
};/* loaded by smart-asset */
var l$1_ = require("./flags/cJbogZMh.svg");/* loaded by smart-asset */
var m$1_ = require("./flags/DTfsVTgC.svg");/* loaded by smart-asset */
var s$1_ = require("./flags/dTTUhZto.svg");var KP = {
  l: l$1_,
  m: m$1_,
  s: s$1_
};/* loaded by smart-asset */
var l$1$ = require("./flags/epkXPaqa.svg");/* loaded by smart-asset */
var m$1$ = require("./flags/fzLzvdZC.svg");/* loaded by smart-asset */
var s$1$ = require("./flags/ecezkkGZ.svg");var KR = {
  l: l$1$,
  m: m$1$,
  s: s$1$
};/* loaded by smart-asset */
var l$20 = require("./flags/dhBrazTk.svg");/* loaded by smart-asset */
var m$20 = require("./flags/kGhPNdhJ.svg");/* loaded by smart-asset */
var s$20 = require("./flags/ceRawJCJ.svg");var KW = {
  l: l$20,
  m: m$20,
  s: s$20
};/* loaded by smart-asset */
var l$21 = require("./flags/hIEqmUnD.svg");/* loaded by smart-asset */
var m$21 = require("./flags/bTwSMhze.svg");/* loaded by smart-asset */
var s$21 = require("./flags/fehaFkac.svg");var KY = {
  l: l$21,
  m: m$21,
  s: s$21
};/* loaded by smart-asset */
var l$22 = require("./flags/euplckId.svg");/* loaded by smart-asset */
var m$22 = require("./flags/bwHEQoJd.svg");/* loaded by smart-asset */
var s$22 = require("./flags/dYIWSFhj.svg");var KZ = {
  l: l$22,
  m: m$22,
  s: s$22
};/* loaded by smart-asset */
var l$23 = require("./flags/dFWucOKI.svg");/* loaded by smart-asset */
var m$23 = require("./flags/dAYqBsuB.svg");/* loaded by smart-asset */
var s$23 = require("./flags/eVWJFyXQ.svg");var LA = {
  l: l$23,
  m: m$23,
  s: s$23
};/* loaded by smart-asset */
var l$24 = require("./flags/bXwGQLMo.svg");/* loaded by smart-asset */
var m$24 = require("./flags/emJjmDTQ.svg");/* loaded by smart-asset */
var s$24 = require("./flags/biZIcRbI.svg");var LB = {
  l: l$24,
  m: m$24,
  s: s$24
};/* loaded by smart-asset */
var l$25 = require("./flags/kxhixMSg.svg");/* loaded by smart-asset */
var m$25 = require("./flags/fAFIAihc.svg");/* loaded by smart-asset */
var s$25 = require("./flags/tUOJXrEW.svg");var LC = {
  l: l$25,
  m: m$25,
  s: s$25
};/* loaded by smart-asset */
var l$26 = require("./flags/dTaozxIQ.svg");/* loaded by smart-asset */
var m$26 = require("./flags/clrlOVks.svg");/* loaded by smart-asset */
var s$26 = require("./flags/cUlVHaaw.svg");var LI = {
  l: l$26,
  m: m$26,
  s: s$26
};/* loaded by smart-asset */
var l$27 = require("./flags/fqaUrzBG.svg");/* loaded by smart-asset */
var m$27 = require("./flags/daZMnlSd.svg");/* loaded by smart-asset */
var s$27 = require("./flags/crAmmbJz.svg");var LK = {
  l: l$27,
  m: m$27,
  s: s$27
};/* loaded by smart-asset */
var l$28 = require("./flags/eknpWFpW.svg");/* loaded by smart-asset */
var m$28 = require("./flags/eSiEitZN.svg");/* loaded by smart-asset */
var s$28 = require("./flags/dfXulWqj.svg");var LR = {
  l: l$28,
  m: m$28,
  s: s$28
};/* loaded by smart-asset */
var l$29 = require("./flags/bUMuiABL.svg");/* loaded by smart-asset */
var m$29 = require("./flags/fRukPGOP.svg");/* loaded by smart-asset */
var s$29 = require("./flags/cLWPaXWO.svg");var LS = {
  l: l$29,
  m: m$29,
  s: s$29
};/* loaded by smart-asset */
var l$2a = require("./flags/flmNdpab.svg");/* loaded by smart-asset */
var m$2a = require("./flags/dajfkiFu.svg");/* loaded by smart-asset */
var s$2a = require("./flags/RLLCjQlO.svg");var LT = {
  l: l$2a,
  m: m$2a,
  s: s$2a
};/* loaded by smart-asset */
var l$2b = require("./flags/fyoxfXUO.svg");/* loaded by smart-asset */
var m$2b = require("./flags/ccCuiUKw.svg");/* loaded by smart-asset */
var s$2b = require("./flags/eDndMWJZ.svg");var LU = {
  l: l$2b,
  m: m$2b,
  s: s$2b
};/* loaded by smart-asset */
var l$2c = require("./flags/fznDhGtB.svg");/* loaded by smart-asset */
var m$2c = require("./flags/cYtPEQGj.svg");/* loaded by smart-asset */
var s$2c = require("./flags/doxwgikU.svg");var LV = {
  l: l$2c,
  m: m$2c,
  s: s$2c
};/* loaded by smart-asset */
var l$2d = require("./flags/cLbhtgCx.svg");/* loaded by smart-asset */
var m$2d = require("./flags/dgOctevs.svg");/* loaded by smart-asset */
var s$2d = require("./flags/cBHGxmAC.svg");var LY = {
  l: l$2d,
  m: m$2d,
  s: s$2d
};/* loaded by smart-asset */
var l$2e = require("./flags/dYQlcnDf.svg");/* loaded by smart-asset */
var m$2e = require("./flags/efGxjjnA.svg");/* loaded by smart-asset */
var s$2e = require("./flags/drcZaliS.svg");var MA = {
  l: l$2e,
  m: m$2e,
  s: s$2e
};/* loaded by smart-asset */
var l$2f = require("./flags/frUwGSVh.svg");/* loaded by smart-asset */
var m$2f = require("./flags/bAZrdiVp.svg");/* loaded by smart-asset */
var s$2f = require("./flags/eebadAzt.svg");var MC = {
  l: l$2f,
  m: m$2f,
  s: s$2f
};/* loaded by smart-asset */
var l$2g = require("./flags/cXpHVGeJ.svg");/* loaded by smart-asset */
var m$2g = require("./flags/bDhuzcEx.svg");/* loaded by smart-asset */
var s$2g = require("./flags/ebZNErVv.svg");var MD = {
  l: l$2g,
  m: m$2g,
  s: s$2g
};/* loaded by smart-asset */
var l$2h = require("./flags/frVufCtC.svg");/* loaded by smart-asset */
var m$2h = require("./flags/bBquVIvq.svg");/* loaded by smart-asset */
var s$2h = require("./flags/deBZGTys.svg");var ME = {
  l: l$2h,
  m: m$2h,
  s: s$2h
};/* loaded by smart-asset */
var l$2i = require("./flags/fEhXNfAo.svg");/* loaded by smart-asset */
var m$2i = require("./flags/vMvSZAni.svg");/* loaded by smart-asset */
var s$2i = require("./flags/DxLlBMex.svg");var MF = {
  l: l$2i,
  m: m$2i,
  s: s$2i
};/* loaded by smart-asset */
var l$2j = require("./flags/bYtKCXVT.svg");/* loaded by smart-asset */
var m$2j = require("./flags/VjSxWltt.svg");/* loaded by smart-asset */
var s$2j = require("./flags/baDFXGbI.svg");var MG = {
  l: l$2j,
  m: m$2j,
  s: s$2j
};/* loaded by smart-asset */
var l$2k = require("./flags/coevhTbB.svg");/* loaded by smart-asset */
var m$2k = require("./flags/caFNvzfX.svg");/* loaded by smart-asset */
var s$2k = require("./flags/cxeWVCAg.svg");var MH = {
  l: l$2k,
  m: m$2k,
  s: s$2k
};/* loaded by smart-asset */
var l$2l = require("./flags/bTNibkMW.svg");/* loaded by smart-asset */
var m$2l = require("./flags/bksaDAuw.svg");/* loaded by smart-asset */
var s$2l = require("./flags/fzGUdFvJ.svg");var MK = {
  l: l$2l,
  m: m$2l,
  s: s$2l
};/* loaded by smart-asset */
var l$2m = require("./flags/dxGfnfNc.svg");/* loaded by smart-asset */
var m$2m = require("./flags/bebZvAfO.svg");/* loaded by smart-asset */
var s$2m = require("./flags/nbIrFypk.svg");var ML = {
  l: l$2m,
  m: m$2m,
  s: s$2m
};/* loaded by smart-asset */
var l$2n = require("./flags/cPKTmcSi.svg");/* loaded by smart-asset */
var m$2n = require("./flags/eCpfexMK.svg");/* loaded by smart-asset */
var s$2n = require("./flags/dWHibAxW.svg");var MM = {
  l: l$2n,
  m: m$2n,
  s: s$2n
};/* loaded by smart-asset */
var l$2o = require("./flags/wYzFepTh.svg");/* loaded by smart-asset */
var m$2o = require("./flags/OrnAQIqh.svg");/* loaded by smart-asset */
var s$2o = require("./flags/eYXiddxa.svg");var MN = {
  l: l$2o,
  m: m$2o,
  s: s$2o
};/* loaded by smart-asset */
var l$2p = require("./flags/dckRQOuZ.svg");/* loaded by smart-asset */
var m$2p = require("./flags/wNKadVRu.svg");/* loaded by smart-asset */
var s$2p = require("./flags/sOdIphaB.svg");var MO = {
  l: l$2p,
  m: m$2p,
  s: s$2p
};/* loaded by smart-asset */
var l$2q = require("./flags/dzzWlZKF.svg");/* loaded by smart-asset */
var m$2q = require("./flags/bihXKYCr.svg");/* loaded by smart-asset */
var s$2q = require("./flags/fSSMyIfo.svg");var MP = {
  l: l$2q,
  m: m$2q,
  s: s$2q
};/* loaded by smart-asset */
var l$2r = require("./flags/fEhXNfAo.svg");/* loaded by smart-asset */
var m$2r = require("./flags/cKBesAgm.svg");/* loaded by smart-asset */
var s$2r = require("./flags/DxLlBMex.svg");var MQ = {
  l: l$2r,
  m: m$2r,
  s: s$2r
};/* loaded by smart-asset */
var l$2s = require("./flags/bNdXUJQP.svg");/* loaded by smart-asset */
var m$2s = require("./flags/evTnyhqA.svg");/* loaded by smart-asset */
var s$2s = require("./flags/dItwOjTg.svg");var MR = {
  l: l$2s,
  m: m$2s,
  s: s$2s
};/* loaded by smart-asset */
var l$2t = require("./flags/bYhMVEOq.svg");/* loaded by smart-asset */
var m$2t = require("./flags/bLdxHmIU.svg");/* loaded by smart-asset */
var s$2t = require("./flags/fcGrHAuj.svg");var MS = {
  l: l$2t,
  m: m$2t,
  s: s$2t
};/* loaded by smart-asset */
var l$2u = require("./flags/bzMeaoCj.svg");/* loaded by smart-asset */
var m$2u = require("./flags/dozjshZy.svg");/* loaded by smart-asset */
var s$2u = require("./flags/egMuYDpd.svg");var MT = {
  l: l$2u,
  m: m$2u,
  s: s$2u
};/* loaded by smart-asset */
var l$2v = require("./flags/brnfWcWM.svg");/* loaded by smart-asset */
var m$2v = require("./flags/fRRehigy.svg");/* loaded by smart-asset */
var s$2v = require("./flags/cAZnobGU.svg");var MU = {
  l: l$2v,
  m: m$2v,
  s: s$2v
};/* loaded by smart-asset */
var l$2w = require("./flags/fGzNjRhC.svg");/* loaded by smart-asset */
var m$2w = require("./flags/fsLnbEeG.svg");/* loaded by smart-asset */
var s$2w = require("./flags/cSZsUEUo.svg");var MV = {
  l: l$2w,
  m: m$2w,
  s: s$2w
};/* loaded by smart-asset */
var l$2x = require("./flags/cCMraKHf.svg");/* loaded by smart-asset */
var m$2x = require("./flags/dCLYclul.svg");/* loaded by smart-asset */
var s$2x = require("./flags/buXTautj.svg");var MW = {
  l: l$2x,
  m: m$2x,
  s: s$2x
};/* loaded by smart-asset */
var l$2y = require("./flags/cgIeqtFQ.svg");/* loaded by smart-asset */
var m$2y = require("./flags/fpfNNQlM.svg");/* loaded by smart-asset */
var s$2y = require("./flags/cbZaHnvH.svg");var MX = {
  l: l$2y,
  m: m$2y,
  s: s$2y
};/* loaded by smart-asset */
var l$2z = require("./flags/fzKetmWm.svg");/* loaded by smart-asset */
var m$2z = require("./flags/HbLvYSHa.svg");/* loaded by smart-asset */
var s$2z = require("./flags/tAYbXRyX.svg");var MY = {
  l: l$2z,
  m: m$2z,
  s: s$2z
};/* loaded by smart-asset */
var l$2A = require("./flags/bVvkvdbF.svg");/* loaded by smart-asset */
var m$2A = require("./flags/eDciKgNQ.svg");/* loaded by smart-asset */
var s$2A = require("./flags/bzHMPQyP.svg");var MZ = {
  l: l$2A,
  m: m$2A,
  s: s$2A
};/* loaded by smart-asset */
var l$2B = require("./flags/bRsmadbI.svg");/* loaded by smart-asset */
var m$2B = require("./flags/NjKDOTas.svg");/* loaded by smart-asset */
var s$2B = require("./flags/fyBjUIcb.svg");var NA = {
  l: l$2B,
  m: m$2B,
  s: s$2B
};/* loaded by smart-asset */
var l$2C = require("./flags/fEhXNfAo.svg");/* loaded by smart-asset */
var m$2C = require("./flags/cFDNxErm.svg");/* loaded by smart-asset */
var s$2C = require("./flags/DxLlBMex.svg");var NC = {
  l: l$2C,
  m: m$2C,
  s: s$2C
};/* loaded by smart-asset */
var l$2D = require("./flags/FswJKDCc.svg");/* loaded by smart-asset */
var m$2D = require("./flags/foxUfPLv.svg");/* loaded by smart-asset */
var s$2D = require("./flags/ceUEctXx.svg");var NE = {
  l: l$2D,
  m: m$2D,
  s: s$2D
};/* loaded by smart-asset */
var l$2E = require("./flags/eZzvpOmH.svg");/* loaded by smart-asset */
var m$2E = require("./flags/eXvWsyKs.svg");/* loaded by smart-asset */
var s$2E = require("./flags/bCTNCgwE.svg");var NF = {
  l: l$2E,
  m: m$2E,
  s: s$2E
};/* loaded by smart-asset */
var l$2F = require("./flags/dMPImdoY.svg");/* loaded by smart-asset */
var m$2F = require("./flags/fGvBbTIM.svg");/* loaded by smart-asset */
var s$2F = require("./flags/cVdTSEnO.svg");var NG = {
  l: l$2F,
  m: m$2F,
  s: s$2F
};/* loaded by smart-asset */
var l$2G = require("./flags/brRrHWRO.svg");/* loaded by smart-asset */
var m$2G = require("./flags/bHtRxiBS.svg");/* loaded by smart-asset */
var s$2G = require("./flags/fQCGXjuQ.svg");var NI = {
  l: l$2G,
  m: m$2G,
  s: s$2G
};/* loaded by smart-asset */
var l$2H = require("./flags/eXnFvzif.svg");/* loaded by smart-asset */
var m$2H = require("./flags/dRYvMKWp.svg");/* loaded by smart-asset */
var s$2H = require("./flags/dlpgcBud.svg");var NL = {
  l: l$2H,
  m: m$2H,
  s: s$2H
};/* loaded by smart-asset */
var l$2I = require("./flags/ebqcTWCf.svg");/* loaded by smart-asset */
var m$2I = require("./flags/dyYDCznF.svg");/* loaded by smart-asset */
var s$2I = require("./flags/dPJCCjNh.svg");var NO = {
  l: l$2I,
  m: m$2I,
  s: s$2I
};/* loaded by smart-asset */
var l$2J = require("./flags/YVgTJDNw.svg");/* loaded by smart-asset */
var m$2J = require("./flags/RXDKFcOS.svg");/* loaded by smart-asset */
var s$2J = require("./flags/eqGETpDH.svg");var NP = {
  l: l$2J,
  m: m$2J,
  s: s$2J
};/* loaded by smart-asset */
var l$2K = require("./flags/hLfVsBSZ.svg");/* loaded by smart-asset */
var m$2K = require("./flags/dNvMDqrU.svg");/* loaded by smart-asset */
var s$2K = require("./flags/fLlgPpRM.svg");var NR = {
  l: l$2K,
  m: m$2K,
  s: s$2K
};/* loaded by smart-asset */
var l$2L = require("./flags/fwyKbfzX.svg");/* loaded by smart-asset */
var m$2L = require("./flags/eXIqkLaw.svg");/* loaded by smart-asset */
var s$2L = require("./flags/ZeYmNWkX.svg");var NU = {
  l: l$2L,
  m: m$2L,
  s: s$2L
};/* loaded by smart-asset */
var l$2M = require("./flags/ctQOMqMt.svg");/* loaded by smart-asset */
var m$2M = require("./flags/bkuzvnDX.svg");/* loaded by smart-asset */
var s$2M = require("./flags/dcdGDzuu.svg");var NZ = {
  l: l$2M,
  m: m$2M,
  s: s$2M
};/* loaded by smart-asset */
var l$2N = require("./flags/hPZHBPAP.svg");/* loaded by smart-asset */
var m$2N = require("./flags/eIUKZCLt.svg");/* loaded by smart-asset */
var s$2N = require("./flags/dDDPiDjv.svg");var OM = {
  l: l$2N,
  m: m$2N,
  s: s$2N
};/* loaded by smart-asset */
var l$2O = require("./flags/fhaogfHM.svg");/* loaded by smart-asset */
var m$2O = require("./flags/bPdUaNLH.svg");/* loaded by smart-asset */
var s$2O = require("./flags/dowobTKP.svg");var PA = {
  l: l$2O,
  m: m$2O,
  s: s$2O
};/* loaded by smart-asset */
var l$2P = require("./flags/ebzSmbvS.svg");/* loaded by smart-asset */
var m$2P = require("./flags/eKbGyReV.svg");/* loaded by smart-asset */
var s$2P = require("./flags/eckWrmlQ.svg");var PE = {
  l: l$2P,
  m: m$2P,
  s: s$2P
};/* loaded by smart-asset */
var l$2Q = require("./flags/erCqsSIW.svg");/* loaded by smart-asset */
var m$2Q = require("./flags/fgBEuQrd.svg");/* loaded by smart-asset */
var s$2Q = require("./flags/dPxZQqQF.svg");var PF = {
  l: l$2Q,
  m: m$2Q,
  s: s$2Q
};/* loaded by smart-asset */
var l$2R = require("./flags/cCoSYOnT.svg");/* loaded by smart-asset */
var m$2R = require("./flags/euwKJmWO.svg");/* loaded by smart-asset */
var s$2R = require("./flags/HKeLHNVS.svg");var PG = {
  l: l$2R,
  m: m$2R,
  s: s$2R
};/* loaded by smart-asset */
var l$2S = require("./flags/cpkKICCI.svg");/* loaded by smart-asset */
var m$2S = require("./flags/cMMeNCgO.svg");/* loaded by smart-asset */
var s$2S = require("./flags/dFKnYbgv.svg");var PH = {
  l: l$2S,
  m: m$2S,
  s: s$2S
};/* loaded by smart-asset */
var l$2T = require("./flags/borYOkXv.svg");/* loaded by smart-asset */
var m$2T = require("./flags/bBZLPTDV.svg");/* loaded by smart-asset */
var s$2T = require("./flags/drsHHxVk.svg");var PK = {
  l: l$2T,
  m: m$2T,
  s: s$2T
};/* loaded by smart-asset */
var l$2U = require("./flags/ctjyHHdX.svg");/* loaded by smart-asset */
var m$2U = require("./flags/foecmiJG.svg");/* loaded by smart-asset */
var s$2U = require("./flags/brWJPNPj.svg");var PL = {
  l: l$2U,
  m: m$2U,
  s: s$2U
};/* loaded by smart-asset */
var l$2V = require("./flags/ZDaasPtL.svg");/* loaded by smart-asset */
var m$2V = require("./flags/csfGxZWq.svg");/* loaded by smart-asset */
var s$2V = require("./flags/dwZuAMmF.svg");var PM = {
  l: l$2V,
  m: m$2V,
  s: s$2V
};/* loaded by smart-asset */
var l$2W = require("./flags/brBTirRs.svg");/* loaded by smart-asset */
var m$2W = require("./flags/MXNnsYxy.svg");/* loaded by smart-asset */
var s$2W = require("./flags/fHQWpbOc.svg");var PN = {
  l: l$2W,
  m: m$2W,
  s: s$2W
};/* loaded by smart-asset */
var l$2X = require("./flags/cKbXeDXF.svg");/* loaded by smart-asset */
var m$2X = require("./flags/dcTqLkUM.svg");/* loaded by smart-asset */
var s$2X = require("./flags/YBIXbDVG.svg");var PR = {
  l: l$2X,
  m: m$2X,
  s: s$2X
};/* loaded by smart-asset */
var l$2Y = require("./flags/eyPIyfUs.svg");/* loaded by smart-asset */
var m$2Y = require("./flags/rZrYoCFF.svg");/* loaded by smart-asset */
var s$2Y = require("./flags/cacjXGSy.svg");var PS = {
  l: l$2Y,
  m: m$2Y,
  s: s$2Y
};/* loaded by smart-asset */
var l$2Z = require("./flags/bynYllsR.svg");/* loaded by smart-asset */
var m$2Z = require("./flags/eBsmiLYj.svg");/* loaded by smart-asset */
var s$2Z = require("./flags/ffaXqlLX.svg");var PT = {
  l: l$2Z,
  m: m$2Z,
  s: s$2Z
};/* loaded by smart-asset */
var l$2_ = require("./flags/bCmxAwoX.svg");/* loaded by smart-asset */
var m$2_ = require("./flags/cJtevNvj.svg");/* loaded by smart-asset */
var s$2_ = require("./flags/eGCxKIhg.svg");var PW = {
  l: l$2_,
  m: m$2_,
  s: s$2_
};/* loaded by smart-asset */
var l$2$ = require("./flags/bSoHACTS.svg");/* loaded by smart-asset */
var m$2$ = require("./flags/bkYyEORF.svg");/* loaded by smart-asset */
var s$2$ = require("./flags/ccAIFbkk.svg");var PY = {
  l: l$2$,
  m: m$2$,
  s: s$2$
};/* loaded by smart-asset */
var l$30 = require("./flags/dgoyBNwf.svg");/* loaded by smart-asset */
var m$30 = require("./flags/fCPoeYsZ.svg");/* loaded by smart-asset */
var s$30 = require("./flags/cLcrfmyu.svg");var QA = {
  l: l$30,
  m: m$30,
  s: s$30
};/* loaded by smart-asset */
var l$31 = require("./flags/cegWXvcn.svg");/* loaded by smart-asset */
var m$31 = require("./flags/Pgidbxkc.svg");/* loaded by smart-asset */
var s$31 = require("./flags/fcLtHIkI.svg");var RAINBOW = {
  l: l$31,
  m: m$31,
  s: s$31
};/* loaded by smart-asset */
var l$32 = require("./flags/ATQSDCUL.svg");/* loaded by smart-asset */
var m$32 = require("./flags/cFDNxErm.svg");/* loaded by smart-asset */
var s$32 = require("./flags/DxLlBMex.svg");var RE = {
  l: l$32,
  m: m$32,
  s: s$32
};/* loaded by smart-asset */
var l$33 = require("./flags/bOrvnqKU.svg");/* loaded by smart-asset */
var m$33 = require("./flags/ePXvewwL.svg");/* loaded by smart-asset */
var s$33 = require("./flags/eRZjpZGB.svg");var RO = {
  l: l$33,
  m: m$33,
  s: s$33
};/* loaded by smart-asset */
var l$34 = require("./flags/fSbYDaig.svg");/* loaded by smart-asset */
var m$34 = require("./flags/NgcSyFHR.svg");/* loaded by smart-asset */
var s$34 = require("./flags/bCVGzVPh.svg");var RS = {
  l: l$34,
  m: m$34,
  s: s$34
};/* loaded by smart-asset */
var l$35 = require("./flags/zHxJNcsD.svg");/* loaded by smart-asset */
var m$35 = require("./flags/dvqWEYcb.svg");/* loaded by smart-asset */
var s$35 = require("./flags/eAdeCOZV.svg");var RU = {
  l: l$35,
  m: m$35,
  s: s$35
};/* loaded by smart-asset */
var l$36 = require("./flags/femfJzyH.svg");/* loaded by smart-asset */
var m$36 = require("./flags/csQFQGsd.svg");/* loaded by smart-asset */
var s$36 = require("./flags/vdctrSoj.svg");var RW = {
  l: l$36,
  m: m$36,
  s: s$36
};/* loaded by smart-asset */
var l$37 = require("./flags/fnObVnsz.svg");/* loaded by smart-asset */
var m$37 = require("./flags/XVhIuFgN.svg");/* loaded by smart-asset */
var s$37 = require("./flags/bKmJmMhY.svg");var SA = {
  l: l$37,
  m: m$37,
  s: s$37
};/* loaded by smart-asset */
var l$38 = require("./flags/bYeTFNAM.svg");/* loaded by smart-asset */
var m$38 = require("./flags/evWoQPYl.svg");/* loaded by smart-asset */
var s$38 = require("./flags/dxGzTWWB.svg");var SB = {
  l: l$38,
  m: m$38,
  s: s$38
};/* loaded by smart-asset */
var l$39 = require("./flags/efzZEiAe.svg");/* loaded by smart-asset */
var m$39 = require("./flags/dDCwKSUE.svg");/* loaded by smart-asset */
var s$39 = require("./flags/bJmClnpv.svg");var SC = {
  l: l$39,
  m: m$39,
  s: s$39
};/* loaded by smart-asset */
var l$3a = require("./flags/dLRfgFWA.svg");/* loaded by smart-asset */
var m$3a = require("./flags/eZbHIxXo.svg");/* loaded by smart-asset */
var s$3a = require("./flags/cSAanoGr.svg");var SD = {
  l: l$3a,
  m: m$3a,
  s: s$3a
};/* loaded by smart-asset */
var l$3b = require("./flags/cGqieldv.svg");/* loaded by smart-asset */
var m$3b = require("./flags/euBiVBbp.svg");/* loaded by smart-asset */
var s$3b = require("./flags/gaXojVlu.svg");var SE = {
  l: l$3b,
  m: m$3b,
  s: s$3b
};/* loaded by smart-asset */
var l$3c = require("./flags/bbNGeGdL.svg");/* loaded by smart-asset */
var m$3c = require("./flags/dLeRaelJ.svg");/* loaded by smart-asset */
var s$3c = require("./flags/bbUHYiOo.svg");var SG = {
  l: l$3c,
  m: m$3c,
  s: s$3c
};/* loaded by smart-asset */
var l$3d = require("./flags/cTomSzoW.svg");/* loaded by smart-asset */
var m$3d = require("./flags/eJNjvASV.svg");/* loaded by smart-asset */
var s$3d = require("./flags/fvwaGIKa.svg");var SH = {
  l: l$3d,
  m: m$3d,
  s: s$3d
};/* loaded by smart-asset */
var l$3e = require("./flags/cdCPOWBE.svg");/* loaded by smart-asset */
var m$3e = require("./flags/eduYxpSX.svg");/* loaded by smart-asset */
var s$3e = require("./flags/fUdnzUFZ.svg");var SI = {
  l: l$3e,
  m: m$3e,
  s: s$3e
};/* loaded by smart-asset */
var l$3f = require("./flags/ebqcTWCf.svg");/* loaded by smart-asset */
var m$3f = require("./flags/dyYDCznF.svg");/* loaded by smart-asset */
var s$3f = require("./flags/dPJCCjNh.svg");var SJ = {
  l: l$3f,
  m: m$3f,
  s: s$3f
};/* loaded by smart-asset */
var l$3g = require("./flags/fsWyZiGX.svg");/* loaded by smart-asset */
var m$3g = require("./flags/HVMoXaOu.svg");/* loaded by smart-asset */
var s$3g = require("./flags/cEdjHKrB.svg");var SK = {
  l: l$3g,
  m: m$3g,
  s: s$3g
};/* loaded by smart-asset */
var l$3h = require("./flags/cYyDHQSI.svg");/* loaded by smart-asset */
var m$3h = require("./flags/dMjnSLam.svg");/* loaded by smart-asset */
var s$3h = require("./flags/gfXPjkkN.svg");var SL = {
  l: l$3h,
  m: m$3h,
  s: s$3h
};/* loaded by smart-asset */
var l$3i = require("./flags/cyLbtozi.svg");/* loaded by smart-asset */
var m$3i = require("./flags/uGjywMWi.svg");/* loaded by smart-asset */
var s$3i = require("./flags/fhLIiNGh.svg");var SM = {
  l: l$3i,
  m: m$3i,
  s: s$3i
};/* loaded by smart-asset */
var l$3j = require("./flags/fjfgLDtH.svg");/* loaded by smart-asset */
var m$3j = require("./flags/etKNWUUV.svg");/* loaded by smart-asset */
var s$3j = require("./flags/dIsevuer.svg");var SN = {
  l: l$3j,
  m: m$3j,
  s: s$3j
};/* loaded by smart-asset */
var l$3k = require("./flags/dCodgcUs.svg");/* loaded by smart-asset */
var m$3k = require("./flags/rPTNvkCT.svg");/* loaded by smart-asset */
var s$3k = require("./flags/fFuVXatl.svg");var SO = {
  l: l$3k,
  m: m$3k,
  s: s$3k
};/* loaded by smart-asset */
var l$3l = require("./flags/eilBjnFv.svg");/* loaded by smart-asset */
var m$3l = require("./flags/dtwNCdAP.svg");/* loaded by smart-asset */
var s$3l = require("./flags/edylFAOk.svg");var SR = {
  l: l$3l,
  m: m$3l,
  s: s$3l
};/* loaded by smart-asset */
var l$3m = require("./flags/ewfjDLii.svg");/* loaded by smart-asset */
var m$3m = require("./flags/cRyMSsbO.svg");/* loaded by smart-asset */
var s$3m = require("./flags/csaLnyEZ.svg");var SS = {
  l: l$3m,
  m: m$3m,
  s: s$3m
};/* loaded by smart-asset */
var l$3n = require("./flags/nMdZUIFH.svg");/* loaded by smart-asset */
var m$3n = require("./flags/bWvXdtEB.svg");/* loaded by smart-asset */
var s$3n = require("./flags/eDbQyAqe.svg");var ST = {
  l: l$3n,
  m: m$3n,
  s: s$3n
};/* loaded by smart-asset */
var l$3o = require("./flags/daxoKanu.svg");/* loaded by smart-asset */
var m$3o = require("./flags/ezILtaWH.svg");/* loaded by smart-asset */
var s$3o = require("./flags/fmsPkdpB.svg");var SV = {
  l: l$3o,
  m: m$3o,
  s: s$3o
};/* loaded by smart-asset */
var l$3p = require("./flags/bTpMhBus.svg");/* loaded by smart-asset */
var m$3p = require("./flags/YgTAerUE.svg");/* loaded by smart-asset */
var s$3p = require("./flags/cErBoVue.svg");var SX = {
  l: l$3p,
  m: m$3p,
  s: s$3p
};/* loaded by smart-asset */
var l$3q = require("./flags/ciDsRLoG.svg");/* loaded by smart-asset */
var m$3q = require("./flags/edaQJzqb.svg");/* loaded by smart-asset */
var s$3q = require("./flags/gaUWBcBm.svg");var SY = {
  l: l$3q,
  m: m$3q,
  s: s$3q
};/* loaded by smart-asset */
var l$3r = require("./flags/JiWDSCmM.svg");/* loaded by smart-asset */
var m$3r = require("./flags/cXBlhCEv.svg");/* loaded by smart-asset */
var s$3r = require("./flags/eYDDJKDr.svg");var SZ = {
  l: l$3r,
  m: m$3r,
  s: s$3r
};/* loaded by smart-asset */
var l$3s = require("./flags/fCxpIebP.svg");/* loaded by smart-asset */
var m$3s = require("./flags/cXvMBgRB.svg");/* loaded by smart-asset */
var s$3s = require("./flags/xLqtbgmu.svg");var TC = {
  l: l$3s,
  m: m$3s,
  s: s$3s
};/* loaded by smart-asset */
var l$3t = require("./flags/bHlNePxm.svg");/* loaded by smart-asset */
var m$3t = require("./flags/cKehaAZI.svg");/* loaded by smart-asset */
var s$3t = require("./flags/bPhUxKFY.svg");var TD = {
  l: l$3t,
  m: m$3t,
  s: s$3t
};/* loaded by smart-asset */
var l$3u = require("./flags/bymjuAvr.svg");/* loaded by smart-asset */
var m$3u = require("./flags/fBwRYVZH.svg");/* loaded by smart-asset */
var s$3u = require("./flags/dplhbUqU.svg");var TF = {
  l: l$3u,
  m: m$3u,
  s: s$3u
};/* loaded by smart-asset */
var l$3v = require("./flags/bYlxTUGc.svg");/* loaded by smart-asset */
var m$3v = require("./flags/GEkMFDMF.svg");/* loaded by smart-asset */
var s$3v = require("./flags/bgQEEDDD.svg");var TG = {
  l: l$3v,
  m: m$3v,
  s: s$3v
};/* loaded by smart-asset */
var l$3w = require("./flags/dprrvuNN.svg");/* loaded by smart-asset */
var m$3w = require("./flags/ewfSamkE.svg");/* loaded by smart-asset */
var s$3w = require("./flags/qfAFkFIG.svg");var TH = {
  l: l$3w,
  m: m$3w,
  s: s$3w
};/* loaded by smart-asset */
var l$3x = require("./flags/fEQmieuJ.svg");/* loaded by smart-asset */
var m$3x = require("./flags/djsHYOYo.svg");/* loaded by smart-asset */
var s$3x = require("./flags/ecTnHDPJ.svg");var TJ = {
  l: l$3x,
  m: m$3x,
  s: s$3x
};/* loaded by smart-asset */
var l$3y = require("./flags/bgLvRGFt.svg");/* loaded by smart-asset */
var m$3y = require("./flags/ciNtmwLY.svg");/* loaded by smart-asset */
var s$3y = require("./flags/IMRfUCzm.svg");var TK = {
  l: l$3y,
  m: m$3y,
  s: s$3y
};/* loaded by smart-asset */
var l$3z = require("./flags/fNPhSYlg.svg");/* loaded by smart-asset */
var m$3z = require("./flags/djykRVuz.svg");/* loaded by smart-asset */
var s$3z = require("./flags/dcMzeqZW.svg");var TL = {
  l: l$3z,
  m: m$3z,
  s: s$3z
};/* loaded by smart-asset */
var l$3A = require("./flags/dMLENVZz.svg");/* loaded by smart-asset */
var m$3A = require("./flags/fdoiuGqv.svg");/* loaded by smart-asset */
var s$3A = require("./flags/cBgBHZnQ.svg");var TM = {
  l: l$3A,
  m: m$3A,
  s: s$3A
};/* loaded by smart-asset */
var l$3B = require("./flags/biqdDkMj.svg");/* loaded by smart-asset */
var m$3B = require("./flags/eNjJXnCx.svg");/* loaded by smart-asset */
var s$3B = require("./flags/cYfVnfEY.svg");var TN = {
  l: l$3B,
  m: m$3B,
  s: s$3B
};/* loaded by smart-asset */
var l$3C = require("./flags/dxiKavZZ.svg");/* loaded by smart-asset */
var m$3C = require("./flags/dSkFxLIC.svg");/* loaded by smart-asset */
var s$3C = require("./flags/eNKlRJch.svg");var TO = {
  l: l$3C,
  m: m$3C,
  s: s$3C
};/* loaded by smart-asset */
var l$3D = require("./flags/fRNZSCUS.svg");/* loaded by smart-asset */
var m$3D = require("./flags/dqRWdaod.svg");/* loaded by smart-asset */
var s$3D = require("./flags/fTSghPHw.svg");var TR = {
  l: l$3D,
  m: m$3D,
  s: s$3D
};/* loaded by smart-asset */
var l$3E = require("./flags/ezicOHOo.svg");/* loaded by smart-asset */
var m$3E = require("./flags/dBDtimLm.svg");/* loaded by smart-asset */
var s$3E = require("./flags/cjoCPheM.svg");var TT = {
  l: l$3E,
  m: m$3E,
  s: s$3E
};/* loaded by smart-asset */
var l$3F = require("./flags/gVakRkUc.svg");/* loaded by smart-asset */
var m$3F = require("./flags/fFwdIVjU.svg");/* loaded by smart-asset */
var s$3F = require("./flags/HOZtQQQs.svg");var TV = {
  l: l$3F,
  m: m$3F,
  s: s$3F
};/* loaded by smart-asset */
var l$3G = require("./flags/fTizLhkx.svg");/* loaded by smart-asset */
var m$3G = require("./flags/eFnesJQF.svg");/* loaded by smart-asset */
var s$3G = require("./flags/fPmTXKrp.svg");var TW = {
  l: l$3G,
  m: m$3G,
  s: s$3G
};/* loaded by smart-asset */
var l$3H = require("./flags/czhrlNTv.svg");/* loaded by smart-asset */
var m$3H = require("./flags/bgWsQvbZ.svg");/* loaded by smart-asset */
var s$3H = require("./flags/fhaKPuKE.svg");var TZ = {
  l: l$3H,
  m: m$3H,
  s: s$3H
};/* loaded by smart-asset */
var l$3I = require("./flags/foFOGRfv.svg");/* loaded by smart-asset */
var m$3I = require("./flags/cIKhBQih.svg");/* loaded by smart-asset */
var s$3I = require("./flags/eIVjuMWe.svg");var UA = {
  l: l$3I,
  m: m$3I,
  s: s$3I
};/* loaded by smart-asset */
var l$3J = require("./flags/fWpUhtNI.svg");/* loaded by smart-asset */
var m$3J = require("./flags/nwyXgwbn.svg");/* loaded by smart-asset */
var s$3J = require("./flags/bLvopQVQ.svg");var UG = {
  l: l$3J,
  m: m$3J,
  s: s$3J
};/* loaded by smart-asset */
var l$3K = require("./flags/bTdqfJup.svg");/* loaded by smart-asset */
var m$3K = require("./flags/cNzVMmzA.svg");/* loaded by smart-asset */
var s$3K = require("./flags/boNBkmWa.svg");var UM = {
  l: l$3K,
  m: m$3K,
  s: s$3K
};/* loaded by smart-asset */
var l$3L = require("./flags/epPFcuRM.svg");/* loaded by smart-asset */
var m$3L = require("./flags/eTTXVbjd.svg");/* loaded by smart-asset */
var s$3L = require("./flags/dKbwrXyg.svg");var UNASUR = {
  l: l$3L,
  m: m$3L,
  s: s$3L
};/* loaded by smart-asset */
var l$3M = require("./flags/fahKgNMh.svg");/* loaded by smart-asset */
var m$3M = require("./flags/cNzVMmzA.svg");/* loaded by smart-asset */
var s$3M = require("./flags/boNBkmWa.svg");var US = {
  l: l$3M,
  m: m$3M,
  s: s$3M
};/* loaded by smart-asset */
var l$3N = require("./flags/DJsPVnlk.svg");/* loaded by smart-asset */
var m$3N = require("./flags/cTVmaWVj.svg");/* loaded by smart-asset */
var s$3N = require("./flags/dipqYmDO.svg");var UY = {
  l: l$3N,
  m: m$3N,
  s: s$3N
};/* loaded by smart-asset */
var l$3O = require("./flags/bcgDYmfF.svg");/* loaded by smart-asset */
var m$3O = require("./flags/dZdOIpgp.svg");/* loaded by smart-asset */
var s$3O = require("./flags/gagdRyVR.svg");var UZ = {
  l: l$3O,
  m: m$3O,
  s: s$3O
};/* loaded by smart-asset */
var l$3P = require("./flags/fkGOLcfe.svg");/* loaded by smart-asset */
var m$3P = require("./flags/fAiojKuv.svg");/* loaded by smart-asset */
var s$3P = require("./flags/uohuTOHy.svg");var VA = {
  l: l$3P,
  m: m$3P,
  s: s$3P
};/* loaded by smart-asset */
var l$3Q = require("./flags/euxNWYSR.svg");/* loaded by smart-asset */
var m$3Q = require("./flags/covffPmM.svg");/* loaded by smart-asset */
var s$3Q = require("./flags/DBBUaDwV.svg");var VC = {
  l: l$3Q,
  m: m$3Q,
  s: s$3Q
};/* loaded by smart-asset */
var l$3R = require("./flags/bIXBMAOz.svg");/* loaded by smart-asset */
var m$3R = require("./flags/VsgvIOub.svg");/* loaded by smart-asset */
var s$3R = require("./flags/dxvOevJa.svg");var VE = {
  l: l$3R,
  m: m$3R,
  s: s$3R
};/* loaded by smart-asset */
var l$3S = require("./flags/bCaAcfVs.svg");/* loaded by smart-asset */
var m$3S = require("./flags/dWHDUCIB.svg");/* loaded by smart-asset */
var s$3S = require("./flags/xBGewiBF.svg");var VG = {
  l: l$3S,
  m: m$3S,
  s: s$3S
};/* loaded by smart-asset */
var l$3T = require("./flags/cFUoYTTa.svg");/* loaded by smart-asset */
var m$3T = require("./flags/eOrtBptG.svg");/* loaded by smart-asset */
var s$3T = require("./flags/HTesVRop.svg");var VI = {
  l: l$3T,
  m: m$3T,
  s: s$3T
};/* loaded by smart-asset */
var l$3U = require("./flags/fXBeKUPk.svg");/* loaded by smart-asset */
var m$3U = require("./flags/fQcSIXyd.svg");/* loaded by smart-asset */
var s$3U = require("./flags/bIIkuAXl.svg");var VN = {
  l: l$3U,
  m: m$3U,
  s: s$3U
};/* loaded by smart-asset */
var l$3V = require("./flags/emlXNqIi.svg");/* loaded by smart-asset */
var m$3V = require("./flags/dyJpQeXB.svg");/* loaded by smart-asset */
var s$3V = require("./flags/cAgIyjjT.svg");var VU = {
  l: l$3V,
  m: m$3V,
  s: s$3V
};/* loaded by smart-asset */
var l$3W = require("./flags/ZDaasPtL.svg");/* loaded by smart-asset */
var m$3W = require("./flags/csfGxZWq.svg");/* loaded by smart-asset */
var s$3W = require("./flags/dwZuAMmF.svg");var WF = {
  l: l$3W,
  m: m$3W,
  s: s$3W
};/* loaded by smart-asset */
var l$3X = require("./flags/eCHCcfwg.svg");/* loaded by smart-asset */
var m$3X = require("./flags/fllcvgsR.svg");/* loaded by smart-asset */
var s$3X = require("./flags/fFqQmIop.svg");var WS = {
  l: l$3X,
  m: m$3X,
  s: s$3X
};/* loaded by smart-asset */
var l$3Y = require("./flags/fhstUKEQ.svg");/* loaded by smart-asset */
var m$3Y = require("./flags/eFAioECd.svg");/* loaded by smart-asset */
var s$3Y = require("./flags/efZIUcxE.svg");var YE = {
  l: l$3Y,
  m: m$3Y,
  s: s$3Y
};/* loaded by smart-asset */
var l$3Z = require("./flags/KztdndQa.svg");/* loaded by smart-asset */
var m$3Z = require("./flags/fxjFUdLR.svg");/* loaded by smart-asset */
var s$3Z = require("./flags/caTuGpou.svg");var ZA = {
  l: l$3Z,
  m: m$3Z,
  s: s$3Z
};/* loaded by smart-asset */
var l$3_ = require("./flags/caRurAEC.svg");/* loaded by smart-asset */
var m$3_ = require("./flags/bSOiJkGv.svg");/* loaded by smart-asset */
var s$3_ = require("./flags/fFcIQMGS.svg");var ZM = {
  l: l$3_,
  m: m$3_,
  s: s$3_
};/* loaded by smart-asset */
var l$3$ = require("./flags/dtbDsVAb.svg");/* loaded by smart-asset */
var m$3$ = require("./flags/deXXLsYb.svg");/* loaded by smart-asset */
var s$3$ = require("./flags/fvAOTpIx.svg");var ZW = {
  l: l$3$,
  m: m$3$,
  s: s$3$
};/* loaded by smart-asset */
var l$40 = require("./flags/eHaEdZPU.svg");/* loaded by smart-asset */
var m$40 = require("./flags/npXSINbR.svg");/* loaded by smart-asset */
var s$40 = require("./flags/bmdKMNca.svg");var AF = {
  l: l$40,
  m: m$40,
  s: s$40
};/* loaded by smart-asset */
var l$41 = require("./flags/ebqcTWCf.svg");/* loaded by smart-asset */
var m$41 = require("./flags/dyYDCznF.svg");/* loaded by smart-asset */
var s$41 = require("./flags/dPJCCjNh.svg");var BV = {
  l: l$41,
  m: m$41,
  s: s$41
};var flags = {
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
};function isoToCountryCode(isoCode) {
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
  var formatAssetCode = assetCode.replace('-', '_');

  try {
    return flags[formatAssetCode][size];
  } catch (_unused) {
    console.error('No flag found for ' + assetCode + ' / size ' + size);
  }
}exports.codeList=codeList;exports.flags=flags;exports.imageUrl=imageUrl;exports.isoToCountryCode=isoToCountryCode;