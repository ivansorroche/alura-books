let livros = []

const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'


getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi() {
    const response = await fetch(endPoint)
    livros = await response.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}
