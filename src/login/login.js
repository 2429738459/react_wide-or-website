import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import Carousel, { slidesToShowPlugin }from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ButtonGroup } from '@mui/material';
import imgone from'../Imge/imgone.jpeg';
import imgtwo from'../Imge/imgtwo.jpeg';
import imgthree from'../Imge/imgthere.jpeg';
import Paper from '@mui/material/Paper';
import logo from '../Imge/gslogo.jpeg';

export default function Login(){
    const history = useHistory();
    const [usercode,setUsercode] = useState('');
    const [userpwd,setUserpwd] = useState('');
    
return <Box
        className='dlym'
        component="form"
        noValidate
        autoComplete="off"
    >
        <img src={logo} style={{ width:'3%'}}/>
        <h1 style={{color:"#000"}} className="sygs" >
            沈阳广合科技发展有限公司
            </h1>
<Carousel plugins={['arrows']} className="lbt" plugins={[
    'clickToChange',
    'centered',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 1
      }
    },
]}>
  <img src={imgone} className="imge" />
  <img src={imgtwo} className="imge" />
  <img src={imgthree} className="imge"/>
</Carousel>

<Paper elevation={3} >
        <h2 style={{color:"#fff"}} className = 'srk'>
            欢迎登录
            <br/>
            <br/>
        <TextField
          style={{width:"300px"}}
          label="请输入用户名..." 
          onChange={(event)=>{setUsercode(event.target.value);}} maxLength={10}
          variant="standard"
          focused
        />
        <br/>
        <br/>
        <TextField
        style={{width:"300px"}}
          label="请输入密码..." 
          onChange={(event)=>{setUserpwd(event.target.value);}} maxLength={18}
          variant="standard"
          focused
        />
            <br/>
            <label>账号:{usercode}密码:{userpwd}</label>
            <br/>
            <br/>
                    <ButtonGroup type="primary"  style={{width:"300px",backgroundColor:"#fff"}} onClick={
                            function (){
                            if(usercode==="qq"&&userpwd==="111"){
                                    login(usercode,userpwd).then((response)=>{
                                       let res = response.data;
                                        if(res.code === 0){
                                           history.push('/home')
                                        }
                                    })
                                }
                            }}><Button style={{width:"300px"}} >登陆</Button></ButtonGroup>
                         <br/>
                         <ButtonGroup>
                        <Button type="primary"  style={{width:"300px",backgroundColor:"#fff"}} onClick={
                            function a(){history.push('/signIn')}}>注册</Button>
                        </ButtonGroup>
                         </h2>
                        </Paper>
        </Box>
            
}

function login (name,pwd) {
  return axios.get("/mock/userdata.json",{
        params:{
            name,pwd
        }
    });
}