// // task1
var check=prompt("is no one is in the room")
if(check==""){
    alert("you didnot enter any value")

}else{
  if(check=="yes"){
    console.log(" turn of all the lights");
  }
  else{
    console.log("dont turn of the lights");

  }

}
var season=prompt("check the season")
if(season==""){
    alert("you didnot enter any value");

}
else{
    if(season=="summer"){
        console.log("set temp to 18");

    }
    else{
        if(season=="winter"){
            console.log("set temp to 22");
    }
    else{
        console.log("not summer and winter seasons");

    }
}
}

var check2=prompt("if no one is in the house")
if(check2==""){

   alert("you didnot enter any value");
}
else{
    if(check2=="yes" ){
        console.log("close the door");
      }
      else{
        console.log("dont close the door");

      }
}
// --------------------------
// // task2
var math_marks = +prompt("student math  marks");
var science_marks = +prompt("student science  marks");
if (math_marks == "") {
  alert("you didnot enter math marks");
} else {
  if (science_marks == "") {
    alert("you didnot enter science marks");
  } else {
    if (
      (math_marks >=50) &&
      (science_marks >=50)
    ) {
      console.log("pass");
    } else {
      console.log("fail");
    }
  }
}
// --------------------------------------
//task3

var tprice=+prompt("check ticket price");
var time_of_day=prompt("check at what time of day avaliable")
var meal=prompt("check meals avalaible or not")
if (tprice == "") {
  alert("check ticket price");
} else {
  if (time_of_day == "") {
    alert("check time of day");
  } else {
    if(meal==""){
        alert("check meals avalaible or not");
    }
    else{
    if (tprice < 500 && (time_of_day == "morning" || meal == "yes")) {
      console.log("buy it");
    } else {
      console.log("look for another flight.");
    }
  }
}
}
// -----------------------------------
// task4
var ram=prompt("check ram")
var graphics=prompt("check graphics card is avalaible or not ")
var price=prompt("check the price")

if(ram==""){
    alert("check the ram")
}
else{
    if(graphics==""){
        alert("check the grphics")
    }
    else{
        if(price==""){
            alert("check the price")
        }
        else{
            if(ram>=8 && graphics=="yes" && price<=80000 ){
                console.log("buy it");

            }
            else{
                console.log("look for alternatives");

            }
        }
    }
}
// ---------------------
// task5
var attendence=prompt("enter attendence")
var grade=prompt("enter grade")
if(attendence==""){
    alert("enter attendence")
}
else{
    if(grade==""){
        alert("enter grade")
    }
    else{
        if(attendence>80 && (grade=="b" || grade=="a")){
console.log("they can attend the trip");

        }
        else{
            console.log("they cant attend the trip");

        }
            }
}