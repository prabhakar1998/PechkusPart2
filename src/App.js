import React, { Component } from 'react';

import './App.css';
import Product from './Components/product'
import Header from './Components/header'
import Filter from './Components/filter'



class App extends Component {
  
  
  constructor(props){
    super(props);
    this.all_products = require('./data/products.json');
    this.handler_filterByExclusive = this.filterByExclusive.bind(this);
    this.handler_sortByPrice = this.sortByPrice.bind(this);
    this.filterBySale = this.filterBySale.bind(this);    

    this.brandName = "Part2 Task";
    this.state={
      products_to_display: this.all_products,
      filtered: false,
      filterBySaleChecked: false,
      filterByExclusiveChecked: false
    };
  }
  
  filterBySale() {
      let filteredResults = []      
        if(this.state.filterBySaleChecked){
          console.log(32);
              if(!this.state.filterByExclusiveChecked){
                console.log("line34");
                    this.setState({
                      products_to_display: this.all_products,
                      filterBySaleChecked: false,
                    })  
               }
              else{
                          console.log(41);
                   for(let product in this.all_products){
                      if((!this.all_products[product].isSale) && this.all_products[product].isExclusive){
                         filteredResults.push(this.all_products[product])
                       }
                   } 
                  this.setState({
                      products_to_display: filteredResults,
                      filterBySaleChecked: false,
                    }) 
               }              
             } 
          else{
                      console.log(54);
                  if(this.state.filterByExclusiveChecked)
                  {
                              console.log(58);
                    for(let product in this.all_products){
                         if(this.all_products[product].isExclusive || this.all_products[product].isSale){
                           filteredResults.push(this.all_products[product])
                        }
                     }                   
                  }
                  else{
                              console.log(65);
                      for(let product in this.all_products){
                          if(this.all_products[product].isSale){
                                filteredResults.push(this.all_products[product])
                             }
                         }
                  }                  
              this.setState({
                  filterBySaleChecked: true,
                  products_to_display: filteredResults
               });
             }
    }

   filterByExclusive() {
        let filteredResults = []
        if(this.state.filterByExclusiveChecked){      
                          console.log("line70");
                if(!this.state.filterBySaleChecked){
                  console.log("line72");
                      this.setState({
                        products_to_display: this.all_products,
                        filterByExclusiveChecked: false,
                      })  
                 }
                else{
                  console.log("line79");
                     for(let product in this.all_products){
                        if(!this.all_products[product].isExclusive || this.all_products[product].isSale){
                           filteredResults.push(this.all_products[product])
                         }
                     } 
                    this.setState({
                        products_to_display: filteredResults,
                        filterByExclusiveChecked: false,                        
                      }) 
                 }              
             } 
          else{
                if(this.state.filterBySaleChecked)
                {
                  for(let product in this.all_products){
                    if(this.all_products[product].isExclusive && this.all_products[product].isSale){
                          filteredResults.push(this.all_products[product])
                       }
                   }  
                }
                else{
                      for(let product in this.all_products){
                         if(this.all_products[product].isExclusive){
                           filteredResults.push(this.all_products[product])
                        }
                     }  
                  }                                        
                  this.setState({
                      filterByExclusiveChecked: true, 
                      products_to_display: filteredResults
                   });
             }   
    }

    
 

    sortByPrice(target_value){

      let products_to_sort = this.state.products_to_display;
      target_value = parseInt(target_value);
      if(target_value !== 0){
         products_to_sort.sort(function(a, b){
                    return parseInt(a.price.slice(3)) - parseInt(b.price.slice(3));
              });
        console.log(products_to_sort);
           if(target_value === 1){          
              console.log("High to low");
              products_to_sort.reverse();
          }
          else if(target_value === 2){               
                 console.log("Low to high");
          }
            this.setState({ 
            products_to_display: products_to_sort
         });
      }        
    }
 



  render() {
    return (       
        <div className="app">
            <Header brandName={this.brandName}/>
                  <div className="row">
                        <div className="col s3">
                              <div className="filter_div">                         
                                <Filter key={this.state.products_to_display.productName} 
                                filterBySale={this.filterBySale} filterByExclusive={this.handler_filterByExclusive}
                                sortByPrice={this.handler_sortByPrice} />
                              </div>
                          </div> 
                  </div>
                      <div className="container">
                           <Product key={this.state.products_to_display.productName} product={this.state.products_to_display}/>
                      </div>                                 
        </div>

    );
  }
}

export default App;
