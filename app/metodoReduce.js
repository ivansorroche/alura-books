 function calcularTotal(livros) {
return livros.reduce((acumaludar,livro) => acumaludar + livro.preco, 0).toFixed(2)
}