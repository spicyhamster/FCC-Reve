//Reverse the provided string.

function reverseString(str) {
  var arr = str.split("").reverse().join("");
  return arr;
}

reverseString("hello"); //should return "olleh"
