function printVowels(word)
{
  var vowels = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if(word.indexOf('a') == i || word.indexOf('e') == i || word.indexOf('i') == i || word.indexOf('o') == i || word.indexOf('u') == i) {
      vowels += word[i] + ',';
    }
  }
  console.log(vowels.substring(0, vowels.length - 1));
}
