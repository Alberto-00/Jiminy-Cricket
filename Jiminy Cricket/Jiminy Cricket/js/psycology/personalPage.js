
function setField(id){
    document.getElementById(id).readOnly = false;
}

function saveField(){
    document.getElementById('email').readOnly = true;
    document.getElementById('contatto1').readOnly = true;
    document.getElementById('password').readOnly = true;
    document.getElementById('contatto2').readOnly = true;
    document.getElementById('cognome').readOnly = true;
    document.getElementById('nome').readOnly = true;
}