import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
 import {Button} from 'antd'
import 'antd/dist/antd.css'
import '../less/app.css'
import inmge from '../Imge/bjt.jpeg'
export default function App(){
    const params = useParams();
    const history = useHistory();
    useEffect(()=>{
        console.log("执行了useEffect");
        // ajax请求写在这里面
    },[])
    return <div className="container">
        <img src={inmge} className="container_img"></img>
        <h1>沈阳广合科技发展有限公司</h1>
        {params.id}<br/>
         <Button type="link" onClick={()=>{
            history.push('/login')
        }}>跳转登录</Button>
    </div>
}