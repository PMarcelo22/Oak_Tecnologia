let products = [];

//Estpou selecionando todos meus elemntos 
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const productNameInput = document.getElementById('product-name');
const productDescriptionInput = document.getElementById('product-description');
const productValueInput = document.getElementById('product-value');
const productAvailableInput = document.getElementById('product-available');

productForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = productNameInput.value;
    const productDescription = productDescriptionInput.value;
    const productValue = parseFloat(productValueInput.value).toFixed(2);
    const productAvailable = productAvailableInput.value === 'sim' ? true : false;

    const product = {
        name: productName,
        description: productDescription,
        value: productValue,
        available: productAvailable
    };

    products.push(product);

    productNameInput.value = '';
    productDescriptionInput.value = '';
    productValueInput.value = '';
    productAvailableInput.value = 'sim';

    renderProducts();
});

//renderizar produtos
function renderProducts() {
    products.sort((a, b) => a.value - b.value);

   productList.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.value}</td>
        `;
        productList.appendChild(row);
    });
}

function ExibirProductForm() {
    productForm.scrollIntoView({ behavior: 'smooth' });
}

renderProducts();
