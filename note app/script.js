const btnEl=document.querySelector(".btn");
const appEl=document.querySelector(".app");

getNote().forEach((note)=>{
    const noteEl=createNoteElement(note.id,note.content);
    appEl.insertBefore(noteEl,btnEl);
})

function createNoteElement(id,content){
    const element=document.createElement("textarea");
element.classList.add("note");
element.placeholder="empty";
element.value=content;

element.addEventListener("dblclick",()=>{
    deleteElement(id,element)
})
element.addEventListener("input",()=>{
    updateNote(id,element.value)
})
return element;
}
function deleteElement(id,element){
const notes=getNote();
const target=notes.filter((note)=>note.id!=id)
}
function updateNote(id,content){
    const notes=getNote();
    const target=notes.filter((note)=> note.id==id)[0];
    target.content=content;
    saveNote(notes);
}
function addNote(){
const notes=getNote();
const noteObj= {
    id:Math.floor(Math.random()*100),
    content:"",
};
const noteEl=createNoteElement(noteObj.id,noteObj.content);
appEl.insertBefore(noteEl,btnEl);
notes.push(noteObj);
saveNote(notes);
}

function saveNote(note){
localStorage.setItem("note-data",JSON.stringify(note));
}

function getNote(){
return JSON.parse(localStorage.getItem("note-data") || "[]");
}
btnEl.addEventListener("click",addNote);