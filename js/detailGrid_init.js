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
  details.find(".detailValue.lsv").text(dfWithNull(dataRecord['LSISVDate'], "mm/dd/yyyy"));
  details.find(".detailValue.lse").text(null2str(dataRecord['LSISVEval']));
  details.find(".detailValue.lss").text(null2str(dataRecord['LSISVScore'], null));
  details.find(".detailValue.asg").text(null2str(dataRecord['adminSegregation']));
  details.find(".detailValue.lrv").text(dfWithNull(dataRecord['LSIRDate'], "mm/dd/yyyy"));
  details.find(".detailValue.lre").text(null2str(dataRecord['LSIREval']));
  details.find(".detailValue.lrs").text(null2str(dataRecord['LSIRScore'], null));
  details.find(".detailValue.nor").text(null2str(dataRecord['NOR']));
  details.find(".detailValue.scd").text(dfWithNull(dataRecord['staticDate'], 'mm/dd/yyyy'));
  details.find(".detailValue.scs").text(null2str(dataRecord['staticScore']));
  details.find(".detailValue.pds").text(dfWithNull(dataRecord['discretionaryParoleDate'], 'mm/dd/yyyy'));
  details.find(".detailValue.pma").text(dfWithNull(dataRecord['mandatoryParoleDate'], 'mm/dd/yyyy'));
  details.find(".detailValue.pad").text(dfWithNull(dataRecord['adminParoleDate'], 'mm/dd/yyyy'));
  details.find(".detailValue.pge").text(dfWithNull(dataRecord['geriatricParoleDate'], 'mm/dd/yyyy'));
  details.find(".detailHeaderValue.fna").text(null2str(dataRecord['offenderFullName']));
  details.find(".detailHeaderValue.ipu").text(null2str(dataRecord['IPO']));
  details.find(".detailHeaderValue.so").text(null2str(dataRecord['sexOffender']));
};

var flagsRenderer = function (row/*, column, value*/) {
  var html =  $("#flagsTemplate").html();
  var rowData = desktopAdapter.records[row];

  html = html.replace("flag mr", "flag mr" + " " + rowData['mrFlag']);
  html = html.replace("flag cla", "flag cla" + " " + rowData['classFlag']);
  html = html.replace("flag fur", "flag fur" + " " + rowData['furloughFlag']);
  html = html.replace("flag asg", "flag asg" + " " + rowData['adSegFlag']);
  html = html.replace("flag lsisv", "flag lsisv" + " " + rowData['lsisvFlag']);
  html = html.replace("flag lsir", "flag lsir" + " " + rowData['lsirFlag']);
  html = html.replace("flag stc", "flag stc" + " " + rowData['staticFlag']);
  html = html.replace("flag fin", "flag fin" + " " + rowData['finalClassFlag']);
  html = html.replace("flag vic", "flag vic" + " " + rowData['victimFlag']);

  return html;
};

var riskRenderer = function (row) {
  var rowData = desktopAdapter.records[row];
  var riskText = "";
  if (null !== rowData['staticDate']) {
    riskText = "ST-" + rowData['staticScore'];
  } else if (null !== rowData['LSIRDate']) {
    riskText = "R-" + rowData['LSIRScore'];
  } else if (null !== rowData['LSISVDate']) {
    riskText = "SV-" + rowData['LSISVScore'];
  }
  return "<DIV class=\"calcCell\">" + riskText + "</DIV>";
};

function setSuppressIpoSelect(val) {
  suppressIpoSelect = val;
}

$(document).ready(function () {

  _detailGrid = $("#detailGrid");

  desktopAdapter = new $.jqx.dataAdapter(desktopSource);

  _detailGrid.on('bindingcomplete', function () {
    // run through records looking for distinct ipo names
    //alert("binding complete" + desktopAdapter.loadedData.length);
    var ipoOptions = [];
    for (var i = 0; i<desktopAdapter.loadedData.length; i++) {
      var ipo = desktopAdapter.loadedData[i].ipo;
      if (ipo !== null && ipo !== '' && ipoOptions.indexOf(ipo.trim()) < 0) {
        ipoOptions.push(ipo.trim());
      }
    }
    // clear ipo picker options, sort and join new items to default options
    setSuppressIpoSelect(true);
    _ipoPicker.jqxDropDownList('clear');
    ipoOptions = ipoList.concat(ipoOptions.sort());
    // Add result to ipo picker options
    for (i=0; i<ipoOptions.length; i++) {
      _ipoPicker.jqxDropDownList('addItem', ipoOptions[i]);
    }
    _ipoPicker.jqxDropDownList('selectItem', getCurrentIpo());
    setSuppressIpoSelect(false);
  });

  /* SETUP DETAIL GRID*/
  desktopColumns.push({ text: "Risk", cellsRenderer: riskRenderer, width: 32 });
  desktopColumns.push({ text: "Flags", cellsRenderer: flagsRenderer, width: 211 }); //dynamic flags column
  _detailGrid.jqxGrid({
    source: desktopAdapter, columns: desktopColumns, theme: 'acoms', width: 785, autoHeight: true, rowsHeight: 23,
    rowdetails: true, rowdetailstemplate: { rowdetails: $("#dgDetailTemplate").html(), rowdetailsheight: 100 },
    initrowdetails: rowDetailsFunc/*, sortable: true*/, pageable: true, pagerMode: 'simple'
  });

  /* SETUP LOCATION PICKER */
  _locationPicker = $("#locationPicker").jqxDropDownList({ width: 200, source: locations, theme: 'acoms' });

  /* SETUP SORT PICKER */
  var sortChoices = [];
  for (var i=0; i<sortOrders.length; i++) {
    sortChoices[i] = { "pickValue": sortOrders[i], "pickDesc": sortOrderLabels[i] };
  }
  _sortPicker = $("#sortPicker").jqxDropDownList({ width: 200, theme: 'acoms',
    source: sortChoices, valueMember: 'pickValue', displayMember: 'pickDesc' });

  /* SETUP IPO PICKER*/
  _ipoPicker = $("#ipoPicker").jqxDropDownList({ width: 200, source: ipoList, theme: 'acoms' });

  _printButton = $("#printButton").jqxButton({ width: 120, height: 28, theme: 'acoms' })

});