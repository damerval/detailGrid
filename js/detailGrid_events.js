/**
 * Created by pdamerval on 3/9/2017.
 */

$(document).ready(function () {
  
  /* FILL GRID WITH DATA WHEN A LOCATION IS CHOSEN */
  _locationPicker.on('select', function () {
    /* Remove any existing sort */
    _detailGrid.jqxGrid('removeSort');
    _sortPicker.jqxDropDownList('unselectItem', _sortPicker.jqxDropDownList('getSelectedItem'));
    clearSortHighlight();

    /* Point to new data and load grid */
    desktopSource.data = { loc: _locationPicker.val() };
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
    _detailGrid.jqxGrid('removeSort');
    _sortPicker.jqxDropDownList('unselectItem', _sortPicker.jqxDropDownList('getSelectedItem'));
    clearSortHighlight();

    /* Point to new data and load grid */
    desktopSource.data = { loc: _locationPicker.val().trim(), ipo: _ipoPicker.val().trim() };
    _detailGrid.jqxGrid('updateBoundData');
  });

});