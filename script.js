let btnLoggin = document.getElementById('btnLoggin');
let userEmail = document.getElementById('userEmail');
let userPwd = document.getElementById('userPwd');
btnLoggin.addEventListener('click', verificacaoLogin);
function verificacaoLogin() {
  if (userEmail.value === 'tryber@teste.com' && userPwd.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
