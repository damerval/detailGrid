/**
 * Created by pdamerval on 3/3/2017.
 */

/* Detail grid AJAX data definitions */
var desktopSource = {
  dataType: 'json',
  dataFields: [
    { name: "offenderNumber", map: 'ofn', type: "int" },
    { name: "section", map: 'sct', type: "string" },
    { name: "statusDate", map: 'sta>date', type: "date" },
    { name: "arrivalDate", map: 'arr>date', type: "date" },
    { name: "offenderName", map: 'nam', type: "string" },
    { name: "offenderFullName", map: 'fna', type: "string" },
    { name: "initialOMPDate", map: 'iod>date', type: "date" },
    { name: "OMPUpdateDate", map: 'oud>date', type: "date" },
    { name: "releaseDate", map:'rel>date', type: "date" },
    { name: "LSISVDate", map: 'lsv>date', type: "date" },
    { name: "LSISVEval", map: 'lse', type: "string" },
    { name: "LSISVScore", map: 'lss', type: "int" },
    { name: "LSIRDate", map: 'lrd>date', type: "date" },
    { name: "LSIREval", map: 'lre', type: "string" },
    { name: "LSIRScore", map: 'lrs', type: "int" },
    { name: "staticDate", map: 'scd>date', type: "date" },
    { name: "staticScore", map: 'scs', type: "int" },
    { name: "IPO", map: 'ipo', type: "string" },
    { name: "IPOUserName", map: 'ipu', type: "string" },
    { name: "sexOffender", map: 'so', type: "string" },
    { name: "legalStatus", map: 'leg', type: "string" },
    { name: "custodyLevel", map: 'cus', type: "string" },
    { name: "classificationDueDate", map: 'cdd>date', type: "date" },
    { name: "location", map: 'loc', type: "string" },
    { name: "paroleEligibilityDate", map: 'ped>date', type: "date" },
    { name: "adminSegregation", map: 'asg', type: "string" },
    { name: "furloughEligibility",map: 'fed>date',  type: "date" },
    { name: "NOR", map: 'pnr', type: "string" },
    { name: "mandatoryParole", map: 'smp', type: "string" },
    { name: "discretionaryParoleDate",map: 'pds>date',  type: "date" },
    { name: "mandatoryParoleDate",map: 'pma>date',  type: "date" },
    { name: "adminParoleDate",map: 'pad>date',  type: "date" },
    { name: "geriatricParoleDate",map: 'pge>date',  type: "date" },
    { name: "mrFlag", map: 'fmr', type: "string" },
    { name: "adSegFlag", map: 'fas', type: "string" },
    { name: "lsisvFlag", map: 'fls', type: "string" },
    { name: "lsirFlag", map: 'fli', type: "string" },
    { name: "staticFlag", map: 'fst', type: "string" },
    { name: "classFlag", map: 'fcl', type: "string" },
    { name: "furloughFlag", map: 'ffu', type: "string" },
    { name: "finalClassFlag", map: 'ffi', type: "string" },
    { name: "victimFlag", map: 'vic', type: "string" }
  ],
  id: "offenderNumber",
  url: "require/getDesktopData.php",
  data: { "loc": "NODEFAULT"},
  pageSize: 20
};

var desktopAdapter;

/* Detail grid column definitions */
var desktopColumns = [
  { text: "Off. #", dataField: "offenderNumber", width: 44 },
  { text: "S.", dataField: "section", width: 5, cellsAlign: 'center' },
  { text: "Offender Name", dataField: "offenderName", width: 100 },
  { text: "IPO", dataField: "IPOUserName", width: 55 },
  { text: "Class. Due", dataField: "classificationDueDate", cellsFormat: 'MM/dd/yyyy', width: 64 },
  { text: "Cus.", dataField: "custodyLevel", width: 32 },
  { text: "Furl. Eli.", dataField: "furloughEligibility", cellsFormat: 'MM/dd/yyyy', width: 64 },
  { text: "Release", dataField: "releaseDate", cellsFormat: 'MM/dd/yyyy', width: 64 },
  { text: "Disc. Par.", dataField: "discretionaryParoleDate", cellsFormat: 'MM/dd/yyyy', width: 64 }/*,
  { text: "OMP init.", dataField: "initialOMPDate", cellsFormat: 'MM/dd/yyyy', width: 65 },
  { text: "OMP upd.", dataField: "OMPUpdateDate", cellsFormat: 'MM/dd/yyyy', width: 65 },
  { text: "LSISV", dataField: "LSISVDate", cellsFormat: 'MM/dd/yyyy', width: 65 },
  { text: "LSISV Eval.", dataField: "LSISVEval", cellsAlign: 'center', width: 65 },
  { text: "LSISV Score", dataField: "LSISVScore", cellsAlign: 'center', width: 75 },
  { text: "LSIR", dataField: "LSIRDate", cellsFormat: 'MM/dd/yyyy', width: 75 },
  { text: "LSIR Eval.", dataField: "LSIREval", cellsAlign: 'center', width: 75 },
  { text: "LSIR Score", dataField: "LSIRScore", cellsAlign: 'center', width: 75 },
  { text: "PED", dataField: "paroleEligibilityDate", cellsFormat: 'MM/dd/yyyy', width: 75 },
  { text: "Ad. Seg.", dataField: "adminSegregation", cellsAlign: 'center', width: 50 },
  { text: "NOR", dataField: "NOR", width: 50 }*/
];

