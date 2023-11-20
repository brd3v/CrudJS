const produtos = [];
const addProdutuo = function (produto) {
    produtos.push(produto);
};
addProdutuo('bike');
addProdutuo('pscina')
console.log(produtos);


const editeItem = (index, novoItem) => {
    produtos[index] = novoItem
}

editeItem( 0,'ferrari')


console.log(produtos);
const lerItem = (index) => produtos[index]
console.log(lerItem(1))
 const removeProduto = (item) => {
    produtos.shift(item)
}

removeProduto(produtos[0])


console.log(produtos)