import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDocuments } from '../redux/actions/action';
import home from '../images/Home.png';
import audit from '../images/User.png';
import settings from '../images/settings.png';
import logout from '../images/logout.png';
import profile from '../images/profile.png';
import Workflow from './Workflow'

class Landing extends Component{
	constructor(props){
		super(props);
		this.props.getDocuments()
		this.state={	
			showComponent : false

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
	this.setState({showComponent: true })
	console.log("hyyuyyt"+this.state.showComponent)
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
							<div className="menu-item"><img src={settings} alt="settings" className="menu-icon"></img><span> Settings</span></div>
						</div>
						<div>
						<div className="menu-item" id="logout-container"><img src={logout} alt="logout" className="menu-icon"></img><span>Log Out</span></div>
						</div>
					</div>
					
					<div className="col main-content-container">
						<div className="navbar">
							<div class="row">
								<div class="col">Company</div>
								<div class="col">Users</div>
								<div class="col">User Roles</div>
								<div class="col">Department	</div>
								<div class="col">Units</div>
								<div class="col">Document Class</div>
								<div class="col"><a onClick={this.handleClick}>Workflows</a></div>
							</div>
						</div>

						<div class="workflow-header">Workflows</div>
						
						{this.state.showComponent ? (
          <Workflow ></Workflow>
        ) : null} 
					<button onClick={this.handleClick} >Hit</button>
						{/* <div class="row">
							<div class="col-sm-6 col-md-4">
								One of three columns
							</div>
							<div class="col-sm-6 col-md-4">
								One of three columns
							</div>
							<div class="col-sm-6 col-md-4">
								One of three columns
							</div>
						</div> */}
					</div>    
				</div>
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