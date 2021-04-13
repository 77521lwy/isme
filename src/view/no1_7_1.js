
import './no1_7_1.css'

const arr = [
    {
        id: 13,
        initials: "#",
        mobile: "13000000012",
        post: "CEO",
        realname: "12121.",
        structure_name: "办公室",
        username: "13000000013",
    },
    {
        id: 14,
        initials: "D",
        mobile: "13000000012",
        post: "CEO",
        realname: "大boss",
        structure_name: "办公室",
        username: "13000000014",
    },
    {
        id: 15,
        initials: "G",
        mobile: "13000000012",
        post: "CEO",
        text: "管理员",
        structure_name: "办公室",
        username: "13000000015",
    },
    {
        id: 16,
        initials: "H",
        mobile: "13000000012",
        post: "CEO",
        text: "管理员",
        name: "候",
        structure_name: "办公室",
        username: "13000000016",
    },
    {
        id: 17,
        initials: "J",
        mobile: "13000000012",
        post: "CEO",
        text: "管理员",
        structure_name: "办公室",
        username: "13000000017",
    },
    {
        id: 18,
        initials: "K",
        text: "管理员",
        mobile: "13000000012",
        post: "CEO",
        structure_name: "办公室",
        username: "13000000018",
    },
    {
        id: 19,
        initials: "L",
        text: "管理员",
        mobile: "13000000012",
        post: "CEO",
        structure_name: "办公室",
        username: "13000000019",
    },
    {
        id: 19,
        initials: "R",
        text: "管理员",
        name: "任海龙",
        mobile: "13000000012",
        post: "CEO",
        structure_name: "办公室",
        username: "13000000020",
    },
    {
        id: 19,
        initials: "S",
        mobile: "13000000012",
        post: "CEO",
        text: "管理员",
        structure_name: "办公室",
        username: "13000000021",
    },
    {
        id: 19,
        initials: "X",
        mobile: "13000000012",
        post: "CEO",
        text: "管理员",
        structure_name: "办公室",
        username: "13000000022",
    },
    {
        id: 19,
        initials: "Y",
        mobile: "13000000012",
        post: "CEO",
        text: "管理员",
        structure_name: "办公室",
        username: "13000000023",
    },
    {
        id: 19,
        initials: "Z",
        mobile: "13000000012",
        post: "CEO",
        text: "管理员",
        structure_name: "办公室",
        username: "13000000024",
    },
]
function App() {
    return (
        <div>
            {/* 工作台71 */}
            <div> <input type="text" className="no1_7_width" placeholder="搜索成员1" ></input></div>
            <div className="no1_7_div">
                {arr.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <div>
                                    <h3>{item.initials}</h3>
                                    <div className="no1_7_realname">
                                       
                                        <div>{item.text}</div>
                                        {/* <div>{item.name}</div> */}
                                    </div>
                                </div>
                                <div className="no1_7_realname ">{item.realname}</div>
                                <div className="no1_7_ziti">
                               
                                    <div> <span className="iconfont">&#xe637;</span>{item.structure_name}</div>
                                    <div><span className="iconfont">&#xe617;</span>{item.post}</div>
                                    <div><span className="iconfont">&#xe621;</span>{item.username}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default App