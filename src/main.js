import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();

const botao = document.querySelector('.gera-novo');

botao.addEventListener('click', () => {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
});
