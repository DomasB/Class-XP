function loadUi() {
  var app = UiApp.createApplication();
  app.setTitle("Pridėti taškų");
  app.setWidth(240);
  app.setHeight(135);
  var panel = app.createAbsolutePanel().setId("Panel").setStyleAttribute('background', 'DarkGray').setSize("240","135");
  var text = app.createTextBox().setId("value").setName("value").setValue("1").setHeight("17").setWidth("96").setStyleAttribute('top', '8').setStyleAttribute('left', '10').setStyleAttribute('position','fixed');
  var list = app.createListBox(false).setId("vardas").setName("vardas").setHeight("20").setWidth("100").setStyleAttribute('top', '8').setStyleAttribute('left', '121').setStyleAttribute('position','fixed');
  var prideti =  app.createButton().setId("prideti").setSize("85","40").setStyleAttribute('top', '36').setStyleAttribute('left', '10').setStyleAttribute('position','fixed').setStyleAttribute('border', 'solid black 3px').setStyleAttribute('background', 'yellowgreen').setStyleAttribute('font-weight', 'bold').setStyleAttribute('font-size', '30px').setStyleAttribute('padding', '3px').setText("+");
  var gyvybes =  app.createButton().setId("gyvybe").setSize("85","40").setStyleAttribute('top', '83').setStyleAttribute('left', '10').setStyleAttribute('position','fixed').setStyleAttribute('border', 'solid crimson 3px').setStyleAttribute('background', 'black').setStyleAttribute('font-weight', 'bold').setStyleAttribute('font-size', '30px').setStyleAttribute('color', 'crimson').setStyleAttribute('padding', '3px').setText("♥");
  var goto =  app.createButton().setId("goto").setSize("85","40").setStyleAttribute('top', '83').setStyleAttribute('left', '120').setStyleAttribute('position','fixed').setStyleAttribute('border', 'solid white 3px').setStyleAttribute('background', 'black').setStyleAttribute('font-weight', 'bold').setStyleAttribute('font-size', '30px').setStyleAttribute('color', 'white').setStyleAttribute('padding', '3px').setText("►");
  var ele =  app.createButton().setId("electron").setSize("85","40").setStyleAttribute('top', '36').setStyleAttribute('left', '120').setStyleAttribute('position','fixed').setStyleAttribute('border', 'solid black 3px').setStyleAttribute('background', 'DodgerBlue').setStyleAttribute('font-weight', 'bold').setStyleAttribute('font-size', '30px').setStyleAttribute('padding', '3px').setText("eˉ");
  panel.add(text);
  panel.add(list);
  panel.add(prideti);
  panel.add(gyvybes);
  panel.add(goto);
  panel.add(ele);
  app.add(panel);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var vardas = app.getElementById("vardas");
  var button = app.getElementById("prideti");
  var electron = app.getElementById("electron");
  var gyvybe = app.getElementById("gyvybe");
  var panele = app.getElementById("Panel");
  var got = app.getElementById("goto");
  var a;
  var rows = sheet.getLastRow()+1;
  var name;

  var handler3 = app.createServerClickHandler("gyvybe");
  handler3.addCallbackElement(panele);
  gyvybe.addClickHandler(handler3);

  var handler4 = app.createServerClickHandler("goto");
  handler4.addCallbackElement(panele);
  got.addClickHandler(handler4);


  var namehandler = app.createServerChangeHandler("vardas");
  namehandler.addCallbackElement(panele);
  vardas.addChangeHandler(namehandler);

  vardas.addItem("Vardas");
  for (a=2; a!=rows ;a++) {
    name = sheet.getRange(a,1,1,1).getValue();
    vardas.addItem(name);
  };

  var handler1 = app.createServerClickHandler("add");
  handler1.addCallbackElement(panele);
  button.addClickHandler(handler1);

  var handler2 = app.createServerClickHandler("electron");
  handler2.addCallbackElement(panele);
  electron.addClickHandler(handler2);

  ss.show(app);
};
