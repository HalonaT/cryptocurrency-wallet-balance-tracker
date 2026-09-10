const ssID = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';//sheet ssID, got to sheet -> share -> get link ->extract ID from link
const sheetLog='Log';

//one address = one new sheet
const sheetMeas=['Idena1','Idena2'];                                   //sheet name
const IDNAaddress=['0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',//add here your IDNA wallet addresses
                   '0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'];

const sleepInterval= 2;//hours

const url='http://api.idena.io/api/Address/';


function getBalance(address,sheet) {
    var response = UrlFetchApp.fetch(url+address, {muteHttpExceptions: true });
    try {
        var res = JSON.parse(response.getContentText());    
        if (res.result) {
            const vals= res.result,
            balance=vals.balance
            stake=vals.stake;
            let sum=parseFloat(balance)+parseFloat(stake);
            SpreadsheetApp.openById (ssID) .getSheetByName(sheet).appendRow ([new Date (),balance, stake,sum]);
            return;
        }
        SpreadsheetApp.openById (ssID) .getSheetByName(sheetLog).appendRow ([new Date (), 'Invalid response',res]);
        return;
    } catch (err) {
        console.error (err.stack, err.message);
        SpreadsheetApp.openById (ssID) .getSheetByName(sheetLog).appendRow ([new Date (), err.stack, err.message]);
    }
    return;
}



function update(){
  for(var i=0,max=sheetMeas.length;i<max;i++)
      getBalance(IDNAaddress[i],sheetMeas[i]);
}




function initTriggers(){
getAllTriggers();
deleteTriggers();
getAllTriggers();

update();

/*ScriptApp.newTrigger("update")
   .timeBased()
   .everyMinutes(60)
   .create();*/

   ScriptApp.newTrigger("update")
  .timeBased()
  .everyHours(sleepInterval)
  .create();
  
getAllTriggers();

}


function deleteTriggers(){

  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
}

function getAllTriggers(){
Logger.log('Current script has ' + ScriptApp.getScriptTriggers().length + ' triggers.');
}

