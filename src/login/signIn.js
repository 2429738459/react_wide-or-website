import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { ButtonGroup } from '@mui/material';


export default function Login(){
    const history = useHistory();
    const [name,setName] = useState('');
    const [pwd,setPwd] = useState('');
    const [confirm,setConfirm] = useState('');
    const [phone,setPhone] = useState('');
    
return <Box
        className='dlym'
        component="form"
        sx={{
          '& > :not(style)': { m: 1,  },
        }}
        noValidate
        autoComplete="off"
    >
        <h2 style={{color:"#fff"}} className = 'srks'>
            欢迎注册
            <br/>
            <br/>
        <TextField
          style={{width:"300px"}}
          label="请输入用户名..." 
          onChange={(event)=>{setName(event.target.value);}} maxLength={10}
          variant="standard"
          focused
        />
        <br/>
        <br/>
        <TextField
        style={{width:"300px"}}
          label="请输入密码..." 
          onChange={(event)=>{setPwd(event.target.value);}} maxLength={18}
          variant="standard"
          focused
        />
         <br/>
        <br/>
        <TextField
        style={{width:"300px"}}
          label="请确认密码..." 
          onChange={(event)=>{setConfirm(event.target.value);}} maxLength={18}
          variant="standard"
          focused
        />
         <br/>
        <br/>
        <TextField
        style={{width:"300px"}}
          label="请输入手机号..." 
          onChange={(event)=>{setPhone(event.target.value);}} maxLength={18}
          variant="standard"
          focused
        />
            <br/>
            <label>账号:{name}密码:{pwd}<br/>确认密码:{confirm}电话:{phone}</label>
            <br/>
            <br/>
                    <ButtonGroup type="primary"  style={{width:"300px",backgroundColor:"#fff"}} onClick={
                            function (){
                            if(name==="qq"&&pwd==="111"&&confirm==="111"&&phone==="222"){
                                    login(name,pwd).then((response)=>{
                                       let res = response.data;
                                        if(res.code === 0){
                                           history.push('/Login')
                                        }
                                    })
                                }
                            }}><Button style={{width:"300px"}}>注册</Button>
                        </ButtonGroup>
                         <br/>
                         <ButtonGroup>
                        <Button type="primary"  style={{width:"300px",backgroundColor:"#fff"}} onClick={
                            function a(){history.push('/Login')}}>已有账户,去登陆</Button>
                        </ButtonGroup>
                         </h2>
        </Box>
            
}

function login (name,pwd) {
  return axios.get("/mock/userdata.json",{
        params:{
            name,pwd
        }
    });
}