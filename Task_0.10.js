function printSameLetters(firstWord, secondWord)
{
  sameLetters = "Common letters: ";
  for(let i = 0; i < secondWord.length; i++)
  {
    if (firstWord.toLowerCase().includes(secondWord[i].toLowerCase()))
    {
      sameLetters += secondWord[i] + ',';
    }
  }
  console.log(sameLetters.substring(0, sameLetters.length - 1));
}
