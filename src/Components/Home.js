import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import store from '../store';

class Home extends Component {
	constructor(props){
		super(props)
		this.state = store.getState()
		store.subscribe(this.changeEdit.bind(this))
	}
	componentWillMount(){
		console.log(store.getState())
	}
	render(){
		return (
			<div>
				<h1>数据{this.state.str}</h1>
				<button onClick={this.editData.bind(this)}>修改数据</button>
				<ul>
					<Link to="/home"><li>首页</li></Link>
					<Link to="/about"><li>关于</li></Link>
					<Link to={{
						pathname:'/contact',
						query:{
							str:"1-1AR860"
						}
					}}><li>联系</li></Link>
				</ul>
				<button onClick={this.toAbout.bind(this)}>关于</button>
			</div>
		)
	}
	changeEdit(){
		this.setState(store.getState)
	}
	editData(){
		let action = {
			type:'edit_data'
		}
		store.dispatch(action)
	}
	componentDidMount(){
		console.log(this.props)
	}
	toAbout(){
		this.props.history.push("/about")
	}
}
export default Home;