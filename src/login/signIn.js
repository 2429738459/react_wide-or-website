import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import '../less/register.css'
import Carousel, { slidesToShowPlugin }from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ButtonGroup } from '@mui/material';
import imgone from'../Imge/register.jpeg';
import imgtwo from'../Imge/regsit.jpeg';
import imgthree from'../Imge/resgiter.jpeg';
import Paper from '@mui/material/Paper';
import logo from '../Imge/gslogo.jpeg';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import AnchorIcon from '@mui/icons-material/Anchor';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

export default function Login(){
    const history = useHistory();
    const [usercode,setUsercode] = useState('');
    const [userpwd,setUserpwd] = useState('');
    const [userpword,setUserpword] = useState('');
    const [tel,setTel] = useState('');
    const [value, setValue] = React.useState('recents');
    const handleChange=()=> {
      var url = "http://192.168.187.68:3000/register";
      var data = {"usercode":usercode ,"userpwd":userpwd,"tel":tel} 
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
        <h2 style={{color:"#C0C0C0"}} className = 'register'>
            欢迎注册
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
        <TextField
        style={{width:"300px"}}
          label="请输入密码..." 
          onChange={(event)=>{setUserpwd(event.target.value);}} maxLength={18}
          variant="standard"
          focused
        />
         <br/>
          <TextField
        style={{width:"300px"}}
          label="请确认密码..." 
          onChange={(event)=>{setUserpword(event.target.value);}} maxLength={18}
          variant="standard"
          focused
        />
         <br/>
          <TextField
        style={{width:"300px"}}
          label="请输入电话..." 
          onChange={(event)=>{setTel(event.target.value);}} maxLength={18}
          variant="standard"
          focused
        />
            <br/>
            <label>账号:{usercode}密码:{userpwd}<br/>确认密码:{userpwd}电话:{tel}</label>
            <br/>
            <br/>
                    <ButtonGroup type="primary"  style={{width:"300px",backgroundColor:"#fff"}} onClick={handleChange}>
                              <Button style={{width:"300px"}} >注册</Button></ButtonGroup>
                         <br/>
                         <ButtonGroup>
                        <Button type="primary"  style={{width:"300px",backgroundColor:"#fff"}} onClick={
                            function a(){history.push('/Login')}}>已有账户,请登录</Button>
                        </ButtonGroup>
                         </h2>
                        </Paper>
                        <BottomNavigation sx={{ width: 500 }} value={value}  className="whl">
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
       <BottomNavigationAction
        label="Recents"
        value="TwoWheeler"
        icon={<TwoWheelerIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<AnchorIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
     <h6 className='db'>沈阳广合科技发展有限公司版权所有©2022   PLA备案 后期会有所更改 更改时间另请通知</h6>
        </Box>
            
}

