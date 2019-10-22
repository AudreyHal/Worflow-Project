import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDocuments } from '../redux/actions/action';

class Landing extends Component{
	constructor(){
		super();
		this.state={	

	}
}

componentDidMount(){
	this.props.getDocuments()
}
	
	render(){
		
		return (		
			<div>
				{{documents}}			
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
	  documents: state.documents
		};
  };  

  export default connect(mapStateToProps, {getDocuments: getDocuments})(Landing);