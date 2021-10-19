function minutesToHours(time)
{
  let minutes = 0;
  let hours = 0;
  
  if (time > 60) {
    minutes = time % 60;
    hours = (time - minutes) / 60;
    if (hours > 1 && minutes > 1) {
      console.log(hours + " hours, " + minutes + " minutes");
    } else if (hours > 1 && minutes === 1) {
      console.log(hours + " hours, " + minutes + " minute");
    } else if (hours === 1 && minutes > 1) {
      console.log(hours + " hour, " + minutes + " minutes");
    } else if (hours === 1 && minutes === 1) {
      console.log(hours + " hour, " + minutes + " minute");
    }
  } else if (time < 60){
    minutes = time;
    if (minutes > 1) {
      console.log(minutes + " minutes");
    } else if (minutes === 1) {
      console.log(minutes + " minute");
    } else if (time === 0) {
      console.log(time);
    }
  } 
}
