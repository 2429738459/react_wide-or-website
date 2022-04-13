import React from 'react';
import {Link,useParams,useHistory} from 'react-router-dom'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import '../less/app.css'
export default function Detail(){
    const params = useParams();
    const history = useHistory();
    return <div className="container">
        <h1>这里是detail页面</h1>
        <Link to="/login">点击跳转到登陆页面</Link><br/>
        <p>参数：</p>
        {params.id}<br/>
        <Button type="primary" onClick={()=>{
            history.push('/')
        }}>跳转首页</Button>
    </div>
}
