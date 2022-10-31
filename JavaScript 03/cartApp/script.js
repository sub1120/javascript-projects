let products = null;
let cartProducts = []

const cartProductList = document.querySelector("#cart-product-list");
const productList = document.querySelector("#product-list");
const itemsCount = document.querySelector('#total-items');
const totalCost = document.querySelector('#total');

async function loadProducts(){
    try{
        const productsJson = await fetch("https://fakestoreapi.com/products");
        products = await productsJson.json();
        renderProducts()
    }catch(error){
        console.log(error);
    }
}

const renderProducts = () => {
    products.forEach(item => {
        const newProduct = `<div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${item.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.price} Rs</p>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><small class="text-muted">Rated ${item.rating.rate} by ${item.rating.count} peoples</small></p>
                <div><button id=${item.id} class="add btn btn-primary">Add to Cart</button></div>  
                </div>
            </div>
            </div>
        </div>`
        
        productList.innerHTML += newProduct;
    })

    document.querySelectorAll(".add").forEach((product) => product.addEventListener("click", addToCart));
}

const renderCartProducts = () => {
    cartProductList.innerHTML = null;
    let total = 0;
    let totalItems = 0;
    
    cartProducts.forEach( item => {
        const newProduct = `<li class="list-group-item">
            <div class="cart-product">
                <div>${item.title.slice(0, 20)}, at  ${item.price} Rs</div>
                <div><input class="cart-input" type="number" id="${item.id}" value="${item.count}"/></div>
            </div>
        </li>`;

        cartProductList.innerHTML += newProduct;

        total += item.count*item.price;
        totalItems += item.count;
    })

    totalCost.innerText = `${Math.ceil(total)} Rs`;
    itemsCount.innerText = `${totalItems} item${totalItems > 1? 's':''}`
    document.querySelectorAll(".cart-input").forEach((product) => product.addEventListener("click", updateCart));
    
}

const addToCart = (event) => {
    const productKey = Number.parseInt(event.target.id);
    const searchProduct = cartProducts.find(item => item.id === productKey);

    if (searchProduct != null){
        searchProduct.count += 1;
    }else{
        
        const newCartProduct = products.find(item => item.id === productKey)
        
        if(newCartProduct){
            cartProducts.push({
                count:1 , 
                ...newCartProduct
            })
        }else{
            console.log("product not found")
        }
    }
    
    console.log(cartProducts)

    renderCartProducts()
}

const updateCart = (event) => {
    const productKey = Number.parseInt(event.target.id);
    const productCount = Number.parseInt(event.target.value);
    const searchProduct = cartProducts.find(item => item.id === productKey)

    if (searchProduct != null){
        searchProduct.count = productCount;
    }
    
    cartProducts = cartProducts.filter(item => item.count !== 0);

    renderCartProducts()
}

loadProducts()