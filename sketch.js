var text = "hello";
var betweenChars = ' '; // a space

// alert(text.split('').join(betweenChars));

function myFunction(inputElement) {
  document.getElementById("myText").value = ((document.getElementById("myText").value).split('').join(betweenChars));
  /* Get the text field */
var copyText = document.getElementById("myText");

/* Select the text field */
copyText.select();

/* Copy the text inside the text field */
document.execCommand("copy");
inputElement.setSelectionRange(0, 0);
inputElement.blur();
}


String.prototype.toRandomCase = function() {
    return this.split('').map(function(c){
        return c[Math.round(Math.random())?'toUpperCase':'toLowerCase']();
    }).join('');
}


function myFunction2(inputElement) {
  document.getElementById("myText").value = ((document.getElementById("myText").value).toRandomCase());



  /* Get the text field */
var copyText = document.getElementById("myText");

/* Select the text field */
copyText.select();

/* Copy the text inside the text field */
document.execCommand("copy");
inputElement.setSelectionRange(0, 0);
inputElement.blur();
}
