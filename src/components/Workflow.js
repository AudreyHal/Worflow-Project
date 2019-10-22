import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDocuments } from '../redux/actions/action';

class Workflow extends Component{
	constructor(props){
		super(props);
		//this.props.getDocuments()
		this.state={	

	}
}

componentDidMount(){
	
	console.log("this.props")
	console.log(this.props.documents)
	
// 	const obj=this.props.getDocuments();
//  Object.keys(this.props.getDocuments()).map(key=> {
// 		console.log('keyname=' + key);
// 	})

}
handleClick=()=>{
	console.log("this.props")
	console.log(this.props.documents)
}	
	render(){
		const dataItems = this.props.documents.map((item, index) =>
		<li key={ index }>
	<b>{ item.body }</b>	
	
</li>)		
		return (	
			<div>						
					{dataItems}
					<button onClick={this.handleClick}>Hit</button>
						<div class="row">
							<div class="col-sm-6 col-md-4">
							
							</div>
							<div class="col-sm-6 col-md-4">
							
							</div>
							<div class="col-sm-6 col-md-4">
							
							</div>
						</div></div>
		)
	}
}


const mapStateToProps = state => {
	return {
	  documents: state.documents,
	  loading: state.loading
		};
  };  

  export default connect(mapStateToProps, {getDocuments: getDocuments})(Workflow);