/* Detail grid widget */
var _detailGrid;

/* Choices for the location drop-down */
var locations = ["AKEELA HOUSE",
  "ANCH PRE SENT INV UNIT",
  "ANCHORAGE EM",
  "ANCHORAGE ISC",
  "ANCHORAGE JAIL",
  "ANCHORAGE PROB",
  "ANVIL MTN CC",
  "BARROW EM",
  "BARROW PROB",
  "BETHEL PROB",
  "CLITHEROE",
  "COOK INLET PRETRIAL",
  "CORDOVA CTR",
  "DILLINGHAM PROB",
  "FAIRBANKS CC",
  "FAIRBANKS EM",
  "FAIRBANKS PROB",
  "GLENNWOOD CTR",
  "GOOSE CREEK CC",
  "HILAND MTN CC",
  "INTERSTATE COMPACT",
  "JUNEAU EM",
  "JUNEAU PROB",
  "KENAI EM",
  "KENAI PROB",
  "KETCHIKAN CC",
  "KETCHIKAN EM",
  "KETCHIKAN PROB",
  "KODIAK PROB",
  "KOTZEBUE PROB",
  "LEMON CREEK CC",
  "MATSU PRETRIAL",
  "MIDTOWN CTR - ANCH",
  "NOME PROB",
  "PALMER EM",
  "PALMER PROB",
  "PAROLE BOARD",
  "PT. MACKENZIE CF",
  "SITKA PROB",
  "SPRING CREEK CC",
  "WILDWOOD CC",
  "WILDWOOD PRETRIAL",
  "WILDWOOD TRANSITIONAL",
  "WRANGELL PROB",
  "YUKON-KUSKOKWIM CC"
];

/* Location drop-down widget */
var _locationPicker;

/* Sort order options */
var sortOrders = ["offenderNumber",
  "section",
  "offenderName",
  "IPOUserName",
  "classificationDueDate",
  "custodyLevel",
  "furloughEligibility",
  "releaseDate",
  "discretionaryParoleDate",
  "sexOffender",
  "initialOMPDate",
  "OMPUpdateDate",
  "adminSegregation",
  "mandatoryParoleDate",
  "adminParoleDate",
  "geriatricParoleDate",
  "LSISVDate",
  "LSISVEval",
  "LSISVScore",
  "LSIRDate",
  "LSIREval",
  "LSIRScore",
  "staticDate",
  "staticScore"
];

var sortOrderLabels = ["Offender #",
  "Section",
  "Offender Name",
  "IPO User Name",
  "Classification due date",
  "Custody level",
  "Furlough Eligibility date",
  "Release date",
  "Discretionary parole date",
  "Sex offender status",
  "OMP creation date",
  "OMP update date",
  "Ad. Seg. Status",
  "Mandatory Parole Date",
  "Admin Parole Date",
  "Geriatric Parole Date",
  "LSISV date",
  "LSISV Evaluation",
  "LSISV Score",
  "LSIR date",
  "LSIR Evaluation",
  "LSIR Score",
  "Static Date",
  "Static Score"
];

var sortOrderShorts = ["ofn",
  "sct",
  "nam",
  "ipu",
  "cdd",
  "cus",
  "fed",
  "rel",
  "pds",
  "so",
  "iod",
  "oud",
  "asg",
  "pma",
  "pad",
  "pge",
  "lsv",
  "lse",
  "lss",
  "lrv",
  "lre",
  "lrs",
  "scd",
  "scs"
];

/* Sort order drop-down widget */
var _sortPicker;

/* IPO options */
var ipoList = ["NO IPO ASSIGNED", "ALL IPOs"];

/* IPO picker widget */
var _ipoPicker;

/* Variable to store the style for sort order highlighting in detail panels */
var sortStyle;