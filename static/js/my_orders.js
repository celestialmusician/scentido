const ordersList = document.getElementById("ordersList");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {

    ordersList.innerHTML = `

        <div class="empty-orders">

            <h2>No Orders Yet</h2>

            <p>
                Your luxury fragrance journey starts here.
            </p>

            <a
                href="/collections/"
                class="shop-btn">

                Explore Collection

            </a>

        </div>

    `;

}
else{

orders.reverse().forEach(order=>{

ordersList.innerHTML+=`

<div class="order-card">

<img src="${order.image}">

<div class="order-info">

<h3>${order.name}</h3>

<p><strong>Order ID :</strong> ${order.id}</p>

<p><strong>Date :</strong> ${order.date}</p>

<p><strong>Quantity :</strong> ${order.quantity}</p>

</div>

<div class="order-right">

<div class="status ${order.status.toLowerCase()}">

${order.status}

</div>

<div class="order-price">

${order.price}

</div>

<a href="#"

class="view-order">

View Details

</a>

</div>

</div>

`;

});

}