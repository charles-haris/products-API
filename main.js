let products_container = document.querySelector('.products_container');
let cart = []
var toggler = document.querySelector('.toggler');
var sidebar = document.getElementById('sidebar');
var cart_items = document.querySelector('.cart_items');
fetch("https://betafullstack.pythonanywhere.com/products")
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            console.log("Something went wrong");
        }
    })
    .then(data => {
        data.forEach(product => {
            products_container.innerHTML += `
            <div class="item">
            <img src="${product.product_img}" alt="">
            <h4>${product.product_name}</h4>
            <h4>$${product.product_price}</h4>
            <button class="btn add_to_cart">Add to cart</button>
            </div>
            
            `
        })
        var buttons = document.querySelectorAll('.add_to_cart');
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                if (cart.includes(data[index])) {
                    alert(`${data[index].product_name} already added to cart`)
                } else {
                    cart.push(data[index])
                    closeCart()
                    cart_items.innerHTML = ""
                    cart.forEach(product => {
                        cart_items.innerHTML += `
                        <div class="item">
                        <img src="${product.product_img}" width="70px" alt="">
                        <div>
                            <h5>${product.product_name}</h5>
                            <h6>$ ${product.product_price}</h6>
                        </div>
                    </div>
                        `
                    })
                }
            });
        })


    })
    .catch(error => {
        console.log(error);
    });

toggler.addEventListener('click', function() {
    showCart();
});

function showCart() {
    sidebar.classList.toggle('sidebar_active');
}

function closeCart() {
    sidebar.classList.add('sidebar_active');
}

function closeCart_2(variable) {
    if(variable){
            sidebar.classList.add('sidebar_active');
    }
}

// charles-haris, BOUASSE
// Saving to localStorage ()
localStorage.setItem('cart', JSON.stringify({
    name: "kofi",
    email: "kofi@gmail.com"
}))

// Get from the localStorage
JSON.parse(localStorage.getItem('cart'))
