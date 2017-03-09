/**
 * Created by pdamerval on 3/8/2017.
 */

function dfWithNull(date, mask, utc) {
  if (null !== date && "" !== date) {
    return dateFormat(date, mask, utc);
  } else return "";
}

function numWithNull(number) {
  return null === number ? "" : number;
}

$(document).ready(function () {

  var rowDetailsFunc = function (index, parentElement, gridElement, datarecord) {
    var details = $($(parentElement).children()[0]);
    details.find(".detailValue.cdd").text(dfWithNull(datarecord['classificationDueDate'], "mm/dd/yyyy"));
    details.find(".detailValue.iod").text(dfWithNull(datarecord['initialOMPDate'], "mm/dd/yyyy"));
    details.find(".detailValue.oud").text(dfWithNull(datarecord['OMPUpdateDate'], "mm/dd/yyyy"));
    details.find(".detailValue.ped").text(dfWithNull(datarecord['paroleEligibilityDate'], "mm/dd/yyyy"));
    details.find(".detailValue.fed").text(dfWithNull(datarecord['furloughEligibility'], "mm/dd/yyyy"));
    details.find(".detailValue.svd").text(dfWithNull(datarecord['LSISVDate'], "mm/dd/yyyy"));
    details.find(".detailValue.sve").text(datarecord['LSISVEval']);
    details.find(".detailValue.svs").text(numWithNull(datarecord['LSISVScore']));
  };

  var dataAdapter = new $.jqx.dataAdapter(source);
  $("#detailGrid").jqxGrid({
    width: 850,
    height: 500,
    theme: 'metro',
    source: dataAdapter,
    filterable: true,
    sortable: true,
    rowdetails: true,
    rowdetailstemplate: {
      rowdetails: $("#dgDetailTemplate").html(),
      rowdetailsheight: 100
    },
    initrowdetails: rowDetailsFunc,
    columns: cols
  });
});
