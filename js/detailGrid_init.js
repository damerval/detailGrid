/**
 * Created by pdamerval on 3/3/2017.
 */

function null2str(variant, mask, utc) {
  if (null !== variant && "" !== variant) {
    return (mask) ? dateFormat(variant, mask, utc) : variant;
  } else return "";
}

function dfWithNull(date, mask, utc) {
  if (null !== date && "" !== date) {
    return dateFormat(date, mask, utc);
  } else return "";
}

var rowDetailsFunc = function (index, parentElement, gridElement, dataRecord) {
  var details = $($(parentElement).children()[0]);
  details.find(".detailValue.cdd").text(dfWithNull(dataRecord['classificationDueDate'], "mm/dd/yyyy"));
  details.find(".detailValue.iod").text(dfWithNull(dataRecord['initialOMPDate'], "mm/dd/yyyy"));
  details.find(".detailValue.oud").text(dfWithNull(dataRecord['OMPUpdateDate'], "mm/dd/yyyy"));
  details.find(".detailValue.ped").text(dfWithNull(dataRecord['paroleEligibilityDate'], "mm/dd/yyyy"));
  details.find(".detailValue.fed").text(dfWithNull(dataRecord['furloughEligibility'], "mm/dd/yyyy"));
  details.find(".detailValue.svd").text(dfWithNull(dataRecord['LSISVDate'], "mm/dd/yyyy"));
  details.find(".detailValue.sve").text(null2str(dataRecord['LSISVEval']));
  details.find(".detailValue.svs").text(null2str(dataRecord['LSISVScore'], null));
  details.find(".detailValue.ass").text(null2str(dataRecord['adminSegregation']));
  details.find(".detailValue.lrd").text(dfWithNull(dataRecord['LSIRDate'], "mm/dd/yyyy"));
  details.find(".detailValue.lre").text(null2str(dataRecord['LSIREval']));
  details.find(".detailValue.lrs").text(null2str(dataRecord['LSIRScore'], null));
  details.find(".detailValue.nor").text(null2str(dataRecord['NOR']));
};

$(document).ready(function () {

  _detailGrid = $("#detailGrid").jqxGrid({
    source: new $.jqx.dataAdapter(desktopSource), columns: desktopColumns, theme: 'metro', width: 755, autoHeight: true,
    rowdetails: true, rowdetailstemplate: { rowdetails: $("#dgDetailTemplate").html(), rowdetailsheight: 100 },
    initrowdetails: rowDetailsFunc/*, sortable: true*/, pageable: true
  });

  _locationPicker = $("#locationPicker").jqxDropDownList({ width: 200, source: locations, theme: 'metro' });

  var sortChoices = [];
  for (var i=0; i<sortOrders.length; i++) {
    sortChoices[i] = { "pickValue": sortOrders[i], "pickDesc": sortOrderLabels[i] };
  }

  _sortPicker = $("#sortPicker").jqxDropDownList({ width: 200, theme: 'metro',
    source: sortChoices, valueMember: 'pickValue', displayMember: 'pickDesc' });

  _ipoPicker = $("#ipoPicker").jqxDropDownList({ width: 200, source: ipoList, theme: 'metro' });

});