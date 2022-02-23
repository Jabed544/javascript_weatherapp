function check(){
let search=document.getElementById("search").value;
document.getElementById("city").innerHTML=search;
let date=new Date()
document.getElementById("date").innerHTML=date;
const key="3b2b97808825bf013ed953f211dd6c90";
const base = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`;
  
fetch(base)
.then((response) => {
 return response.json();
  })
  .then((data) => {
    let degree=data.main;
    if(!degree){
       document.getElementById("degree").innerHTML="DATA NOT FOUND";
    }else{
      document.getElementById("degree").innerHTML=degree.temp+"'C";
    }
    
   });
}