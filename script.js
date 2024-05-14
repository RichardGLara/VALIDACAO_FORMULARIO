console.log("CONEXÃO OK!!!");
//----------VALIDAÇÃO USERNAME
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

//Função para o popup, apos 
function popupView(input, label) {
    input.addEventListener("focus", function() {
        label.classList.add("required-popup")
     });

    input.addEventListener("blur", function() {
        label.classList.remove("required-popup")
    });
}

//Função de estilização de informação correta
function estilizarInputCorreto(input, helper) {
    input.classList.remove("error")
    input.classList.add("correct")
    helper.classList.remove("visible")
}
//Função de Estilização de informação incorreta
function estilizarInputIncorreto(input, helper) {
    input.classList.remove("correct")
    input.classList.add("error")
    helper.classList.add("visible")
}


//---chamando funções
popupView(usernameInput, usernameLabel)

//----------VALIDAR VALOR DO INPUT
usernameInput.addEventListener("blur", function(evento) {
    let valor = evento.target.value
    if(valor.length < 3){
        //Input inválido
        console.log("O username precisa ter no minimo 3 caracteres")
        estilizarInputIncorreto(usernameInput, usernameHelper)
        usernameHelper.innerText = "O username precisa ter no minimo 3 caracteres"
        inputCorretos.username = false
    }else{
        //Input correto
        console.log("Input válido!")
        estilizarInputCorreto(usernameInput, usernameHelper)
        inputCorretos.username = true
    }
})

//----------VALIDAR E-MAIL
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")


popupView(emailInput, emailLabel)

//----------VALIDAR - EMAIL
emailInput.addEventListener("blur", function(evento) {
    let valor = evento.target.value
    if (valor == "") {
        emailHelper.innerText = "O campo senha não pode estar vazio..."
        estilizarInputIncorreto(emailInput, emailHelper)
        inputCorretos.email = false
    }else if (valor.includes("@") && valor.includes(".com")) {
        console.log("Email Válido")
        estilizarInputCorreto(emailInput, emailHelper)
        inputCorretos.email = true
    }else{
    console.log("Email Incorreto!")
    estilizarInputIncorreto(emailInput, emailHelper)
    emailHelper.innerText = "Insira uim e-mail válido..."
    inputCorretos.email = false
    }
})

//---------- Validar PASSWORD I
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

popupView(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (evento) => {
    let valor = evento.target.value
    if (valor == "") {
        senhaHelper.innerText = "O campo senha não pode estar vazio..."
        estilizarInputIncorreto(senhaInput, senhaHelper)
        inputCorretos.senha = false
    }else{
        estilizarInputCorreto(senhaInput, senhaHelper)
        inputCorretos.senha = true
    }
})


//----------Validar PASSWORD II
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

popupView(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (evento) => {
    let valor = evento.target.value
    //console.log(valor, senhaInput.value)
    if (valor == "") {
        confirmaSenhaHelper.innerText = "O campo senha não pode estar vazio..."
        estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
        inputCorretos.confirmasenha = false
    }else if (valor == senhaInput.value) {
        estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
        inputCorretos.confirmasenha = true
    }else{
        confirmaSenhaHelper.innerText = "As senhas não estão iguais..."
        estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
        inputCorretos.confirmasenha = false
    }
})


//-----------Evitar o envio do formulário
let btnSubmit = document.querySelector('button[type="submit')
console.log (btnSubmit);

let inputCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmasenha: false
}

console.log(inputCorretos)

btnSubmit.addEventListener("click", (evento)=> {
    console.log(inputCorretos)
    if(inputCorretos.username == false ||
        inputCorretos.email == false ||
        inputCorretos.senha == false ||
        inputCorretos.confirmasenha == false){
        evento.preventDefault()
        alert("Preencha os campos obrigatórios corretamente...")
    }else{
        alert("Formulario enviado com sucesso!")
    }
})