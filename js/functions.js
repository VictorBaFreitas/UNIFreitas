function validarTamanho(input, tamanhoMaximo) {
    if (input.value.length > tamanhoMaximo) {
      input.value = input.value.slice(0, tamanhoMaximo);
    }
  }