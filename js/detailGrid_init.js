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

function highlightSort(className) {
  sortStyle = headerStyle.edit(sortStyle, className + " { background-color: lightGrey }");
}

function clearSortHighlight() {
  if (sortStyle !== undefined) headerStyle.del(sortStyle);
}

var rowDetailsFunc = function (index, parentElement, gridElement, dataRecord) {
  var details = $($(parentElement).children()[0]);
  details.find(".detailValue.cdd").text(dfWithNull(dataRecord['classificationDueDate'], "mm/dd/yyyy"));
  details.find(".detailValue.iod").text(dfWithNull(dataRecord['initialOMPDate'], "mm/dd/yyyy"));
  details.find(".detailValue.oud").text(dfWithNull(dataRecord['OMPUpdateDate'], "mm/dd/yyyy"));
  details.find(".detailValue.ped").text(dfWithNull(dataRecord['paroleEligibilityDate'], "mm/dd/yyyy"));
  details.find(".detailValue.fed").text(dfWithNull(dataRecord['furloughEligibility'], "mm/dd/yyyy"));
  details.find(".detailValue.lsv").text(dfWithNull(dataRecord['LSISVDate'], "mm/dd/yyyy"));
  details.find(".detailValue.lse").text(null2str(dataRecord['LSISVEval']));
  details.find(".detailValue.lss").text(null2str(dataRecord['LSISVScore'], null));
  details.find(".detailValue.asg").text(null2str(dataRecord['adminSegregation']));
  details.find(".detailValue.lrv").text(dfWithNull(dataRecord['LSIRDate'], "mm/dd/yyyy"));
  details.find(".detailValue.lre").text(null2str(dataRecord['LSIREval']));
  details.find(".detailValue.lrs").text(null2str(dataRecord['LSIRScore'], null));
  details.find(".detailValue.nor").text(null2str(dataRecord['NOR']));
};

$(document).ready(function () {

  /* SETUP DETAIL GRID*/
  _detailGrid = $("#detailGrid").jqxGrid({
    source: new $.jqx.dataAdapter(desktopSource), columns: desktopColumns, theme: 'metro', width: 755, autoHeight: true,
    rowdetails: true, rowdetailstemplate: { rowdetails: $("#dgDetailTemplate").html(), rowdetailsheight: 100 },
    initrowdetails: rowDetailsFunc/*, sortable: true*/, pageable: true
  });

  /* SETUP LOCATION PICKER */
  _locationPicker = $("#locationPicker").jqxDropDownList({ width: 200, source: locations, theme: 'metro' });

  /* SETUP SORT PICKER */
  var sortChoices = [];
  for (var i=0; i<sortOrders.length; i++) {
    sortChoices[i] = { "pickValue": sortOrders[i], "pickDesc": sortOrderLabels[i] };
  }
  _sortPicker = $("#sortPicker").jqxDropDownList({ width: 200, theme: 'metro',
    source: sortChoices, valueMember: 'pickValue', displayMember: 'pickDesc' });

  /* SETUP IPO PICKER*/
  _ipoPicker = $("#ipoPicker").jqxDropDownList({ width: 200, source: ipoList, theme: 'metro' });

});