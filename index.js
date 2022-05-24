function heading(){
let element = document.getElementsByClassName("class1");
element[0].innerHTML = "MERN stack";
}

let element1 = document.getElementsByTagName("h1");
console.log(element1[0]);

function currentTime() {
    let date = new Date();  
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

  function Replace(){
      document.getElementById("id1").innerText = "Welcome to Elevation academy";
  }

  $("#id3").click(function(){
    $("#id2").hide();
})