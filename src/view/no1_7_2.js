
import './no1_7_2.css'

import { Collapse } from 'antd';
import {useState} from 'react'
import axios from 'axios'

function App() {
    const { Panel } = Collapse;
    function callback(key) {
        console.log(key);
    }
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const [liataa,setlistaa] = useState({})
    const [typt,settypt] = useState(true)
    axios.post('http://crm.cimns.com/index.php/oa/addresslist/index',{
     type:1
    })
    .then(res => {
        if(typt){
            setlistaa(res.data.data)
            settypt(false)
            ap()
        }
        console.log(res.data.data)
    })
    .catch(err => {
        console.error(err); 
    })
    const [a,seta] = useState([])
    function ap(){
        let arr = []
        for (const type in liataa) {
            arr.push(type)
        }
        console.log(arr)
        seta(arr)
    }
    return (
        <div  className="no1_7_ppla">
            {/* 工作台72 */}
            <div><input type="text" className="no1_7_width " placeholder="搜索成员"></input>

            <div className="no1_7_div">
                
                <Collapse defaultActiveKey={['1']} onChange={callback} bordered={false}>
                    <Panel header="办公室(45人)" key="1">
                        <div>
                        {a.map((item,index)=>{
                    return (
                        <div key={index}>
                            {liataa[item].map((itema,indexa)=>{
                                return(
                                    <div key={indexa}>
                                        <div className="no1_7_realname ">{itema.realname}</div>
                                        <div className="no1_7_ziti">
                                            <div> <span className="iconfont">&#xe637;</span>{itema.structure_name}</div>
                                            <div><span className="iconfont">&#xe617;</span>{itema.post}</div>
                                            <div><span className="iconfont">&#xe621;</span>{itema.username}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                        </div>
                    </Panel>
                    <Panel header="打杂部(0人)" key="0"></Panel>
                </Collapse>
            </div>
            </div>             
        </div>
    )
}
export default App