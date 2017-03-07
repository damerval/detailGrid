/**
 * Created by pdamerval on 3/3/2017.
 */

var desktopSource = {
  dataType: 'json',
  dataFields: [
    { name: "offenderNumber", type: "int" },
    { name: "section", type: "string" },
    { name: "offenderName", type: "string" },
    { name: "IPO", type: "string" },
    { name: "statusDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "arrivalDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "releaseDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "custodyLevel", type: "string" },
    { name: "classificationDueDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "initialOMPDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "OMPUpdateDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "LSISVDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "LSISVEval", type: "string" },
    { name: "LSISVScore", type: "int" },
    { name: "LSIRDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "LSIREval", type: "string" },
    { name: "LSIRScore", type: "int" },
    { name: "paroleEligibilityDate", type: "date", format: 'MM/dd/yyyy' },
    { name: "furloughEligibility", type: "date", format: 'MM/dd/yyyy' },
    { name: "adminSegregation", type: "string" },
    { name: "NOR", type: "string" }
  ],
  id: "offenderNumber",
  url: "omp_lsi.json"
};

var desktopAdapter;

var desktopColumns = [
  { text: "Offender #", dataField: "offenderNumber", width: 75 },
  { text: "Section", dataField: "section", width: 40 },
  { text: "Offender Name", dataField: "offenderName", width: 200 },
  { text: "IPO", dataField: "IPO", width: 125 },
  { text: "Status Date", dataField: "statusDate", cellsFormat: 'MM/dd/yyyy', width: 70 },
  { text: "Arrival Date", dataField: "arrivalDate", cellsFormat: 'MM/dd/yyyy', width: 70 },
  { text: "Release Date", dataField: "releaseDate", cellsFormat: 'MM/dd/yyyy', width: 75 },
  { text: "Custody", dataField: "custodyLevel", width: 50 },
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
  { text: "Furlough Elg.", dataField: "furloughEligibility", cellsFormat: 'MM/dd/yyyy', width: 75 },
  { text: "Ad. Seg.", dataField: "adminSegregation", cellsAlign: 'center', width: 50 },
  { text: "NOR", dataField: "NOR", width: 50 }
];

var _detailGrid;