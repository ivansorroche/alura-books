let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")

btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPrecos)

function ordernarLivrosPorPrecos() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}