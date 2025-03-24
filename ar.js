function validarFormulario(event) {
  const input = document.querySelector('input[name="mensagem"]');
  if (!input.value.trim()) {
    alert("Por favor, preencha o campo de mensagem.");
    event.preventDefault();
  }
}
