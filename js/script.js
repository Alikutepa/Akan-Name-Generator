var algorithm = function (){
  day = document.getElementById("enterDay").value;
  month = document.getElementById("enterMonth").value;
  year = document.getElementById("enterYear").value;
  century = document.getElementById("enterMonth").value;
  dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+ day-2)%7;
  return(Math.floor(dayOfWeek));
}