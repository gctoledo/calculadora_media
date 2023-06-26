const form = document.getElementById('form-atividade');
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando">`;
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji triste">`;
const nomeAtividade = document.getElementById('atividade');
const notaAtividade = document.getElementById('nota');
let linhas = ''; 
const atividades = [];
const notas = []; 
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'; 
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota minima:'));

function adicionaLinha(atividade, nota) {
    let linha = `<tr><td>${atividade}</td><td>${nota}</td><td>${nota >= notaMinima ? imgAprovado : imgReprovado}</td></tr>`;
    if (atividades.includes(nomeAtividade.value)) {
        alert(`A atividade ${nomeAtividade.value} já existe.`);
    } else {
        linhas += linha;
        notas.push(parseFloat(notaAtividade.value));
        atividades.push(nomeAtividade.value);
    }
    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha(nomeAtividade.value, notaAtividade.value);
    atualizaTabela();
    atualizaMediaFinal ();
})