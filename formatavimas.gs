function formatBackground() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var rows = sheet.getLastRow()+1;
  var range
  var a;
  var spalv = "black";
    for(a=1;a!=rows;a++) {
      if(spalv == "black") {
        range = sheet.getRange(a,1,1,9);
        range.setBackgroundColor(spalv);
        spalv = "#333";
      } else if(spalv == "#333") {
        range = sheet.getRange(a,1,1,9);
        range.setBackgroundColor(spalv);
        spalv = "black";
      };
    };
};
