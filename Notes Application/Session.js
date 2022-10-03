let getStartedBtn=document.getElementById("gbtn");
console.log(getStartedBtn);

getStartedBtn.addEventListener("click",function()
{
   var array=[];
   var obj={
    username:username.value,
    password:password.value
   }
   array.push(obj);
   sessionStorage.setItem("user details",JSON.stringify(array));
   function session(){
    
    let sessionName = sessionStorage.getItem("user details");
    if ( sessionName == null) {
        sessionObj = [];
      } else {
        sessionObj = JSON.parse(sessionName);
        console.log(sessionObj);
      }
      let html="";
      sessionObj.forEach(function(element, index) {
    html=` <div class="sessionname"> 
    <h3> Welcome ${element.username}</h3>`;
      });
      let sessionElm = document.getElementById("sessions");  
    sessionElm.innerHTML = html;
   
   } 
});

//Displaying session storage value 


