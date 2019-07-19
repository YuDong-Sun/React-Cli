let dataState = {
	str:"这是仓库中的数据"
}
export default (state=dataState,action)=>{
	let newState = state;
	switch(action.type){
		case"edit_data":
			newState.str="123";
			return newState;
			break;
		default:
			return state;
			break;
	}
}