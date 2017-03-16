/**
 * Created by pdamerval on 3/3/2017.
 */

/* Detail grid AJAX data definitions */
var desktopSource = {
  dataType: 'json',
  dataFields: [
    { name: "offenderNumber", map: 'ofn', type: "int" },
    { name: "section", map: 'sct', type: "string" },
    { name: "offenderName", map: 'nam', type: "string" },
    { name: "IPO", map: 'ipo', type: "string" },
    { name: "statusDate", map: 'sta>date', type: "date" },
    { name: "arrivalDate", map: 'arr>date', type: "date" },
    { name: "releaseDate", map:'rel>date', type: "date" },
    { name: "custodyLevel", map: 'cus', type: "string" },
    { name: "classificationDueDate", map: 'cdd>date', type: "date" },
    { name: "initialOMPDate", map: 'iod>date', type: "date" },
    { name: "OMPUpdateDate", map: 'oud>date', type: "date" },
    { name: "LSISVDate", map: 'lsv>date', type: "date" },
    { name: "LSISVEval", map: 'lse', type: "string" },
    { name: "LSISVScore", map: 'lss', type: "int" },
    { name: "LSIRDate", map: 'lrv>date', type: "date" },
    { name: "LSIREval", map: 'lre', type: "string" },
    { name: "LSIRScore", map: 'lrs', type: "int" },
    { name: "paroleEligibilityDate", map: 'ped>date', type: "date" },
    { name: "furloughEligibility",map: 'fed>date',  type: "date" },
    { name: "adminSegregation", map: 'asg', type: "string" },
    { name: "NOR", map: 'nor', type: "string" }
  ],
  id: "offenderNumber",
  url: "require/getDesktopData.php",
  data: { "loc": "NODEFAULT"},
  pageSize: 20
};

var desktopAdapter;

/* Detail grid column definitions */
var desktopColumns = [
  { text: "Off. #", dataField: "offenderNumber", width: 47 },
  { text: "Scn.", dataField: "section", width: 28 },
  { text: "Offender Name", dataField: "offenderName", width: 100 },
  { text: "IPO", dataField: "IPO", width: 100 },
  { text: "Class. Due", dataField: "classificationDueDate", cellsFormat: 'MM/dd/yyyy', width: 67 },
  { text: "Custody", dataField: "custodyLevel", width: 70 },
  { text: "Risk", dataField: "", cellsFormat: 'MM/dd/yyyy', width: 50 },
  { text: "Furlough", dataField: "furloughEligibility", cellsFormat: 'MM/dd/yyyy', width: 67 },
  { text: "Release Dt.", dataField: "releaseDate", cellsFormat: 'MM/dd/yyyy', width: 67 },
  { text: "Flags", width: 179 }/*,
  { text: "Class. Due", dataField: "classificationDueDate", cellsFormat: 'MM/dd/yyyy', width: 65 },
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
  "ANCHORAGE ISC",
  "ANCHORAGE JAIL",
  "ANCHORAGE PROB",
  "ANVIL MTN CC",
  "BARROW PROB",
  "BETHEL PROB",
  "CLITHEROE",
  "COOK INLET PRETRIAL",
  "CORDOVA CTR",
  "DILLINGHAM PROB",
  "FAIRBANKS CC",
  "FAIRBANKS PROB",
  "GLENNWOOD CTR",
  "GOOSE CREEK CC",
  "HILAND MTN CC",
  "INTERSTATE COMPACT",
  "JUNEAU PROB",
  "KENAI PROB",
  "KETCHIKAN CC",
  "KETCHIKAN PROB",
  "KODIAK PROB",
  "KOTZEBUE PROB",
  "LEMON CREEK CC",
  "MATSU PRETRIAL",
  "MIDTOWN CTR - ANCH",
  "NOME PROB",
  "PALMER PROB",
  "PALMER-MED CC",
  "PARKVIEW",
  "PT. MACKENZIE CF",
  "SITKA PROB",
  "SPRING CREEK CC",
  "WILDWOOD CC",
  "WILDWOOD PRETRIAL",
  "WILDWOOD TRANSITIONAL",
  "WRANGELL PROB",
  "YUKON-KUSKOKWIM CC"];

/* Location drop-down widget */
var _locationPicker;

/* Sort order options */
var sortOrders = ["offenderNumber",
  "section",
  "offenderName",
  "IPO",
  "statusDate",
  "arrivalDate",
  "releaseDate",
  "custodyLevel",
  "classificationDueDate",
  "initialOMPDate",
  "OMPUpdateDate",
  "LSISVDate",
  "LSISVEval",
  "LSISVScore",
  "LSIRDate",
  "LSIREval",
  "LSIRScore",
  "paroleEligibilityDate",
  "furloughEligibility",
  "adminSegregation",
  "NOR"];

var sortOrderLabels = ["Offender #",
  "Section",
  "Offender Name",
  "IPO",
  "Status date",
  "Arrival date",
  "Release date",
  "Custody Level",
  "Classification Due date",
  "OMP Creation date",
  "OMP Update date",
  "LSISV date",
  "LSISV Evaluation",
  "LSISV Score",
  "LSIR date",
  "LSIR Evaluation",
  "LSIR Score",
  "Parole Eligibility date",
  "Furlough Eligibility date",
  "Ad. Seg. Status",
  "NOR Status"];

var sortOrderShorts = ["ofn",
  "sct",
  "nam",
  "ipo",
  "sta",
  "arr",
  "rel",
  "cus",
  "cdd",
  "iod",
  "oud",
  "lsv",
  "lse",
  "lss",
  "lrv",
  "lre",
  "lrs",
  "ped",
  "fed",
  "asg",
  "nor"];

/* Sort order drop-down widget */
var _sortPicker;

/* IPO options */
var ipoList = ["NO IPO ASSIGNED", "ALL IPOs"];

/* IPO picker widget */
var _ipoPicker;

/* Variable to store the style for sort order highlighting in detail panels */
var sortStyle;