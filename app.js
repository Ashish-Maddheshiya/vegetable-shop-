// CART ARRAY
let cart = [];

// TOTAL PRICE
let totalAmount = 0;

// ADD TO CART FUNCTION
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    totalAmount += price;

    updateCart();
}

// UPDATE CART UI
function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const total =
        document.getElementById("total");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        let li =
            document.createElement("li");

        li.innerHTML =
            `
        ${item.name}
        - ₹${item.price}

        <button onclick="removeItem(${index})">
        Remove
        </button>
        `;

        cartItems.appendChild(li);
    });

    total.innerText = totalAmount;
}

// REMOVE ITEM
function removeItem(index) {

    totalAmount -= cart[index].price;

    cart.splice(index, 1);

    updateCart();
}

// CHECKOUT FORM
const form =
    document.querySelector("form");

form.addEventListener("submit",
    function(e) {

        e.preventDefault();

        if (cart.length === 0) {

            alert(
                "Please add vegetables to cart first."
            );

            return;
        }

        alert(
            "Proceed to QR Payment Section."
        );

        document
            .getElementById("payment")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

// PAYMENT BUTTON
const paymentButton =
    document.querySelector("#payment button");

paymentButton.addEventListener(
    "click",
    function() {

        const transactionId =
            document
            .querySelector("#payment input")
            .value;

        if (transactionId === "") {

            alert(
                "Please Enter Transaction ID"
            );

            return;
        }

        // RANDOM ORDER ID
        let orderId =
            "ASHISH-" +
            Math.floor(
                Math.random() * 1000000
            );

        alert(
            "Payment Details Submitted\n\n" +
            "Order ID: " +
            orderId
        );

    });

// PAGE LOAD
window.onload = function() {

    console.log(
        "Ashish Brand Vegetable Shop Loaded"
    );

};