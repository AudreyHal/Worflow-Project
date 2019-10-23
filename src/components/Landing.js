import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions/action';
import home from '../images/Home.png';
import audit from '../images/User.png';
import settings from '../images/settings.png';
import logout from '../images/logout.png';
import profile from '../images/profile.png';
import Workflow from './Workflow'

class Landing extends Component{
	constructor(props){
		super(props);
		this.props.getData();
		this.state={	
			showComponent : false,
			showLoader: false
	}
}

	handleClick=()=>{
		this.props.getData();	
		if (this.props.data){
			this.setState({showComponent: true })		
		}
		if (!this.props.data){
			this.setState({showLoader: true })		
		}
	}	

	render(){	
		
		return (		
			<div className="landing-page">
				<div className="row full-page-height">
					<div className="col-2 sidebar">
						<div className="profile-container">
							<img src={profile} alt="profile" className="profile"></img>
							<div className="fullname">Jaohn Samue</div>
							<div className="position">Front Desk Officer</div>
							<div className="position">Finance</div>
						</div> 
						<div className="menu-items">
							<div className="menu-item"><img src={home} alt="home" className="menu-icon"></img><span> Dashboard</span></div>
							<div className="menu-item"><img src={audit} alt="audit" className="menu-icon"></img><span> Audit Log</span></div>
							<div className="menu-item" id="settings"><img src={settings} alt="settings" className="menu-icon"></img><span> Settings</span></div>
						</div>
						<div>
						<div className="menu-item" id="logout-container"><img src={logout} alt="logout" className="menu-icon"></img><span>Log Out</span></div>
						</div>
					</div>
					
					<div className="col main-content-container">
						<div className="navbar row">
							
								<div className="col-auto nav-item">Company</div>
								<div className="col-auto nav-item">Users</div>
								<div className="col-auto nav-item">User Roles</div>
								<div className="col-auto nav-item">Department	</div>
								<div className="col-auto nav-item">Units</div>
								<div className="col-auto nav-item">Document className</div>
								<div className="col-auto nav-item" id="workflow-link" onClick={this.handleClick}><a >Workflows</a></div>
							
						</div>						
						
						{this.state.showComponent ? (	<Workflow ></Workflow> ) : null} 
						{this.state.showLoader ? 
						(
							<div className="text-center full-width row d-flex justify-content-center">          		
								<div className="error-text">Make sure you are connected to the internet and try again.</div>
							</div>
						) : null} 			
						
					</div>    
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
	  data: state.workflows
	};
};  

export default connect(mapStateToProps, {getData: getData})(Landing);