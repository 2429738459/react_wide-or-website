import React,{useState,useEffect} from 'react';
import '../less/home.css'
import {Link} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios'
export default function Home(){
    const [data,setData] = useState([]);
    const [index,setIndex] = useState(0);
    const columns =[
        {
        title:'品牌',
        dataIndex:'area'
    },{
        title:'奔驰AMG',
        dataIndex:'java'
    },{
        title:'宝马M4',
        dataIndex:'php'
    },{
        title:'奥迪Rs7',
        dataIndex:'js'
    }
];
useEffect(()=>{
        axios.get('/mock/data.json').then((response)=>{
            const res = response.data;
            if(res.code===0){
                setData(res.data);
            }
        })
},[]);
    return <div className="home-container">
        <h1>人员车辆配比</h1>
        <div className="wrap">
        <div className="nav">
        <a className={index == 0 ? "checked":""} onClick={()=>{setIndex(0)}}>车型</a>
        <a className={index == 1 ? "checked":""} onClick={()=>{setIndex(1);}}>车牌</a>
        <a className={index == 2 ? "checked":""} onClick={()=>{setIndex(2);}}>改装</a>
        <a className={index == 3 ? "checked":""} onClick={()=>{setIndex(3);}}>售后</a>
        </div>
        <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
               <Link className="nav-link" to="/home">回到首页</Link>
        </div>
    </div>
}