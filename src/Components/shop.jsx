import React, { Component } from 'react';

class Shop extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container">
        <div className="card">
            <div className="card-header">
                <div className="heading-color">
                    <h2 className="text-center">Raheem Store, Allama Iqbal Town</h2>
                </div>
            </div>
        </div>
    
        <img src="../Images/shop.jpg" className="img-fluid w-100" alt="image"/>
    
        <div className="text-center margain-top-20">
            <h4>Shop Views</h4>
        </div>
        <div className="line-chart-block block">
            <div className="line-chart">
                <div className='grafico'>
                    <ul className='eje-y'>
                        <li data-ejeY='30'></li>
                        <li data-ejeY='20'></li>
                        <li data-ejeY='10'></li>
                        <li data-ejeY='0'></li>
                    </ul>
                    <ul className='eje-x'>
                        <li>Apr</li>
                        <li>May</li>
                        <li>Jun</li>
                    </ul>
                    <span data-valor='25'>
               <span data-valor='8'>
                 <span data-valor='13'>
                   <span data-valor='5'>
                     <span data-valor='23'>
                     <span data-valor='12'>
                         <span data-valor='15'>
                       </span></span></span></span></span></span> </span>
                </div>
            </div>
        </div>
    </div>
    
    );
    }
}
 
export default Shop;