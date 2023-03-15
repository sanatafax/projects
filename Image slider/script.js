const nextEl=document.querySelector(".next");
const imgcontEl=document.querySelector(".image-container");
const imgsEl=document.querySelectorAll("img");
const prevEl=document.querySelector(".prev")
let currentimg=1;
let timeout;
nextEl.addEventListener("click",()=>{
    currentimg++;
    clearTimeout(timeout);
    updateImg()
});
prevEl.addEventListener("click",()=>{
    currentimg--;
    clearTimeout(timeout);
    updateImg()
});
updateImg();
function updateImg(){
    if (currentimg>imgsEl.length){
        currentimg=1;
    }else if(currentimg<1){
        currentimg=imgsEl.length;
    }

    imgcontEl.style.transform=`translateX(-${(currentimg-1)*500}px)`;
    timeout=setTimeout(()=>{currentimg++;updateImg()},1000)
}