// Filtro de busca de produtos
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(function (product) {
        const name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Função para adicionar produtos ao carrinho
const cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`Produto adicionado ao carrinho: ${productName}`);
}

// Função para mostrar carrinho (apenas para demonstração)
function showCart() {
    if (cart.length > 0) {
        let cartContent = 'Carrinho de Compras:\n';
        cart.forEach((item, index) => {
            cartContent += `${index + 1}. ${item.name} - R$${item.price}\n`;
        });
        alert(cartContent);
    } else {
        alert('Seu carrinho está vazio!');
    }
}

// Adicionando o evento de "adicionar ao carrinho" nos botões
const buttons = document.querySelectorAll('.product-item button');
buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        const productName = button.parentElement.querySelector('h3').textContent;
        const productPrice = button.parentElement.querySelector('p').textContent.replace('R$', '').trim();
        addToCart(productName, productPrice);
    });
});
