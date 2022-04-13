import React,{useState} from 'react';
import {Form,Input,Button} from 'antd'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import qwer from '../Imge/123.png'
const FormItem = Form.Item;

export default function Login(){
    const history = useHistory();
    const [name,setName] = useState('');
    const [pwd,setPwd] = useState('');
        return <div className="login-container">
            <img src={qwer} className="container_img"/>
            <h2>欢迎登录</h2>
            <Form className="login-form">
                <FormItem>
                <Input placeholder="请输入用户名" type="text" onChange={(event)=>{
                setName(event.target.value);
                }} maxLength={10}/>
                </FormItem>
                <FormItem>
                <Input placeholder="请输入密码" type="password" onChange={(event)=>{
                setPwd(event.target.value);
                }} maxLength={18}/>
                    </FormItem>
                    <label>账号:{name},密码:{pwd}</label>
                    <FormItem>
                    <Button type="primary" onClick={
                        function a(){
                            if(name==="qqqq"&&pwd==="111111"){
                                login(name,pwd).then((response)=>{
                                    let res = response.data;
                                    if(res.code === 0){
                                        history.push('/home')
                                    }
                                })
                            }
                        }
                        }>登录</Button>
                    </FormItem>
                    <FormItem>
                    <Button type="primary" onClick={
                        function a(){
                            if(name==="qqqq"&&pwd==="111111"){
                                login(name,pwd).then((response)=>{
                                    let res = response.data;
                                    if(res.code === 0){
                                        history.push('/signIn')
                                    }
                                })
                            }
                        }
                        }>注册</Button>
                    </FormItem>
            </Form>
    </div>
}

function login (name,pwd) {
  return axios.get("/mock/userdata.json",{
        params:{
            name,pwd
        }
    });
}