function results(){
    var year=document.getElementById("year").value; 
    var month=document.getElementById("month").value; 
    var day=document.getElementById("day").value; 
    var male=document.getElementById("male").checked;
    var female=document.getElementById("female").checked;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
    var birthDate = new Date(day+ '/' +month + '/' + year);
    var dayOfTheWeek = birthDate.getDay(); 



    if (day <= 0 || day > 31) { 
		document.getElementById("error").innerText = "Please enter a valid date!"
    }

    else if ((month <0 || month>12 )) { 
        document.getElementById("error").innerText = "Please enter a valid date!"
    }

   else if ((female === false) && (male === false)) { 
    document.getElementById("error").innerText = "Please select gender!"

 }
    else if (male === true) { 
        document.getElementById("results").innerHTML = "You were born on a " + days[dayOfTheWeek]  + " ,and therefore, your Akan name is " + maleNames[dayOfTheWeek] + "!"
    }

    else if (female === true) { 
        document.getElementById("results").innerHTML = "You were born on a " + days[dayOfTheWeek] + " and therefore, your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    }      

     


}
function click(){
document.getElementById("reset").reset();}