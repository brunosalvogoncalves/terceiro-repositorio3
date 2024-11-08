const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function visualizarInformacoesGlobais() {

    const res = await fetch(url);
    const dados = res.json();

    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9).toFixed(2);
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9).toFixed(2);
    const horas = parseInt((dados.tempo_medio - horas) * 60);
    const
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = 'Você sabia que o mundo tem${dados.total_pessoas_mundo} e que aproximadamente ${dados.total_pessoas_conectadas em alguma rede social e passam em média '

}

visualizarInformacoesGlobais();
