const products = [{
        key:1,
        productName:"ASUS VivoBook 15 (2022) Core i3 10th Gen",
        productCost:100,
    },
    {   
        key:2,
        productName:"Boult Audio AirBass GearPods",
        productCost:200,
    },
    {   
        key:3,
        productName:"Samsung Watch 4, 44mmSuper amled",
        productCost:400,
    },
    {   
        key:4,
        productName:"Canon EOS 3000D DSLR Camera 1 Camera Body",
        productCost:900,
    },
    {
        key:5,
        productName:"Mi 18W Quick Charger for Mi,Redmi,Xiomi",
        productCost:100,
    },
]

let cartProducts = []
const productList = document.querySelector(".product-list");
const cartProductList = document.querySelector(".cart-product-list");
const totalCost = document.querySelector('.total');
const itemsCount = document.querySelector('#total-items');

const addToCart = (event) => {
    const productKey = Number.parseInt(event.target.id);
    const searchProduct = cartProducts.find(item => item.key === productKey);

    if (searchProduct != null){
        searchProduct.count += 1;
    }else{
        
        const newCartProduct = products.find(item => item.key === productKey)
        console.log(newCartProduct);
        cartProducts.push({
            count:1 , 
            ...newCartProduct
        })
    }
    
    console.log(cartProducts)
    renderCartProducts()
}

const updateCart = (event) => {
    const productKey = Number.parseInt(event.target.id);
    const productCount = Number.parseInt(event.target.value);
    const searchProduct = cartProducts.find(item => item.key === productKey)

    if (searchProduct != null){
        searchProduct.count = productCount;
    }
    
    cartProducts = cartProducts.filter(item => item.count !== 0);

    renderCartProducts()
}

const renderCartProducts = () => {
    cartProductList.innerHTML = null;
    let total = 0;
    let totalItems = 0;
    cartProducts.forEach( item => {
        const newProductItem = document.createElement('li');
        newProductItem.setAttribute('class', 'list-group-item');

        const newProduct = document.createElement('div');
        newProduct.setAttribute('class', 'cart-product');
        newProductItem.appendChild(newProduct)
        
        const newProductName = document.createElement('div');
        newProductName.setAttribute('class', 'cart-product-name');
        newProductName.innerText = ` ${item.productName.slice(0, 30)} ...`;

        const newProductCost = document.createElement('div');
        newProductCost.setAttribute('class', 'cart-product-cost');
        newProductCost.innerText = `${item.productCost} Rs`;

        const newProductButton = document.createElement('input');
        newProductButton.setAttribute('type', 'number');
        newProductButton.setAttribute('class', 'cart-product-input');
        newProductButton.setAttribute('id', item.key);
        newProductButton.setAttribute('value', item.count);
        newProductButton.addEventListener('click', updateCart);
    
        newProduct.appendChild(newProductName);
        newProduct.appendChild(newProductCost);
        newProduct.appendChild(newProductButton);

        cartProductList.appendChild(newProductItem);

        total += item.count*item.productCost;
        totalItems += item.count;
    })

    totalCost.innerText = `${total} Rs`;
    itemsCount.innerText = `${totalItems} item${totalItems > 1? 's':''}`
    
}

products.forEach(item => {
    const newProductItem = document.createElement('li');
    newProductItem.setAttribute('class', 'list-group-item');
    
    const newProduct = document.createElement('div');
    newProduct.setAttribute('class', 'product');
    newProductItem.appendChild(newProduct);

    const newProductName = document.createElement('div');
    newProductName.setAttribute('class', 'product-name');
    newProductName.innerText = item.productName;

    const newProductCost = document.createElement('div');
    newProductCost.setAttribute('class', 'product-cost');
    newProductCost.innerText = `${item.productCost} Rs`;

    const newProductButton = document.createElement('button');
    newProductButton.setAttribute('class', 'product-button');
    newProductButton.setAttribute('id', item.key);
    newProductButton.addEventListener('click', addToCart);

    newProduct.appendChild(newProductName);
    newProduct.appendChild(newProductCost);
    newProduct.appendChild(newProductButton);

    productList.appendChild(newProductItem);
})