import React,{ Component } from 'react';

class List extends Component {
	render(){
		return (
			<li key={this.props.item} dangerouslySetInnerHTML={{__html:this.props.item}} onClick={this.delList.bind(this)}></li>
		)
	}
	componentWillReceiveProps(){
	}
	delList(){
		this.props.delItem(this.props.index)
	}
	componentWillUnmount(){
		console.log("componentWillUnMount")
	}
}
export default List;