  function generate (){
    var day = document.getElementById("enterDay").value;
    var month = document.getElementById("enterMonth").value;
    var year = document.getElementById("enterYear").value;
    var century = document.getElementById("enterCentury").value;
    dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+ day-2)%7;
    return(Math.floor(dayOfWeek));
    
  }

      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
      var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
      
      function validation(){
        if (document.getElementById("enterCentury").value == "" || century<1 || century>21){
            alert("Please enter a valid century")
            return false;
        }else{
            return true;
        }
      }
      function val(){
          validation();
          if (document.getElementById("enterYear").value == "" || year<1 || year>99){
              alert("Please enter a valid year")
              return false;
          } else {
              return true;
          }
      }
      function val2(){
          val();
          if (document.getElementById("enterMonth").value == "" || month<1 || month>12){
              alert("Please enter a valid month")
          } else {
              return true;
          }
      }
      function val3(){
          val2();
          if (document.getElementById("enterDay").value == "" || day<1 || day>31){
              alert("Please enter a valid day.")
          } else {
              return true;
          }
      }
      function checkDayOfTheWeek(){
         var calculate = generate();
          val3();
          gender = document.getElementsByName("gender");
          if (gender[0].checked==true){
              gender = "male";
          } else if (gender[1].checked==true){
              gender = "female";
          }else{
              alert("Please choose your gender");
          }
        }
    
        if(gender=="male"&& calculate==0){
            document.write("Your were born on "+days[0]+" and your Akan name is "+maleAkanNames[0]);
        } else if (gender=="female"&& calculate==0){
            document.write("You were born on "+days[0]+" and your Akan name is "+femaleAkanNames[0]);
        }else if (gender=="male"&& calculate==1){
            document.write("Your were born on "+days[1]+" and your Akan name is "+maleAkanNames[1]);
        } else if(gender=="female"&& calculate==1){
            document.write("Your were born on "+days[1]+" and your Akan name is "+femaleAkanNames[1]);
        } else if (gender=="male" && calculate==2){
            document.write("You were born on "+days[2]+" and your Akan name is "+maleAkanNames[2]);
        } else if (gender=="female" && calculate==2){
            document.write("You were born on "+days[2]+" and your Akan name is "+femaleAkanNames[2]);
        } else if (gender=="male" && calculate==3){
            document.write("You were born on "+days[3]+" and your Akan name is "+maleAkanNames[3]);
        } else if (gender=="female" && calculate==3){
            document.write("You were born on "+days[3]+" and your Akan name is "+femaleAkanNames[3]);
        } else if (gender=="male" && calculate==4){
            document.write("You were born on "+days[4]+" and your Akan name is "+maleAkanNames[4]);
        } else if (gender=="female" && calculate==4){
            document.write("You were born on "+days[4]+" and your Akan name is "+femaleAkanNames[4]);
        } else if (gender=="male" && calculate==5){
            document.write("You were born on "+days[5]+" and your Akan name is "+maleAkanNames[5]);
        } else if (gender=="female" && calculate==5){
            document.write("You were born on "+days[5]+" and your Akan name is "+femaleAkanNames[5]);
        } else if (gender=="male" && calculate==6){
            document.write("You were born on "+days[6]+" and your Akan name is "+maleAkanNames[6]);
        } else if (gender=="female" && calculate==6){
            document.write("You were born on "+days[6]+" and your Akan name is "+femaleAkanNames[6]);
        }
        function click(){
          document.getElementById("reset").reset();}
