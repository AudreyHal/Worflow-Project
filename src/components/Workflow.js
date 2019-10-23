import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions/action';
import flowchart from '../images/flowchart.png';
import dots from '../images/dots.png';

class Workflow extends Component{
	constructor(props){
		super(props);	
		
}

	render(){
		const dataItems = this.props.workflows.map((item, index) =>
			<div key={ index } className=" workflow-card">
				<div className="row">
					<div className="col-1">
						<img src={flowchart} alt="flowchart" className="menu-icon"></img>
					</div>
					<div className="col-auto approval-column">
						<div className="workflow-item data-title"><span> { item.name }</span></div>
						<div className="workflow-item stages"><span> { item.stages } stages</span></div>
					</div>
					<div className="col offset-md-1 text-right">
						<img src={dots} alt="dots" className="dots"></img>
					</div>
				</div>							
			</div>
		)
		
		return (	
			<div>						
				<div className="row header-container">
					<div className="workflow-header col">Workflow</div>
					<div className="col-md-4 offset-md-4 workflow-container"><button className="workflow-button">+  Create Workflow</button></div>
				</div>

				<div className="row data-container">
					{dataItems}				
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
	  workflows: state.workflows,
	  loading: state.loading
		};
  };  

export default connect(mapStateToProps, {getData: getData})(Workflow);