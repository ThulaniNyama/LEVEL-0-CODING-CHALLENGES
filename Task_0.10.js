function printSameLetters(firstWord, secondWord)
{
  sameLetters = "Common letters: ";
  for(let i = 0; i < secondWord.length; i++)
  {
    if (firstWord.includes(secondWord[i]))
    {
      sameLetters += secondWord[i] + ',';
    }
  }
  console.log(sameLetters.substring(0, sameLetters.length - 1));
}
