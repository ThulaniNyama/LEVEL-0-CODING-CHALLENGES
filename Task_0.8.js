function minutesToHours(time)
{
  let minutes = time % 60;
  let hours = (time - minutes) / 60;
  
  if (hours > 1 && minutes > 1) {
    console.log(hours + " hours, " + minutes + " minutes");
  } else if (hours > 1 && minutes === 1) {
    console.log(hours + " hours, " + minutes + " minute");
  } else if (hours === 1 && minutes > 1) {
    console.log(hours + " hour, " + minutes + " minutes");
  }
}
