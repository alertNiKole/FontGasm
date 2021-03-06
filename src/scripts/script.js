
let click = document.getElementById('fonts');
const showButton = document.querySelector('#showButton'); //onclick showAll
const showAllFonts = document.querySelector('.showAllFonts');//place where list will go on click
let fontList = ' '; //create a list of fonts
let fontListing = ' ';
let passFonts =' ';

//add listener to the button
click.addEventListener("click", function() {

    fontList = new XMLHttpRequest();
    fontList.open('GET','/src/scripts/fonts.json');
    fontList.onload = function () {
        console.log("This is working,", fontList.responseText.length, "records have been pulled");
        fontListing = JSON.parse(fontList.responseText);
       showAllFontsF(fontListing);
    };

      fontListing.send();
});


//add html to the div
function showAllFontsF(fontListing) {
    let newDiv = document.createElement("div");
    newDiv.textContent = fontListing["items"];//set new content equal to the Json passed in
    //append json to the existing
    showAllFonts.appendChild(newDiv);
}

showButton.addEventListener("click",() => {
    console.log("showButton has been pressed");
    showAllFontsF();
});