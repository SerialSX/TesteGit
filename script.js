// Armazenar produto no carrinho
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Atualiza o número de itens no carrinho
function atualizarCarrinho() {
    const carrinhoCount = document.getElementById('carrinho-count');
    carrinhoCount.textContent = carrinho.length;
}

// Filtro de Preço
function filtrarPorPreco() {
    const precoMax = parseFloat(document.getElementById("preco-max").value);
    const produtos = document.querySelectorAll(".produto");
    
    produtos.forEach(produto => {
        const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$", "").trim());
        if (preco <= precoMax) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}

// Adicionando eventos de compra
const btnComprar = document.query
