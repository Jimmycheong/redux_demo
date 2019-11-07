import React from 'react';
import { connect } from 'react-redux'
import { fetchUser , setUserName, setUserAge } from "../actions/usersActions"

class ClickBox extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			inputName : "",
			inputAge : ""
		}
	}

	setName = () => {
		this.props.setUserName(this.state.inputName)
	}

	setAge = () => {
		console.log("clicked")
		this.props.setUserAge(this.state.inputAge)
	}

	updateInput = (inputValue, field) => {
		switch (field) {
			case "name": {
				this.setState({inputName: inputValue})
				break;
			}
			case "age": {
				this.setState({inputAge: inputValue})
				break;
			}
			default: 
			 	break;
		}
	}

	render(){
		return(
			<div>
				<p>Showing user</p>
				<p>{this.props.user.name}</p>
				<p>{this.props.user.age}</p>
				<input placeholder="set name" type="text" onChange={e => this.updateInput(e.target.value, "name")}/>
				<button onClick={this.setName}>Set Name</button>
				<br/>
				<input placeholder="set age" type="text" onChange={e => this.updateInput(e.target.value, "age")}/>
				<button onClick={this.setAge}>Set Age</button>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
  return {
    user: state.userA.user
  }
}

const mapDispatchToProps = { fetchUser , setUserName, setUserAge }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClickBox)
