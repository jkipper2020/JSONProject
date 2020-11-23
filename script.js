/**
 * Jonathan Kipper
 * @version 5-19-2020
 * THis is the javascript file that iterates through the mainArray from the data.js file and writes it to the
 * html website using the getElementById selectors
 */
//get access to our buttons
let previous = document.getElementById("left");
let next = document.getElementById("right");

//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function (event) {

    if (index > 0) {
        index--;
        display();
    }
};
//responds to clicks of the "next" button
next.onclick = function (event) {

    if (index < (mainArray.length - 1)) {
        index++;
        display();
    }
};

//runs the display for the initial record
display();

//shows the current record in the array of records
//at the position within the index variable
function display() {
    //gets the elements
    let name = document.getElementById("name");
    let dateIssued = document.getElementById("dateIssued");
    let citation = document.getElementById("citation");
    let birth = document.getElementById("birth");
    let death = document.getElementById("death");
    let organization = document.getElementById("organization");
    let rank = document.getElementById("rank");
    let fact1 = document.getElementById("fact1");
    let fact2 = document.getElementById("fact2");
    let fact3 = document.getElementById("fact3");
    let initialParagraph = document.getElementById("initial");

    //updates the elements
    name.innerHTML = mainArray[index]["name"];
    dateIssued.innerHTML = "Date Issued: " + mainArray[index]["awarded"]["issued"];
    citation.innerHTML = "Citation: " + mainArray[index]["awarded"]["citation"];
    birth.innerHTML = "Birth Location: " + mainArray[index]["birth"]["location name"];
    death.innerHTML = "Death Date: " + mainArray[index]["awarded"]["date"]["full"];
    organization.innerHTML = "Organization: " + mainArray[index]["military record"]["organization"];
    rank.innerHTML = "Rank: " + mainArray[index]["military record"]["rank"];
    fact1.innerHTML = "Military Company: " + mainArray[index]["military record"]["company"];
    fact2.innerHTML = "Military Division: " + mainArray[index]["military record"]["division"];
    fact3.innerHTML = "Entered Service At: " + mainArray[index]["military record"]["entered service at"];
    initialParagraph.innerHTML = "This is a dataset about United State's medal of honor recipients and their basic information.\n" +
        "            There are " + mainArray.length + " elements in the dataset.";
}