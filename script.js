console.log("CONEXÃO OK!!!");
//----------VALIDAÇÃO USERNAME
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

//console.log(usernameInput);
//console.log(usernameLabel);
//console.log(usernameHelper);


//função para o popup, apos 
function popupView(input, label) {
    input.addEventListener("focus", function() {
        label.classList.add("required-popup")
     });

    input.addEventListener("blur", function() {
        label.classList.remove("required-popup")
    });
}

//---chamando funções
popupView(usernameInput, usernameLabel)

//----------MOSTRAR POPUP DE CAMPO OBRIGATÓRIO - INPUT
// usernameInput.addEventListener("focus", function() {
//    usernameLabel.classList.add("required-popup")
// });
//----------OCULTAR POPUP DE CAMPO OBRIGATÓRIO - INPUT
//usernameInput.addEventListener("blur", function() {
//    usernameLabel.classList.remove("required-popup")
//});


//----------VALIDAR VALOR DO INPUT
usernameInput.addEventListener("change", function(evento) {
    let valor = evento.target.value
    if(valor.length < 3){
        //Input inválido
        console.log("O username precisa ter no minimo 3 caracteres")
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = "O username precisa ter no minimo 3 caracteres"
        usernameHelper.classList.add("visible")
    }else{
        //Input correto
        console.log("Input válido!")
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})

//----------VALIDAR E-MAIL
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

//console.log(emailInput)
//console.log(emailLabel)
//console.log(emailHelper)

//----------MOSTRAR POPUP DE CAMPO OBRIGATÓRIO - EMAIL
//emailInput.addEventListener("focus", function() {
//    emailLabel.classList.add("required-popup")
// });
//----------OCULTAR POPUP DE CAMPO OBRIGATÓRIO - EMAIL
//emailInput.addEventListener("blur", function() {
//    emailLabel.classList.remove("required-popup")
//});

popupView(emailInput, emailLabel)

//----------VALIDAR - EMAIL
emailInput.addEventListener("change", function(evento) {
    let valor = evento.target.value
    if(valor.includes("@") && valor.includes(".com")) {
        console.log("Email Válido")
        emailInput.classList.remove("error")
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    }else{
    console.log("Email Incorreto!")
    emailInput.classList.remove("correct")
    emailInput.classList.add("error")
    emailHelper.innerText = "Insira uim e-mail válido..."
    emailHelper.classList.add("visible")
    }
})