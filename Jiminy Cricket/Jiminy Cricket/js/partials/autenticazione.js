$(document).ready(function (){
    $('#sign-in').click(function (){
        $('#login-in').addClass('none')
        $('#login-up').removeClass("none")
    });

    $('#sign-up').click(function (){
        $('#login-up').addClass('none')
        $('#login-in').removeClass('none')
    });

    $.validator.addMethod("email_unisa", function (value){
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }, "Email errata.");

    $.validator.addMethod("username_email", function (value){
        return /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/.test(value) | /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }, "Email o Username errata.");

    $.validator.addMethod("strong_password", function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=^ ì{}+çò°àù§èé#@$!%€*?&:,;'._<>|-])[A-Za-z\d=^ ì{}+çò°àù§èé#@$!%€*?&:,;'._<>|-]{8,}$/.test(value)
    }, "La password è errata.");

    $.validator.addMethod("checklower", function (value){
       return /^(?=.*[a-z])/.test(value);
    }, "La password deve contenere almeno un carattere minuscolo.");

    $.validator.addMethod("checkupper", function (value){
        return /^(?=.*[A-Z])/.test(value);
    }, "La password deve contenere almeno un carattere Maiuscolo.");

    $.validator.addMethod("checkdigit", function (value){
        return /^(?=.*[0-9])/.test(value);
    },"La password deve avere almeno un numero.");

    $.validator.addMethod("checkspecial", function (value){
        return /^(?=.*[={}+çò°àù§èé#@$!%€*?&:,;'._<>|-])/.test(value);
    }, "La password deve contenere almeno un carattere speciale: ={}+çò°àù§èé#@$!%€*?&:,;'._<>|-");

    $.validator.addMethod("name_surname", function (value) {
        return /^[a-zA-Z .']+$/.test(value)
    });

    $.validator.addMethod("passwordEqual", function (value) {
        return 'Marco02!'.test(value)
    });

    $("form[name='admin-login']").validate({
        rules: {
            email: {
                required: true,
                email: false,
                username_email: true,
            },
            password: {
                required: true,
                strong_password: true,
                passwordEqual: true,
            }
        },
        messages: {
            password: {
                required: "Inserire la password.",
                passwordEqual: "Password errata!"
            },
            email: {
                required: "Inserire l'Email o l'Username.",
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $("form[name='admin-registry']").validate({
        rules: {
            nome: {
                required: true,
                name_surname: true,
                minlength: 3,
                maxlength: 30,
            },
            cognome: {
                required: true,
                name_surname: true,
                minlength: 3,
                maxlength: 30,
            },
            dipartimento:{
                required: true,
            },
            email2: {
                required: true,
                email: true,
                email_unisa: true,
            },
            password2: {
                required: true,
                minlength: 8,
                strong_password: true,
            }
        },
        messages: {
            password2: {
                required: "Inserire la password.",
                minlength: "La password deve essere almeno di 8 caratteri.",
            },
            email2: {
                required: "Inserire l'Email di ateneo.",
                email: "Email errata.",
            },
            nome: {
                minlength: "Il nome inserito è troppo breve.",
                maxlength: "Il nome inserito è troppo lungo.",
                required: "Inserire il nome.",
                name_surname: "Il nome inserito non è corretto.",
            },
            cognome: {
                required: "Inserire il cognome.",
                minlength: "Il cognome inserito è troppo breve.",
                maxlength: "Il cognome inserito è troppo lungo.",
                name_surname: "Il cognome inserito non è corretto.",
            },
            dipartimento: {
                required: "Inserire il Dipartimento.",
            },
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $('#errorLog').fadeIn(500).delay(2600).fadeOut(500);
})

function login(){
    var value = $('#email').val();
    var pass = $('#password').val();
    if(value === "marco02@gmail.com" && pass === "Marco02!"){
        location.href = "../pages/student/personalPage.html";
    } else if(value === "psicologo@gmail.com" && pass === "Psicologo95!"){
        location.href = "../pages/psychologist/personalPage.html";
    }
}