function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];
  menuEntries.push({name: "Pridėti taškų", functionName: "loadUi"});
  menuEntries.push(null);
  menuEntries.push({name: "Formatuoti foną", functionName: "formatBackground"});
  menuEntries.push({name: "Pridėti mokinius", functionName: "fill"});
  ss.addMenu("Patirtis", menuEntries);
};


function add(e) {
   var app = UiApp.getActiveApplication();
   var sk = parseInt(e.parameter.value);
   var row = UserProperties.getProperty('name');
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = ss.getActiveSheet();
   var cell = sheet.getRange(row,7,1,1);
   var current = parseInt(cell.getValue());
   cell.setValue(current+sk);
};

 function gyvybe() {
   var app = UiApp.getActiveApplication();
   var row = UserProperties.getProperty('name');
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = ss.getActiveSheet();
   var cell = sheet.getRange(row,16,1,1);
   var current = parseInt(cell.getValue());
   cell.setValue(current-1);
};

function electron(e) {
  var app = UiApp.getActiveApplication();
  var sk = parseInt(e.parameter.value);
  var row = UserProperties.getProperty('name');
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = sheet.getRange(row,6,1,1);
  var current = parseInt(cell.getValue());
  cell.setValue(current+sk);
};

function vardas(e){
 var sprsheet = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = sprsheet.getActiveSheet();
 var authrange;
 var rows = sheet.getLastRow()+1;
 var range;
 var name = e.parameter.vardas;
 for (var a=2; a<rows; a++) {
    range = sheet.getRange("A"+a).getValue();
    if (range == name) {
      UserProperties.setProperty('name', a);
    };
  };
};

function goto() {
  var row = UserProperties.getProperty('name');
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange(row,1,1,8);
  sheet.setActiveSelection(range);
};
