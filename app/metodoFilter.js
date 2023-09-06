const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const elemento = elementoBtn.value
    let livrosFiltrados = elemento == "disponivel" ? filtrarPorDisponibilidade()
     : filtrarPorCategoria(elemento)
    exibirLivros(livrosFiltrados)
    if (elemento == "disponivel") {
        const valorTotal = calcularTotal(livrosFiltrados)
        exibirValorTotalDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(elemento) {
    return livros.filter(livro => livro.categoria == elemento)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDisponiveis(valorTotal) {
    elementoValorTotal.innerHTML += `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`

}