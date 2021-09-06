
//  get input 
const getInput = () =>{
    const products = document.getElementById('product');
    const productPrice = document.getElementById('price');

    const productName = products.value;
    const price =parseFloat(productPrice.value);

    if(!productName || price < 0 || !price){
        return;
    }
    //set item in local storage
    setItemLocalStorage(productName,price);

    // display products
    displayItems(productName);

    products.value = '';
    productPrice.value = '';
}
 // display items
 const displayItems = (name) =>{
    const ul = document.getElementById('items');
    const li = document.createElement('li');
    li.innerHTML = `${name}`;
    ul.appendChild(li);
 }

// getLocal storage and check
const getCartFromLocalStorage = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

//set Items local Storag
const setItemLocalStorage = (name,price) =>{
    const cart = getCartFromLocalStorage();
    if(cart[name]){
        cart[name] += price;
    }
    else{
        cart[name]  = price;
    }
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart',stringified);
}

// remove all item from local storage
const removeProducts = () =>{
    localStorage.removeItem('cart');
    document.getElementById('items').textContent = '';
}
// get Item local storage from show displY
const showDisplay = () =>{
    const cart = getCartFromLocalStorage();
    for(const name in cart){
        displayItems(name);
    }
}
showDisplay();