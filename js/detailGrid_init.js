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
    source: desktopAdapter, columns: desktopColumns, theme: 'metro', width: 755, height: 600,
    rowDetails: true, rowDetailsTemplate: { rowDetails: $("#dgDetailTemplate").html(), rowDetailsHeight: 100 }
  });
});