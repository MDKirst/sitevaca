function comprar() {
  const mensagem = document.getElementById('mensagem');
  if (!mensagem) return;
  mensagem.textContent = 'Compra realizada com sucesso! Obrigado por comprar com o Prof. Kirsten.';
  mensagem.classList.remove('hidden');
  setTimeout(() => {
    mensagem.classList.add('hidden');
  }, 3000);
}
