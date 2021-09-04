function algorithim (){
  day = document.getElementById("enterDay").value;
  month = document.getElementById("enterMonth").value;
  year = document.getElementById("enterYear").value;
  century = document.getElementById("enterMonth").value;
  dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+ day-2)%7;
  return(Math.floor(dayOfWeek));
  
}
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    function myFunction () {
      let day = document.getElementById("enterDay").value;
      let text; 
      if (day < 0 || day>31){
        text = "Date not valid"
      }
      document.getElementById("error").innerHTML= text;
    }
    