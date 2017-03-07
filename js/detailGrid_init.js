/**
 * Created by pdamerval on 3/3/2017.
 */

function alertList(arr) {
  var s = "";
  arr.map(function (element) {
    s += element.dataField + "\n";
  });
  alert(s);
}

$(document).ready(function () {

   desktopAdapter = new $.jqx.dataAdapter(desktopSource);

  _detailGrid = $("#detailGrid").jqxGrid({
    source: desktopAdapter, columns: desktopColumns, theme: 'metro', width: 1635, height: 600,
    rowdetails: true, rowdetailstemplate: { rowdetails: $("#dgDetailTemplate").html(), rowdetailsheight: 100 }
  });
});