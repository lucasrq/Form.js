document.getElementById('Formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const CampoA = parseFloat(document.getElementById('CampoA').value);
    const CampoB = parseFloat(document.getElementById('CampoB').value);
    const mensagemElement = document.getElementById('mensagem');
    if (CampoB > CampoA) {
        mensagemElement.innerHTML = 'Formulario valido! B é maior que A.';
    } else {
        mensagemElement.innerHTML = 'Formulario invalido! B deve ser maior que A.';
    }
});
