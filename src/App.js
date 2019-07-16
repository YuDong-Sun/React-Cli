import React,{ Component } from 'react';
import './App.css';

import List from './Components/List';
import axios from 'axios';

//挂载 Mock
import './mock/data.js';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			inputVal:"",
			itemList:[]
		}
	}
	componentWillMount(){
	}
	componentDidMount(){
		axios.get("/api/home").then((res)=>{
			console.log(res)
			this.setState(()=>{
				return {
					itemList:res.data.ageList
				}
			})
		})
	}
	shouldComponentUpdate(){
		return true;
	}
  render(){
		return (
		  <div className="App">
					<h1 className="bg-List">hello React</h1>
					<label htmlFor="userName">聚焦input</label>
					<input type="text" id="userName" value={this.state.inputVal} onChange={this.getVal.bind(this)} ref= { (input)=>{ this.input=input }}/>
					<button onClick={this.addItem.bind(this)}>添加</button>
					<ul>
						{
							this.state.itemList.map((item,index)=>{
									return (
										<List key={index} index={index} delItem={this.delItem.bind(this)} item={item}></List>
									)
							})
						}
					</ul>
		  </div>
		);
	}
	getVal(e){
		let val = e.target.value;
		this.setState(()=>{
			return {
				inputVal:val
			}
		})
	}
	addItem(e){
		let inputValue = this.state.inputVal;
		this.setState((preState)=>{
			console.log(preState)
			return {
				itemList:[...preState.itemList,preState.inputVal],
				inputVal:""
			}
		})
	}
	delItem(index){
		this.setState((preState)=>{
			let list = this.state.itemList;
			list.splice(index,1)
			return {
				itemList:list
			}
		})
	}
}

export default App;
