const SHEET_NAME = 'Portfolio Messages';

function doGet() {
  return jsonResponse({ ok: true, message: 'Raja Salman portfolio form is ready.' });
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const sheet = getSheet();
    sheet.appendRow([
      new Date(),
      clean(payload.name),
      clean(payload.email),
      clean(payload.subject),
      clean(payload.message),
      clean(payload.submittedAt),
    ]);
    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Received at', 'Name', 'Email', 'Subject', 'Message', 'Client timestamp']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function clean(value) {
  return String(value || '').trim().slice(0, 5000);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
