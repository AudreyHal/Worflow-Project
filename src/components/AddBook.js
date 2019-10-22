import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addParams } from '../redux/actions/action';

class AddBook extends Component{
constructor(){
    super();
    this.state = {
        title: '',
        content: ''
      };
    

}

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


handleSubmission =(e)=>{
    e.preventDefault();
    this.props.addParams(this.state.title, this.state.content )
    this.setState({ title: '', content: '' });
}
render(){
	return(
        <form onSubmit={ this.handleSubmission }>
          Title:{ this.state.title } <br /> 
          <input type="text" name="title" value={ this.state.title } onChange={ this.handleChange } /><br />

          Content: <br />
          <textarea name="content" value={ this.state.content } onChange={ this.handleChange }></textarea><br />

          <button type="submit">Add Note</button>
        </form>
	)
}

}


export default connect(
    null,
    {
        addParams: addParams
    }
  )(AddBook);