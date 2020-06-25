// Write a JavaScript program to get the current date.

function DateToday(separator = "-") {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10)
        month = "0" + month;
    var dateNo = date.getDate();
    if (dateNo < 10)
        dateNo = "0" + dateNo;
    return dateNo + separator + month + separator + year;
}