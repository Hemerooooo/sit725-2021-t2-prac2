var tableHead, customers, otto, kareem, oakley, allana, king, sherri, malak, neo, manveer, piotr, outputText;
tableHead = ["Name", "Postcode", "State", "# Boxes", "Category"];
otto = ["Otto Sutton", 4860, "QLD", 74];
kareem = ["Kareen Ruiz", 2786, "NSW", 13];
oakley = ["Oakley Mckeown", 3113, "VIC", 105];
allana = ["Allana Benitez", 5015, "SA", 3];
king = ["King Knowles", 4497, "QLD", 55];
sherri = ["Sherri Lucas", 2214, "NSW", 49];
malak = ["Malak Wardle", 6306, "WA", 38];
neo = ["Neo Patel", 2611, "ACT", 151];
manveer = ["Manveer Beil", 3216, "VIC", 1];
piotr = ["Piotr Fitzgerald", 0810, "NT", 23];
customers = [otto, kareem, oakley, allana, king, sherri, malak, neo, manveer, piotr];
outputText = "<table class=\"centered\">";
// Function defined
function addCategory(array) {
    if (array[3] < 10) {
        array.push("Novice");
    }
    if (10 <= array[3] && array[3] <= 49) {
        array.push("Skilled");
    }
    if (50 <= array[3] && array[3] <= 99) {
        array.push("Proficient");
    }
    if (100 <= array[3] && array[3] <= 149) {
        array.push("Advanced");
    }
    if (150 <= array[3]) {
        array.push("Expert");
    }
}
// For loop constructing tables html
for (var i = -1; i < customers.length; i++) {
    if (i == -1) {
        outputText += "<thead><tr>";
        for (var j = 0; j < tableHead.length; j++) {
            outputText += "<th>" + tableHead[j] + "</th>";
        }
        outputText += "</tr></thead><tbody>";
    }
    else {
        addCategory(customers[i]);
        if (customers[i][4] == "Novice") {
            outputText += "<tr class=\"red draken-2\">";
        }
        else if (customers[i][4] == "Expert") {
            outputText += "<tr class=\"teal lighten-2\">";
        }
        else {
            outputText += "<tr>";
        }
        for (var k = 0; k < tableHead.length; k++) {
            outputText += "<td>" + customers[i][k] + "</td>";
        }
        outputText += "</tr>";
    }
}
outputText += "</tbody></table>";
document.getElementById("display").innerHTML = outputText;