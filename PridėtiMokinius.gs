function fill() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var rows = sheet.getLastRow()+1;
  var range;
  if(Browser.msgBox("Įspėjimas","Šis veiksmas ištrins visus esamus duomenis. Jei sutinkate, spauskite OK.", Browser.Buttons.OK_CANCEL) == 'ok') {
    for(var a=2;a!=rows;a++){
      range = sheet.getRange(a,2,1,1);
      range.setFormula('=((G'+a+'-((2.5*(H'+a+'*H'+a+'))+(22.5*H'+a+')-25))/(5*H'+a+'+25))*100');
      range = sheet.getRange(a,3,1,1);
      range.setFormula('=REPT($M$2; (B'+a+'+10)/10)');
      range = sheet.getRange(a,4,1,1);
      range.setFormula('=IF(H'+a+'="1";"✦";IF(H'+a+'="2";"★★";IF(H'+a+'="3";"✶✶✶";IF(H'+a+'="4";"✷✷✷✷";"✪✪✪✪✪"))))');
      range = sheet.getRange(a,5,1,1);
      range.setFormula('=IF(P'+a+'>0;REPT($M$3; P'+a+');"☠" )');
      range = sheet.getRange(a,6,1,1);
      range.setValue('0');
      range = sheet.getRange(a,7,1,1);
      range.setValue('0');
      range = sheet.getRange(a,8,1,1);
      range.setFormula('=IF(G'+a+'>=525;"11";IF(G'+a+'>=450;"10";IF(G'+a+'>=380;"9";IF(G'+a+'>=315;"8";IF(G'+a+'>=255;"7";IF(G'+a+'>=200;"6";IF(G'+a+'>=150;"5";IF(G'+a+'>=105;"4";IF(G'+a+'>=65;"3";IF(G'+a+'>=30;"2";"1"))))))))))');
      range = sheet.getRange(a,9,1,1);
      range.setFormula('=2.5*(H'+a+'*H'+a+')+27.5*H'+a);
      range = sheet.getRange(a,14,1,1);
      range.setFormula('=G'+a);
      range = sheet.getRange(a,15,1,1);
      range.setFormula('=A'+a);
      range = sheet.getRange(a,16,1,1);
      range.setValue('5');
    };
    for(var a=2;a!=7;a++) {
      range = sheet.getRange(a,11,1,1);
      range.setFormula('=VLOOKUP(L'+a+';$N$1:$O$'+(rows-1)+';2;0)');
      range = sheet.getRange(a,12,1,1);
      range.setFormula('=LARGE($N$2:$N$'+(rows-1)+';'+(a-1)+')');
    };
  };
};
