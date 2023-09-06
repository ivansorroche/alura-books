const elementoParaInserirLivros = document.getElementById('livros')
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')


function exibirLivros(livros) {
    elementoValorTotal.innerHTML = ""
    elementoParaInserirLivros.innerHTML = ''
    livros.forEach(list => {
        let disponivel = list.quantidade > 0
        elementoParaInserirLivros.innerHTML += `
       
        <div class="livro">
            <img class="${disponivel ? "livro__imagens" : "livro__imagens indisponivel"}" src="${list.imagem}" alt="${list.alt}" />
            <h2 class="livro__titulo">
               ${list.titulo}
            </h2>
            <p class="livro__descricao">${list.autor}</p>
            <p class="livro__preco" id="preco">R$ ${list.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${list.categoria}</span>
            </div>
        </div>
    `
    });
}