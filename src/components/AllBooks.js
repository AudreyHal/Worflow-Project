import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllBooks extends Component{
constructor(){
	super();

}
render(){

  const dataItems = this.props.data.map((item, index) =>
			<li key={ index }>
		<b>{ item.title }</b>
		
		
		<span>{ item.content }</span>
	</li>)
	
	
	return(
	<div>
		{dataItems}

	</div>
	
	)
}

}

// export default AllBooks;

const mapStateToProps = state => {
	return {
	  data: state.data
	};
  };
  

  export default connect(mapStateToProps, null)(AllBooks);