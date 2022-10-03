//For modal display 
var modal = document.getElementById("modal");
var addNotesBtn = document.getElementById("add-notes");
var span = document.getElementsByClassName("close")[0];


 addNotesBtn.onclick=()=> {
  modal.style.display = "block";
  
}

span.onclick = () =>{
  modal.style.display = "none";
}

// When user clicks anywhere outside of the modal, modal display of the form is closed
window.onclick = event => {   
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var arrayOfNotesObj=[];

// Adding note to local storage
let addBtn = document.getElementById("notes-btn");
addBtn.addEventListener("click", function() {

 
  let addTitle = document.getElementById("title-text");
  let addTxt = document.getElementById("description-text");
  
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Please add Note Title and Details")
    } 

  //array becomes array of objects
  arrayOfNotesObj = local_storage();

  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }

  arrayOfNotesObj.push(myObj); 
  
  localStorage.setItem("notes", JSON.stringify(arrayOfNotesObj));
  showNotes(); 
  addTxt.value = "";
  addTitle.value = "";

 
});

// Function to reflect the contents of the localStorage
function showNotes() {
  
  arrayOfNotesObj = local_storage();

  let html = "";
  arrayOfNotesObj.forEach(function(element, index) {
    html += `
        <div class="note" >
            <p class="note-counter">Note ${index + 1}</p>
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p><br>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete </button>          

            <button id="${index}"onclick="editNote(this.id)" class=" edit-btn">Edit </button>
        </div>`;
  });

  let notesElm = document.getElementById("notes");

  if ( arrayOfNotesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
  }
}

// Function to delete a note by passing the index of the note which is stored as array 
function deleteNote(index) {    
 
    let confirmDel = confirm("Delete this note?");
    if (confirmDel == true) {
        
      arrayOfNotesObj = local_storage();
      arrayOfNotesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify( arrayOfNotesObj));
        showNotes();
    }
  
}


//function to edit the specified index of note 
function editNote(index) {
 console.log(index);
  let addTitle = document.getElementById("title-text");
  let addTxt = document.getElementById("description-text");
  
  if (addTitle.value !== "" || addTxt.value !== "") {
    return alert("Please clear the form before editing a note")
  } 

  arrayOfNotesObj = local_storage();
 

  if( index>=0 && index<arrayOfNotesObj.length){
    console.log("sucess");
    addTitle.value = arrayOfNotesObj[index].title;
    addTxt.value = arrayOfNotesObj[index].text;}

 else{   console.log("failed") }

// removes a note from local storage and screen while editing
arrayOfNotesObj.splice(index, 1); 
      localStorage.setItem("notes", JSON.stringify(arrayOfNotesObj));
      showNotes();
}


// for fetching the notes from local storage and parsing 
//executed using closures 
// the scope of notes is enclosed with the function checkingls() as is can be accessed 
function local_storage( )
{  let notesFromLocalStorage = localStorage.getItem("notes"); 
  let x= checkingls();
    
             function checkingls() {
              if (notesFromLocalStorage == null) { 
              var  notesObj = [];
            } 
            else { 
              notesObj = JSON.parse(notesFromLocalStorage);
              }
              return notesObj;
            }
            return x;
}


showNotes();




