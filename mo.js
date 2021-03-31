var code=document.getElementById("code");
var play=document.getElementById("play");
var remove=document.getElementById("remove");
var results=document.getElementById("results");

play.onclick=()=>{

    results.innerHTML= code . value;
    localStorage.setItem("RESULTU",code.value);
}
remove.onclick=()=>{
results.innerHTML="";


}
// onload=()=>{

//     code.value=localStorage.getItem("RESULTU");
//     results.innerHTML= code . value;
// }