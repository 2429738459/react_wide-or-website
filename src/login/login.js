import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import '../less/app.css'
import Carousel, { slidesToShowPlugin }from '@brainhubeu/react-carousel';
import { ButtonGroup } from '@mui/material';
import imgone from'../Imge/login.jpeg';
import imgtwo from'../Imge/logine.jpeg';
import imgthree from'../Imge/logon.jpeg';
import Paper from '@mui/material/Paper';
import logo from '../Imge/gslogo.jpeg';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import AnchorIcon from '@mui/icons-material/Anchor';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';


export default function Login(){
    const history = useHistory();
    const [usercode,setUsercode] = useState('');
    const [userpwd,setUserpwd] = useState('');
    const [value, setValue] = React.useState('recents');
    const handleChange=()=> {
      var url = "http://192.168.187.68:3000/login";
      var data = {"usercode":usercode , "userpwd":userpwd} 
      axios.post(url, data, ).then(res => {
                console.log(res);
      })
      
    }
    
return <Box
        className='dlym'
        component="form"
        noValidate
        autoComplete="off"
    >
        <ButtonGroup variant="text" aria-label="text button group">
        <Button className='dhl'>海外登陆</Button>
        <Button className='dhl'>企业邮箱</Button>
        <Button className='dhl'>后期修改</Button>
        <Button className='dhl'>广合科技</Button>
        <Button className='dhl'>Github</Button>
        <Button className='dhl'>初代网页</Button>
        <Button className='whl'>初代网页</Button>
      </ButtonGroup>
        <img src={logo} style={{ width:'3%',position:'absolute',left:0}}/>
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
                    <ButtonGroup type="primary"  style={{width:"300px",backgroundColor:"#fff"}} >
                      <Button style={{width:"300px"}} onClick={handleChange} >登陆</Button>
                      </ButtonGroup>
                         <br/>
                         <ButtonGroup>
                        <Button type="primary"  style={{width:"300px",backgroundColor:"#fff"}} onClick={
                            function a(){history.push('/signIn')}}>注册</Button>
                        </ButtonGroup>
                         </h2>
                        </Paper>
                        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} className="whl">
      <BottomNavigationAction
        value="recents"
        icon={<RestoreIcon />}
      />
       <BottomNavigationAction
        value="TwoWheeler"
        icon={<TwoWheelerIcon />}
      />
      <BottomNavigationAction
        value="favorites"
        icon={<AnchorIcon />}
      />
      <BottomNavigationAction
        value="AddIcCall"
        icon={<AddIcCallIcon />}
        onClick={
          function a(){history.push('/callme')}}
      />
      <BottomNavigationAction  value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
     <h6 className='db'>沈阳广合科技发展有限公司版权所有©2022   PLA备案 后期会有所更改 更改时间另请通知</h6>
        </Box>
            
}
