import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDocuments } from '../redux/actions/action';
import flowchart from '../images/flowchart.png';
import dots from '../images/dots.png';

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
	

}

	render(){
// 		const dataItems = this.props.documents.map((item, index) =>
// 		<li key={ index }>
// 	<b>{ item.body }</b>
// </li>)

		
		return (	
			<div>						
				<div class="row header-container">
					<div class="workflow-header col">Workflow</div>
					<div class="col-md-4 offset-md-4 workflow-container"><button className="workflow-button">+  Create Workflow</button></div>
				</div>

				<div class="row data-container">
					<div class="col workflow-card">
						<div class="row">
							<div class="col-1">
								<img src={flowchart} alt="flowchart" className="menu-icon"></img>
							</div>
							<div class="col-auto approval-column">
								<div className="workflow-item data-title"><span> Approval Rating</span></div>
								<div className="workflow-item stages"><span> 3 stages</span></div>
							</div>
							<div class="col offset-md-2 text-right">
							<img src={dots} alt="dots" className="menu-icon"></img>
							</div>
						</div>							
					</div>
					<div class="col workflow-card">
						<div class="row">
							<div class="col-1">
								<img src={flowchart} alt="flowchart" className="menu-icon"></img>
							</div>
							<div class="col-auto approval-column">
								<div className="workflow-item data-title"><span> Approval Rating</span></div>
								<div className="workflow-item stages"><span> 3 stages</span></div>
							</div>
							<div class="col offset-md-2 text-right">
							<img src={dots} alt="dots" className="menu-icon"></img>
							</div>
						</div>							
					</div>
					<div class="col workflow-card">
					<div class="row">
						<div class="col-1">
							<img src={flowchart} alt="flowchart" className="menu-icon"></img>
						</div>
						<div class="col-auto approval-column">
							<div className="workflow-item data-title"><span> Approval Rating</span></div>
							<div className="workflow-item stages"><span> 3 stages</span></div>
						</div>
						<div class="col offset-md-2 text-right">
						<img src={dots} alt="dots" className="menu-icon"></img>
						</div>
					</div>							
				</div>
				</div>
				</div>
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