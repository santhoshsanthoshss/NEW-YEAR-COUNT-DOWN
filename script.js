const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

let currentYear = new Date().getFullYear();

let nextYear = currentYear + 1;

year.innerHTML = nextYear;

let newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
// console.log(newYearTime);

function updatecountdown(){
  let currentTime = new Date();
  let diff = newYearTime-currentTime;
//math.floor is will round of the value in lowest value.
//1 seconds=1000 ms, 1minute=60s, 1hour=60m , 1day=24hours
  let d=Math.floor(diff/1000/60/60/24);
  let  h=Math.floor(diff/1000/60/60)%24;
  let m =Math.floor(diff/1000/60)%60;
  let s=Math.floor(diff/1000)%60;
   // %24 to find the hour value
  
   days.innerHTML=d<10?"0"+d:d;
   hours.innerHTML=h<10?"0"+h:h;
   minutes.innerHTML=m<10?"0"+m:m;
   seconds.innerHTML=s<10?"0"+s:s;
}

// updatecountdown();

//setInterval(()=>{
//updatecountdown();
//},1000);

setInterval(updatecountdown,1000);

setTimeout(()=>{
  loading.remove();
  countdown.style.display ="flex";
},1000)
