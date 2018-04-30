import React from "react";
import './header.css';

class Header extends React.Component{

	render(){		
		return (	
             <div class='header'>
					  <div class='title'>
					    <h4>{this.props.brandName}</h4>
					  </div>
			 </div>
        );
	}
}


export default Header;