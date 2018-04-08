//The module: file.js
let fontList = ""  //create a list of fonts
let getFonts = new XMLHttpRequest();
getFonts.open("GET", '/src/scripts/fonts.json');

getFonts.onload = function() {
   let rawFonts = getFonts.responseText;
   let rawerFonts = JSON.parse(rawFonts);
   let duper =  console.log(rawFonts[0], "This font was raw");
    let stuper = console.log("RawerFonts are raw: ",rawerFonts[0]);

    fontList = rawerFonts;
};




   