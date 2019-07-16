import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<ul>
					<Link to="/home"><li>首页</li></Link>
					<Link to="/about"><li>关于</li></Link>
					<Link to="/contact"><li>联系</li></Link>
				</ul>
				<button onClick={this.toAbout.bind(this)}>关于</button>
			</div>
		)
	}
	toAbout(){
		this.props.history.push("/about")
	}
}
export default Home;