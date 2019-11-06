import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

class ClickBox extends React.Component {

	constructor(props){
		super(props)
		console.log(props)
		this.state = {
			'counter': 0
		}
	}

	render(){
		return(
			<div>
				<p>Hello world!</p>
				<p>Counter: {this.props.counter}</p>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClickBox)
