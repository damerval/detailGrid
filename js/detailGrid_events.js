/**
 * Created by pdamerval on 3/9/2017.
 */

$(document).ready(function () {
  
  /* FILL GRID WITH DATA WHEN A LOCATION IS CHOSEN */
  _locationPicker.on('select', function () {
    setCurrentLocation(_locationPicker.val());
    /* Remove any existing sort */
    _detailGrid.jqxGrid('removeSort');
    _sortPicker.jqxDropDownList('unselectItem', _sortPicker.jqxDropDownList('getSelectedItem'));
    clearSortHighlight();

    /* Point to new data and load grid */
    desktopSource.data = { loc: getCurrentLocation() };
    _detailGrid.jqxGrid('updateBoundData');
  });

  /* WHEN SORT ORDER IS CHOSEN, SORT THE GRID BY THE SELECTED FIELD */
  _sortPicker.on('select', function () {
    //alert(_sortPicker.val());
    _detailGrid.jqxGrid('sortBy', _sortPicker.val(), 'asc');

    /* Highlight the corresponding field in details if not assigned column */
    var sortClass;
    for (var i=0; i<sortOrders.length; i++) {
      if (sortOrders[i] === _sortPicker.val()) {
        sortClass = sortOrderShorts[i];
      }
    }
    var selector = ".detailRow." + sortClass + ", .detailHeaderLabel." + sortClass;
    highlightSort(selector);
  });

  /* FILL GRID WITH NEW DATA WHEN A IPO IS CHOSEN */
  _ipoPicker.on('select', function () {
    /* Remove existing sort  */
    if (!suppressIpoSelect) {
      setCurrentIpo(_ipoPicker.val());
      _detailGrid.jqxGrid('removeSort');
      _sortPicker.jqxDropDownList('unselectItem', _sortPicker.jqxDropDownList('getSelectedItem'));
      clearSortHighlight();

      /* Point to new data and load grid */
      desktopSource.data = { loc: getCurrentLocation(), ipo: getCurrentIpo() };
      _detailGrid.jqxGrid('updateBoundData');
    }
  });

  /* WHEN USER CLICKS PRINT BUTTON */
  _printButton.on('click', function () {
    var url = "http://10.2.222.170:8080/jasperserver/flow.html?_flowId=viewReportFlow" +
        "&reportUnit=/reports/ipoDesktopExport&output=xlsx&location=" +
        getCurrentLocation() + "&ipoName=" + getCurrentIpo() + "&j_username=doc&j_password=doc";
    if (null !== getCurrentLocation() && null !== getCurrentIpo()) {
      popup(500, 500, url, null, null, true);
    } else alert("Please select a location and a IPO choice first (you can select ALL IPOs)");


  })
});