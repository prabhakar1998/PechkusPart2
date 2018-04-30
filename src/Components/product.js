import React from "react";
import './product.css';

class Product extends React.Component{   
	render(){
		return (	
		  this.props.product.map(function(item){
             let isExclusiveSpan = "";
             let isSaleSpan = "";
		  	if(item.isSale){
                isSaleSpan = (
                	        <div className='span isSale'>
                              Sale
					        </div>
                	);
		  	}
		   if(item.isExclusive){
                isExclusiveSpan = (
                	        <div className='span'>
                              Exclusive
					        </div>
                	);
		  	  }
		  		return (
					        <div class='card'>
					                      <div class='card-content'>
					                          <div class='top-bar'>
					                              <span>
					                                {item.price}
					                              </span>
					                              <span class='float-right lnr lnr-heart'></span>
					                           </div>
					                          <div class='img'>
					                            <img src= {require("../images/" + item.productImage)} />
					                          </div>
					                      </div>


					                        <div class='card-description'>
					                          <div class='title'>
					                              {item.productName}
					                          </div>
					                          <div class='cart'>
					                            <span class='lnr lnr-cart'></span>
					                          </div>
					                        </div>


					                        <div class='card-footer'>
                                                    {isSaleSpan}
                                                    {isExclusiveSpan}
					                       </div>
					             </div>

		  		);}));
	}
}


export default Product;