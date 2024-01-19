function validarFormulario() {
    var campoA = document.getElementById('CampoA').value;
    var campoB = document.getElementById('CampoB').value;
    var mensagemDiv = document.getElementById('mensagem');

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    if (!isNaN(campoA) && !isNaN(campoB)) {
        if (campoB > campoA) {
            mensagemDiv.textContent = 'Formulário válido!';
            mensagemDiv.className = 'mensagem-valida';
        } else {
            mensagemDiv.textContent = 'Formulário inválido. O valor de B deve ser maior que o valor de A.';
            mensagemDiv.className = 'mensagem-invalida';
        }
    } else {
        mensagemDiv.textContent = 'Por favor, insira valores numéricos válidos.';
        mensagemDiv.className = 'mensagem-invalida';
    }
    
}
