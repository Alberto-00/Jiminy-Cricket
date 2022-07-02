
function setField(id){
    document.getElementById(id).readOnly = false;
}

function saveField(){
    document.getElementById('email').readOnly = true;
    document.getElementById('nickname').readOnly = true;
    document.getElementById('password').readOnly = true;
    document.getElementById('date').readOnly = true;
}