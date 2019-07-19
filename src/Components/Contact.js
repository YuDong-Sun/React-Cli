import React,{ Component } from 'react';

class Contact extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>我是联系
				<button onClick={this.goBack.bind(this)}>返回上一页</button>
			</div>
		)
	}
	componentDidMount(){
		console.log(this.props.location.query.str)
	}
	goBack(){
		this.props.history.push({
				pathname:"/about",
				query:{
					uid:"20387"
				}
				}
			)
		
	}
}
export default Contact;