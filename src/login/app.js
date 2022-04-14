import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../less/app.css'
import Carousel, { slidesToShowPlugin }from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imgone from'../Imge/imgone.jpeg';
import imgtwo from'../Imge/imgtwo.jpeg';
import imgthree from'../Imge/imgthere.jpeg';

export default function App(){
    const params = useParams();
    const history = useHistory();
    return (
    <Box spacing={2} direction="row" className="container">
        <h1 style={{color:"#000"}} className="sygs">
            沈阳广合科技发展有限公司
        <Carousel plugins={['arrows']}  plugins={[
    'clickToChange',
    'centered',
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
                history.push('/login')}}>
                    点击登陆
            </Button>
        </h1>
    </Box>
    );
}