import React, { Component } from 'react';
import AllBooks from './AllBooks'
import AddBook from './AddBook'


class Landing extends Component{
	constructor(){
		super();
		this.state={
		

	}
}
	
	render(){
		return (
		
			<div className="selected">
				<AllBooks/>
				<AddBook/>
				
			</div>
		)
	}

}

export default Landing;