import React from 'react'
import {useHistory,useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../less/app.css'
import Carousel, { slidesToShowPlugin }from '@brainhubeu/react-carousel';
import { ButtonGroup } from '@mui/material';
import '@brainhubeu/react-carousel/lib/style.css';
import imgone from'../Imge/imgone.jpeg';
import imgtwo from'../Imge/imgtwo.jpeg';
import imgthree from'../Imge/imgthere.jpeg';
import logo from '../Imge/gslogo.jpeg';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import AnchorIcon from '@mui/icons-material/Anchor';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
export default function App(){
    const params = useParams();
    const history = useHistory();
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
    <Box className="container">
      <ButtonGroup variant="text" aria-label="text button group">
        <Button className='dhl'>海外登陆</Button>
        <Button className='dhl'>企业邮箱</Button>
        <Button className='dhl'>后期修改</Button>
        <Button className='dhl'>广合科技</Button>
        <Button className='dhl'>Github</Button>
        <Button className='dhl'>嗨害嗨</Button>
      </ButtonGroup>
            <img src={logo} style={{ width:'5%',position:'absolute',left:0}}/>
        <h1 style={{color:"#000"}} className="bt">
            沈阳广合科技发展有限公司
        </h1>
        
        <Carousel plugins={['arrows']} className = "lbt" 
            plugins={['clickToChange','centered',
                {
                resolve: slidesToShowPlugin,
                    options: {
                            numberOfSlides: 1
                            }
                },
            ]}
        >
            <img src={imgone} className="imge" />
            <img src={imgtwo} className="imge" />
            <img src={imgthree} className="imge"/>
        </Carousel>
        
            <br/> 
            <Button variant="text"  onClick={()=>{
                history.push('/login')}} className='butn'>
                    点击登陆
            </Button>
     
     <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} className="whl">
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
       <BottomNavigationAction
        label="TwoWheeler"
        value="TwoWheeler"
        icon={<TwoWheelerIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<AnchorIcon />}
      />
      <BottomNavigationAction
        label="AddIcCall"
        value="AddIcCall"
        icon={<AddIcCallIcon />}
        onClick={
          function a(){history.push('/callme')}}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
     <h6 className='dbl'>沈阳广合科技发展有限公司版权所有©2022   PLA备案 后期会有所更改 更改时间另请通知</h6>
        
    </Box>
    );
}