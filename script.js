const btnLoggin = document.getElementById('btnLoggin');
const userEmail = document.getElementById('userEmail');
const userPwd = document.getElementById('userPwd');
function verificacaoLogin() {
  if (userEmail.value === 'tryber@teste.com' && userPwd.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLoggin.addEventListener('click', verificacaoLogin);
