import axios from 'axios'
import { useState } from 'react'

import './no1_7_1.css'

const arr=[
    {
        id: 13,
        initials: "#",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 14,
        initials: "D",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 15,
        initials: "G",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 16,
        initials: "H",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 17,
        initials: "J",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 18,
        initials: "K",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 19,
        initials: "L",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 19,
        initials: "R",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 19,
        initials: "S",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 19,
        initials: "X",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 19,
        initials: "Y",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
    {
        id: 19,
        initials: "Z",
        mobile: "13000000012",
        post: "CEO",
        realname: "12",
        structure_name: "办公室",
        username: "13000000012",
    },
]

function App(){

    // const [splop,setsplop] =useState([])
    axios.post('http://crm.cimns.com/index.php/oa/addresslist/index',{
        type: 1
    }).then((data)=>{

        // var arr = data.data.data.G

        // if(data.data.code === 101){
        //     console.log(data.data.splop)
        // }else{
        //     console.log(splop.length)
        //     if(splop.length===0){
        //         setsplop(data.data.data)
        //         // setsplop(data.data.data.splop)
        //     }
            
        // }
        console.log(data.data.data)
    },(err)=>{
        console.log(err)
    })

    return(
        <div>
            {/* 工作台71 */}
            <div> <input type="text" className="no1_7_width" placeholder="搜索成员1" ></input></div>
            <div className="no1_7_div">
                {arr.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>{item.initials}</h3>
                            <div style={{height:30}}></div>
                            <div>{item.structure_name}</div>
                            <div>{item.structure_name}</div>
                            <div>{item.structure_name}</div>
                            <div>{item.structure_name}</div>
                            <div style={{height:30}}></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default App