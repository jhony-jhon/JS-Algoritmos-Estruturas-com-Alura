const precosLivros = require("./listaLivros");
const livros = require("./listaLivros");

// encontrando o livro mais barato em uma lista desordenada.

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa ${precosLivros[maisBarato].preco} reais 
e o título é ${livros[maisBarato].titulo}.`);