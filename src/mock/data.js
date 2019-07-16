// 使用 Mock
import Mock from 'mockjs'


export default Mock.mock('/api/home','get',{
    success: true,
    message: '请求成功',
    nameList:[{
		"name":"张三"
	}],
	ageList:["15","80","25"]
})