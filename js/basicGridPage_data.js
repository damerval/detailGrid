/**
 * Created by pdamerval on 3/3/2017.
 */

var discoveriesSource = {
  dataType: 'json',
  dataFields: [
    { name: "id", type: "int" },
    { name: "discovery", type: "string" },
    { name: "scientist", type: "string" },
    { name: "year", type: "string" }
  ],
  id: "id",
  url: "discoveries.txt"
};

var discoveriesAdapter;

var discoveriesColumns = [
  { text: "Discovery Title", dataField: "discovery", width: 250 },
  { text: "Discovered By", dataField: "scientist", width: 150 },
  { text: "Discovered In", dataField: "year", width: 100 }
];

var _basicGrid;