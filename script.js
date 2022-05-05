let buttonLoggin = document.getElementById('buttonLoggin');
let inputName = document.getElementById('inputName');
let inputPassword = document.getElementById('inputPassword');

buttonLoggin.addEventListener("click", verificacaoLogin);
function verificacaoLogin() {
  if (inputName === 'tryber@teste.com' && inputPassword === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}