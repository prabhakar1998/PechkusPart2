import React from "react";
import './filter.css';
import { Input } from 'react-materialize'

class Filter extends React.Component{  
     
  changeContent(event) {
    this.props.sortByPrice(event.target.value);
  }


	render(){
    let SizeSelectorEnabled = false;
    let SizeSelector = "";
    if(SizeSelectorEnabled){
              SizeSelector = (
                     <Input className="SelectSize" id="SelectSize" multiple={true} name="sizeFilter" type='select' default="Size"
                     onChange={this.props.filterByExclusive_}>                      
                        <option  value={1} default={true} disabled={true}>Size</option>
                        <option  value={2}>XS</option>
                        <option  value={3}>S</option>
                        <option  value={4}>M</option>
                        <option  value={5}>L</option>
                        <option  value={5}>XL</option>
                    </Input>
                    );
    }
		return (
			  <div className="checkboxes">  
                <label className="filterLabel" htmlFor="dummy">FILTER RESULTS</label>  
              
                    <input onClick={this.props.filterBySale} className="filled-in" id="0" type="checkbox" value="filterBySale"/>                 
                     <label className="checkboxLabel" htmlFor="0">Sale</label>
                      <input onClick={this.props.filterByExclusive} className="filled-in" id="1" type="checkbox" value="filterByExclusive"/> 
                      <label className="checkboxLabel" htmlFor="1">Exclusive</label> 
                  
                    {SizeSelector}

                     <Input className="Sort" onChange={this.changeContent.bind(this)} id="Sort" name="sort" type='select' default="Sort">                      
                        <option  value={0} default={true}>Sort By Price</option>
                        <option  value={1}  >High to Low</option>
                        <option  value={2}  >Low to High</option>
                    </Input>
         </div>
        );
	 }
   }


export default Filter;
