function minutesToHours(time)
{
  var minutes = time % 60;
  var hours = (time - minutes) / 60;
  
  if (hours > 1 && minutes > 1) {
    console.log(hours + " hours, " + minutes + " minutes");
  } else if (hours > 1 && minutes == 1) {
    console.log(hours + " hours, " + minutes + " minute");
  } else if (hours == 1 && minutes > 1) {
    console.log(hours + " hour, " + minutes + " minutes");
  }
}
