const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji triste" />'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const nota_minima = parseFloat(prompt('Digite a nota minima: '))

const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adiciona_linha();
    atualiza_tabela();
    atualiza_media_final();


});

function adiciona_linha () {
    
    const InputNomeAtividade = document.getElementById('nome-atividade');
    const InputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(InputNomeAtividade.value)){
        alert(`A atividade: ${InputNomeAtividade.value} ja foi inserida.`)
    } else {
        atividades.push(InputNomeAtividade.value);
        notas.push(parseFloat(InputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${InputNomeAtividade.value}</td>`;
        linha += `<td>${InputNotaAtividade.value}</td>`;
        linha += `<td>${InputNotaAtividade.value >= nota_minima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        linhas += linha
    }
    InputNomeAtividade.value = '';
    InputNotaAtividade.value = '';
}

function atualiza_tabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualiza_media_final(){

    const media_final = calcula_media_final()
    
    document.getElementById('media-final-valor').innerHTML = media_final;
    document.getElementById('media-final-resultado').innerHTML = media_final >= nota_minima ? spanAprovado : spanReprovado;

    


}

function calcula_media_final () {
    let soma_das_notas = 0;

    for (let i = 0;i < notas.length;i++){
        soma_das_notas+= notas[i];
    }

    return soma_das_notas / notas.length

}