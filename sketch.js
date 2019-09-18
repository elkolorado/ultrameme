var text = "hello";
var betweenChars = ' '; // a space


function myFunction(inputElement) {
    document.getElementById("myText").value = ((document.getElementById("myText").value).split('').join(betweenChars));


    var copyText = document.getElementById("myText");
    copyText.select();
    document.execCommand("copy");

}


function bob(string) {
    return string.split('').map(function(c, i) {
        return i & 1 ? c.toUpperCase() : c.toLowerCase();
    }).join('');
}


function myFunction2(inputElement) {
  document.getElementById("myText").value = bob(document.getElementById("myText").value);
  var copyText = document.getElementById("myText");
  copyText.select();
  document.execCommand("copy");
}
