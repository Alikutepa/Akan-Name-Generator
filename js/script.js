function generate(){
    var day=document.getElementById("day").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value; 
    var birthDay = new Date(day+ '/' +month + '/' + year);
    var specificDay = birthDay.getDay(); // getDay method returns the day of the week (from 0 to 6) for the specified date where Sunday is 0, Monday is 1

    var male=document.getElementById("male").checked; 
    var female=document.getElementById("female").checked;// .checked is a boolean, which returns true if the checkbox is checked

    // arrays for different variables 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 



    if (day <= 0 || day > 31) { 
		document.getElementById("error").innerHTML = "Please enter a valid date!"
    }

    else if (month <0 || month>12 ) { 
        document.getElementById("error").innerHTML = "Please enter a valid month!"
    }

   else if ((female === false) && (male === false)) { 
    document.getElementById("error").innerHTML = "Please select gender!"

 }
 // print out day defined in getDay and apply same syntax to the names
    else if (male === true) { 
        document.getElementById("results").innerHTML = "You were born on a " + days[specificDay]  + " ,and therefore, your Akan name is " + maleNames[specificDay] + "!"
    }

    else if (female === true) { 
        document.getElementById("results").innerHTML = "You were born on a " + days[specificDay] + " and therefore, your Akan name is " + femaleNames[specificDay] + "!" 
    }      

     


}
function click(){
document.getElementById("myForm").reset();}