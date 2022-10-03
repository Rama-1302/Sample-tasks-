//login page
//USERNAME 

var username=document.getElementById("uname");
var userError=document.getElementById("user-err");
console.log(username);
var password=document.getElementById("pwd");

username.addEventListener("input",function(e){ 
var pattern = /^[\w]{6,8}$/;
var currentValue =e.target.value; 

var valid=pattern.test(currentValue);

if(valid)
{
  userError.style.display='none';
}
else{
    userError.style.display='block';

}
});

//PASSWORD 
var password=document.getElementById("pwd");
var pwdError=document.getElementById("pwd-err");
console.log(password);
password.addEventListener("input",function(pword){
var pattern = /^.*(?=.{6,8})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).*$/;
var currentpwd =pword.target.value; 

var valid=pattern.test(currentpwd);

if(valid){
  pwdError.style.display='none';
}
else{
    pwdError.style.display='block';}
});



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