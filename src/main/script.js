//The module: file.js

let getFonts = new XMLHttpRequest();
getFonts.open("GET", '/src/main/fonts.json');
getFonts.onload = function() {
    console.log(getFonts.responseText);
};

getFonts.send();


 function init() {
    loadJSON(function(response) { 
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);
    });
   }


   