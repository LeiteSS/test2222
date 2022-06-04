function primeiraFuncao() {
    alert("Primeira atividade de JavaScript")
};

function validar() {
    let nome = cadastro.nome.value;
    let cpf = cadastro.cpf.value;
    let email = cadastro.email.value;
    let senha = cadastro.senha.value;
    let confirma = cadastro.confirma.value;
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W\s]).{6,10}$/
    // "" or null
    // atributo required
    if(nome === "") {
        alert("Campo nome é obrigatório");
        cadastro.nome.focus();
        return false; // não permite enviar o formulario; para aqui!
    }
    if (cpf == "") {
        alert("Campo cpf é obrigatorio");
        cadastro.cpf.focus();
        return false;
    }
    if (email == "") {
        alert("Campo email é obrigatorio");
        cadastro.email.focus();
        return false;
    }
    if (senha == "") {
        alert("Campo senha é obrigatorio");
        cadastro.senha.focus();
        return false;
    }

    if (confirma == "") {
        alert("Campo para confirmar é obrigatorio");
        cadastro.confirma.focus();
        return false;
    }

    if (senha != confirma) {
        alert("Senhas diferentes");
        cadastro.senha.focus();
        return false;
    }

    // is not a number
    if (isNaN(cpf)) {
        alert("Digite somente numero para o campo cpf");
        cadastro.cpf.focus();
        return false;
    }
    // cpf com 11 digitos
    if (cpf.length != 11) {
        alert("cpf invalido!");
        cadastro.cpf.focus();
        return false;
    }

    if (!regex.exec(senha)) {
        alert("Senha deve conter no minimo uma letra maiuscula, minuscula, numero, caractere especial e no minimo 6 e maximo 10 caracters");
        cadastro.senha.focus();
        return false;
    }
}