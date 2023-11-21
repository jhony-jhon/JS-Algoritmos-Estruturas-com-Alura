const precosLivros = require("./listaLivros");
const livros = require("./listaLivros");

// encontrando o livro mais barato em uma lista desordenada.

function menorValor(arrProdutos, posicaoInicial) {
    
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;