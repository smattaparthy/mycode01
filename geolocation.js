var elMap = document.getElementById('loc');
var msg='sorry we were unable to get your lacation';
if(modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success,fail);
    elMap.textContent = 'checking location.....';
}
else{
    elMap.textContent = msg;
}
function success(position){
    msg = '<h3>longitude:<br>';
    msg+= position.coords.longitude + '</h3>';
    msg+='<h3>latitude:<br>';
    msg+=position.coords.latitude + '</h3>';
    elMap.innerHTML = msg;


}
function fail(msg){
    elMap.textContent = msg;
    console.log(msg.code);

}
