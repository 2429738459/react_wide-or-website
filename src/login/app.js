import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../less/app.css'

export default function App(){
    const params = useParams();
    const history = useHistory();
    useEffect(()=>{
        console.log("执行了useEffect");
        // ajax请求写在这里面
    },[])
    return (
    <Stack spacing={2} direction="row" className="container">
        <h1 style={{color:"aqua"}} className="sygs">
            沈阳广合科技发展有限公司
            <br/> 
            <Button variant="text"  onClick={()=>{
                history.push('/login')}}>
                    点击登陆
            </Button>
        </h1>
    </Stack>
    );
}