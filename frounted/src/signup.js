// const sheetName = "Sheet1";
// const scriptProp = PropertiesService.getScriptProperties();

// function intialSetup() {
//   const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//   scriptProp.setProperty("key", activeSpreadsheet.getId());
// }

// function doPost(e) {
//   const lock = LockService.getScriptLock();
//   lock.tryLock(10000);

//   try {
//     const doc = SpreadsheetApp.openById(scriptProp.getProperty("key"));
//     const sheet = doc.getSheetByName(sheetName);

//     const headers = sheet
//       .getRange(1, 1, 1, sheet.getLastColumn())
//       .getValues()[0];
//     const nextRow = sheet.getLastRow() + 1;

//     const newRow = headers.map(function (header) {
//       return header === "Date" ? new Date() : e.parameter[header];
//     });

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

//     return ContentService.createTextOutput(
//       JSON.stringify({ result: "success", row: nextRow })
//     ).setMimeType(ContentService.MimeType.JSON);
//   } catch (e) {
//     return ContentService.createTextOutput(
//       JSON.stringify({ result: "error", error: e })
//     ).setMimeType(ContentService.MimeType.JSON);
//   } finally {
//     lock.releaseLock();
//   }
// }


const scriptURL =
        "https://script.google.com/macros/s/AKfycbwqg8CGGotICaXgLSWkuNSDJXa-pTocA8G4VggLaG8iXMu-byEvCKAKeLoOjOKbHphOmQ/exec";
      const form = document.forms["product"];

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) =>
            alert("Thank you! your form is submitted successfully.")
          )
          .then(() => {
            window.location.reload();
          })
          .catch((error) => console.error("Error!", error.message));
      });

      let p = fetch("https://script.google.com/macros/library/d/1I1ExBBtenK3-ajmWuHM3-gIds-3y0RfFTMIKHBu3I3Mo533jtNRnTNfx/1");
      console.log(p);
      p.then((response) => console.log("Success!", response));
      p.catch((error) => console.error("error",error.message));