import React, { Component } from 'react';

class ViewProducts extends Component {
    state = {  }
    render() { 
        return ( 
            
<div class="container">
    <h1>Products</h1>

    <div class="row">

    <div class="card" id="product">

        <img src="../Images/image-placeholder.png" alt="Product image" class="card-img"/>
        <div class="card-body">
        <div class="row">
            <div class="card-title col-md-8" >Product Name</div>
            <div class="col-md-4">Price</div>

        </div>
        <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Libero natus necessitatibus reprehenderit voluptatibus.
            A aliquid esse molestiae,
            nostrum numquam odio odit placeat quibusdam suscipit tempora,
            tenetur veritatis voluptatem voluptates voluptatibus?
        </p>
        </div>
        <button class="btn btn-secondary">Edit Product</button>
    </div>

    </div>
</div>


         );
    }
}



export default ViewProducts;