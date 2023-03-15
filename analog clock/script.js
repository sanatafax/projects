const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minute");
const secondEl=document.querySelector(".second");

function update(){
    const h=new Date().getHours();
    const m=new Date().getMinutes();
    const s=new Date().getSeconds();
    
    const hour=(h/12)*360;
    const minute=(m/60)*360
    const second=(s/60)*360;

    hourEl.style.transform=`rotate(${hour}deg)`;
    minuteEl.style.transform=`rotate(${minute}deg)`;
    secondEl.style.transform=`rotate(${second}deg)`;
    
}
setInterval(update,1000);
update();