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


function toWeirdCase(string) {
  var reg = /\b(?![\s.])/
  var res = string.split(reg)
  var newArr = []

  for (let k = 0; k < res.length; k++) {
    let newString = "";
    for (let j = 0; j < res[k].length; j++) {
      if (j % 2 == 0) {
        newString += res[k].charAt(j).toUpperCase()
      } else {
        newString += res[k].charAt(j).toLowerCase()
      }
    }
    newArr.push(newString)
  }
  return newArr.join('')
}


function myFunction2(inputElement) {
  document.getElementById("myText").value = ((document.getElementById("myText").value).toWeirdCase());




var copyText = document.getElementById("myText");

copyText.select();

/* Copy the text inside the text field */
document.execCommand("copy");
inputElement.setSelectionRange(0, 0);
inputElement.blur();
}
