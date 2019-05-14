function checkUsername()
var elmsg=document.getElementById('feedback');
if(this.value.length<5){
    elmsg.textContent='username must be 5 characters or more';
}
else{
    elmsg.textContent='';

}

var elUsername=document.getElementById('username');
elUsername.addEventListener('blur',checkUsername,false);
