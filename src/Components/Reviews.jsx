import React, { Component } from 'react';

class Reviews extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
    <h2 class="text-center">User Ratings</h2>

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-2">
                    <img src="../Images/placeholder-man.png" class="img img-rounded img-fluid"/>
                    <p class="text-secondary text-center">15 Minutes Ago</p>
                </div>
                <div class="col-md-10">
                    <p>
                        <a class="float-left" href="#"><strong>Username</strong></a>
                        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                    </p>
                    <div class="clearfix"></div>
                    <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <img src="../Images/image-placeholder.png" alt="Product" class="img img-fluid"/>

                </div>
            </div>
        </div>
    </div>
</div>
          );
    }
}
 
export default Reviews;
