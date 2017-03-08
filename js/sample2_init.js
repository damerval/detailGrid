/**
 * Created by pdamerval on 3/8/2017.
 */

$(document).ready(function () {

  var source = {
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

  var initrowdetails = function (index, parentElement, gridElement, datarecord) {
    var details = $($(parentElement).children()[0]);
  };

  var dataAdapter = new $.jqx.dataAdapter(source);
  $("#jqxgrid").jqxGrid({
    width: 850,
    height: 500,
    theme: 'metro',
    source: dataAdapter,
    filterable: true,
    sortable: true,
    rowdetails: true,
    rowdetailstemplate: {
      rowdetails: "<div style='margin: 10px;'>Row Details</div>",
      rowdetailsheight: 50
    },
    initrowdetails: initrowdetails,
    columns: [
      { text: "Offender #", dataField: "offenderNumber", width: 75 },
      { text: "Section", dataField: "section", width: 40 },
      { text: "Offender Name", dataField: "offenderName", width: 200 },
      { text: "IPO", dataField: "IPO", width: 125 },
      { text: "Status Date", dataField: "statusDate", cellsFormat: 'MM/dd/yyyy', width: 70 },
      { text: "Arrival Date", dataField: "arrivalDate", cellsFormat: 'MM/dd/yyyy', width: 70 },
      { text: "Release Date", dataField: "releaseDate", cellsFormat: 'MM/dd/yyyy', width: 75 },
      { text: "Custody", dataField: "custodyLevel", width: 50 }
    ]
  });
});
