const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minute");
const secondEl=document.getElementById("second");
const ampm=document.getElementById("ampm");

function updatetime(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    
if(h>12){
    h=h-12;
}    
    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;

    setTimeout(() => {
        updatetime()
    }, 1000)
}
updatetime()

