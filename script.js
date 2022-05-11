const btnLoggin = document.getElementById('btnLoggin');
const userEmail = document.getElementById('userEmail');
const userPwd = document.getElementById('userPwd');
const btnSend = document.getElementById('submit-btn');
const inptAgreed = document.getElementById('agreement');
function verificacaoLogin() {
  if (userEmail.value === 'tryber@teste.com' && userPwd.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const verifyAgreed = () => {
  if (inptAgreed.checked === true) {
    btnSend.style.display = 'block';
  }
  btnSend.style.display = 'none';
};
window.onload = function () {
  btnLoggin.addEventListener('click', verificacaoLogin);
  inptAgreed.addEventListener('click', verifyAgreed);
  btnSend.style.display = 'none';
};
