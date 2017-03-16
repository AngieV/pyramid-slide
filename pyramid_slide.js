
bricktype.addEventListener("input", getInfo()); 
slider.addEventListener("input", getInfo()); 

function getHeight(){
    // figure out the height the user typed
    heightStr = document.getElementById("slider").value;

    // convert the string to an int
    height = parseInt(heightStr);
    }    

function getInfo() {
	
	bricks = document.getElementById("bricktype").value;
	
    getHeight();
    
    // draw pyramid with that height
    drawPyramid(bricks, height);
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(bricks, height) {
	 
     // first, clear the old content
     document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
              var spaceChar = "&nbsp";
              rowStr += spaceChar;
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += bricks;
         }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
        document.getElementById("height").value = height.toString();
        
    }
}

